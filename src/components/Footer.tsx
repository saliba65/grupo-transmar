import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold mb-2">GRUPO TRANSMAR</h3>
            <p className="text-primary-foreground/70">{t.footer.tagline}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-navy-light/30 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-accent hover:bg-orange-hover rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-accent-foreground" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light/30">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Grupo Transmar. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
