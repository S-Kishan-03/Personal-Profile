"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const BackgroundAnimation = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const colors =
    theme === 'dark'
      ? [
          'rgba(var(--primary), 0.1)',
          'rgba(var(--accent), 0.1)',
          'rgba(var(--primary), 0.05)',
          'rgba(var(--accent), 0.05)',
        ]
      : [
          'rgba(var(--primary), 0.15)',
          'rgba(var(--accent), 0.15)',
          'rgba(var(--primary), 0.1)',
          'rgba(var(--accent), 0.1)',
        ];
  
  const shapes = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 200 + 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    color: colors[i % colors.length],
  }));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: shape.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
