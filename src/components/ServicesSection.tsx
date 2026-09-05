import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Upfront Pricing • No Damage Guarantee</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
            Services & Transparent Pricing
          </h2>
          <p className="font-body text-muted max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Clear prices without sending a DM. Every set is tailored to your unique eye shape with 100% natural lash health intact.
          </p>
        </motion.div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-surface rounded-card border border-accent/25 overflow-hidden shadow-xs hover:border-accent/50 hover:shadow-md transition-all duration-200 flex flex-col group cursor-pointer"
              onClick={() => setSelectedServiceModal(service)}
            >
              {/* Card Image Header */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-text border border-accent/30 shadow-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent" />
                  <span>{service.duration}</span>
                </div>

                <div className="absolute top-3 right-3 bg-accent text-surface px-3 py-1 rounded-full font-heading text-xs font-bold shadow-xs">
                  {service.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent font-body">
                      {service.tagline}
                    </span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold flex items-center gap-0.5">
                      <ShieldCheck className="w-3 h-3" /> Safe
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-text group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-muted mt-2 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags Badges */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {service.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] bg-bg text-muted px-2 py-0.5 rounded-full border border-accent/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedServiceModal(service);
                    }}
                    className="text-xs font-bold text-text group-hover:text-accent flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Instance */}
        <ServiceModal
          service={selectedServiceModal}
          onClose={() => setSelectedServiceModal(null)}
          onSelectServiceToBook={onSelectServiceToBook}
        />
      </div>
    </section>
  );
};
