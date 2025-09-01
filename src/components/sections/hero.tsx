"use client"

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { profileData } from "@/lib/profile-data";
import { Badge } from "../ui/badge";

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <motion.div 
        className="md:w-3/5 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge variant="outline" className="p-2 border-primary/50 text-primary">
            <MapPin className="w-4 h-4 mr-2" />
            {profileData.location}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          {profileData.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          {profileData.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I build high-impact CAD customization solutions to accelerate design workflows and boost productivity for engineering teams.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href={`mailto:${profileData.contact.email}`}>
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={profileData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 -z-10"></div>
        <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-card">
          <Image
            src="https://picsum.photos/400/400"
            alt={profileData.name}
            width={400}
            height={400}
            data-ai-hint="man portrait"
            className="object-cover"
          />
          <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </motion.div>
    </section>
  );
}
