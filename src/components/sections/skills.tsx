"use client";

import { motion } from "framer-motion";
import { Code, Languages, ListChecks, Users } from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profileData } from "@/lib/profile-data";

const iconMap: { [key: string]: React.ReactNode } = {
  "Agile Application Development": <Users className="h-4 w-4" />,
  "Checklists": <ListChecks className="h-4 w-4" />,
  "Coding Standards": <Code className="h-4 w-4" />,
  "default": <Code className="h-4 w-4" />,
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Languages">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {profileData.skills.topSkills.map((skill, i) => (
              <motion.div
                key={skill}
                custom={i}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm px-4 py-2 hover:bg-primary/80 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {iconMap[skill] || iconMap.default}
                  <span className="ml-2">{skill}</span>
                </Badge>
              </motion.div>
            ))}
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {profileData.skills.languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                custom={i}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Languages className="h-5 w-5 mr-3 text-accent" />
                  <p className="font-medium">{lang.name}</p>
                </div>
                <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
