"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/about/HeroSection";
import TeamSection from "@/components/about/TeamSection";
import ExpertiseSection from "@/components/about/ExpertiseSection";
import PresenceSection from "@/components/about/PresenceSection";
import PolicySection from "@/components/about/PolicySection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gradient-to-b from-[#f0f7ff] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800"
        >
          <HeroSection />
          <TeamSection />
          <ExpertiseSection />
          <TestimonialsSection />
          <PresenceSection />
          <PolicySection />
        </motion.div>
      )}
    </AnimatePresence>
  );
}