import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { IMAGES, BUSINESS_INFO, PROOF_POINTS } from '../data/content';

export const AboutFizza: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Fizza's Portrait Photo */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-card overflow-hidden shadow-lg border-2 border-accent/30 bg-surface">
              <img
                src={IMAGES.fizzaPortrait}
                alt="Fizza - Sitting Pretty Lash & Brow Specialist Manchester"
                className="w-full h-[420px] sm:h-[500px] object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-surface">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-light block">
                  Owner & Lead Lash Specialist
                </span>
                <h3 className="font-heading text-2xl font-bold">
                  Meet Fizza
                </h3>
                <p className="text-xs text-surface/90 font-body mt-1">
                  Dedicated to damage-free lash extensions & crisp microblading in Manchester.
                </p>
              </div>
            </div>

            {/* Badge Overlay */}
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-surface p-4 rounded-xl border-2 border-accent/40 shadow-md flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-text block">
                  Zero Lash Damage
                </span>
                <span className="text-xs text-muted font-body block">
                  Strict 1:1 Lash Isolation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Story & Philosophy */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5" />
                <span>The Story Behind Sitting Pretty</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
                "Your natural lashes come first — always."
              </h2>
            </div>

            <p className="font-body text-base text-muted leading-relaxed">
              When Fizza founded <strong className="text-text">Sitting Pretty</strong> on Nell Lane, Manchester, she built it on a simple promise: clients should never have to compromise natural lash health for beautiful extensions.
            </p>

            <p className="font-body text-base text-muted leading-relaxed">
              Every appointment is unhurried. Fizza evaluates your natural lash density and strength, mapping custom lengths and featherlight weights so your extensions feel light as air while your natural lashes thrive underneath.
            </p>

            {/* Verified Proof Badges */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-sm font-bold text-text flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Verified Client Feedback Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PROOF_POINTS.map((proof, i) => (
                  <div
                    key={i}
                    className="bg-surface p-3 rounded-xl border border-accent/20 text-xs font-bold text-text flex items-center gap-2 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{proof}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location CTA */}
            <div className="p-4 rounded-xl bg-surface border border-accent/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-text block">
                    Bright, Welcoming Studio
                  </span>
                  <span className="text-xs text-muted font-body block">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
