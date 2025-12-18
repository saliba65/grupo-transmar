import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

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
    };
    rental: {
      title: string;
      description: string;
    };
    transport: {
      title: string;
      description: string;
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
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      history: 'Nossa História',
      contact: 'Fale Conosco',
    },
    hero: {
      title: 'GRUPO TRANSMAR',
      subtitle: 'Desde 1999 Atuando no segmento de transporte Rodoviário de cargas. Uma História Familiar de Parcerias e Confiança!',
      cta: 'Solicitar Orçamento',
    },
    about: {
      title: 'Sobre Nós',
      text: 'O Grupo Transmar é uma empresa familiar que nasceu do sonho de construir parcerias sólidas e duradouras. Com mais de duas décadas de experiência no transporte rodoviário de cargas, nos destacamos pela confiança, comprometimento e excelência em cada serviço prestado. Nossa frota moderna e equipe qualificada garantem entregas seguras e pontuais em todo o território nacional.',
      years: '25+',
      experience: 'Anos de Experiência',
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções completas para suas necessidades de transporte e logística',
      sales: {
        title: 'Venda de Caminhões',
        description: 'Caminhões seminovos de alta qualidade, revisados e prontos para operação imediata.',
      },
      rental: {
        title: 'Aluguel de Frota',
        description: 'Locação de veículos pesados com manutenção inclusa e suporte técnico especializado.',
      },
      transport: {
        title: 'Transporte de Cargas',
        description: 'Serviço de transporte rodoviário confiável para diversos segmentos industriais.',
      },
      cta: 'Saiba Mais',
    },
    timeline: {
      title: 'Nossa História',
      subtitle: 'Uma trajetória de crescimento e conquistas',
      events: [
        {
          date: '10 de Agosto de 1999',
          title: 'Fundação',
          description: 'Início das atividades do Grupo Transmar com uma pequena frota e grandes sonhos.',
        },
        {
          date: '05 de Janeiro de 2002',
          title: 'Segmento Siderúrgico',
          description: 'Início das operações no segmento siderúrgico, expandindo nossa área de atuação.',
        },
        {
          date: 'Abril de 2006',
          title: 'Terraplanagem e Rodovias',
          description: 'Início do atendimento no segmento de terraplanagem e recapeamento de rodovias.',
        },
        {
          date: 'Junho de 2009',
          title: 'Mineração',
          description: 'Expansão para o setor de mineração, consolidando nossa presença no mercado.',
        },
      ],
    },
    contact: {
      title: 'Fale Conosco',
      subtitle: 'Entre em contato para saber mais sobre nossos serviços',
      name: 'Nome Completo',
      email: 'E-mail',
      phone: 'Telefone',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      address: 'Endereço',
      addressValue: 'Brasil',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      tagline: 'Transportando confiança desde 1999',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      history: 'Our History',
      contact: 'Contact Us',
    },
    hero: {
      title: 'GRUPO TRANSMAR',
      subtitle: 'Since 1999 Operating in the Road Freight Transport segment. A Family History of Partnerships and Trust!',
      cta: 'Request a Quote',
    },
    about: {
      title: 'About Us',
      text: 'Grupo Transmar is a family business born from the dream of building solid and lasting partnerships. With over two decades of experience in road freight transport, we stand out for trust, commitment, and excellence in every service provided. Our modern fleet and qualified team ensure safe and punctual deliveries throughout the national territory.',
      years: '25+',
      experience: 'Years of Experience',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete solutions for your transportation and logistics needs',
      sales: {
        title: 'Truck Sales',
        description: 'High-quality used trucks, inspected and ready for immediate operation.',
      },
      rental: {
        title: 'Fleet Rental',
        description: 'Heavy vehicle leasing with included maintenance and specialized technical support.',
      },
      transport: {
        title: 'Freight Transport',
        description: 'Reliable road transport service for various industrial segments.',
      },
      cta: 'Learn More',
    },
    timeline: {
      title: 'Our History',
      subtitle: 'A trajectory of growth and achievements',
      events: [
        {
          date: 'August 10, 1999',
          title: 'Foundation',
          description: 'Beginning of Grupo Transmar activities with a small fleet and big dreams.',
        },
        {
          date: 'January 5, 2002',
          title: 'Steel Segment',
          description: 'Start of operations in the steel segment, expanding our area of expertise.',
        },
        {
          date: 'April 2006',
          title: 'Earthworks and Highways',
          description: 'Start of service in the earthworks and highway resurfacing segment.',
        },
        {
          date: 'June 2009',
          title: 'Mining',
          description: 'Expansion into the mining sector, consolidating our market presence.',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch to learn more about our services',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send Message',
      address: 'Address',
      addressValue: 'Brazil',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Transporting trust since 1999',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const value = {
    language,
    setLanguage,
    t: translations[language],
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
