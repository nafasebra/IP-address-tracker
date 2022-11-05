import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerLocation from './MarkerLocation'

import "leaflet/dist/leaflet.css"



function Marker({address}: any) {
  return (
    <MapContainer
        center={[address.location.lat, address.location.lng]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerLocation address={address} />
      </MapContainer>
  )
}

export default Marker