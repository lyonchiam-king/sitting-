import React from 'react';
import { ShieldCheck, Sparkles, Heart } from 'lucide-react';

export const HighlightsStrip: React.FC = () => {
  const highlights = [
    { label: "Lash Health Priority", icon: ShieldCheck, desc: "Individual isolation & safe weight mapping" },
    { label: "Expert Microblading", icon: Sparkles, desc: "Crisp natural hair-stroke brow definition" },
    { label: "Welcoming Studio", icon: Heart, desc: "Calming atmosphere on Nell Lane, Manchester" },
  ];

  return (
    <section className="bg-surface border-y border-accent/20 py-4 px-4 sm:px-6 lg:px-8 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-bg border border-accent/15 hover:border-accent/40 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-text block leading-snug">
                    {item.label}
                  </span>
                  <span className="text-xs text-muted font-body block">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
