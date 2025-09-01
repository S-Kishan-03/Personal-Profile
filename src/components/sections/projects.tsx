"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectData } from "@/lib/profile-data";

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

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col group overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{project.title}</span>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
