import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Mail, Phone, MessageSquare, Users, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

// Room 1 images - Living spaces, sitting areas, bathrooms
import room1_img1 from '../../imports/FF84AE4F-E727-4565-95C6-0B80ABFA7EFA-2.PNG';
import room1_img2 from '../../imports/54E0F057-DBE1-4850-B24A-F8A4806E0188.PNG';
import room1_img3 from '../../imports/EE1A476B-D9E0-459B-855E-BE595FA17C1C-2.PNG';
import room1_img4 from '../../imports/F26B843E-3B1A-4D69-89BD-98200F7BF7D7.PNG';
import room1_img5 from '../../imports/3DAAE42E-06EE-4AB9-8A14-8B348E2E82BB-1.jpg';

// Room 2 images - Bedrooms, amenities, bathrooms
import room2_img1 from '../../imports/73F46162-FD71-46B3-AA82-CE9D138F3B8C.PNG';
import room2_img2 from '../../imports/A40D1681-54ED-4638-9A34-9A6F944E6E95-1.PNG';
import room2_img3 from '../../imports/7A8D08B2-AF7B-480F-8FEC-13F021F884E6-1.PNG';
import room2_img4 from '../../imports/D912E2E5-4F81-4C03-B956-A4A822FEF80B-1.PNG';
import room2_img5 from '../../imports/8FF35214-12AF-4F7B-8B24-E5C60985FC1E.jpg';

interface BookingData {
  room: 'room1' | 'room2';
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

interface OccupiedDate {
  start: Date;
  end: Date;
}

export function BookingCalendar() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const [selectedRoom, setSelectedRoom] = useState<'room1' | 'room2'>('room1');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    room: 'room1',
    checkIn: null,
    checkOut: null,
    guests: 2,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const roomImages = {
    room1: [room1_img1, room1_img5, room1_img3, room1_img4, room1_img2],
    room2: [room2_img1, room2_img5, room2_img3, room2_img4, room2_img2],
  };

