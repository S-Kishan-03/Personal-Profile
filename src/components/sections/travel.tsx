"use client";

import { useState } from 'react';
import { MapPin, ZoomIn } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { travelData } from '@/lib/profile-data';

// Dynamically import the map component to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
);

export default function TravelSection() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]);
  const [mapZoom, setMapZoom] = useState(2);
  const [selectedPlace, setSelectedPlace] = useState<(typeof travelData)[0] | null>(null);

  const handlePlaceClick = (place: (typeof travelData)[0]) => {
    setMapCenter(place.coordinates);
    setMapZoom(13);
    setSelectedPlace(place);
  };

  return (
    <Section id="travel" title="My Travels">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="h-full shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-primary" />
                <span>Places Visited</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {travelData.map((place) => (
                  <li key={place.name}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2"
                      onClick={() => handlePlaceClick(place)}
                    >
                      <MapPin className="w-4 h-4 text-primary/70" />
                      <span>{place.name}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
           <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
             <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {travelData.map(place => (
                <Marker key={place.name} position={place.coordinates}>
                  <Popup>{place.name}</Popup>
                </Marker>
              ))}
              {selectedPlace && (
                <Marker position={selectedPlace.coordinates}>
                  <Popup>{selectedPlace.name}</Popup>
                </Marker>
              )}
            </MapContainer>
           </div>
        </div>
      </div>
    </Section>
  );
}
