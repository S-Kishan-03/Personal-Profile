"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profileData } from "@/lib/profile-data";
import { Badge } from "../ui/badge";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function TravelLogSection() {
  return (
    <Section id="travel-log" title="Travel Log">
      <div className="space-y-12">
        {profileData.travelLog.map((log) => (
          <div key={log.year}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <Badge variant="secondary" className="text-xl px-4 py-2">{log.year}</Badge>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {log.places.map((place, i) => (
                <motion.div
                  key={place.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col group overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={place.image}
                        alt={place.name}
                        width={600}
                        height={400}
                        data-ai-hint={place.aiHint}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{place.name}</CardTitle>
                      <CardDescription>{place.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
