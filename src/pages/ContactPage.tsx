import React, { useState } from 'react';
import { 
  MapPin, Phone, MessageCircle, Mail, Clock, Star, Check, 
  Send, ExternalLink, ShieldCheck, Navigation, Car, CheckCircle2, Quote,
  ShoppingBag
} from 'lucide-react';
import { HOTEL_INFO, Review, TESTIMONIALS, FAISALABAD_MALLS } from '../data/hotelData';
import { QrCodeCard } from '../components/QrCodeCard';

interface ContactPageProps {
  onOpenReviewModal: () => void;
  reviews: Review[];
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenReviewModal,
  reviews,
}) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('Room Reservation Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) return;

    // Open WhatsApp with inquiry
    const msg = `Hello Pearl City Hotel Faisalabad!\n👤 From: ${formName}\n📱 Phone: ${formPhone}\n✉️ Email: ${formEmail || 'Not provided'}\n📋 Subject: ${formSubject}\n💬 Message: ${formMessage}\n\nPlease respond to my inquiry. Thank you!`;
    const url = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] pb-24">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
              Pearl City Shopping Mall · Faisalabad
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              Customer Reviews, Location & Contact
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Find our exact location on Sargodha Road along Canal Block Shadman, explore authentic Google & Trustpilot ratings, scan our review QR code, or contact our 24/7 reception desk.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6">
        {/* Top 3 Quick Info Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Direct Phone</span>
              <a href={`tel:${HOTEL_INFO.phone}`} className="text-base font-bold text-slate-900 hover:text-amber-700 transition-colors">
                {HOTEL_INFO.phoneDisplay}
              </a>
              <span className="text-[11px] text-slate-500 block">24/7 Front Desk & Reservations</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">WhatsApp Concierge</span>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-emerald-700 hover:underline"
              >
                +92 321 6561717
              </a>
              <span className="text-[11px] text-slate-500 block">Instant Chat & Room Availability</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Prime Address</span>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                Sargodha Rd, Canal Block Shadman
              </p>
              <span className="text-[11px] text-slate-500 block">Faisalabad, Pakistan</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CUSTOMER REVIEWS & RATINGS DASHBOARD
        ========================================================================= */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-1">
                Hospitality Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-slate-900">
                Customer Reviews & Ratings Breakdown
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Verified feedback from guests who have stayed, dined, and hosted corporate events at Pearl City Hotel Faisalabad.
              </p>
            </div>
            <button
              onClick={onOpenReviewModal}
              className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              + Write a Review
            </button>
          </div>

          {/* Top 4 Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Box 1: Overall Rating */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                Overall Guest Rating
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold text-slate-950">4.9</span>
                <span className="text-xs font-semibold text-slate-500">/ 5.0</span>
              </div>
              <div className="flex text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-slate-500">Based on 486 verified reviews</span>

              <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-200 text-xs">
                <div className="flex items-center justify-between">
                  <span>5 Stars</span>
                  <span className="font-semibold text-slate-800">91%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>4 Stars</span>
                  <span className="font-semibold text-slate-800">7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>3 Stars</span>
                  <span className="font-semibold text-slate-800">2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1-2 Stars</span>
                  <span className="font-semibold text-slate-800">0%</span>
                </div>
              </div>
            </div>

            {/* Box 2: Google Reviews */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-white text-blue-600 font-bold text-sm flex items-center justify-center shadow-xs">
                      G
                    </span>
                    <span className="text-xs font-bold text-slate-900">Google Reviews</span>
                  </div>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">
                    4.9 / 5.0
                  </span>
                </div>
                <div className="flex text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  324 genuine reviews on Google Maps listing for Sargodha Road, Faisalabad.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href="https://maps.google.com/?q=Pearl+City+Hotel+Sargodha+Rd+Canal+Block+Shadman+Faisalabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>See Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Box 3: Trustpilot */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                      ★
                    </span>
                    <span className="text-xs font-bold text-slate-900">Trustpilot</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                    4.8 / 5.0
                  </span>
                </div>
                <div className="flex text-emerald-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  162 verified international guest ratings with 98% satisfaction score.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={onOpenReviewModal}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline"
                >
                  <span>Review Our Hotel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Box 4: Stylish QR Code Card */}
            <QrCodeCard onWriteReview={onOpenReviewModal} />
          </div>

          {/* Testimonial Cards Grid (3 cards per row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#fbfbf9] rounded-xl p-5 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-2.5 h-2.5" /> Verified Client
                      </span>
                    )}
                  </div>

                  <div className="text-purple-300 mb-2">
                    <Quote className="w-5 h-5 fill-purple-100 rotate-180" />
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                      <p className="text-[10px] text-slate-500">{rev.role} · {rev.location}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">{rev.stayType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            FAISALABAD PREMIER SHOPPING MALLS & TEXTILE BAZAARS
        ========================================================================= */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
                <ShoppingBag className="w-4 h-4" />
                <span>Retail Hub & Fabric Capital</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-slate-900">
                Faisalabad Shopping Malls Near Pearl City Hotel
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Explore the most celebrated luxury shopping malls, modern arcades, and world-class Pakistani lawn and textile markets located minutes from our hotel.
              </p>
            </div>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Hotel, can you provide hotel transport to Faisalabad shopping malls?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Book Shopping Chauffeur</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAISALABAD_MALLS.map((mall) => (
              <div
                key={mall.id}
                className="bg-[#fbfbf9] rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={mall.image}
                      alt={mall.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-xs text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{mall.distance}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-display font-medium text-slate-900 mb-1">
                      {mall.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {mall.description}
                    </p>
                    <div className="space-y-1">
                      {mall.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-200/80 mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">Quick Hotel Cab Access</span>
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Pearl City Hotel, please arrange a car to ${mall.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Ride</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            MAP LOCATION & DRIVING DIRECTIONS
        ========================================================================= */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 mb-12">
          {/* Map Left Info (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
                Faisalabad Coordinates
              </span>
              <h3 className="text-2xl font-display font-medium text-slate-900 mb-2">
                Prime Sargodha Road Location
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <strong>{HOTEL_INFO.address}</strong>
                <br />
                {HOTEL_INFO.landmark}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 mb-3">
                Transit & Airport Distances:
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-amber-700" />
                    <span className="font-medium text-slate-800">Clock Tower / Ghanta Ghar</span>
                  </div>
                  <span className="text-slate-500 font-semibold">12-15 Mins</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-amber-700" />
                    <span className="font-medium text-slate-800">Faisalabad Int'l Airport (LYP)</span>
                  </div>
                  <span className="text-slate-500 font-semibold">25 Mins</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-amber-700" />
                    <span className="font-medium text-slate-800">M-4 Motorway Interchange</span>
                  </div>
                  <span className="text-slate-500 font-semibold">10 Mins</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-amber-700" />
                    <span className="font-medium text-slate-800">Daewoo Express Terminal</span>
                  </div>
                  <span className="text-slate-500 font-semibold">15 Mins</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://maps.google.com/?q=Sargodha+Rd,+Canal+Block+Shadman,+Faisalabad,+Pakistan`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps App</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Please send me your live Google Maps location pin.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Pin</span>
              </a>
            </div>
          </div>

          {/* Map Embed (7 cols) */}
          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[380px] bg-slate-100 relative">
            <iframe
              title="Pearl City Hotel Faisalabad Google Map"
              width="100%"
              height="100%"
              className="border-0 w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Sargodha+Rd,+Canal+Block+Shadman,+Faisalabad,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>

        {/* =========================================================================
            DIRECT CONTACT INQUIRY FORM & RECEPTION DESK
        ========================================================================= */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-1">
              Direct Inquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900">
              Send an Inquiry to Pearl City Concierge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Have questions about corporate lodging, long stays, or dining reservations? Fill out the form below or chat immediately on WhatsApp at 03216561717.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
              <h4 className="text-lg font-bold text-emerald-900">Inquiry Dispatched Successfully!</h4>
              <p className="text-xs text-emerald-700 mt-1">
                Our reservation supervisor at Pearl City Hotel Faisalabad is reviewing your inquiry and will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Mian Tariq"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. 0321 6561717"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. guest@company.com"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                >
                  <option value="Room Reservation Inquiry">Room Reservation Inquiry</option>
                  <option value="Special Package Booking">Special Package Booking (Weekend/Extended/Romantic)</option>
                  <option value="Corporate Meeting & Boardroom Booking">Corporate Meeting & Boardroom Booking</option>
                  <option value="Pearl Restaurant Dining & High Tea">Pearl Restaurant Dining & High Tea</option>
                  <option value="Airport Transfer Assistance">Airport Transfer Assistance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Please let us know your planned stay dates, number of rooms or guests, or any specific requirements..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Direct Line: <strong className="text-slate-800">{HOTEL_INFO.phoneDisplay}</strong> · 24/7 Front Desk
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
