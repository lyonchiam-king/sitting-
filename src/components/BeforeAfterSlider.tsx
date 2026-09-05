import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { IMAGES } from '../data/content';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface border-b border-accent/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Results • Natural Lash Health Intact</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text">
            See the Difference: Zero Damage Transformation
          </h2>
          <p className="font-body text-sm sm:text-base text-muted max-w-xl mx-auto mt-2">
            Drag the slider to compare natural sparse lashes with Fizza's lightweight, perfectly isolated extensions.
          </p>
        </motion.div>

        {/* Before / After Interactive Container */}
        <div className="relative max-w-3xl mx-auto rounded-card overflow-hidden shadow-md border-2 border-accent/30 bg-bg select-none">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] cursor-ew-resize overflow-hidden touch-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
          >
            {/* "AFTER" Image (Full background) */}
            <img
              src={IMAGES.hybridLashes}
              alt="After - Sitting Pretty Hybrid Lash Set"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 z-10 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-text border border-accent/40 shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>AFTER: Full & Fluffy</span>
            </div>

            {/* "BEFORE" Image (Clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={IMAGES.beforeAfter}
                alt="Before - Natural Lashes"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10 bg-text/80 backdrop-blur-md text-surface px-3 py-1.5 rounded-full text-xs font-bold shadow-xs">
                <span>BEFORE: Natural</span>
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-surface shadow-lg z-20 transition-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface border-2 border-accent shadow-md flex items-center justify-center text-accent active:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Slider Caption / Instructions */}
          <div className="bg-bg/80 px-4 py-3 border-t border-accent/20 flex items-center justify-between text-xs text-muted font-body">
            <span>← Slide left/right to compare</span>
            <span className="font-semibold text-text">Client: Real Manchester Customer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
