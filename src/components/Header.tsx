import React, { useRef } from "react";

function Header() {
  const SearchInputRef = useRef(null);

  const HandleSubmit = () => {};

  return (
    <header className="bg-cover bg-header">
      <div className="w-[90%] max-w-[550px] mx-auto pt-14 pb-36">
        <h1 className="capitalize text-light text-center font-bold text-2xl mb-7">
          IP Address tracker
        </h1>
        <form action="">
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
  );
}

export default Header;
