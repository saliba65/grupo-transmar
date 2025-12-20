import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';
import { Calendar, Factory, Construction, Mountain } from 'lucide-react';

const Timeline = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const icons = [Calendar, Factory, Construction, Mountain];

  const isHistoryPage = location.pathname === '/history';
  const backgroundClass = isHistoryPage ? 'bg-white text-foreground' : 'bg-primary text-primary-foreground';

  return (
    <section id="history" className={`py-20 md:py-32 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {t.timeline.title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isHistoryPage ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
            {t.timeline.subtitle}
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 timeline-line md:-translate-x-1/2" />

          {t.timeline.events.map((event, index) => {
            const Icon = icons[index];
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`rounded-xl p-6 transition-colors duration-300 ${isHistoryPage ? 'bg-gray-50 hover:bg-gray-100' : 'bg-navy-light/30 backdrop-blur-sm hover:bg-navy-light/50'}`}>
                    <div className="text-accent font-semibold text-sm mb-2">{event.date}</div>
                    <h3 className="text-xl font-heading font-bold mb-2">{event.title}</h3>
                    <p className={isHistoryPage ? 'text-muted-foreground' : 'text-primary-foreground/80'}>{event.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 bg-accent rounded-full flex items-center justify-center shadow-lg z-10">
                  <Icon className="h-4 w-4 text-accent-foreground" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
