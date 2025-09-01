"use client";

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { travelData } from '@/lib/profile-data';

// Dynamically import the map component with SSR turned off.
const TravelMap = dynamic(
  () => import('@/components/travel-map'),
  { 
    ssr: false,
    loading: () => <div className="h-96 w-full rounded-lg bg-muted animate-pulse" />
  }
);

export default function TravelSection() {
  const [selectedPlace, setSelectedPlace] = useState<(typeof travelData)[0] | null>(null);

  const handlePlaceClick = (place: (typeof travelData)[0]) => {
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
                      className={`w-full justify-start gap-2 ${selectedPlace?.name === place.name ? 'bg-accent' : ''}`}
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
           <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg border">
            <TravelMap 
              selectedPlace={selectedPlace}
              places={travelData}
            />
           </div>
        </div>
      </div>
    </Section>
  );
}
