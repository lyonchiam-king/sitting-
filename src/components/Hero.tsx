import React from 'react';
import { Calendar, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/content';

interface HeroProps {
  onOpenBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBook }) => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-bg">
      {/* Background Studio Photography with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroStudio}
          alt="Sitting Pretty Studio Interior in Manchester"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/50" />
      </div>

      {/* Hero Content Container - Renders at final position & full opacity without load gates */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Location & Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 border border-accent/30 text-xs font-semibold text-text shadow-xs mb-6">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span>34 Nell Ln, Manchester M21 7SN</span>
          <span className="text-accent">•</span>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Lash Health Guaranteed
          </span>
        </div>

        {/* Headline - Exact Copy as Specified */}
        <h1 className="font-heading hero-headline font-bold text-text mb-6 max-w-3xl">
          Lashes that look amazing, health intact
        </h1>

        {/* Subcopy - Exact Copy as Specified */}
        <p className="font-body text-base sm:text-lg md:text-xl text-muted mb-8 max-w-2xl leading-relaxed">
          Professional eyelash and microblading services in Manchester. No damage, just perfection.
        </p>

        {/* Primary CTA & Direct Call */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBook}
            className="btn-primary w-full sm:w-auto text-base font-bold py-4 px-8 rounded-full shadow-md flex items-center justify-center gap-2.5 active:scale-95 transition-all duration-150"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Your Appointment</span>
          </button>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto bg-surface hover:bg-accent-light text-text font-semibold py-4 px-6 rounded-full border border-accent/40 shadow-xs flex items-center justify-center gap-2 transition-colors duration-150 text-sm"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Small transparent pricing note */}
        <p className="mt-4 text-xs text-muted font-body">
          Direct online booking • Clear upfront pricing • No DM required
        </p>
      </div>
    </section>
  );
};
