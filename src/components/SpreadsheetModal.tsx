import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Table, Download, CheckCircle2, Clock, Phone, Sparkles, Filter } from 'lucide-react';
import { EnquiryRecord } from '../types';

interface SpreadsheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: EnquiryRecord[];
}

export const SpreadsheetModal: React.FC<SpreadsheetModalProps> = ({
  isOpen,
  onClose,
  enquiries,
}) => {
  if (!isOpen) return null;

  const downloadCSV = () => {
    const headers = ['ID', 'Timestamp', 'Service', 'Customer Name', 'Phone', 'Preferred Date', 'Preferred Time', 'Technician', 'Notes', 'Status'];
    const rows = enquiries.map((e) => [
      e.id,
      e.timestamp,
      `"${e.serviceName}"`,
      `"${e.customerName}"`,
      `"${e.customerPhone}"`,
      `"${e.preferredDate}"`,
      `"${e.preferredTime}"`,
      `"${e.technician}"`,
      `"${e.notes.replace(/"/g, '""')}"`,
      e.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SittingPretty_Bookings_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-text/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl bg-surface rounded-card shadow-2xl overflow-hidden border-2 border-emerald-600/30 my-6 font-body"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar styled like Google Sheets */}
          <div className="bg-emerald-900 text-surface p-4 flex items-center justify-between border-b border-emerald-800">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-800 text-emerald-300">
                <Table className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-lg text-surface">
                    Sitting Pretty — Google Sheets Booking Log
                  </h3>
                  <span className="text-[10px] uppercase font-bold bg-emerald-700 text-emerald-100 px-2 py-0.5 rounded-md">
                    Live Auto-Sync
                  </span>
                </div>
                <p className="text-xs text-emerald-200">
                  Every booking enquiry submitted on the website is recorded here with a timestamp.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-emerald-800 text-emerald-200 hover:text-surface transition-colors"
              aria-label="Close Spreadsheet"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Toolbar */}
          <div className="bg-emerald-50 px-4 py-3 border-b border-emerald-200 flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-950 font-medium">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Total Bookings Logged: <strong>{enquiries.length}</strong></span>
              <span className="text-emerald-400">•</span>
              <span className="text-muted">Owner View (Fizza)</span>
            </div>

            <button
              onClick={downloadCSV}
              className="bg-emerald-700 hover:bg-emerald-800 text-surface px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV / Google Sheets</span>
            </button>
          </div>

          {/* Table Container */}
          <div className="p-4 overflow-x-auto max-h-[60vh]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300 text-text font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-3 border-r border-gray-200">ID</th>
                  <th className="p-3 border-r border-gray-200">Timestamp</th>
                  <th className="p-3 border-r border-gray-200">Service</th>
                  <th className="p-3 border-r border-gray-200">Customer Name</th>
                  <th className="p-3 border-r border-gray-200">Phone / WhatsApp</th>
                  <th className="p-3 border-r border-gray-200">Date & Time</th>
                  <th className="p-3 border-r border-gray-200">Technician</th>
                  <th className="p-3 border-r border-gray-200">Notes</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-mono text-[11px]">
                {enquiries.map((e, idx) => (
                  <tr key={e.id} className={idx % 2 === 0 ? 'bg-surface' : 'bg-bg'}>
                    <td className="p-3 font-bold text-accent border-r border-gray-200">{e.id}</td>
                    <td className="p-3 text-muted border-r border-gray-200 whitespace-nowrap">{e.timestamp}</td>
                    <td className="p-3 font-bold text-text border-r border-gray-200">{e.serviceName}</td>
                    <td className="p-3 text-text font-semibold border-r border-gray-200">{e.customerName}</td>
                    <td className="p-3 text-blue-700 font-bold border-r border-gray-200">{e.customerPhone}</td>
                    <td className="p-3 text-text border-r border-gray-200 whitespace-nowrap">{e.preferredDate} @ {e.preferredTime}</td>
                    <td className="p-3 text-muted border-r border-gray-200">{e.technician}</td>
                    <td className="p-3 text-muted border-r border-gray-200 max-w-xs truncate">{e.notes}</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full text-[10px]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {e.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="bg-bg p-3 border-t border-gray-200 text-center text-xs text-muted">
            <span>Owner instructions: Click "Export CSV / Google Sheets" to download or import this log directly into your Google Sheets account.</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
