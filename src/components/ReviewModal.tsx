import React, { useState } from 'react';
import { X, Star, CheckCircle2 } from 'lucide-react';
import { Review } from '../data/hotelData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('Faisalabad');
  const [stayType, setStayType] = useState('Deluxe Executive Room');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Verified Guest',
      location: location.trim() || 'Pakistan',
      rating,
      date: 'Just now',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      stayType,
      comment: comment.trim(),
      verified: true,
      platform: 'Direct'
    };

    onSubmitReview(newReview);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setName('');
      setComment('');
      setRole('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mb-4 animate-bounce" />
            <h3 className="text-2xl font-display font-medium text-slate-900 mb-2">
              Thank You for Your Review!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm">
              Your feedback helps us continuously deliver world-class hospitality at Pearl City Hotel Faisalabad.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Pearl City Guest Book
              </span>
              <h3 className="text-2xl font-display font-medium text-slate-900 mt-1">
                Share Your Stay Experience
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Your authentic review will be highlighted on our official guest testimonials board.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Overall Rating
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 text-slate-300 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">
                    {rating}.0 / 5.0
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Designation / Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Managing Director"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your City / Country
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Faisalabad, Lahore, UK"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Stay / Experience Category
                  </label>
                  <select
                    value={stayType}
                    onChange={(e) => setStayType(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    <option value="Deluxe Executive Room">Deluxe Executive Room</option>
                    <option value="Royal Presidential Suite">Royal Presidential Suite</option>
                    <option value="Family Interconnecting Suite">Family Interconnecting Suite</option>
                    <option value="Weekend Getaway Package">Weekend Getaway Package</option>
                    <option value="Corporate Executive Stay">Corporate Executive Stay</option>
                    <option value="Pearl Fine Dining Restaurant">Pearl Fine Dining Restaurant</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Review & Experience *
                </label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share details about the cleanliness, room comfort, hospitality, dining, or location on Sargodha Road..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors"
                >
                  Publish Verified Review
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
