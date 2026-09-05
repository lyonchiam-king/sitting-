import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Facebook, Navigation, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ServicePicker } from './ServicePicker';
import { EnquiryRecord } from '../types';

interface ContactPageProps {
  onEnquirySubmitted: (enquiry: EnquiryRecord) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onEnquirySubmitted }) => {
  return (
    <div className="pt-24 pb-20 bg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Studio Contact</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text">
            Get in Touch & Book
          </h1>
          <p className="font-body text-muted text-sm sm:text-base mt-3 leading-relaxed">
            Have questions about lash extensions, microblading, or patch testing? Call Fizza directly or use our instant WhatsApp service picker.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-surface p-6 rounded-card border border-accent/30 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-text">Call Studio</h3>
            <p className="text-xs text-muted">Speak directly with Fizza</p>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-block font-body font-bold text-base text-accent hover:underline"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          {/* Address */}
          <div className="bg-surface p-6 rounded-card border border-accent/30 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-text">Studio Address</h3>
            <p className="text-xs text-muted">{BUSINESS_INFO.address}</p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
            >
              <span>Google Maps Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Facebook */}
          <div className="bg-surface p-6 rounded-card border border-accent/30 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
              <Facebook className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-text">Facebook Page</h3>
            <p className="text-xs text-muted">@SittingPrettyManchester</p>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
            >
              <span>Visit Facebook Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Embedded Service Picker */}
        <ServicePicker onEnquirySubmitted={onEnquirySubmitted} />

      </div>
    </div>
  );
};
