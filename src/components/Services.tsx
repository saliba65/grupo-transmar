import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Key, Package, ArrowRight } from 'lucide-react';
import truckForest from '@/assets/truck-forest.jpeg';
import truckSide from '@/assets/truck-side.jpg';
import truckSilo from '@/assets/truck-silo.jpeg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      title: t.services.sales.title,
      description: t.services.sales.description,
      image: truckSide,
    },
    {
      icon: Key,
      title: t.services.rental.title,
      description: t.services.rental.description,
      image: truckForest,
    },
    {
      icon: Package,
      title: t.services.transport.title,
      description: t.services.transport.description,
      image: truckSilo,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-heading text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-muted-foreground text-base mb-4">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="group/btn text-accent hover:text-accent hover:bg-accent/10 p-0"
                >
                  {t.services.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
