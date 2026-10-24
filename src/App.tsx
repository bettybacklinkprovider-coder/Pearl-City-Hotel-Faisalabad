/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, ActivePage } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { RoomModal } from './components/RoomModal';
import { ReviewModal } from './components/ReviewModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { OffersPage } from './pages/OffersPage';
import { ContactPage } from './pages/ContactPage';
import { Room, SpecialOffer, Review, TESTIMONIALS } from './data/hotelData';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [reviews, setReviews] = useState<Review[]>(TESTIMONIALS);

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingRoom, setSelectedBookingRoom] = useState<Room | null>(null);
  const [selectedBookingOffer, setSelectedBookingOffer] = useState<SpecialOffer | null>(null);

  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Navigation handler
  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open booking with optional room
  const handleOpenBookingWithRoom = (room?: Room) => {
    setSelectedBookingRoom(room || null);
    setSelectedBookingOffer(null);
    setIsBookingOpen(true);
  };

  // Open booking with optional package offer
  const handleOpenBookingWithOffer = (offer?: SpecialOffer) => {
    setSelectedBookingOffer(offer || null);
    setSelectedBookingRoom(null);
    setIsBookingOpen(true);
  };

  // Open Room 360 / Details modal
  const handleOpenRoomModal = (room: Room) => {
    setActiveModalRoom(room);
    setIsRoomModalOpen(true);
  };

  // Submit new verified review
  const handleAddReview = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fbfbf9] text-slate-800 font-sans selection:bg-amber-200 selection:text-slate-900">
      {/* Universal Top Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithRoom()}
      />

      {/* Main Multi-Page Routed View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
            onOpenBookingWithOffer={handleOpenBookingWithOffer}
            onOpenRoomModal={handleOpenRoomModal}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
            reviews={reviews}
          />
        )}

        {activePage === 'rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBookingWithRoom}
            onOpenRoomModal={handleOpenRoomModal}
          />
        )}

        {activePage === 'offers' && (
          <OffersPage
            onOpenBookingWithOffer={handleOpenBookingWithOffer}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
            reviews={reviews}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithRoom()}
      />

      {/* Floating 24/7 WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* Booking & Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoom={selectedBookingRoom}
        initialOffer={selectedBookingOffer}
      />

      {/* Room Details & Inclusions Modal */}
      <RoomModal
        room={activeModalRoom}
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
        onBookRoom={(room) => handleOpenBookingWithRoom(room)}
      />

      {/* Guest Reviews & Ratings Submission Modal */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
