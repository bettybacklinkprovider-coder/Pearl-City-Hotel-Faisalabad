import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const query = customText.trim() || 'Hello Pearl City Shopping Mall Faisalabad! I would like to inquire about stores, promotions and timings.';
    const url = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomText('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold text-lg shadow-sm">
                  P
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Pearl City Mall Support</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span>Instant WhatsApp Concierge</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-emerald-100 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 text-xs space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200/80 shadow-xs max-w-[90%]">
              <p className="text-slate-800 font-medium mb-1">Assalam-o-Alaikum! 👋</p>
              <p className="text-slate-600 leading-relaxed">
                Welcome to <strong>Pearl City Shopping Mall Faisalabad</strong> on Sargodha Road. How may we assist your shopping or dining visit today?
              </p>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              <button
                onClick={() => {
                  const url = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hi! I would like to check store timings and brand directory at Pearl City Mall.")}`;
                  window.open(url, '_blank');
                }}
                className="text-left px-3 py-2 bg-emerald-50 text-emerald-900 border border-emerald-200/60 rounded-lg text-[11px] font-medium hover:bg-emerald-100 transition-colors"
              >
                🛏️ Check room availability
              </button>
              <button
                onClick={() => {
                  const url = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hi! Please send me the Special Offers & Packages list.")}`;
                  window.open(url, '_blank');
                }}
                className="text-left px-3 py-2 bg-emerald-50 text-emerald-900 border border-emerald-200/60 rounded-lg text-[11px] font-medium hover:bg-emerald-100 transition-colors"
              >
                🎁 Inquire Special Offers & Discounts
              </button>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            <button
              type="submit"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shrink-0"
              title="Send to WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="bg-slate-100 px-3 py-1.5 text-[10px] text-slate-500 flex items-center justify-between border-t border-slate-200">
            <span>Direct Call: {HOTEL_INFO.phoneDisplay}</span>
            <a href={`tel:${HOTEL_INFO.phone}`} className="text-emerald-700 font-semibold hover:underline flex items-center gap-1">
              <Phone className="w-2.5 h-2.5" /> Call Now
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="WhatsApp Hotel Booking"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold hidden sm:inline whitespace-nowrap">
          WhatsApp 03216561717
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
      </button>
    </div>
  );
};
