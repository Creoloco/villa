import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { EditorialIntro } from './components/EditorialIntro';
import { LocationSection } from './components/LocationSection';
import { ApartmentSection } from './components/ApartmentSection';
import { AmenitiesGrid } from './components/AmenitiesGrid';
import { GuestTypeSection } from './components/GuestTypeSection';
import { BookingCalendar } from './components/BookingCalendar';
import { ReviewsSection } from './components/ReviewsSection';
import { FinalStorySection } from './components/FinalStorySection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
      
      <HeroSection 
        imageUrl="https://images.unsplash.com/photo-1665939858489-897d566b6650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYXRyYSUyMG1vdW50YWlucyUyMFpha29wYW5lJTIwcGFub3JhbWF8ZW58MXx8fHwxNzczMDU4NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />
      
      <EditorialIntro 
        imageUrl="https://images.unsplash.com/photo-1768931676483-f22777872c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxaYWtvcGFuZSUyMG1vdW50YWluJTIwdmlsbGFnZSUyMHdpbnRlcnxlbnwxfHx8fDE3NzMwNTg0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
      
      <LocationSection 
        imageUrl="https://images.unsplash.com/photo-1631016546449-939470fc14d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxaYWtvcGFuZSUyMHN0cmVldCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMwNTg0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
      
      <ApartmentSection 
        imageUrl="https://images.unsplash.com/photo-1758957530781-4ff54e09bee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb3VudGFpbiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDF8fHx8MTc3MzA1ODQ4OXww&ixlib=rb-4.1.0&q=80&w=1080"
      />
      
      <AmenitiesGrid />

      <GuestTypeSection />

      <BookingCalendar />

      <ReviewsSection />
      
      <FinalStorySection 
        imageUrl="https://images.unsplash.com/photo-1759911920879-d48d4394e7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBpbmUlMjBzdW5zZXQlMjBtb3VudGFpbnMlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzMwNTg0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

        <Footer />
      </div>
    </LanguageProvider>
  );
}
