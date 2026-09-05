import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicePicker } from './components/ServicePicker';
import { AboutFizza } from './components/AboutFizza';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { SpreadsheetModal } from './components/SpreadsheetModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Footer } from './components/Footer';
import { EnquiryRecord } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'services' | 'contact'>('home');
  const [spreadsheetOpen, setSpreadsheetOpen] = useState(false);
  const [selectedServiceToBook, setSelectedServiceToBook] = useState<string>('classic-lash-set');

  // Initialize spreadsheet log with verified sample enquiries
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([
    {
      id: 'ENQ-88201',
      timestamp: '2026-09-04 14:22:10',
      serviceName: 'Classic Lash Set',
      customerName: 'Sarah Mitchell',
      customerPhone: '+44 7700 900123',
      preferredDate: '2026-09-08',
      preferredTime: '10:00 AM',
      technician: 'Fizza (Lead Lash & Brow Specialist)',
      notes: 'Anxious about lash damage, first time getting extensions',
      status: 'Confirmed',
    },
    {
      id: 'ENQ-88194',
      timestamp: '2026-09-03 11:05:45',
      serviceName: 'Microblading Brows',
      customerName: 'Hannah Radcliffe',
      customerPhone: '+44 7700 900456',
      preferredDate: '2026-09-09',
      preferredTime: '01:30 PM',
      technician: 'Fizza (Lead Lash & Brow Specialist)',
      notes: 'Requested patch test 48h prior',
      status: 'Confirmed',
    },
    {
      id: 'ENQ-88182',
      timestamp: '2026-09-02 16:40:12',
      serviceName: 'Hybrid Lash Set',
      customerName: 'Chloe Bennett',
      customerPhone: '+44 7700 900789',
      preferredDate: '2026-09-07',
      preferredTime: '03:00 PM',
      technician: 'Fizza (Lead Lash & Brow Specialist)',
      notes: 'Wants full textured look for upcoming event',
      status: 'New',
    }
  ]);

  const handleEnquirySubmitted = (newEnquiry: EnquiryRecord) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  const handleOpenBookForService = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceToBook(serviceId);
    }
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById('booking-picker');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-bg text-text font-body selection:bg-accent/30 selection:text-text pb-20 lg:pb-0">
      
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBook={handleOpenBookForService}
        onOpenSpreadsheet={() => setSpreadsheetOpen(true)}
      />

      {/* Page Body View Router */}
      <main>
        {activePage === 'home' && (
          <>
            {/* 1. Hero (Instant Paint, No Entrance Animation) */}
            <Hero onOpenBook={() => handleOpenBookForService()} />

            {/* 2. Highlights Strip */}
            <HighlightsStrip />

            {/* 3. Services Card Grid & Detail Modals */}
            <ServicesSection onSelectServiceToBook={handleOpenBookForService} />

            {/* 4. Signature Moment: Before/After Interactive Slider */}
            <BeforeAfterSlider />

            {/* 5. The Interactive Piece: Service Picker & WhatsApp Pre-fill */}
            <ServicePicker
              preselectedServiceId={selectedServiceToBook}
              onEnquirySubmitted={handleEnquirySubmitted}
            />

            {/* 6. About Fizza Story */}
            <AboutFizza />

            {/* 7. Reviews Ticker & Verified Praise */}
            <ReviewsSection />

            {/* 8. Location & Google Map Embed */}
            <LocationSection />
          </>
        )}

        {activePage === 'services' && (
          <ServicesPage onSelectServiceToBook={handleOpenBookForService} />
        )}

        {activePage === 'contact' && (
          <ContactPage onEnquirySubmitted={handleEnquirySubmitted} />
        )}
      </main>

      {/* Owner Spreadsheet Modal */}
      <SpreadsheetModal
        isOpen={spreadsheetOpen}
        onClose={() => setSpreadsheetOpen(false)}
        enquiries={enquiries}
      />

      {/* Floating Mobile CTA Bar */}
      <FloatingMobileBar />

      {/* Footer */}
      <Footer
        onOpenSpreadsheet={() => setSpreadsheetOpen(true)}
        setActivePage={setActivePage}
      />

    </div>
  );
}
