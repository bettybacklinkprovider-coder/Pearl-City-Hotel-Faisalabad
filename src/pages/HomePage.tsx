import React, { useState } from 'react';
import { 
  Calendar, Users, ArrowRight, Star, Check, ShieldCheck, MapPin, 
  Phone, MessageCircle, ExternalLink, Sparkles, Utensils, Wifi, 
  Briefcase, BellRing, Compass, Car, ChevronRight, Award, Quote,
  ShoppingBag, Clock
} from 'lucide-react';
import { 
  HOTEL_INFO, ROOMS, Room, SPECIAL_OFFERS, SpecialOffer, 
  TESTIMONIALS, Review, FACILITIES, IMAGES, FAISALABAD_MALLS 
} from '../data/hotelData';
import { ActivePage } from '../components/Navbar';
import { QrCodeCard } from '../components/QrCodeCard';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onOpenBookingWithRoom: (room?: Room) => void;
  onOpenBookingWithOffer: (offer?: SpecialOffer) => void;
  onOpenRoomModal: (room: Room) => void;
  onOpenReviewModal: () => void;
  reviews: Review[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingWithRoom,
  onOpenBookingWithOffer,
  onOpenRoomModal,
  onOpenReviewModal,
  reviews,
}) => {
  // Quick Search Availability Bar State
  const [searchCheckIn, setSearchCheckIn] = useState('2026-10-24');
  const [searchCheckOut, setSearchCheckOut] = useState('2026-10-26');
  const [searchCategory, setSearchCategory] = useState('all');
  const [searchGuests, setSearchGuests] = useState('2');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingWithRoom();
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      {/* =========================================================================
          SECTION 1: HERO / WELCOME BANNER & INSTANT AVAILABILITY SEARCH BAR
      ========================================================================= */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Hero Background with High-Fidelity Cinematic Shopping Mall Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Pearl City Shopping Mall Faisalabad Exterior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Measured Scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
          <div className="max-w-3xl">
            {/* Location trust kicker */}
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold tracking-widest uppercase mb-4">
              <span>Sargodha Rd, Canal Block Shadman</span>
              <span aria-hidden="true">·</span>
              <span>Faisalabad</span>
              <span aria-hidden="true">·</span>
              <span>Premier Retail & Lifestyle Landmark</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white leading-[1.1] mb-6">
              Welcome to <span className="text-amber-300 font-normal italic">Pearl City</span> Shopping Mall
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8 font-light">
              Experience the premier shopping, fashion, dining, and lifestyle destination of Faisalabad on Sargodha Road. Home to Pakistan's finest designer lawn boutiques, Al-Rizq Mega Supermarket, grand multi-story glass atrium, vibrant food court, and flagship tech showrooms.
            </p>

            {/* Quick Hero Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBookingWithRoom()}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg hover:shadow-amber-400/20 transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Explore Stores & Directory
              </button>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Shopping Mall Faisalabad! I would like to inquire about stores, deals and timings.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-400/30 rounded-lg backdrop-blur-xs transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp Concierge (03216561717)</span>
              </a>
              <button
                onClick={() => onNavigate('offers')}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>View Mall Deals & Offers</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-10 mt-10 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9 / 5.0 Rating</span>
                <span className="text-slate-400">(480+ Reviews)</span>
              </div>
              <div className="hidden sm:inline text-slate-600">|</div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Prime Canal Road Access</span>
              </div>
              <div className="hidden sm:inline text-slate-600">|</div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Front Desk Reassurance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Instant Availability Search Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 -mb-12 relative z-20">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end text-slate-900"
          >
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>Check-in</span>
              </label>
              <input
                type="date"
                value={searchCheckIn}
                onChange={(e) => setSearchCheckIn(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm font-medium border border-slate-200 rounded-lg bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>Check-out</span>
              </label>
              <input
                type="date"
                value={searchCheckOut}
                onChange={(e) => setSearchCheckOut(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm font-medium border border-slate-200 rounded-lg bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Room Category
              </label>
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm font-medium border border-slate-200 rounded-lg bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              >
                <option value="all">All Rooms & Suites</option>
                <option value="deluxe">Deluxe Executive Room</option>
                <option value="suite">Executive Business Suite</option>
                <option value="presidential">Royal Presidential Suite</option>
                <option value="family">Family Interconnecting</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-700" />
                <span>Guests</span>
              </label>
              <select
                value={searchGuests}
                onChange={(e) => setSearchGuests(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm font-medium border border-slate-200 rounded-lg bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests (Family)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-amber-400 font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>Check Rates & Book</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Spacing for overlapping search bar */}
      <div className="h-16 sm:h-20" />

      {/* =========================================================================
          SECTION 2: FEATURED SHOPPING WINGS & STORES
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-1">
              Retail & Brand Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900">
              Featured Mall Wings & Stores
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
              Explore premier designer lawn boutiques, multi-story glass atrium, Al-Rizq Mega Supermarket, flagship tech stores, and gourmet terrace dining.
            </p>
          </div>
          <button
            onClick={() => onNavigate('rooms')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 hover:underline shrink-0"
          >
            <span>Explore All 6 Mall Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Featured Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.slice(0, 3).map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                  {room.bedType}
                </div>
                {room.popular && (
                  <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-wider shadow-xs">
                    Guest Favorite
                  </div>
                )}
                <div className="absolute bottom-2 left-3 text-[11px] text-white/90 drop-shadow-md">
                  <span>{room.sizeSqFt} sq. ft.</span> · <span>{room.occupancy}</span> · <span>{room.view}</span>
                </div>
              </div>

              {/* Room Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-medium text-slate-900 group-hover:text-amber-800 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {room.tagline}
                  </p>

                  {/* Amenities highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold font-display text-slate-950">
                        PKR {room.pricePKR.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-slate-500">/ night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenRoomModal(room)}
                      className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onOpenBookingWithRoom(room)}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SPECIAL OFFERS & PACKAGES (Inspired by Luxury Hotel Websites)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 border-y border-amber-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Top Featured Banner & Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-2">
              Pearl City Signature Deals
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight">
              Exclusive Offers & Packages
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Discover exceptional stays and exclusive offers designed to make your experience unforgettable.
            </p>
          </div>

          {/* 6 Curated Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIAL_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual with discount ribbon */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                      Save {offer.discountPercent}%
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-900/80 text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs">
                      {offer.code}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] text-amber-300 uppercase tracking-wider block font-semibold">
                        {offer.minStay}
                      </span>
                      <h3 className="text-xl font-display font-medium text-white leading-tight">
                        {offer.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body description & inclusions */}
                  <div className="p-6">
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {offer.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
                        Included In Package:
                      </span>
                      {offer.includedBenefits.slice(0, 3).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {offer.conditions}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 line-through block">
                        Original PKR {offer.originalPricePKR.toLocaleString()}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold font-display text-slate-950">
                          PKR {offer.discountedPricePKR.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold">
                          ({offer.discountPercent}% Off)
                        </span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Pearl City Hotel Faisalabad! I would like to book the "${offer.title}" offer (Code: ${offer.code}) at PKR ${offer.discountedPricePKR.toLocaleString()}. Please assist me.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                      title="WhatsApp Inquiry for this offer"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onNavigate('offers')}
                      className="py-2.5 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center transition-colors"
                    >
                      Explore Offer
                    </button>
                    <button
                      onClick={() => onOpenBookingWithOffer(offer)}
                      className="py-2.5 px-3 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg text-center shadow-xs transition-colors"
                    >
                      Book Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout banner */}
          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-widest">
                Custom Corporate or Group Stay?
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
                Find Your Perfect Stay with Direct Concierge Assistance
              </h3>
              <p className="text-xs text-slate-400 max-w-xl">
                Planning a textile delegation, wedding party, or multi-week conference in Faisalabad? Speak directly with our resident reservation manager on WhatsApp.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {HOTEL_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Hotel Faisalabad, I am looking for a tailored group/corporate package.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-slate-900" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SHOPPING MALL FACILITIES & AMENITIES
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-1">
            World-Class Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900">
            Shopping Mall Facilities & Visitor Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every convenience curated for shoppers, visiting families, textile enthusiasts, and food lovers.
          </p>
        </div>

        {/* Bento grid with dining feature spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Spotlight card: Gourmet Food Court */}
          <div className="lg:col-span-2 bg-slate-900 rounded-2xl overflow-hidden relative shadow-lg min-h-[320px] flex flex-col justify-end p-6 sm:p-8 text-white group">
            <img
              src={IMAGES.dining}
              alt="Gourmet Food Court & Dining Terrace"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="relative z-10 max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Utensils className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Culinary Showcase
                </span>
                <span className="text-slate-400 text-xs">· Open 11:00 AM – 11:30 PM</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-2">
                Gourmet Food Court & Rooftop Terrace Lounge
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Savor artisanal fast food, traditional Pakistani handi, live tandoor barbecue, wood-fired pizzas, specialty espresso, and delicious ice creams in our vibrant multi-level food court.
              </p>
              <div className="flex items-center gap-4 text-xs text-amber-300">
                <span>Fast Casual Dining</span> · <span>Artisanal Cafes</span> · <span>Family Seating Lounges</span>
              </div>
            </div>
          </div>

          {/* Right column: 2 amenity cards */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-medium text-slate-900 mb-1">
                Executive Meeting & Boardroom
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipped with smart video conferencing, wireless screen casting, laser presentation tools, and private executive coffee lounge.
              </p>
              <span className="inline-block mt-3 text-[11px] font-semibold text-amber-800">
                Accommodates 12 to 50 Attendees
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-medium text-slate-900 mb-1">
                Secure Valet & 24/7 Monitored Parking
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct frontage on Sargodha Road with continuous CCTV surveillance, guarded security team, and seamless valet drop-off.
              </p>
              <span className="inline-block mt-3 text-[11px] font-semibold text-emerald-700">
                Complimentary for In-House Guests
              </span>
            </div>
          </div>
        </div>

        {/* 3 Smaller feature cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Wifi className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">100 Mbps Optical Fiber</h4>
              <p className="text-xs text-slate-500 mt-0.5">High-capacity bandwidth in all guest suites and lobbies for uninterrupted meetings.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <BellRing className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">24/7 Room Service</h4>
              <p className="text-xs text-slate-500 mt-0.5">Freshly prepared snacks, midnight beverages, and prompt luggage assistance round the clock.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Concierge & Chauffeur</h4>
              <p className="text-xs text-slate-500 mt-0.5">Airport transfers, Daewoo terminal shuttles, and local textile market guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CUSTOMER REVIEWS & RATINGS SECTION
          (Exact design: 5.0 rating, percentage breakdown, Google & Trustpilot cards,
           stylish QR code card, verified badges, golden stars, smooth hover)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Heading & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-1">
                Verified Guest Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900">
                Customer Reviews & Ratings
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Real feedback on our commitment to quality, hospitality, and comfort at Pearl City Hotel Faisalabad.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenReviewModal}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                + Write a Review
              </button>
            </div>
          </div>

          {/* Top Review Statistics & Cards Row (Score, Breakdown, Platforms, QR Code) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Box 1: Overall Customer Rating & Star Breakdown */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Overall Rating
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-bold text-slate-950">
                    4.9
                  </span>
                  <span className="text-sm font-semibold text-slate-500">/ 5.0</span>
                </div>
                <div className="flex text-amber-400 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Based on 486 verified guest reviews
                </p>
              </div>

              {/* 5-star to 1-star percentage breakdown */}
              <div className="space-y-1.5 mt-5 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-12 text-slate-600 font-medium shrink-0">5 Stars</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '91%' }} />
                  </div>
                  <span className="w-8 text-right text-slate-500 text-[11px]">91%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-12 text-slate-600 font-medium shrink-0">4 Stars</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '7%' }} />
                  </div>
                  <span className="w-8 text-right text-slate-500 text-[11px]">7%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-12 text-slate-600 font-medium shrink-0">3 Stars</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '2%' }} />
                  </div>
                  <span className="w-8 text-right text-slate-500 text-[11px]">2%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-12 text-slate-600 font-medium shrink-0">2 Stars</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '0%' }} />
                  </div>
                  <span className="w-8 text-right text-slate-500 text-[11px]">0%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-12 text-slate-600 font-medium shrink-0">1 Star</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '0%' }} />
                  </div>
                  <span className="w-8 text-right text-slate-500 text-[11px]">0%</span>
                </div>
              </div>
            </div>

            {/* Box 2: Google Reviews Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-blue-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Google Icon Lockup */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                      G
                    </div>
                    <span className="text-xs font-bold text-slate-900 tracking-tight">
                      Google Reviews
                    </span>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-semibold">
                    Verified
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-4xl font-display font-bold text-slate-900">4.9</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Over 324 authentic guest ratings on Google Maps.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://maps.google.com/?q=Pearl+City+Hotel+Sargodha+Rd+Canal+Block+Shadman+Faisalabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>See Reviews on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Box 3: Trustpilot Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Trustpilot Brand */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                      ★
                    </div>
                    <span className="text-xs font-bold text-slate-900 tracking-tight">
                      Trustpilot
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-semibold">
                    Excellent
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-4xl font-display font-bold text-slate-900">4.8</span>
                  <div className="flex text-emerald-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  162 reviews with 98% positive satisfaction.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenReviewModal}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  <span>See Reviews / Add Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Box 4: Stylish QR Code Card */}
            <QrCodeCard onWriteReview={onOpenReviewModal} />
          </div>

          {/* Testimonials Grid (3 Cards Per Row on Desktop as specified) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Stars + Verified Client Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {rev.verified && (
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Verified Client</span>
                      </div>
                    )}
                  </div>

                  {/* Decorative Quotation Mark in Light Purple */}
                  <div className="text-purple-300 mb-2">
                    <Quote className="w-6 h-6 fill-purple-100 rotate-180" />
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Customer Profile Row */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {rev.role} · {rev.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {rev.stayType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PHOTO GALLERY & GOOGLE MAPS LOCATION
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-1">
            Canal-Front Destination
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900">
            Photo Gallery & Prime Faisalabad Location
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Strategically located on Sargodha Rd, Canal Block Shadman, Faisalabad with instant access to highways, business centers, and heritage monuments.
          </p>
        </div>

        {/* Gallery Grid (Pearl City Shopping Mall Showcase) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          <div className="relative rounded-xl overflow-hidden h-44 group shadow-xs border border-amber-500/20">
            <img
              src={IMAGES.hero}
              alt="Pearl City Shopping Mall Illuminated Grand Exterior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5 text-white text-[11px] font-semibold">
              Pearl City Mall Facade
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-44 group shadow-xs border border-amber-500/20">
            <img
              src={IMAGES.atrium}
              alt="Grand Skylight Mall Atrium & Escalators"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5 text-white text-[11px] font-semibold">
              Grand Mall Atrium
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-44 group shadow-xs border border-amber-500/20">
            <img
              src={IMAGES.mallBoutique}
              alt="Designer Lawn & Couture Fashion Boutique"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5 text-white text-[11px] font-semibold">
              Designer Boutiques
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-44 group shadow-xs border border-amber-500/20">
            <img
              src={IMAGES.foodCourt}
              alt="Gourmet Food Court & Dining Promenade"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2.5 text-white text-[11px] font-semibold">
              Gourmet Food Court
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-44 group shadow-xs border border-amber-500/20">
            <img
              src={IMAGES.supermarket}
              alt="Al-Rizq Mega Supermarket & Grocery"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2.5 text-white text-[11px] font-semibold">
              Al-Rizq Supermarket
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-44 group shadow-xs border border-amber-500/20">
            <img
              src={IMAGES.electronics}
              alt="Flagship Tech & Gadgets Showroom"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2.5 text-white text-[11px] font-semibold">
              Tech & Gadgets Hub
            </div>
          </div>
        </div>

        {/* Dedicated Faisalabad Shopping Malls Showcase */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
                <ShoppingBag className="w-4 h-4" />
                <span>Textile Capital & Retail Therapy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900">
                Top Shopping Malls & Bazaars Near Pearl City Hotel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Stay at Pearl City Hotel on Sargodha Road with direct, fast access to Faisalabad’s premier multi-story shopping malls, luxury lawn fabric houses, and international dining promenades.
              </p>
            </div>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Hotel, can you arrange a chauffeur/cab to Lyallpur Galleria Mall?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Request Chauffeur to Mall</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAISALABAD_MALLS.map((mall) => (
              <div
                key={mall.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={mall.image}
                      alt={mall.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-xs text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{mall.distance}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="text-lg font-display font-medium text-white">
                        {mall.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {mall.description}
                    </p>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 block">
                        Mall Highlights:
                      </span>
                      {mall.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Canal Road Access
                  </span>
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Pearl City Hotel, I would like directions or chauffeur booking to ${mall.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire Chauffeur</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Map Split & Transport Guidance */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12">
          {/* Left Details (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Hotel Address & GPS</span>
              </div>
              <h3 className="text-2xl font-display font-medium text-slate-900 mb-2">
                Pearl City Hotel Faisalabad
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <strong>{HOTEL_INFO.address}</strong>
                <br />
                {HOTEL_INFO.landmark}
              </p>

              {/* Transit Distances */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-700">Clock Tower (Ghanta Ghar)</span>
                  <span className="text-slate-500 font-semibold">12-15 Mins Drive</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-700">Faisalabad Int'l Airport (LYP)</span>
                  <span className="text-slate-500 font-semibold">25 Mins Drive</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-700">M-4 Motorway Interchange</span>
                  <span className="text-slate-500 font-semibold">10 Mins Direct</span>
                </div>
              </div>
            </div>

            {/* Direct Contact triggers */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Hotel Faisalabad, I am on my way. Please send me live location pin.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Live Location (03216561717)</span>
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-900" />
                <span>Call Front Desk: {HOTEL_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 h-80 sm:h-96 lg:h-auto min-h-[350px] bg-slate-100 relative">
            <iframe
              title="Pearl City Hotel Faisalabad Location Map"
              width="100%"
              height="100%"
              className="border-0 w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Sargodha+Rd,+Canal+Block+Shadman,+Faisalabad,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 text-[11px] text-slate-700 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span className="font-semibold">Canal Block Shadman, Sargodha Rd</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
