import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { ActivePage } from './Navbar';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-display text-xl font-bold">
                P
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white block">
                  Pearl City Mall
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-400 font-semibold block -mt-1">
                  Faisalabad · Pakistan
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Experience Faisalabad's premier shopping, fashion, dining, and family lifestyle destination along Canal Block Shadman on Sargodha Road. Top designer lawn boutiques, Al-Rizq Supermarket, grand glass atrium, and tech showrooms.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Registered Commercial Entity</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore Pearl City Mall
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Mall Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('rooms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Stores & Mall Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('offers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Special Offers & Mall Deals
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Visitor Reviews, Map & Location
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-amber-400 font-medium hover:underline pt-1 block"
                >
                  Store Directory & Inquiries &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Mall Conveniences
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Customer Care & Information Concierge</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Gourmet Food Court & Terrace Cafes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Al-Rizq Mega Supermarket & Grocery</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>500+ Car Monitored Parking & Valet</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Full Mall Air-Conditioning & Power Backup</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Complimentary High-Speed Wi-Fi</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Direct Contact & Address
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {HOTEL_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="text-white font-semibold hover:text-amber-400 transition-colors"
                >
                  {HOTEL_INFO.phoneDisplay} ({HOTEL_INFO.phone})
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-medium"
                >
                  WhatsApp: +92 321 6561717
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-400">
                  {HOTEL_INFO.email}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-400">
                  Check-in: 2:00 PM · Check-out: 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pearl City Hotel Faisalabad. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span>Guest Cancellation Policy</span>
            <span>·</span>
            <span className="text-slate-400">Sargodha Rd, Shadman, Faisalabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
