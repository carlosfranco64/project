"use client";

import { useEffect } from 'react';
import Hero from '@/components/careers/Hero';
import TeamSection from '@/components/careers/TeamSection';
import JoinUsSection from '@/components/careers/JoinUsSection';
import OpenPositions from '@/components/careers/OpenPositions';
import Testimonials from '@/components/careers/Testimonials';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { motion } from 'framer-motion';

export default function CareersPage() {
  // Initialize AOS animation library
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false,
      });
    });
  }, []);

  return (
    <div className="pt-16 min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Hero />
        <TeamSection />
        <JoinUsSection />
        <Testimonials />
        <OpenPositions />
      </motion.div>
    </div>
  );
}