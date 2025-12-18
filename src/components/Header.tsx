import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#history', label: t.nav.history },
    { href: '#contact', label: t.nav.contact },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-heading font-bold text-primary-foreground tracking-wider">
              TRANSMAR
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-navy-light/30 gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase font-medium">{language}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem 
                  onClick={() => setLanguage('pt')}
                  className={language === 'pt' ? 'bg-muted' : ''}
                >
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-muted' : ''}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              onClick={() => scrollToSection('#contact')}
              className="hidden md:inline-flex bg-accent hover:bg-orange-hover text-accent-foreground font-semibold"
            >
              {t.hero.cta}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-primary-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-primary-foreground/80 hover:text-accent transition-colors py-2 text-left font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="mt-2 bg-accent hover:bg-orange-hover text-accent-foreground font-semibold w-full"
              >
                {t.hero.cta}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
