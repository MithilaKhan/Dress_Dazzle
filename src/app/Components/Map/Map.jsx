"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    const position = [51.505, -0.09];
    return (
        <div className='mt-8 mb-20'>
            <MapContainer center={position} zoom={13} style={{ height: '550px', width: '100%' , zIndex:"5" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A sample popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer> 
        </div>
    );
};

export default Map;