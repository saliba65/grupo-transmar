import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === 'pt' ? 'Mensagem enviada!' : 'Message sent!',
      description: language === 'pt' 
        ? 'Entraremos em contato em breve.' 
        : 'We will get back to you soon.',
    });
    
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
    },
    {
      icon: Phone,
      label: language === 'pt' ? 'Telefone' : 'Phone',
      value: '+55 (31) 3826-5085',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'transmar@grupotransmar.com.br',
    },
    {
      icon: Clock,
      label: language === 'pt' ? 'Horário' : 'Hours',
      value: language === 'pt' ? 'Seg - Sex: 8h - 18h' : 'Mon - Fri: 8am - 6pm',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted rounded-lg"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{info.label}</div>
                    <div className="text-muted-foreground text-xs">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {language === 'pt' ? 'Fale Conosco pelo WhatsApp' : 'Contact Us on WhatsApp'}
                  </h3>
                  <p className="text-green-100 text-sm">
                    {language === 'pt' ? 'Resposta rápida e direta' : 'Fast and direct response'}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => window.open('https://wa.me/553138265085?text=Olá! Gostaria de mais informações sobre os serviços da Transmar.', '_blank')}
                className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {language === 'pt' ? 'Iniciar Conversa' : 'Start Chat'}
              </Button>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8946.528303698933!2d-42.55773293809014!3d-19.47488209781721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafffe72aca8983%3A0x966ea941775a9343!2sR.%20Monasita%2C%20165%20-%20Igua%C3%A7u%2C%20Ipatinga%20-%20MG%2C%2035162-098!5e0!3m2!1spt-BR!2sbr!4v1766254565292!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={language === 'pt' ? 'Localização da Transmar' : 'Transmar Location'}
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.name}
                </label>
                <Input 
                  type="text" 
                  required 
                  className="bg-background border-border focus:border-accent focus:ring-accent"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.email}
                  </label>
                  <Input 
                    type="email" 
                    required 
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.phone}
                  </label>
                  <Input 
                    type="tel" 
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.message}
                </label>
                <Textarea 
                  required 
                  rows={5}
                  className="bg-background border-border focus:border-accent focus:ring-accent resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-accent hover:bg-orange-hover text-accent-foreground font-semibold py-6"
              >
                {isLoading ? (
                  <span className="animate-pulse">{language === 'pt' ? 'Enviando...' : 'Sending...'}</span>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {t.contact.send}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
