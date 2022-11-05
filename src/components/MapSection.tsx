import React from "react";

import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import L, { LatLngBounds } from "leaflet";


import markerIcon from "../assets/icon-location.svg"


function MapSection() {

  const iconMarker = new L.Icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIcon,
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(60, 75),
      className: 'leaflet-div-icon'
   });

  return (
    <div className="w-full h-[250px] overflow-hidden">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={iconMarker} position={[51.505, -0.09]} />
      </MapContainer>
    </div>
  );
}

export default MapSection;
