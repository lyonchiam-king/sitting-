import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle2, MessageSquare, Phone, UserCheck, Clock, Shield, Sparkles, Send } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';
import { EnquiryRecord } from '../types';

interface ServicePickerProps {
  preselectedServiceId?: string;
  onEnquirySubmitted: (enquiry: EnquiryRecord) => void;
}

export const ServicePicker: React.FC<ServicePickerProps> = ({
  preselectedServiceId,
  onEnquirySubmitted,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES[0].id
  );
  const [selectedTechnician, setSelectedTechnician] = useState<string>('Fizza (Lead Lash & Brow Specialist)');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('10:00 AM');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  // Construct WhatsApp Prefilled Message
  const buildWhatsAppMessage = () => {
    const text = `Hi Fizza! I would like to book an appointment at Sitting Pretty:
- Treatment: ${selectedService.name} (${selectedService.price})
- Technician: ${selectedTechnician}
- Preferred Date: ${preferredDate || 'Earliest Available'}
- Preferred Time: ${preferredTime}
- Name: ${customerName || '[My Name]'}
- Phone: ${customerPhone || '[My Phone]'}
${notes ? `- Note: ${notes}` : ''}`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newEnquiry: EnquiryRecord = {
        id: 'ENQ-' + Date.now().toString().slice(-6),
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
        serviceName: selectedService.name,
        customerName: customerName || 'Manchester Client',
        customerPhone: customerPhone || BUSINESS_INFO.phoneDisplay,
        preferredDate: preferredDate || 'Earliest Available',
        preferredTime: preferredTime,
        notes: notes || 'Standard booking enquiry',
        technician: selectedTechnician,
        status: 'New',
      };

      onEnquirySubmitted(newEnquiry);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="booking-picker" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface border-y border-accent/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Pre-Filled Booking</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text">
            Service Picker & Appointment Booking
          </h2>
          <p className="font-body text-sm sm:text-base text-muted max-w-lg mx-auto mt-2">
            Select your service and preferred date. Generates an instant pre-filled WhatsApp booking message directly for Fizza.
          </p>
        </motion.div>

        <div className="bg-bg rounded-card border-2 border-accent/30 p-5 sm:p-8 shadow-md">
          {submitted ? (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5 font-body"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-300">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-text">
                    Booking Enquiry Recorded!
                  </h3>
                  <p className="text-sm text-muted max-w-md mx-auto mt-2">
                    Your enquiry for <strong className="text-text">{selectedService.name}</strong> with <strong className="text-text">Fizza</strong> has been logged to our appointment spreadsheet.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-accent/20 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Selected Treatment:</span>
                    <span className="font-bold text-text">{selectedService.name} ({selectedService.price})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Technician:</span>
                    <span className="font-bold text-text">Fizza</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Preferred Date/Time:</span>
                    <span className="font-bold text-text">{preferredDate || 'Earliest Available'} @ {preferredTime}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-100 pt-1 text-[11px] text-muted">
                    <span>Logged Timestamp:</span>
                    <span className="font-mono">{new Date().toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-surface font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-sm text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Pre-Filled WhatsApp to Fizza</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto bg-surface hover:bg-gray-100 text-text font-medium py-3 px-5 rounded-full border border-gray-300 text-sm"
                  >
                    Modify Selection
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              
              {/* Step 1: Select Treatment */}
              <div>
                <label className="block font-heading font-bold text-sm text-text mb-2.5 flex items-center justify-between">
                  <span>1. Select Treatment</span>
                  <span className="text-xs font-body font-normal text-muted">Tap to choose</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {SERVICES.map((serv) => {
                    const isSelected = serv.id === selectedServiceId;
                    return (
                      <button
                        type="button"
                        key={serv.id}
                        onClick={() => setSelectedServiceId(serv.id)}
                        className={`p-3 rounded-xl text-left border transition-all duration-150 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-surface border-accent ring-2 ring-accent/30 shadow-xs'
                            : 'bg-surface/60 border-accent/20 hover:border-accent/40'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <span className="font-heading font-bold text-sm text-text leading-tight">
                            {serv.name}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />}
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-muted">
                          <span>{serv.tagline}</span>
                          <span className="font-bold text-text">{serv.price}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Service Summary Bar */}
              <div className="bg-surface p-3.5 rounded-xl border border-accent/30 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-muted">Chosen:</span>
                  <strong className="text-text">{selectedService.name}</strong>
                  <span className="text-accent font-semibold">({selectedService.price})</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs text-emerald-700 font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  <span>100% Lash Health</span>
                </div>
              </div>

              {/* Step 2: Choose Technician & Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-heading font-bold text-sm text-text mb-1.5 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-accent" />
                    <span>Technician</span>
                  </label>
                  <div className="p-3 bg-surface rounded-xl border border-accent/30 text-sm font-semibold text-text flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 text-accent font-bold text-xs flex items-center justify-center">
                      F
                    </div>
                    <span>Fizza (Lead Lash & Brow Specialist)</span>
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-sm text-text mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-2.5 bg-surface rounded-xl border border-accent/30 text-sm text-text focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              {/* Time Slots & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-heading font-bold text-sm text-text mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full p-2.5 bg-surface rounded-xl border border-accent/30 text-sm text-text focus:ring-2 focus:ring-accent"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block font-heading font-bold text-sm text-text mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Mitchell"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full p-2.5 bg-surface rounded-xl border border-accent/30 text-sm text-text placeholder:text-muted/60 focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block font-heading font-bold text-sm text-text mb-1.5">
                    Your Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 07700 900000"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full p-2.5 bg-surface rounded-xl border border-accent/30 text-sm text-text placeholder:text-muted/60 focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block font-heading font-bold text-sm text-text mb-1">
                  Special Notes / Anxieties (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. First time getting lash extensions, anxious about damage..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 bg-surface rounded-xl border border-accent/30 text-sm text-text placeholder:text-muted/60 focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Action Buttons: Log to Spreadsheet & Pre-filled WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:flex-1 py-4 px-6 rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-md active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Logging Enquiry...' : 'Book Your Appointment & Log Request'}</span>
                </button>

                <a
                  href={buildWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-surface font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 text-sm shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Fizza Directly</span>
                </a>
              </div>

              <div className="text-center text-xs text-muted">
                <span>Or call directly: </span>
                <a href={BUSINESS_INFO.phoneTel} className="font-bold text-text underline hover:text-accent">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};
