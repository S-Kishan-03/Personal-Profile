"use client";

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Leaflet's default icons can break with webpack. This is the official fix.
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


type TravelDataItem = {
    name: string;
    coordinates: [number, number];
};

type TravelMapProps = {
  selectedPlace: TravelDataItem | null;
  places: TravelDataItem[];
};

function MapUpdater({ selectedPlace }: { selectedPlace: TravelDataItem | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedPlace) {
      // Fly to the selected place's coordinates with a smooth animation
      map.flyTo(selectedPlace.coordinates, 13, {
        animate: true,
        duration: 1.5
      });
    }
  }, [selectedPlace, map]);

  return null;
}

export default function TravelMap({ selectedPlace, places }: TravelMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const initialCenter: LatLngExpression = [20.5937, 78.9629]; // Centered on India
  const initialZoom = 4;

  if (!isClient) {
    return <div className="h-96 w-full rounded-lg bg-muted animate-pulse" />;
  }

  return (
    <MapContainer
      center={initialCenter}
      zoom={initialZoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
      className='z-0'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map(place => (
        <Marker key={place.name} position={place.coordinates}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
      <MapUpdater selectedPlace={selectedPlace} />
    </MapContainer>
  );
}