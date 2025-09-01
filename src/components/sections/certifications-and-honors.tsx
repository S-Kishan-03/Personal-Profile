"use client"

import { motion } from "framer-motion"
import { Award, Trophy } from "lucide-react"
import { Section } from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profileData } from "@/lib/profile-data"

export default function CertificationsAndHonorsSection() {
  return (
    <Section id="certifications" title="Certifications & Honors">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-primary" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {profileData.certifications.map((cert) => (
                  <li key={cert} className="flex items-center text-muted-foreground">
                    <Award className="w-4 h-4 mr-3 shrink-0 text-primary/70" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="text-accent" />
                <span>Honors & Awards</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {profileData.honorsAndAwards.map((honor) => (
                  <li key={honor} className="flex items-center text-muted-foreground">
                    <Trophy className="w-4 h-4 mr-3 shrink-0 text-accent/70" />
                    <span>{honor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
