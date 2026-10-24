import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export type ActivePage = 'home' | 'rooms' | 'offers' | 'contact';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro banner for direct phone and location reassurance */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-medium">Sargodha Rd, Canal Block Shadman, Faisalabad</span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline text-slate-400">Direct Hotel Reception</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-semibold tracking-wide">{HOTEL_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Hotel Faisalabad! I would like to inquire about room availability.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Top Bar adhering to 3-zone contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left shrink-0 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-display text-xl font-bold shadow-xs">
              P
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block group-hover:text-amber-700 transition-colors whitespace-nowrap">
                Pearl City Mall
              </span>
              <span className="text-[10px] tracking-widest uppercase text-amber-700 font-semibold block -mt-1">
                Faisalabad · Pakistan
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activePage === 'home'
                  ? 'text-amber-700 font-semibold border-b-2 border-amber-600 pb-0.5'
                  : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('rooms')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activePage === 'rooms'
                  ? 'text-amber-700 font-semibold border-b-2 border-amber-600 pb-0.5'
                  : ''
              }`}
            >
              Stores & Directory
            </button>
            <button
              onClick={() => handleNavClick('offers')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative ${
                activePage === 'offers'
                  ? 'text-amber-700 font-semibold border-b-2 border-amber-600 pb-0.5'
                  : ''
              }`}
            >
              Mall Offers & Deals
              <span className="ml-1.5 px-1.5 py-0.2 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
                6 Deals
              </span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activePage === 'contact'
                  ? 'text-amber-700 font-semibold border-b-2 border-amber-600 pb-0.5'
                  : ''
              }`}
            >
              Reviews & Location
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Shopping Mall Faisalabad, I am looking for store information & promotions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Concierge</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              Store Directory & Info
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 bg-emerald-50 rounded-lg"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-3">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                  activePage === 'home'
                    ? 'bg-amber-50 text-amber-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Home (6 Key Sections)
              </button>
              <button
                onClick={() => handleNavClick('rooms')}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                  activePage === 'rooms'
                    ? 'bg-amber-50 text-amber-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Rooms & Suites (Full Catalog)
              </button>
              <button
                onClick={() => handleNavClick('offers')}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-between ${
                  activePage === 'offers'
                    ? 'bg-amber-50 text-amber-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Special Offers & Packages</span>
                <span className="text-[11px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                  20% Off
                </span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                  activePage === 'contact'
                    ? 'bg-amber-50 text-amber-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Customer Reviews, Map & Contact
              </button>
            </nav>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs"
              >
                Instant Reservation
              </button>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Hotel Faisalabad, I want to book a room.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp 03216561717</span>
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>Direct Call: {HOTEL_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
