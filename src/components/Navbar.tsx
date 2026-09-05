import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Table, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  activePage: 'home' | 'services' | 'contact';
  setActivePage: (page: 'home' | 'services' | 'contact') => void;
  onOpenBook: (serviceId?: string) => void;
  onOpenSpreadsheet: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenBook,
  onOpenSpreadsheet,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'services' | 'contact', targetId?: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    if (page === 'home' && targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-xs border-b border-accent/20 py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-heading text-xl font-bold group-hover:bg-accent group-hover:text-surface transition-colors duration-200">
            SP
          </div>
          <div>
            <span className="font-heading text-xl font-bold text-text tracking-tight block leading-tight">
              Sitting Pretty
            </span>
            <span className="text-[11px] text-muted tracking-wider uppercase font-body block font-medium">
              Manchester UK
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-body font-medium text-sm">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors py-1 border-b-2 ${
              activePage === 'home'
                ? 'border-accent text-text font-bold'
                : 'border-transparent text-muted hover:text-text'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className={`transition-colors py-1 border-b-2 ${
              activePage === 'services'
                ? 'border-accent text-text font-bold'
                : 'border-transparent text-muted hover:text-text'
            }`}
          >
            Services & Pricing
          </button>

          <button
            onClick={() => handleNavClick('home', 'about')}
            className="text-muted hover:text-text transition-colors py-1 border-b-2 border-transparent"
          >
            About Fizza
          </button>

          <button
            onClick={() => handleNavClick('home', 'reviews')}
            className="text-muted hover:text-text transition-colors py-1 border-b-2 border-transparent"
          >
            Reviews
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors py-1 border-b-2 ${
              activePage === 'contact'
                ? 'border-accent text-text font-bold'
                : 'border-transparent text-muted hover:text-text'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA / Phone / Social */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page @SittingPrettyManchester"
            className="p-2 text-muted hover:text-accent transition-colors rounded-full hover:bg-accent/10"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center gap-1.5 text-xs font-medium text-text hover:text-accent transition-colors py-1.5 px-3 rounded-full bg-accent/10 border border-accent/20"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenSpreadsheet()}
            title="Owner's Appointment Log Spreadsheet"
            className="p-2 text-muted hover:text-text transition-colors rounded-lg border border-gray-200 hover:bg-gray-100 text-xs flex items-center gap-1"
          >
            <Table className="w-4 h-4 text-emerald-600" />
            <span className="hidden xl:inline text-[11px] font-mono">Bookings Log</span>
          </button>

          <button
            onClick={() => onOpenBook()}
            className="btn-primary text-xs font-semibold py-2.5 px-5 rounded-full shadow-xs flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenBook()}
            className="btn-primary text-xs font-medium py-2 px-3 rounded-full flex items-center gap-1"
          >
            <span>Book</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-accent/20 px-4 pt-4 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 font-body">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 px-3 rounded-lg text-base font-medium ${
                activePage === 'home' ? 'bg-accent/15 text-text font-bold' : 'text-muted'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`text-left py-2 px-3 rounded-lg text-base font-medium ${
                activePage === 'services' ? 'bg-accent/15 text-text font-bold' : 'text-muted'
              }`}
            >
              Services & Pricing
            </button>

            <button
              onClick={() => handleNavClick('home', 'about')}
              className="text-left py-2 px-3 rounded-lg text-base font-medium text-muted"
            >
              About Fizza
            </button>

            <button
              onClick={() => handleNavClick('home', 'reviews')}
              className="text-left py-2 px-3 rounded-lg text-base font-medium text-muted"
            >
              Client Reviews
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2 px-3 rounded-lg text-base font-medium ${
                activePage === 'contact' ? 'bg-accent/15 text-text font-bold' : 'text-muted'
              }`}
            >
              Contact & Location
            </button>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center gap-2 text-sm font-medium text-text bg-bg p-3 rounded-xl border border-accent/20"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call Fizza: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-text bg-bg p-3 rounded-xl border border-accent/20"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                <span>Facebook @SittingPrettyManchester</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSpreadsheet();
                }}
                className="flex items-center gap-2 text-xs font-mono text-muted bg-gray-50 p-2.5 rounded-xl border border-gray-200"
              >
                <Table className="w-4 h-4 text-emerald-600" />
                <span>Owner's Booking Spreadsheet Log</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
