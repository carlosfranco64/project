'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import ProjectsPage from '@/components/projects/ProjectsPage';

export default function Home() {
  return (
    <ProjectsPage />
  );
}