  const [occupiedDates, setOccupiedDates] = useState<{
    room1: OccupiedDate[];
    room2: OccupiedDate[];
  }>({ room1: [], room2: [] });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showConfirmation, setShowConfirmation] = useState(false);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
    for (let day = 1; day <= daysInMonth; day++) days.push(new Date(year, month, day));
    return days;
  };

  const isDateOccupied = (date: Date, room: 'room1' | 'room2') =>
    occupiedDates[room].some((o) => {
      const ms = date.getTime();
      return ms >= o.start.getTime() && ms <= o.end.getTime();
    });

  const isDateSelected = (date: Date) => {
    if (!bookingData.checkIn || !bookingData.checkOut) return false;
    const ms = date.getTime();
    return ms >= bookingData.checkIn.getTime() && ms <= bookingData.checkOut.getTime();
  };

  const isDateInPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (date: Date) => {
    if (isDateInPast(date) || isDateOccupied(date, selectedRoom)) return;
    if (!bookingData.checkIn || (bookingData.checkIn && bookingData.checkOut)) {
      setBookingData({ ...bookingData, checkIn: date, checkOut: null, room: selectedRoom });
    } else if (date > bookingData.checkIn) {
      const rangeOccupied = occupiedDates[selectedRoom].some(
        (o) =>
          (o.start >= bookingData.checkIn! && o.start <= date) ||
          (o.end >= bookingData.checkIn! && o.end <= date) ||
          (o.start <= bookingData.checkIn! && o.end >= date)
      );
      if (!rangeOccupied) setBookingData({ ...bookingData, checkOut: date });
    } else {
      setBookingData({ ...bookingData, checkIn: date, checkOut: null });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !bookingData.checkIn || !bookingData.checkOut ||
      !bookingData.firstName || !bookingData.lastName ||
      !bookingData.email || !bookingData.phone
    ) {
      alert('Proszę wypełnić wszystkie wymagane pola');
      return;
    }
    setOccupiedDates({
      ...occupiedDates,
      [selectedRoom]: [
        ...occupiedDates[selectedRoom],
        { start: bookingData.checkIn, end: bookingData.checkOut },
      ],
    });
    console.log('Reservation sent to: jagiellonka16@op.pl');
    setShowConfirmation(true);
    setBookingData({
      room: selectedRoom,
      checkIn: null,
      checkOut: null,
      guests: 2,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    });
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  const nextImage = () =>
    setCurrentImageIndex((prev) =>
      prev === roomImages[selectedRoom].length - 1 ? 0 : prev + 1
    );
  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? roomImages[selectedRoom].length - 1 : prev - 1
    );

  return (
    <section ref={ref} id="rezerwacja" className="bg-white py-40">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#1A1A1A] text-center mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '56px',
            fontWeight: 400,
            letterSpacing: '0.02em',
            lineHeight: 1.2,
          }}
        >
          {t.booking.heading}
        </motion.h2>

        {/* Pricing Notice - Premium Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-[800px] mx-auto mb-16 bg-gradient-to-br from-[#F5F3EF] to-[#FDFCFB] border-l-4 border-[#C9A96A] p-8 shadow-md"
        >
          <div className="flex gap-4">
            <Info size={24} className="text-[#C9A96A] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h3
                className="text-[#1A1A1A] mb-3"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                {t.booking.heading}
              </h3>
              <p
                className="text-[#1A1A1A]"
                style={{
                  fontSize: '15px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.9,
                }}
              >
                {t.booking.pricingNotice}
              </p>
            </div>
          </div>
        </motion.div>

        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-[#C9A96A]/10 border border-[#C9A96A] text-center"
          >
            <p className="text-[#1A1A1A]" style={{ fontSize: '18px', fontWeight: 300 }}>
              {t.booking.confirmation}
            </p>
          </motion.div>
        )}

        {/* Room Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative h-[500px] overflow-hidden bg-[#F5F3EF]">
            <img
              src={roomImages[selectedRoom][currentImageIndex]}
              alt={`${selectedRoom === 'room1' ? t.booking.room1 : t.booking.room2} - photo ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-8 left-8 bg-white/90 px-6 py-3">
              <p
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                {selectedRoom === 'room1' ? t.booking.room1 : t.booking.room2}
              </p>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} className="text-[#1A1A1A]" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight size={24} className="text-[#1A1A1A]" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {roomImages[selectedRoom].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-[#C9A96A] w-8' : 'bg-white/60 hover:bg-white w-2'
                  }`}
                  aria-label={`Photo ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 mt-4">
            {roomImages[selectedRoom].map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-video overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'border-[#C9A96A]'
                    : 'border-transparent hover:border-[#E5E5E5]'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-16">
          {/* Left - Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Room Selection */}
            <div className="mb-8 flex gap-4">
              {(['room1', 'room2'] as const).map((room) => (
                <button
                  key={room}
                  onClick={() => {
                    setSelectedRoom(room);
                    setCurrentImageIndex(0);
                    setBookingData({ ...bookingData, room, checkIn: null, checkOut: null });
                  }}
                  className={`flex-1 py-3 px-6 border transition-all duration-300 ${
                    selectedRoom === room
                      ? 'bg-[#C9A96A] text-white border-[#C9A96A]'
                      : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#C9A96A]'
                  }`}
                  style={{ fontSize: '16px', fontWeight: 300, letterSpacing: '0.02em' }}
                >
                  {room === 'room1' ? t.booking.room1 : t.booking.room2}
                </button>
              ))}
            </div>

            {/* Month Navigation */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="text-[#C9A96A] hover:text-[#1A1A1A] transition-colors text-2xl"
              >
                ‹
              </button>
              <h3
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                {t.booking.monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="text-[#C9A96A] hover:text-[#1A1A1A] transition-colors text-2xl"
              >
                ›
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="bg-[#F5F3EF] p-6">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {t.booking.dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center text-[#6E6E6E]"
                    style={{ fontSize: '14px', fontWeight: 300 }}
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {getDaysInMonth(currentMonth).map((date, index) => {
                  if (!date) return <div key={index} />;
                  const isOccupied = isDateOccupied(date, selectedRoom);
                  const isSelected = isDateSelected(date);
                  const isPast = isDateInPast(date);
                  const isDisabled = isPast || isOccupied;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateClick(date)}
                      disabled={isDisabled}
                      className={`
                        aspect-square flex items-center justify-center transition-all duration-200
                        ${isSelected ? 'bg-[#C9A96A] text-white' : ''}
                        ${isOccupied ? 'bg-[#E5E5E5] text-[#9E9E9E] cursor-not-allowed' : ''}
                        ${isPast && !isOccupied ? 'text-[#D0D0D0] cursor-not-allowed' : ''}
                        ${!isSelected && !isOccupied && !isPast ? 'bg-white hover:bg-[#C9A96A]/20 text-[#1A1A1A]' : ''}
                      `}
                      style={{ fontSize: '14px', fontWeight: 300 }}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-6 justify-center">
                {[
                  { color: 'bg-white border border-[#E5E5E5]', label: t.booking.available },
                  { color: 'bg-[#C9A96A]', label: t.booking.selected },
                  { color: 'bg-[#E5E5E5]', label: t.booking.occupied },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${color}`} />
                    <span className="text-[#6E6E6E]" style={{ fontSize: '12px', fontWeight: 300 }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Dates */}
              <div className="bg-[#F5F3EF] p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={20} className="text-[#C9A96A]" />
                  <span className="text-[#1A1A1A]" style={{ fontSize: '16px', fontWeight: 300 }}>
                    {t.booking.selectedDates}
                  </span>
                </div>
                <p className="text-[#6E6E6E]" style={{ fontSize: '14px', fontWeight: 300 }}>
                  {t.booking.checkIn}: {bookingData.checkIn ? bookingData.checkIn.toLocaleDateString('pl-PL') : '—'}
                </p>
                <p className="text-[#6E6E6E]" style={{ fontSize: '14px', fontWeight: 300 }}>
                  {t.booking.checkOut}: {bookingData.checkOut ? bookingData.checkOut.toLocaleDateString('pl-PL') : '—'}
                </p>
              </div>

              {/* Guests */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-[#1A1A1A]" style={{ fontSize: '16px', fontWeight: 300 }}>
                  <Users size={20} className="text-[#C9A96A]" />
                  {t.booking.guests}
                </label>
                <input
                  type="number"
                  min="1"
                  max="4"
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#C9A96A] outline-none transition-colors"
                  style={{ fontSize: '16px', fontWeight: 300 }}
                />
              </div>

              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 mb-2 text-[#1A1A1A]" style={{ fontSize: '16px', fontWeight: 300 }}>
                    <User size={20} className="text-[#C9A96A]" />
                    {t.booking.firstName}
                  </label>
                  <input
                    type="text"
                    value={bookingData.firstName}
                    onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#C9A96A] outline-none transition-colors"
                    style={{ fontSize: '16px', fontWeight: 300 }}
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 text-[#1A1A1A] block" style={{ fontSize: '16px', fontWeight: 300 }}>
                    {t.booking.lastName}
                  </label>
                  <input
                    type="text"
                    value={bookingData.lastName}
                    onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#C9A96A] outline-none transition-colors"
                    style={{ fontSize: '16px', fontWeight: 300 }}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-[#1A1A1A]" style={{ fontSize: '16px', fontWeight: 300 }}>
                  <Phone size={20} className="text-[#C9A96A]" />
                  {t.booking.phone}
                </label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#C9A96A] outline-none transition-colors"
                  style={{ fontSize: '16px', fontWeight: 300 }}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-[#1A1A1A]" style={{ fontSize: '16px', fontWeight: 300 }}>
                  <Mail size={20} className="text-[#C9A96A]" />
                  {t.booking.email}
                </label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#C9A96A] outline-none transition-colors"
                  style={{ fontSize: '16px', fontWeight: 300 }}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-[#1A1A1A]" style={{ fontSize: '16px', fontWeight: 300 }}>
                  <MessageSquare size={20} className="text-[#C9A96A]" />
                  {t.booking.message}
                </label>
                <textarea
                  value={bookingData.message}
                  onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#C9A96A] outline-none transition-colors resize-none"
                  style={{ fontSize: '16px', fontWeight: 300 }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-[#C9A96A] text-white hover:bg-[#1A1A1A] transition-all duration-300"
                style={{ fontSize: '16px', fontWeight: 300, letterSpacing: '0.1em' }}
              >
                {t.booking.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
