"use client"
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

function LeafetMap() {
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null);

  const handleMapClick = (event: any) => {
    const { latlng } = event;
    setMarkerPosition([latlng.lat, latlng.lng]);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick
    });
    return null;
  };
  const customIcon = L.icon({
    iconUrl: '../public/images/distintosIconos/android-icon-192x192.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
  return (

      



 


 
    <MapContainer
      center={[50, 30]}
      zoom={13}
      id='mapid'
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="Map data &copy; OpenStreetMap contributors" />
      <MapClickHandler />

      {markerPosition && (
        <Marker position={markerPosition} icon={customIcon}>
          <Popup>You clicked here</Popup>
        </Marker>
      )}
    </MapContainer>


   
  )
}

export default LeafetMap