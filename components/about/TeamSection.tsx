"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin as LinkedIn, Mail, Phone } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Elkin Quiñonez A.",
      role: "CEO",
      description:
        "Más de 15 años de experiencia en el sector educativo, público y privado, transformación digital, plataformas tecnológicas, desarrollo de software, proyectos de I+D+i, MinCiencias, Redes, IoT, smart city, IA. 4Ri Ingeniero de Sistemas, Doctor en Gestión de la Innovación, Postdoctorado en Gestión de la Ciencia y la Tecnología.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      social: {
        linkedin: "#",
        email: "email@example.com",
        phone: "+123456789"
      }
    },
    {
      name: "Silvana Gonzalez Reyes",
      role: "Gerente General",
      description:
        "Contadora pública con más de 20 años de experiencia en dirección estratégica en empresas del sector salud, ciencia y tecnología, consultora y asesora financiera en creación y consolidación de nuevas organizaciones de CTI.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      social: {
        linkedin: "#",
        email: "email@example.com",
        phone: "+123456789"
      }
    },
    {
      name: "Natalia García C.",
      role: "Coordinadora de proyectos",
      description:
        "Más de 15 años de experiencia en Estrategia corporativa, incluyendo 8 años en Planeación de universidades y líder de procesos de certificación en alta calidad. Ingeniera industrial con MBA, especialización en Gerencia de Proyectos de CTI y Gestión de Seguridad y Salud en el trabajo. Docente en áreas de gestión para ingenieros.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
      social: {
        linkedin: "#",
        email: "email@example.com",
        phone: "+123456789"
      }
    },
    {
      name: "Salim Nassif",
      role: "Director desarrollo tecnológico",
      description:
        "Más de 20 años de experiencia en la educación, banca, desarrollo de software, servidores, servicios tecnológicos, dirección de proyectos de CTI, Ingeniero de sistemas especializado en desarrollo de software, IA, 4Ri, seguridad informática.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
      social: {
        linkedin: "#",
        email: "email@example.com",
        phone: "+123456789"
      }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f0f7ff] to-transparent dark:from-gray-900 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#141c4c] dark:text-white mb-6"
            variants={itemVariants}
          >
            Nuestro <span className="text-[#0b90d8]">Equipo</span>
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Profesionales con amplia experiencia y conocimiento en sus áreas de especialización
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex space-x-3 mb-4">
                    <a href={member.social.linkedin} className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
                      <LinkedIn className="w-5 h-5 text-white" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                    <a href={`tel:${member.social.phone}`} className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t-4 border-[#0b90d8]">
                <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#0b90d8] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4 hover:line-clamp-none transition-all duration-300">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}