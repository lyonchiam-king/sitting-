import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES, FAQS, BUSINESS_INFO } from '../data/content';
import { ServiceItem } from '../types';
import { ShieldCheck, Sparkles, Clock, Check, ChevronDown, ChevronUp, Calendar, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { ServiceModal } from './ServiceModal';

interface ServicesPageProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectServiceToBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredServices = SERVICES.filter((serv) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Eyelashes') return serv.id.includes('lash') && !serv.id.includes('infill');
    if (selectedCategory === 'Brows') return serv.id.includes('brow') || serv.id.includes('microblading');
    if (selectedCategory === 'Maintenance') return serv.id.includes('infill') || serv.id.includes('lift');
    return true;
  });

  return (
    <div className="pt-24 pb-20 bg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Price Menu • No DMs Needed</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text">
            Services & Upfront Pricing
          </h1>
          <p className="font-body text-muted text-sm sm:text-base mt-3 leading-relaxed">
            All prices are clearly listed below. Fizza customizes every treatment to your eye structure while maintaining 100% natural lash health.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
          {['All', 'Eyelashes', 'Brows', 'Maintenance'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-accent ${
                selectedCategory === cat
                  ? 'bg-accent text-surface shadow-xs'
                  : 'bg-surface text-muted hover:text-text border border-accent/20'
              }`}
            >
              {cat === 'Eyelashes' ? 'Eyelash Extensions' : cat === 'Brows' ? 'Microblading Brows' : cat}
            </button>
          ))}
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="bg-surface rounded-card border border-accent/30 overflow-hidden shadow-xs hover:border-accent hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-bg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-surface/95 px-3 py-1 rounded-full text-xs font-bold text-text border border-accent/30 shadow-xs">
                  {service.price}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-muted mb-1">
                    <span className="font-bold text-accent uppercase font-body">{service.tagline}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {service.duration}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-text">{service.name}</h3>
                  <p className="font-body text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {service.tags.map((t, i) => (
                      <span key={i} className="text-[10px] bg-bg text-muted px-2 py-0.5 rounded-full border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onSelectServiceToBook(service.id)}
                      className="btn-primary flex-1 py-2.5 px-4 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book {service.name}</span>
                    </button>

                    <button
                      onClick={() => setSelectedServiceModal(service)}
                      className="py-2.5 px-3 rounded-full border border-accent/30 text-xs font-medium text-text hover:bg-accent/10 transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Damage Prevention & Aftercare Guide */}
        <div className="bg-surface rounded-card border-2 border-accent/30 p-6 sm:p-8 mb-16 shadow-xs">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-emerald-700">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="font-heading text-2xl font-bold text-text">
                The Sitting Pretty Lash Health Guarantee
              </h3>
            </div>

            <p className="font-body text-sm text-muted leading-relaxed">
              Anxious about natural lash loss or damage? You're not alone. Bad application (clumping multiple lashes together or using overly heavy extensions) causes damage. At Sitting Pretty, Fizza uses strict isolation:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-bg p-4 rounded-xl border border-accent/20 space-y-1">
                <span className="font-heading font-bold text-sm text-text block">100% Lash Isolation</span>
                <span className="text-xs text-muted block">Every extension is bonded to exactly ONE natural lash, allowing natural growth cycles.</span>
              </div>

              <div className="bg-bg p-4 rounded-xl border border-accent/20 space-y-1">
                <span className="font-heading font-bold text-sm text-text block">Featherlight Weights</span>
                <span className="text-xs text-muted block">We select weight thickness mapped strictly to what your natural roots can carry.</span>
              </div>

              <div className="bg-bg p-4 rounded-xl border border-accent/20 space-y-1">
                <span className="font-heading font-bold text-sm text-text block">Medical-Grade Adhesive</span>
                <span className="text-xs text-muted block">Clean, low-fume adhesive designed specifically for sensitive eyes.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text">
              Frequently Asked Questions
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted mt-1">
              Everything you need to know before your appointment at 34 Nell Lane.
            </p>
          </div>

          <div className="space-y-3 font-body">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-surface rounded-xl border border-accent/25 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-heading font-bold text-sm sm:text-base text-text flex items-center justify-between gap-3 focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-accent shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-muted border-t border-gray-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Instance */}
        <ServiceModal
          service={selectedServiceModal}
          onClose={() => setSelectedServiceModal(null)}
          onSelectServiceToBook={onSelectServiceToBook}
        />

      </div>
    </div>
  );
};
