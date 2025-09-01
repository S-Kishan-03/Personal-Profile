"use client"

import { motion } from "framer-motion"
import { Briefcase, Code2, Factory, PlaneTakeoff, School } from "lucide-react"

import { Section } from "@/components/section"
import { profileData } from "@/lib/profile-data"

const iconMap: { [key: string]: React.ReactNode } = {
  "GE Aerospace": <PlaneTakeoff className="h-5 w-5" />,
  "CAD MACRO": <Code2 className="h-5 w-5" />,
  "Vellore Institute of Technology": <School className="h-5 w-5" />,
  "Steel Authority of India Limited": <Factory className="h-5 w-5" />,
  "Jindal Steel & Power Ltd.": <Factory className="h-5 w-5" />,
  "default": <Briefcase className="h-5 w-5" />,
}

const getIcon = (company: string) => {
  const keys = Object.keys(iconMap)
  const key = keys.find(k => company.includes(k))
  return key ? iconMap[key] : iconMap.default
}

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        <div className="absolute left-3 md:left-5 top-5 h-full w-0.5 bg-border -z-10"></div>
        <div className="space-y-12">
          {profileData.experience.map((job, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 md:gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary border-2 border-primary/20 shrink-0 mt-1">
                {getIcon(job.company)}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                <p className="font-medium text-muted-foreground">{job.company}</p>
                <p className="text-sm text-muted-foreground/80">{job.duration}</p>
                <p className="text-sm text-muted-foreground/80">{job.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
