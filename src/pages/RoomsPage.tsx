import React, { useState } from 'react';
import { 
  BedDouble, Maximize2, Users, Eye, Check, ShieldCheck, 
  MessageCircle, Phone, ArrowRight, Sparkles, Filter 
} from 'lucide-react';
import { ROOMS, Room, HOTEL_INFO } from '../data/hotelData';

interface RoomsPageProps {
  onOpenBooking: (room?: Room) => void;
  onOpenRoomModal: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onOpenBooking,
  onOpenRoomModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc'>('recommended');

  const filteredRooms = ROOMS.filter(room => {
    if (selectedCategory === 'all') return true;
    return room.category === selectedCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.pricePKR - b.pricePKR;
    if (sortBy === 'price-desc') return b.pricePKR - a.pricePKR;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#fbfbf9] pb-24">
      {/* Page Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ROOMS[0].image}
            alt="Pearl City Shopping Mall Interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
              Pearl City Shopping Mall Faisalabad
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              Mall Directory, Wings & Flagship Stores
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Explore our complete collection of shopping wings, designer lawn boutiques, Al-Rizq Mega Supermarket, flagship tech showrooms, and food court dining on Sargodha Road.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Filter Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6">
        {/* Filter & Sort Bar */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-amber-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-50'
              }`}
            >
              All Mall Categories ({ROOMS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('deluxe')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'deluxe'
                  ? 'bg-slate-900 text-amber-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-50'
              }`}
            >
              Fashion & Boutiques
            </button>
            <button
              onClick={() => setSelectedCategory('presidential')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'presidential'
                  ? 'bg-slate-900 text-amber-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-50'
              }`}
            >
              Grand Atrium
            </button>
            <button
              onClick={() => setSelectedCategory('family')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'family'
                  ? 'bg-slate-900 text-amber-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-50'
              }`}
            >
              Al-Rizq Supermarket
            </button>
            <button
              onClick={() => setSelectedCategory('suite')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'suite'
                  ? 'bg-slate-900 text-amber-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-50'
              }`}
            >
              Tech Hub & Food Court
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs text-slate-500 whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-medium border border-slate-200 rounded-lg px-2.5 py-1.5 bg-slate-50 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Room Catalog List */}
        <div className="space-y-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image side (5 cols) */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] bg-slate-900">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-amber-400 px-3 py-1 rounded-md text-xs font-semibold">
                  {room.bedType}
                </div>
                {room.popular && (
                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-wider shadow-sm">
                    Most Booked
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] bg-black/40 backdrop-blur-xs p-2 rounded-lg">
                  <span>{room.sizeSqFt} sq. ft.</span>
                  <span>·</span>
                  <span>{room.occupancy}</span>
                  <span>·</span>
                  <span className="truncate">{room.view}</span>
                </div>
              </div>

              {/* Information & Features side (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                      Canal Block Shadman · Faisalabad
                    </span>
                    <div className="flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Best Rate Guarantee</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-medium text-slate-900 mb-1">
                    {room.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {room.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] text-slate-400 block uppercase">Area</span>
                      <span className="text-xs font-semibold text-slate-800">{room.sizeSqFt} sq ft</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] text-slate-400 block uppercase">Bed</span>
                      <span className="text-xs font-semibold text-slate-800 truncate block">{room.bedType}</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] text-slate-400 block uppercase">Capacity</span>
                      <span className="text-xs font-semibold text-slate-800">{room.occupancy}</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] text-slate-400 block uppercase">View</span>
                      <span className="text-xs font-semibold text-slate-800 truncate block">{room.view}</span>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-1 mb-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 block mb-1">
                      Included With This Room:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {room.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Pricing & Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Nightly Rate</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold font-display text-slate-950">
                        PKR {room.pricePKR.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500">/ night</span>
                      <span className="text-xs text-slate-400">· (${room.priceUSD} USD)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenRoomModal(room)}
                      className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                    >
                      View Details
                    </button>
                    <a
                      href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Pearl City Hotel Faisalabad, I want to book the "${room.name}" at PKR ${room.pricePKR.toLocaleString()} / night. Please check availability.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                      title="Book via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => onOpenBooking(room)}
                      className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Reserve Room
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Concierge Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold block mb-1">
              Direct Reservation Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
              Prefer to book over the phone or WhatsApp?
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
              Our 24/7 reception desk on Sargodha Road provides personalized rate quotes, flexible corporate invoicing, and immediate check-in arrangement.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call {HOTEL_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-slate-950" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
