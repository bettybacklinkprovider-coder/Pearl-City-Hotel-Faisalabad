import React, { useState } from 'react';
import { X, Calendar, Users, Phone, User, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO, ROOMS, Room, SPECIAL_OFFERS, SpecialOffer } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: Room | null;
  initialOffer?: SpecialOffer | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoom,
  initialOffer,
}) => {
  const [selectedType, setSelectedType] = useState<'room' | 'package'>(initialOffer ? 'package' : 'room');
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoom?.id || ROOMS[0].id);
  const [selectedOfferId, setSelectedOfferId] = useState<string>(initialOffer?.id || SPECIAL_OFFERS[0].id);
  const [checkIn, setCheckIn] = useState<string>('2026-10-24');
  const [checkOut, setCheckOut] = useState<string>('2026-10-26');
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!isOpen) return null;

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(checkOutDate.getTime() - checkInDate.getTime(), 1000 * 3600 * 24);
  const nights = Math.max(1, Math.round(diffTime / (1000 * 3600 * 24)));

  const currentRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];
  const currentOffer = SPECIAL_OFFERS.find(o => o.id === selectedOfferId) || SPECIAL_OFFERS[0];

  const estimatedTotal = selectedType === 'room'
    ? currentRoom.pricePKR * nights
    : currentOffer.discountedPricePKR;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) return;

    const message = selectedType === 'room'
      ? `Hello Pearl City Mall Faisalabad! I would like to inquire about / reserve:\n🏬 Store / Wing: ${currentRoom.name}\n📅 Preferred Visit Date: ${checkIn}\n👥 Visitors: ${guests}\n👤 Name: ${guestName}\n📱 Phone: ${guestPhone}\n💰 Reference Rate / Budget: PKR ${estimatedTotal.toLocaleString()}\n📝 Special Requests / Inquiries: ${specialRequests || 'None'}\n\nPlease confirm availability and details. Thank you!`
      : `Hello Pearl City Mall Faisalabad! I want to book the special package / voucher:\n🎁 Offer: ${currentOffer.title} (${currentOffer.code})\n📅 Date: ${checkIn}\n👥 Visitors: ${guests}\n👤 Name: ${guestName}\n📱 Phone: ${guestPhone}\n💰 Package Price: PKR ${estimatedTotal.toLocaleString()}\n📝 Requests: ${specialRequests || 'None'}\n\nPlease confirm my package reservation. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleInstantOnlineBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) return;
    const refId = `PC-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBookingId(refId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-5 sm:p-7 shadow-2xl relative border border-slate-200 my-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBookingId ? (
          <div className="py-8 flex flex-col items-center text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mb-3 animate-bounce" />
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Reservation Confirmed
            </span>
            <h3 className="text-2xl font-display font-medium text-slate-900 mt-1 mb-2">
              Booking Ref: {confirmedBookingId}
            </h3>
            <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
              Thank you, <strong className="text-slate-900">{guestName}</strong>! Your provisional booking for{' '}
              <strong className="text-slate-900">
                {selectedType === 'room' ? currentRoom.name : currentOffer.title}
              </strong>{' '}
              has been logged. Our front desk concierge at Sargodha Rd, Faisalabad will contact you on{' '}
              <strong className="text-slate-900">{guestPhone}</strong> to assist with payment and complimentary check-in details.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full max-w-md text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between text-slate-600">
                <span>Check-in:</span>
                <span className="font-semibold text-slate-900">{checkIn} (from 2:00 PM)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Check-out:</span>
                <span className="font-semibold text-slate-900">{checkOut} (12:00 PM)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Duration:</span>
                <span className="font-semibold text-slate-900">{nights} Night(s)</span>
              </div>
              <div className="flex justify-between text-slate-600 pt-2 border-t border-slate-200">
                <span className="font-bold text-slate-900">Estimated Total:</span>
                <span className="font-bold text-amber-700 text-sm">PKR {estimatedTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Pearl City Hotel, my reservation ID is ${confirmedBookingId} for ${guestName}. Could you confirm my booking status?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Verify on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Pearl City Hotel & Suites Faisalabad
              </span>
              <h3 className="text-2xl font-display font-medium text-slate-900 mt-0.5">
                Reserve Your Stay
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Best Rate Guarantee · Sargodha Rd, Canal Block Shadman · Call/WhatsApp 03216561717
              </p>
            </div>

            {/* Selection Mode Switch */}
            <div className="flex p-1 bg-slate-100 rounded-lg mb-4">
              <button
                type="button"
                onClick={() => setSelectedType('room')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedType === 'room'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Select Room / Suite
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('package')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedType === 'package'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Special Offer Package
              </button>
            </div>

            <form className="space-y-3.5">
              {/* Category Dropdown */}
              {selectedType === 'room' ? (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Room Type
                  </label>
                  <select
                    value={selectedRoomId}
                    onChange={(e) => setSelectedRoomId(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    {ROOMS.map(room => (
                      <option key={room.id} value={room.id}>
                        {room.name} — PKR {room.pricePKR.toLocaleString()} / night ({room.bedType})
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Exclusive Package
                  </label>
                  <select
                    value={selectedOfferId}
                    onChange={(e) => setSelectedOfferId(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    {SPECIAL_OFFERS.map(offer => (
                      <option key={offer.id} value={offer.id}>
                        {offer.title} — PKR {offer.discountedPricePKR.toLocaleString()} ({offer.discountPercent}% Off)
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Check-in</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Check-out</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Guests</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests (Family)</option>
                    <option value={5}>5+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Guest Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mian Tariq"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Phone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0321 6561717"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. High floor canal view, airport pickup, late arrival..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              {/* Price Calculation Box */}
              <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-3 flex items-center justify-between">
                <div>
                  <span className="text-xs text-amber-900 block font-medium">
                    {selectedType === 'room' ? `${nights} Night(s) Stay` : 'Package Total Rate'}
                  </span>
                  <span className="text-[11px] text-amber-700">
                    Includes taxes, Wi-Fi & complimentary breakfast
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 line-through mr-1.5">
                    {selectedType === 'package' ? `PKR ${currentOffer.originalPricePKR.toLocaleString()}` : ''}
                  </span>
                  <span className="text-lg font-bold text-slate-950 font-display">
                    PKR {estimatedTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp (03216561717)</span>
                </button>
                <button
                  type="button"
                  onClick={handleInstantOnlineBooking}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
                >
                  Confirm Instant Booking
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>No cancellation fee up to 48 hours prior · Pay at hotel option available</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
