import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Facebook, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Details Column */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Sitting Pretty Studio</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
                Location & Studio Hours
              </h2>
              <p className="font-body text-sm sm:text-base text-muted mt-2">
                Situated in Chorlton/Didsbury, Manchester. A bright, immaculate studio designed for your complete comfort and relaxation.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="bg-surface p-4 rounded-xl border border-accent/25 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-heading font-bold text-sm text-text block">
                    Studio Address
                  </span>
                  <span className="text-sm text-muted font-body block mt-0.5">
                    {BUSINESS_INFO.address}
                  </span>
                  <p className="text-xs text-muted/80 mt-1 font-body">
                    {BUSINESS_INFO.locationNote}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone & Direct Contact */}
              <div className="bg-surface p-4 rounded-xl border border-accent/25 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-heading font-bold text-sm text-text block">
                    Phone & Appointments
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-base font-bold text-text hover:text-accent font-body transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="text-xs text-muted font-body block mt-0.5">
                    Call or WhatsApp Fizza directly for enquiries or schedule adjustments.
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-surface p-4 rounded-xl border border-accent/25 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-heading font-bold text-sm text-text block">
                    Opening Hours
                  </span>
                  <span className="text-sm font-semibold text-text font-body block mt-0.5">
                    {BUSINESS_INFO.hours}
                  </span>
                  <span className="text-xs text-muted font-body block mt-0.5">
                    By appointment only to ensure individual focus and unhurried care.
                  </span>
                </div>
              </div>

              {/* Facebook Verification */}
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs text-blue-900 font-body">
                <div className="flex items-center gap-2">
                  <Facebook className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Facebook Page @SittingPrettyManchester</span>
                </div>
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-blue-700"
                >
                  Visit Page
                </a>
              </div>

            </div>
          </motion.div>

          {/* Map Embed Column */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="rounded-card overflow-hidden border-2 border-accent/30 shadow-md h-[380px] lg:h-[480px] relative bg-surface"
          >
            <iframe
              title="Sitting Pretty Studio Location Map"
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-[105%]"
            />
            
            <div className="absolute top-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-3 rounded-xl border border-accent/30 shadow-xs flex items-center justify-between text-xs font-body">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-bold text-text">34 Nell Ln, Manchester M21 7SN</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-surface px-3 py-1 rounded-full font-bold text-[11px] hover:bg-accent-hover transition-colors"
              >
                Open Map
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
