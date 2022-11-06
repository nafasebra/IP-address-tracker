import React, { useMemo, useEffect } from "react";

import { useMap, Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

import icon from "../assets/icon-location.svg";

import "leaflet/dist/leaflet.css";

type PropType = {
  address: any;
};

function MarkerLocation({ address }: PropType) {
  // const map = useMap();

  const position = useMemo(() => {
    return [address.location?.lat, address.location?.lng];
  }, [address.location?.lat, address.location?.lng]);

  // const iconMarker = new L.Icon({
  //   iconSize: [32, 40],
  //   iconAnchor: [10, 41],
  //   popupAnchor: [2, -40],
  //   iconUrl: icon,
  // });

  // useEffect(() => {
  //   map.flyTo(position, 13, {
  //     animate: true,
  //   });
  // }, [map, position]);

  return (
    <Marker position={[11.55, 55.55]}>
      <Popup>This is the location of the IP Address or Domain</Popup>
    </Marker>
  );
}

export default MarkerLocation;
