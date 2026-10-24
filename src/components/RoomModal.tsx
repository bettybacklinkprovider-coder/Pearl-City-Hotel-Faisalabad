import React from 'react';
import { X, Check, BedDouble, Maximize2, Users, Eye, MessageCircle } from 'lucide-react';
import { Room, HOTEL_INFO } from '../data/hotelData';

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onBookRoom: (room: Room) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({
  room,
  isOpen,
  onClose,
  onBookRoom,
}) => {
  if (!isOpen || !room) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Pearl City Shopping Mall Faisalabad, I am inquiring about ${room.name}. Can you provide more details, store timings, and current promotions?`
    );
    window.open(`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-slate-200 my-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-xs transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room Visual */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900">
          <img
            src={room.image}
            alt={room.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
              Pearl City Mall · Faisalabad
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
              {room.name}
            </h3>
            <p className="text-xs text-slate-200 mt-1 line-clamp-1">
              {room.tagline}
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* Key metrics grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 mb-5">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-amber-700 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block">Space</span>
                <span className="text-xs font-semibold text-slate-800">{room.sizeSqFt} sq. ft.</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BedDouble className="w-4 h-4 text-amber-700 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block">Bedding</span>
                <span className="text-xs font-semibold text-slate-800 truncate">{room.bedType}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-700 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block">Capacity</span>
                <span className="text-xs font-semibold text-slate-800">{room.occupancy}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-700 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block">Vistas</span>
                <span className="text-xs font-semibold text-slate-800 truncate">{room.view}</span>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2">
              Room Overview & Atmosphere
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {room.description}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2.5">
              Included Premium In-Room Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-emerald-700" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-slate-500 block">Starting from</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-display text-slate-900">
                  PKR {room.pricePKR.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500">/ night</span>
                <span className="text-xs text-slate-400">· (${room.priceUSD} USD)</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp 03216561717</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookRoom(room);
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors whitespace-nowrap"
              >
                Book This Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
