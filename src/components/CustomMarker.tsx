import React, { useContext, useEffect, useMemo } from "react";

import { Marker, Popup, useMap } from "react-leaflet";
import { AddressContext } from "../context/AddressContext";

import L, { LatLngExpression, IconOptions } from "leaflet";
import mapIcon from "../assets/icon-location.svg";

function CustomMarker() {
   const icon: L.Icon = L.icon({
     iconSize: [32, 40],
     iconAnchor: [10, 41],
     popupAnchor: [2, -40],
     iconUrl: mapIcon,
   });
  const useAppContext = useContext(AddressContext);
  const map = useMap();

  const position: LatLngExpression = useMemo(() => {
    return [
      useAppContext.address?.location?.lat || 12.5,
      useAppContext.address?.location?.lng || -12.5,
    ];
  }, [useAppContext.address?.location?.lat, useAppContext.address?.location?.lng]);
  
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);


  return (
    <Marker icon={icon} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default CustomMarker;
