import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, ShieldCheck, Calendar, Check, AlertCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceToBook,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-text/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-xl bg-surface rounded-card shadow-2xl overflow-hidden border border-accent/30 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-surface/80 hover:bg-surface text-text shadow-xs border border-gray-200 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-bg">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="text-xs font-bold text-accent tracking-wider uppercase font-body bg-surface/90 px-2.5 py-1 rounded-md border border-accent/20">
                  {service.tagline}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text mt-1">
                  {service.name}
                </h3>
              </div>
              <div className="text-right bg-surface/95 px-3 py-1.5 rounded-xl border border-accent/30 shadow-xs">
                <span className="text-xs text-muted block leading-none">Price</span>
                <span className="font-heading text-lg font-bold text-text">{service.price}</span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 space-y-5 font-body">
            {/* Tags & Time */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-muted bg-bg px-3 py-1 rounded-full border border-accent/20 font-medium">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>{service.duration}</span>
              </div>
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-accent/10 text-text px-2.5 py-1 rounded-full border border-accent/20 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-text leading-relaxed">
              {service.description}
            </p>

            {/* Key Service Highlights */}
            <div className="bg-bg p-4 rounded-xl border border-accent/20 space-y-2">
              <h4 className="font-heading font-bold text-sm text-text flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>What to Expect During Your Session</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted">
                {service.fullDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aftercare & Patch test notice */}
            <div className="flex items-start gap-2.5 text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">Aftercare & Patch Test</span>
                <span>{service.aftercareNote} First-time clients require a quick 24h patch test.</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onSelectServiceToBook(service.id);
                  onClose();
                }}
                className="btn-primary w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Select & Book {service.name}</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-5 rounded-full border border-gray-200 text-muted hover:text-text font-medium text-sm transition-colors text-center"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
