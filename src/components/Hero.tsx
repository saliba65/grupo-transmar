import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/truck-hero.jpeg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-primary-foreground mb-6 tracking-tight animate-fade-in">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-in-up font-body">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-orange-hover text-accent-foreground font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              {t.hero.cta}
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6"
            >
              {t.nav.about}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <ChevronDown className="h-10 w-10" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
