import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingMobileBar: React.FC = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal floating bar once scrolled past ~300px (past hero top area)
      setShowBar(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-surface/95 backdrop-blur-md border-t border-accent/30 shadow-2xl"
        >
          <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
            {/* Call Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-bg hover:bg-accent-light text-text border border-accent/40 font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 text-xs shadow-xs active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Studio</span>
            </a>

            {/* WhatsApp Direct Chat Button */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Fizza! I'm interested in booking an eyelash / microblading appointment at Sitting Pretty."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-surface font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 text-xs shadow-xs active:scale-95 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
