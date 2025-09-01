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

function MapViewUpdater({ center, zoom }: { center: LatLngExpression, zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  return null;
}

export default function TravelMap({ center, zoom, selectedPlace, places }: TravelMapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
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
      {selectedPlace && (
        <Marker position={selectedPlace.coordinates}>
          <Popup>{selectedPlace.name}</Popup>
        </Marker>
      )}
      <MapViewUpdater center={center} zoom={zoom} />
    </MapContainer>
  );
}
