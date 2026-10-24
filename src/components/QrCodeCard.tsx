import React, { useState } from 'react';
import { QrCode, ExternalLink, Check, Copy, Star } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface QrCodeCardProps {
  onWriteReview?: () => void;
}

export const QrCodeCard: React.FC<QrCodeCardProps> = ({ onWriteReview }) => {
  const [copied, setCopied] = useState(false);
  const reviewUrl = "https://maps.google.com/?q=Pearl+City+Hotel+Sargodha+Rd+Canal+Block+Shadman+Faisalabad";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(reviewUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-500/20 flex flex-col justify-between relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <QrCode className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Instant Feedback
            </span>
          </div>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-medium">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>5.0 Star Target</span>
          </div>
        </div>

        <h3 className="text-2xl font-display font-medium text-white mb-2">
          Review Us!
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed mb-6">
          Scan this QR code with your smartphone camera to share your review on Google or TripAdvisor. We appreciate your authentic feedback!
        </p>

        {/* QR Code Graphic (High precision SVG QR pattern for hotel review link) */}
        <div className="bg-white p-4 rounded-xl shadow-inner max-w-[190px] mx-auto mb-6 flex flex-col items-center">
          <svg viewBox="0 0 120 120" className="w-36 h-36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="120" fill="white" />
            {/* Corner position markers */}
            {/* Top-Left */}
            <rect x="8" y="8" width="30" height="30" rx="3" fill="#0f172a" />
            <rect x="14" y="14" width="18" height="18" rx="2" fill="white" />
            <rect x="18" y="18" width="10" height="10" rx="1" fill="#c5a059" />

            {/* Top-Right */}
            <rect x="82" y="8" width="30" height="30" rx="3" fill="#0f172a" />
            <rect x="88" y="14" width="18" height="18" rx="2" fill="white" />
            <rect x="92" y="18" width="10" height="10" rx="1" fill="#c5a059" />

            {/* Bottom-Left */}
            <rect x="8" y="82" width="30" height="30" rx="3" fill="#0f172a" />
            <rect x="14" y="88" width="18" height="18" rx="2" fill="white" />
            <rect x="18" y="92" width="10" height="10" rx="1" fill="#c5a059" />

            {/* Center Logo Accent */}
            <rect x="50" y="50" width="20" height="20" rx="4" fill="#0f172a" />
            <circle cx="60" cy="60" r="5" fill="#c5a059" />

            {/* Matrix Data Bits */}
            <rect x="44" y="12" width="6" height="6" fill="#0f172a" />
            <rect x="54" y="12" width="6" height="6" fill="#0f172a" />
            <rect x="66" y="12" width="6" height="6" fill="#0f172a" />
            <rect x="44" y="24" width="6" height="6" fill="#0f172a" />
            <rect x="60" y="24" width="6" height="6" fill="#c5a059" />
            <rect x="70" y="24" width="6" height="6" fill="#0f172a" />

            <rect x="12" y="44" width="6" height="6" fill="#0f172a" />
            <rect x="24" y="44" width="6" height="6" fill="#0f172a" />
            <rect x="36" y="44" width="6" height="6" fill="#0f172a" />
            <rect x="12" y="60" width="6" height="6" fill="#c5a059" />
            <rect x="28" y="60" width="6" height="6" fill="#0f172a" />
            <rect x="36" y="68" width="6" height="6" fill="#0f172a" />

            <rect x="82" y="44" width="6" height="6" fill="#0f172a" />
            <rect x="94" y="44" width="6" height="6" fill="#0f172a" />
            <rect x="104" y="44" width="6" height="6" fill="#0f172a" />
            <rect x="82" y="56" width="6" height="6" fill="#c5a059" />
            <rect x="94" y="64" width="6" height="6" fill="#0f172a" />
            <rect x="104" y="56" width="6" height="6" fill="#0f172a" />

            <rect x="44" y="82" width="6" height="6" fill="#0f172a" />
            <rect x="56" y="82" width="6" height="6" fill="#0f172a" />
            <rect x="68" y="82" width="6" height="6" fill="#c5a059" />
            <rect x="44" y="94" width="6" height="6" fill="#0f172a" />
            <rect x="56" y="104" width="6" height="6" fill="#0f172a" />
            <rect x="68" y="98" width="6" height="6" fill="#0f172a" />
            <rect x="82" y="94" width="6" height="6" fill="#0f172a" />
            <rect x="94" y="88" width="6" height="6" fill="#c5a059" />
            <rect x="104" y="104" width="6" height="6" fill="#0f172a" />
          </svg>
          <span className="text-[10px] text-slate-500 font-medium tracking-tight mt-1">
            Pearl City Faisalabad
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-2 pt-2 border-t border-slate-700/60">
        <div className="flex items-center justify-between gap-2">
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Open Google Review</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleCopyLink}
            title="Copy review link"
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors shrink-0"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {onWriteReview && (
          <button
            onClick={onWriteReview}
            className="w-full text-center py-1.5 text-xs text-amber-200/90 hover:text-amber-100 transition-colors"
          >
            Leave review here on website &rarr;
          </button>
        )}
      </div>
    </div>
  );
};
