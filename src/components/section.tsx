"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  title: string
  className?: string
  children: ReactNode
}

export function Section({ id, title, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("w-full scroll-mt-24", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-foreground relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-primary/70 rounded-full" />
      </h2>
      {children}
    </motion.section>
  )
}
