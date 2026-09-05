import React from 'react';
import { Phone, MapPin, Facebook, Table, Heart, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onOpenSpreadsheet: () => void;
  setActivePage: (page: 'home' | 'services' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSpreadsheet, setActivePage }) => {
  return (
    <footer className="bg-surface border-t border-accent/20 pt-16 pb-24 lg:pb-16 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-100">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-heading text-xl font-bold">
                SP
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-text block leading-tight">
                  Sitting Pretty
                </span>
                <span className="text-[11px] text-muted tracking-wider uppercase block font-medium">
                  Manchester UK
                </span>
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Professional eyelash and microblading services in Manchester. Individual lash health priority, zero damage guarantee, and unhurried expert care by Fizza.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Verified 100% Lash Health Priority</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-text uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li>
                <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="hover:text-text transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('services'); window.scrollTo(0,0); }} className="hover:text-text transition-colors">
                  Services & Upfront Pricing
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth'}), 100); }} className="hover:text-text transition-colors">
                  About Fizza
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('home'); setTimeout(() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth'}), 100); }} className="hover:text-text transition-colors">
                  Verified Reviews
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('contact'); window.scrollTo(0,0); }} className="hover:text-text transition-colors">
                  Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio Details */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-text uppercase tracking-wider">
              Studio Details
            </h4>
            <ul className="space-y-2.5 text-xs text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text">
                  {BUSINESS_INFO.address}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={BUSINESS_INFO.phoneTel} className="hover:text-text font-bold text-text">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Owner Access */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-text uppercase tracking-wider">
              Social & Owner Log
            </h4>
            
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-text bg-bg p-3 rounded-xl border border-accent/20 hover:border-accent transition-colors"
            >
              <Facebook className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <span className="font-bold block">Facebook Page</span>
                <span className="text-[11px] text-muted block">@SittingPrettyManchester</span>
              </div>
            </a>

            <button
              onClick={onOpenSpreadsheet}
              className="w-full flex items-center gap-2 text-xs text-emerald-900 bg-emerald-50 p-3 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <Table className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-left">
                <span className="font-bold block">Owner's Booking Log</span>
                <span className="text-[10px] text-emerald-700 block">Google Sheets Sync Table</span>
              </div>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
          <p>© {new Date().getFullYear()} Sitting Pretty. All rights reserved. Manchester, UK.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with care for Fizza's clients in Manchester</span>
            <Heart className="w-3 h-3 text-accent fill-accent" />
          </div>
        </div>

      </div>
    </footer>
  );
};
