export interface ProjectType {
  name: string;
  description: string;
  image: string;
  category?: string;
  tags?: string[];
}

export interface InvestmentType {
  name: string;
  description: string;
  investment: string;
  market: string;
}

export const projectCategories: Record<string, ProjectType[]> = {
  inProgress: [
    { 
      name: 'MAMA', 
      description: 'Sistema de gestión académica integral con interfaces intuitivas y alto rendimiento',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
      category: 'Educación',
      tags: ['SaaS', 'AI']
    },
    { 
      name: 'CDT - CIDETIC', 
      description: 'Centro de Innovación Digital especializado en transformación de procesos empresariales',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      category: 'Innovación',
      tags: ['Digital', 'Cloud']
    },
    { 
      name: 'Opper Apps', 
      description: 'Plataforma de logística 4.0 con integración IoT y analítica avanzada en tiempo real',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      category: 'Logística',
      tags: ['IoT', 'Mobile']
    },
    { 
      name: 'Gaia', 
      description: 'Sistema de gestión ambiental con monitoreo automático y reportes de sostenibilidad',
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
      category: 'Ambiental',
      tags: ['Green', 'Analytics']
    },
    { 
      name: 'Tornado Digital', 
      description: 'Plataforma de transformación digital empresarial con soluciones personalizables',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      category: 'Empresarial',
      tags: ['Digital', 'SaaS']
    }
  ],
  completed: [
    { 
      name: 'Villa Susa', 
      description: 'Sistema integral de gestión inmobiliaria con interfaces 3D y contratos inteligentes',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
      category: 'Inmobiliaria',
      tags: ['3D', 'Web']
    },
    { 
      name: 'Dental Stetic', 
      description: 'Sistema especializado para clínicas dentales con gestión de historias y citas',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
      category: 'Salud',
      tags: ['CRM', 'Cloud']
    },
    { 
      name: 'Industrial 360', 
      description: 'Solución industrial integral con monitoreo de procesos y mantenimiento predictivo',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      category: 'Industrial',
      tags: ['IoT', 'Analytics']
    },
    { 
      name: 'GospelAPP', 
      description: 'Aplicación musical con biblioteca interactiva y herramientas de composición',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
      category: 'Entretenimiento',
      tags: ['Mobile', 'Streaming']
    },
    { 
      name: 'Colombia Hass', 
      description: 'Sistema de gestión agrícola especializado en cultivos de aguacate Hass',
      image: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=2087&auto=format&fit=crop',
      category: 'Agricultura',
      tags: ['IoT', 'Analytics']
    }
  ],
  prototypes: [
    { 
      name: 'Susan', 
      description: 'Sistema educativo con inteligencia artificial para personalización del aprendizaje',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop',
      category: 'EdTech',
      tags: ['AI', 'SaaS']
    },
    { 
      name: 'AIDE', 
      description: 'Sistema de gestión de certificaciones con validación automatizada y blockchain',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      category: 'Certificación',
      tags: ['Blockchain', 'SaaS']
    },
    { 
      name: 'LAURA', 
      description: 'Plataforma de gestión piscícola con monitoreo en tiempo real y alertas automáticas',
      image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop',
      category: 'Acuicultura',
      tags: ['IoT', 'Analytics']
    },
    { 
      name: 'LEADER', 
      description: 'Plataforma de desarrollo de liderazgo empresarial con coaching personalizado',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      category: 'Liderazgo',
      tags: ['SaaS', 'Mobile']
    },
    { 
      name: 'CurBa 2.0', 
      description: 'Sistema integral para ciudades inteligentes con gestión de recursos y servicios',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2113&auto=format&fit=crop',
      category: 'Smart City',
      tags: ['IoT', 'Analytics']
    }
  ]
};

export const investments: InvestmentType[] = [
  {
    name: "Susan",
    description: "Sistema de información tipo SaaS para gestión educativa con IA",
    investment: "1,500,000 USD",
    market: "Colombia y Latinoamérica"
  },
  {
    name: "AIDE",
    description: "Sistema SaaS para gestión de certificaciones de calidad",
    investment: "250,000 USD",
    market: "Estados Unidos y Colombia"
  },
  {
    name: "Opper.Apps",
    description: "Sistema multi plataforma de logística 4.0 con IA",
    investment: "500,000 USD",
    market: "Colombia y Latinoamérica"
  },
  {
    name: "CurBa 2.0",
    description: "Sistema para ciudades inteligentes y comunidades energéticas",
    investment: "500,000 USD",
    market: "Estados Unidos, Europa, Latam"
  }
];