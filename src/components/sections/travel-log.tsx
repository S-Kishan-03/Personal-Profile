
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { travelData } from "@/lib/profile-data";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function TravelLogSection() {
  return (
    <Section id="travel-log" title="Travel Log">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelData.map((place, i) => (
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
                  fill
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
    </Section>
  );
}
