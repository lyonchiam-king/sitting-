import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MessageCircle, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/content';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface border-y border-accent/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-accent" />
            <span>5.0 Star Reviews on Google & Facebook</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
            What Manchester Clients Say
          </h2>
          <p className="font-body text-muted max-w-xl mx-auto mt-2 text-sm sm:text-base">
            Real feedback from clients who value gentle care, welcoming atmosphere, and zero natural lash damage.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-bg p-5 rounded-card border border-accent/20 flex flex-col justify-between shadow-xs hover:border-accent/40 transition-colors"
            >
              <div className="space-y-3">
                {/* Rating & Source Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold text-muted bg-surface px-2 py-0.5 rounded-full border border-gray-200 flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-accent" />
                    <span>{rev.source}</span>
                  </span>
                </div>

                {/* Highlight Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-accent/15 text-text text-xs font-bold">
                  {rev.highlightTag}
                </div>

                {/* Quote Text */}
                <p className="font-body text-xs sm:text-sm text-text/90 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="mt-4 pt-3 border-t border-accent/15 flex items-center justify-between">
                <div>
                  <span className="font-heading font-bold text-sm text-text block">
                    {rev.author}
                  </span>
                  <span className="text-[11px] text-muted font-body block">
                    {rev.location} • {rev.date}
                  </span>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
