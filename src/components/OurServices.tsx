import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import truckForest from '@/assets/truck-forest.jpeg';
import truckSilo from '@/assets/truck-silo.jpeg';
import truckHero from '@/assets/truck-hero.jpeg';

const OurServices = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t['our-services'].sales.title,
      description: t['our-services'].sales.description,
      image: truckHero,
      features: t['our-services'].sales.features,
    },
    {
      title: t['our-services'].rental.title,
      description: t['our-services'].rental.description,
      image: truckSilo,
            features: t['our-services'].rental.features,

    },
    {
      title: t['our-services'].transport.title,
      description: t['our-services'].transport.description,
      image: truckForest,
            features: t['our-services'].transport.features,

    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {t['our-services'].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t['our-services'].subtitle}
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* Services Sections */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-navy/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="relative rounded-xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                
                {/* Destaques */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                      Destaques
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;