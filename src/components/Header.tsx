import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { AddressContext } from "../context/AddressContext";
import InfoBoxSection from "./InfoBoxSection";

function Header() {
  const SearchInputRef = useRef<HTMLInputElement>(null);

  const useAppContext = useContext(AddressContext);

  const ipRegex =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const domainRegex =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const getInitalData = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=8.8.8.8`
    );
    const data = await res.json();
    useAppContext.setAddress(data);
  };

  const getInputData = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_API_KEY
      }&${
        ipRegex.test(SearchInputRef.current?.value || "")
          ? `ipAddress=${SearchInputRef.current?.value}`
          : domainRegex.test(SearchInputRef.current?.value || "")
          ? `domain=${SearchInputRef.current?.value}`
          : ""
      }`
    );
    const data = await res.json();
    useAppContext.setAddress(data);
  };

  useEffect(() => {
    try {
      getInitalData();
    } catch (err: any) {
      console.trace(err);
    }
  }, []);

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getInputData();
    SearchInputRef.current!.value = "";
  };


  return (
    <div className="relative">
      <header className="bg-cover bg-header">
        <div className="w-[90%] max-w-[550px] mx-auto pt-14 pb-36">
          <h1 className="capitalize text-light text-center font-bold text-2xl mb-7">
            IP Address tracker
          </h1>
          <form action="" onSubmit={HandleSubmit} autoComplete="off">
            <div className="relative overflow-hidden">
              <input
                type="text"
                ref={SearchInputRef}
                className="bg-light text-gray-700 rounded-md w-full py-3 pl-5 pr-14"
                placeholder="Search for any IP address or domain"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 bottom-0 bg-black text-light w-14 flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </header>
      <InfoBoxSection
        ip={useAppContext.address?.ip}
        timezone={useAppContext.address?.location?.timazone}
        isp={useAppContext.address?.isp}
        location={`${useAppContext.address?.location?.city} ${useAppContext.address?.location?.region}`}
      />
    </div>
  );
}

export default Header;
