// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default icon issue with Leaflet and React-Leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const locations = [
  { lat: 18.7883, lng: 98.9853, name: 'Chaing Mai, Thailand' },
  { lat: 19.3589, lng: 98.4400, name: 'Pai, Thailand' },
  { lat: 19.8833, lng: 102.1333, name: 'Luang Prabang, Laos' },
  { lat: 18.9333, lng: 102.4500, name: 'Vang Vieng, Laos' },
  { lat: 21.0285, lng: 105.8542, name: 'Hanoi, Vietnam' },
  { lat: 22.7670, lng: 104.9612, name: 'Ha Giang, Vietnam' },
  { lat: 20.9101, lng: 107.1839, name: 'Ha Long Bay, Vietnam' },
  { lat: 20.2539, lng: 105.9750, name: 'Ninh Binh, Vietnam' },
  { lat: 16.0544, lng: 108.2022, name: 'Da Nang, Vietnam' },
  { lat: 15.8801, lng: 108.3380, name: 'Hoi An, Vietnam' },
  { lat: 12.2388, lng: 109.1967, name: 'Nha Trang, Vietnam' },
  { lat: 11.9404, lng: 108.4583, name: 'Da Lat, Vietnam' },
  { lat: 10.9320, lng: 108.1000, name: 'Mui Ne, Vietnam' },
  { lat: 10.8231, lng: 106.6297, name: 'Ho Chi Minh, Vietnam' },
  { lat: 11.5564, lng: 104.9282, name: 'Phnom Penh, Cambodia' },
  { lat: 10.6114, lng: 104.1826, name: 'Kampot, Cambodia' },
  { lat: 10.6833, lng: 103.2500, name: 'Koh Rong, Cambodia' },
  { lat: 10.6183, lng: 103.3444, name: 'Koh Rong Sanloem, Cambodia' },
  { lat: 13.3671, lng: 103.8448, name: 'Siem Reap, Cambodia' },
  { lat: 13.7563, lng: 100.5018, name: 'Bangkok, Thailand' },
  { lat: 9.5120, lng: 100.0135, name: 'Koh Samui, Thailand' },
  { lat: 10.0963, lng: 99.8387, name: 'Koh Tao, Thailand' },
  { lat: 9.7551, lng: 99.9780, name: 'Koh Pha-Ngan, Thailand' },
  { lat: 8.0863, lng: 98.9063, name: 'Krabi, Thailand' },
  { lat: 7.8804, lng: 98.3923, name: 'Phuket, Thailand' },
  { lat: 7.7407, lng: 98.7784, name: 'Koh Phi Phi, Thailand' },
  { lat: 7.4848, lng: 99.0787, name: 'Koh Lanta, Thailand' },
  { lat: 6.4904, lng: 99.3095, name: 'Koh Lipe, Thailand' },
  { lat: 6.3000, lng: 99.8000, name: 'Langkawi, Malaysia' },
  { lat: 5.4141, lng: 100.3288, name: 'Penang, Malaysia' },
  { lat: 4.4700, lng: 101.3800, name: 'Cameron Highlands, Malaysia' },
  { lat: 3.1390, lng: 101.6869, name: 'Kuala Lumpur, Malaysia' },
  { lat: -37.8136, lng: 144.9631, name: 'Melbourne, Australia' },
  { lat: -33.8688, lng: 151.2093, name: 'Sydney, Australia' },
  { lat: -28.6434, lng: 153.6120, name: 'Byron Bay, Australia' },
  { lat: -28.0167, lng: 153.4000, name: 'Gold Coast, Australia' },
  { lat: -27.4698, lng: 153.0251, name: 'Brisbane, Australia' },
  { lat: -8.7275, lng: 115.2126, name: 'Serangan, Indonesia' },
  { lat: -8.5069, lng: 115.2625, name: 'Ubud, Indonesia' },
  { lat: -8.3500, lng: 116.0383, name: 'Gili Trawangan, Indonesia' },
  { lat: -8.6478, lng: 115.1385, name: 'Canggu, Indonesia' }
];

const MapComponent = () => {
  return (
    <MapContainer center={[15.8700, 100.9925]} zoom={4} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
