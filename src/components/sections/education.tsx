"use client"

import { motion } from "framer-motion"
import { School } from "lucide-react"
import { Section } from "@/components/section"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { profileData } from "@/lib/profile-data"

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {profileData.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex items-start p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
              <div className="mr-4 mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent border-2 border-accent/20 shrink-0">
                  <School className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-grow">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg">{edu.school}</CardTitle>
                  <CardDescription className="pt-1">
                    {edu.degree}
                    <span className="block">{edu.years}</span>
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
