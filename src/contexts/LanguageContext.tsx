import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    history: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    text: string;
    years: string;
    experience: string;
  };
  services: {
    title: string;
    subtitle: string;
    sales: {
      title: string;
      description: string;
      features?: string[];
    };
    rental: {
      title: string;
      description: string;
      features?: string[];
    };
    transport: {
      title: string;
      description: string;
      features?: string[];
    };
    cta: string;
  };
  "our-services": {
    title: string;
    subtitle: string;
    highlights: string;
    sales: {
      title: string;
      description: string;
      features?: string[];
    };
    rental: {
      title: string;
      description: string;
      features?: string[];
    };
    transport: {
      title: string;
      description: string;
      features?: string[];
    };
    cta: string;
  };
  timeline: {
    title: string;
    subtitle: string;
    events: {
      date: string;
      title: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    address: string;
    addressValue: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Nós",
      services: "Serviços",
      history: "Nossa História",
      contact: "Fale Conosco"
    },
    hero: {
      title: "GRUPO TRANSMAR",
      subtitle:
        "Desde 1999 Atuando no segmento de transporte Rodoviário de cargas. Uma História Familiar de Parcerias e Confiança!",
      cta: "Solicitar Orçamento"
    },
    about: {
      title: "Sobre Nós",
      text: "O Grupo Transmar é uma empresa familiar que nasceu do sonho de construir parcerias sólidas e duradouras. Com mais de duas décadas de experiência no transporte rodoviário de cargas, nos destacamos pela confiança, comprometimento e excelência em cada serviço prestado. Nossa frota moderna e equipe qualificada garantem entregas seguras e pontuais em todo o território nacional.",
      years: "25+",
      experience: "Anos de Experiência"
    },
    services: {
      title: "Nossos Serviços",
      subtitle:
        "Soluções completas para suas necessidades de transporte e logística",
      sales: {
        title: "Carreta Silo 4 Eixos PBTC 58,5t",
        description:
          "Para atender clientes de cimento, cal, milho e soja em percurso de longas distâncias."
      },
      rental: {
        title: "Carreta Silo 3 Eixos PBTC 48,5t",
        description:
          "Para atender os clientes de cimento, cal, milho e soja em percurso de média distância."
      },
      transport: {
        title: "Carretas Basculantes",
        description:
          "Para atender clientes no segmento de mineração, Siderúrgica, Pedreiras e obras de terraplanagem."
      },
      cta: "Saiba Mais"
    },
    "our-services": {
      title: "Nossos Serviços",
      subtitle:
        "Soluções completas para suas necessidades de transporte e logística",
      highlights: "Destaques",
      sales: {
        title: "Silo Rodoviário 4 Eixos (PBTC 58,5t)",
        description:
          "Nossa solução premium para granéis sólidos. Com tecnologia de 4 eixos, este implemento oferece a máxima capacidade de carga permitida pela legislação (58,5t), sendo ideal para o transporte de longa distância de cimento, cal, milho e soja.",
        features: [
          "Maior capacidade de carga líquida do mercado",
          "Sistema pneumático de descarga rápida",
          "Ideal para produtos pulverulentos e grãos",
          "Otimização de custos em percursos longos"
        ]
      },
      rental: {
        title: "Silo Rodoviário 3 Eixos (PBTC 48,5t)",
        description:
          "Nossa solução ágil para distribuição regional. O Silo 3 Eixos oferece o equilíbrio ideal entre peso e performance, sendo a escolha perfeita para o transporte de cimento, cal e grãos em médias distâncias com máxima eficiência operacional.",
        features: [
          "Alta versatilidade para diferentes tipos de carga",
          "Excelente manobrabilidade em áreas industriais",
          "Otimizado para percursos de média distância",
          "Descarga pneumática de alta precisão"
        ]
      },
      transport: {
        title: "Carretas Basculantes",
        description:
          "Robustez e eficiência para operações pesadas. Nossas basculantes atendem com excelência os setores de mineração, siderurgia e construção civil, garantindo o escoamento de materiais com segurança e agilidade em terrenos severos.",
        features: [
          "Ideal para minérios, britas e insumos industriais",
          "Sistema hidráulico de alta segurança",
          "Caçambas de alta resistência abrasiva",
          "Atendimento especializado em obras e usinas"
        ]
      },
      cta: "Saiba Mais"
    },

    timeline: {
      title: "Nossa História",
      subtitle: "Uma trajetória de crescimento e conquistas",
      events: [
        {
          date: "10 de Agosto de 1999",
          title: "Fundação",
          description:
            "Início das atividades do Grupo Transmar com uma pequena frota e grandes sonhos."
        },
        {
          date: "05 de Janeiro de 2002",
          title: "Segmento Siderúrgico",
          description:
            "Início das operações no segmento siderúrgico, expandindo nossa área de atuação."
        },
        {
          date: "Abril de 2006",
          title: "Terraplanagem e Rodovias",
          description:
            "Início do atendimento no segmento de terraplanagem e recapeamento de rodovias."
        },
        {
          date: "Junho de 2009",
          title: "Mineração",
          description:
            "Expansão para o setor de mineração, consolidando nossa presença no mercado."
        }
      ]
    },
    contact: {
      title: "Fale Conosco",
      subtitle: "Entre em contato para saber mais sobre nossos serviços",
      name: "Nome Completo",
      email: "E-mail",
      phone: "Telefone",
      message: "Mensagem",
      send: "Enviar Mensagem",
      address: "Endereço",
      addressValue: "R. Monasita, 165 - Iguaçu, Ipatinga - MG, 35162-098"
    },
    footer: {
      rights: "Todos os direitos reservados.",
      tagline: "Transportando confiança desde 1999"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      history: "Our History",
      contact: "Contact Us"
    },
    hero: {
      title: "GRUPO TRANSMAR",
      subtitle:
        "Since 1999 Operating in the Road Freight Transport segment. A Family History of Partnerships and Trust!",
      cta: "Request a Quote"
    },
    about: {
      title: "About Us",
      text: "Grupo Transmar is a family business born from the dream of building solid and lasting partnerships. With over two decades of experience in road freight transport, we stand out for trust, commitment, and excellence in every service provided. Our modern fleet and qualified team ensure safe and punctual deliveries throughout the national territory.",
      years: "25+",
      experience: "Years of Experience"
    },
    services: {
      title: "Our Services",
      subtitle:
        "Complete solutions for your transportation and logistics needs",
      sales: {
        title: "Silo Trailer 4 Axles (GCW 58.5t)",
        description:
          "Designed to serve cement, lime, corn, and soy clients on long-distance routes.",
        features: [
          "Maximum load capacity in the market",
          "Fast pneumatic unloading system",
          "Ideal for powdered products and grains",
          "Cost optimization on long routes"
        ]
      },
      rental: {
        title: "Silo Trailer 3 Axles (GCW 48.5t)",
        description:
          "Designed to serve cement, lime, corn, and soy clients on medium-distance routes.",
        features: [
          "High versatility for different types of cargo",
          "Excellent maneuverability in industrial areas",
          "Optimized for medium-distance routes",
          "High precision pneumatic unloading"
        ]
      },
      transport: {
        title: "Dump Trailers",
        description:
          "Serving clients in mining, steel, quarry operations, and earthmoving projects."
      },
      cta: "Learn More"
    },
    "our-services": {
      title: "Our Services",
      subtitle:
        "Complete solutions for your transportation and logistics needs",
      highlights: "Highlights",
      sales: {
        title: "Road Silo 4 Axles (GCW 58.5t)",
        description:
          "Our premium solution for solid bulk materials. With 4-axle technology, this equipment offers the maximum load capacity allowed by law (58.5t), being ideal for long-distance transport of cement, lime, corn and soy.",
        features: [
          "Largest net load capacity in the market",
          "Fast pneumatic unloading system",
          "Ideal for powdered products and grains",
          "Cost optimization on long routes"
        ]
      },
      rental: {
        title: "Road Silo 3 Axles (GCW 48.5t)",
        description:
          "Our agile solution for regional distribution. The 3-Axle Silo offers the ideal balance between weight and performance, being the perfect choice for transporting cement, lime and grains over medium distances with maximum operational efficiency.",
        features: [
          "High versatility for different types of cargo",
          "Excellent maneuverability in industrial areas",
          "Optimized for medium-distance routes",
          "High precision pneumatic unloading"
        ]
      },
      transport: {
        title: "Dump Trailers",
        description:
          "Robustness and efficiency for heavy operations. Our dump trailers excellently serve the mining, steel and construction sectors, ensuring safe and agile material outflow in severe terrain.",
        features: [
          "Ideal for minerals, aggregates and industrial inputs",
          "High safety hydraulic system",
          "High abrasion resistant buckets",
          "Specialized service in works and plants"
        ]
      },
      cta: "Learn More"
    },
    timeline: {
      title: "Our History",
      subtitle: "A trajectory of growth and achievements",
      events: [
        {
          date: "August 10, 1999",
          title: "Foundation",
          description:
            "Beginning of Grupo Transmar activities with a small fleet and big dreams."
        },
        {
          date: "January 5, 2002",
          title: "Steel Segment",
          description:
            "Start of operations in the steel segment, expanding our area of expertise."
        },
        {
          date: "April 2006",
          title: "Earthworks and Highways",
          description:
            "Start of service in the earthworks and highway resurfacing segment."
        },
        {
          date: "June 2009",
          title: "Mining",
          description:
            "Expansion into the mining sector, consolidating our market presence."
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch to learn more about our services",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      address: "Address",
      addressValue:
        "R. Monasita, 165 - Iguaçu, Ipatinga - MG, 35162-098, Brazil"
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Transporting trust since 1999"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [language, setLanguage] = useState<Language>("pt");

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
