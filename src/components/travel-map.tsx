"use client";

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import { travelData } from '@/lib/profile-data';
import { useEffect } from 'react';

type TravelMapProps = {
  center: LatLngExpression;
  zoom: number;
  selectedPlace: (typeof travelData)[0] | null;
  places: (typeof travelData)[0][];
};

function MapUpdater({ center, zoom, selectedPlace }: { center: LatLngExpression, zoom: number, selectedPlace: (typeof travelData)[0] | null }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  useEffect(() => {
    if (selectedPlace) {
      map.flyTo(selectedPlace.coordinates, 13);
    }
  }, [selectedPlace, map]);

  return null;
}

export default function TravelMap({ center, zoom, selectedPlace, places }: TravelMapProps) {
  if (typeof window === 'undefined') {
    return <div className="h-96 w-full rounded-lg bg-muted animate-pulse" />;
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
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
      <MapUpdater center={center} zoom={zoom} selectedPlace={selectedPlace} />
    </MapContainer>
  );
}
