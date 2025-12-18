import { useLanguage } from '@/contexts/LanguageContext';
import truckSilo from '@/assets/truck-silo.jpeg';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="pt-20 md:pt-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-navy/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <img 
              src={truckSilo} 
              alt="Transmar Truck at Industrial Site" 
              className="relative rounded-xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
              <div className="text-4xl md:text-5xl font-heading font-bold">{t.about.years}</div>
              <div className="text-sm md:text-base font-medium opacity-90">{t.about.experience}</div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.text}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {language === 'pt' ? 'Veículos' : 'Vehicles'}
                </div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {language === 'pt' ? 'Clientes' : 'Clients'}
                </div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {language === 'pt' ? 'Segmentos' : 'Segments'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
