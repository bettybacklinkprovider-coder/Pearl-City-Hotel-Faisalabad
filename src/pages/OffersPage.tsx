import React, { useState } from 'react';
import { 
  Sparkles, Check, Clock, Calendar, ArrowRight, MessageCircle, 
  HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Tag, Phone 
} from 'lucide-react';
import { SPECIAL_OFFERS, SpecialOffer, FAQS, HOTEL_INFO, IMAGES } from '../data/hotelData';

interface OffersPageProps {
  onOpenBookingWithOffer: (offer: SpecialOffer) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({
  onOpenBookingWithOffer,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredOffers = SPECIAL_OFFERS.filter(offer => {
    if (selectedCategory === 'all') return true;
    return offer.category === selectedCategory;
  });

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const featuredOffer = SPECIAL_OFFERS[0]; // Weekend Getaway

  return (
    <div className="min-h-screen bg-[#fbfbf9] pb-24">
      {/* Featured Marquee Banner at Top */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={IMAGES.atrium}
            alt="Pearl City Shopping Mall Grand Atrium"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Shopping Deals & Verified Mall Vouchers</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-tight">
              Exclusive Mall Offers & Packages
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-light">
              Discover exceptional shopping discounts, family supermarket savings, and gourmet food court dining vouchers at Pearl City Shopping Mall on Sargodha Road.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Featured Deal Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 text-white rounded-2xl shadow-xl border border-amber-500/30 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                Featured Deal of the Month
              </span>
              <span className="text-xs text-amber-300 font-semibold">
                Promo Code: {featuredOffer.code}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white">
              {featuredOffer.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {featuredOffer.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {featuredOffer.includedBenefits.slice(0, 4).map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-amber-200">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center lg:text-right flex flex-col justify-between">
            <div>
              <span className="text-xs text-slate-300 block line-through">
                Original Price: PKR {featuredOffer.originalPricePKR.toLocaleString()}
              </span>
              <div className="flex items-baseline justify-center lg:justify-end gap-1.5 my-1">
                <span className="text-3xl sm:text-4xl font-bold font-display text-amber-300">
                  PKR {featuredOffer.discountedPricePKR.toLocaleString()}
                </span>
              </div>
              <span className="text-xs text-emerald-400 font-semibold block mb-4">
                Save {featuredOffer.discountPercent}% · {featuredOffer.minStay}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-end">
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Pearl City Hotel Faisalabad! I would like to book the Featured "${featuredOffer.title}" at PKR ${featuredOffer.discountedPricePKR.toLocaleString()}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
              <button
                onClick={() => onOpenBookingWithOffer(featuredOffer)}
                className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors"
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Package Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 mb-8">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-xl border border-slate-200/80 shadow-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-amber-400 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Packages ({SPECIAL_OFFERS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('weekend')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'weekend'
                ? 'bg-slate-900 text-amber-400 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Weekend Getaways
          </button>
          <button
            onClick={() => setSelectedCategory('extended')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'extended'
                ? 'bg-slate-900 text-amber-400 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Extended Stays
          </button>
          <button
            onClick={() => setSelectedCategory('romantic')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'romantic'
                ? 'bg-slate-900 text-amber-400 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Romantic Celebrations
          </button>
          <button
            onClick={() => setSelectedCategory('family')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'family'
                ? 'bg-slate-900 text-amber-400 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Family Packages
          </button>
          <button
            onClick={() => setSelectedCategory('business')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'business'
                ? 'bg-slate-900 text-amber-400 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Business & Corporate
          </button>
        </div>
      </div>

      {/* Grid of the 6 Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    {offer.discountPercent}% Off
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

                {/* Package details */}
                <div className="p-6">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {offer.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
                      Included Package Perks:
                    </span>
                    {offer.includedBenefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{offer.validity}</span>
                  </div>
                </div>
              </div>

              {/* Pricing & Call to Actions */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-slate-400 line-through block">
                      Original: PKR {offer.originalPricePKR.toLocaleString()}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold font-display text-slate-950">
                        PKR {offer.discountedPricePKR.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-emerald-700 font-semibold">
                        ({offer.discountPercent}% Off)
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Pearl City Hotel Faisalabad! I would like to inquire about the "${offer.title}" package (Code: ${offer.code}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                    title="WhatsApp Inquiry"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Pearl City Hotel, please share full brochure details for ${offer.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center transition-colors"
                  >
                    WhatsApp Brochure
                  </a>
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

        {/* Find Your Perfect Stay Interactive Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/90 shadow-md">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 block mb-1">
              Bespoke Booking Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900">
              Find Your Perfect Stay & Custom Itinerary
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Need assistance picking between our suites, planning corporate banquet catering, or arranging an extended corporate lodging agreement for your textile business? Our General Manager and reservation team on Sargodha Road are at your service.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Call Reception ({HOTEL_INFO.phoneDisplay})</span>
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Pearl City Hotel Faisalabad, I would like customized stay pricing for our family/corporate group.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Inquiry (03216561717)</span>
            </a>
          </div>
        </div>

        {/* FAQ Area (Validity, Booking, Cancellations, Inclusions) */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Package Information & Transparency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-slate-900">
              Frequently Asked Questions About Offers
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Clear answers regarding offer validity, reservation procedures, cancellations, and included amenities.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-medium text-sm text-slate-900 hover:text-amber-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-amber-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
