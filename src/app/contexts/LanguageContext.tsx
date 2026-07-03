import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

export const translations = {
  pl: {
    // Navigation
    nav: {
      home: 'Strona główna',
      apartment: 'Apartament',
      location: 'Lokalizacja',
      reviews: 'Opinie',
      contact: 'Kontakt',
      booking: 'Rezerwacja',
    },

    // Hero Section
    hero: {
      title: 'Willa Jagiellonka',
      subtitle: 'Apartament w sercu Zakopanego',
      introduction: 'Komfortowa przestrzeń dla osób, które przyjeżdżają w Tatry po ruch, powietrze i widoki. To praktyczna baza wypadowa dla miłośników górskich wędrówek, aktywnego wypoczynku i naturalnego zakopiańskiego klimatu.',
    },

    // Editorial
    editorial: {
      title: 'Willa Jagiellonka',
      text: 'Obiekt położony jest w doskonałej lokalizacji, która pozwala w pełni cieszyć się urokami Podhala o każdej porze roku. To idealna baza wypadowa zarówno na letnie wędrówki po malowniczych tatrzańskich szlakach i dolinach, jak i zimowe wypady na najpopularniejsze stoki narciarskie w Zakopanem i okolicach. Bliskość przystanku busów (5 minut spacerem) zapewnia szybki i wygodny dojazd do największych atrakcji regionu, a zaledwie 250 metrów od obiektu znajduje się kameralny stok narciarski.',
    },

    // Location
    location: {
      heading: 'Lokalizacja',
      intro: 'Apartament znajduje się w ścisłym centrum Zakopanego:',
      mapHeading: 'Znajdź nas',
      items: [
        '300 metrów do dworca PKP i PKS',
        '100 metrów do Term Zakopiańskich',
        'kilka minut spacerem do Krupówek',
        'ok. 25 minut pieszo do Wielkiej Krokwi',
        '20 minut pieszo do stacji dolna Gubałówka',
        '5 minut spacerem do przystanku busów',
        '250 metrów do kameralnego stoku narciarskiego',
        '50 metrów do marketu Biedronka',
        '115 km od lotniska Kraków–Balice',
        'w pobliżu restauracja, bistro i karczma',
      ],
    },

    // Apartment
    apartment: {
      heading: 'Konfiguracja apartamentu',
      typeLabel: 'Typ',
      typeValue: 'Apartament prywatny',
      guestsLabel: 'Maksymalna liczba gości',
      guestsValue: '2 osoby dorosłe',
      layoutLabel: 'Układ',
      layoutItems: [
        '1 pokój główny (część sypialno-wypoczynkowa)',
        '1 prywatna łazienka (prysznic + oddzielna toaleta)',
        'mini aneks kuchenny z podstawowym wyposażeniem',
      ],
      sleepingLabel: 'Miejsca do spania',
      sleepingValue: '1 łóżko małżeńskie lub 2 łóżka pojedyncze',
      kitchenHeading: 'Mini aneks kuchenny',
      kitchenText: 'Każdy apartament posiada mini aneks kuchenny wyposażony w ekspres do kawy. Idealny do przygotowania śniadania, kawy lub prostych posiłków. W pobliżu dostępne są restauracje, bistro i karczma.',
      note: 'Przestrzeń jest kompaktowa, funkcjonalna i przeznaczona dla osób dorosłych.',
      noteChildren: 'W obiekcie nie mogą zostać zakwaterowane dzieci.',
    },

    // Amenities
    amenities: {
      heading: 'Udogodnienia',
      items: [
        'bezpłatne Wi-Fi',
        'TV',
        'prywatna łazienka',
        'aneks kuchenny',
        'bezpłatny parking',
        'mapy i przewodniki',
      ],
      noSmoking: {
        title: 'Zakaz palenia',
        description: 'Palenie dozwolone wyłącznie poza obiektem',
      },
    },

    // Kitchen
    kitchen: {
      heading: 'Aneks kuchenny',
      text1: 'Aneks wyposażony jest w podstawowe przybory kuchenne.',
      text2: 'Nie jest przystosowany do gotowania pełnych posiłków – sprawdzi się do przygotowania śniadania, kawy czy prostych przekąsek.',
      text3: 'W pobliżu restauracja, bistro i karczma oraz liczne lokale w centrum Zakopanego.',
    },

    // Guest Types
    guestTypes: {
      heading: 'Dla kogo to miejsce?',
      items: [
        'dla par',
        'dla osób podróżujących solo',
        'dla miłośników trekkingu',
        'dla miłośników sportów zimowych',
        'dla osób ceniących lokalizację w centrum',
      ],
    },

    // Booking
    booking: {
      heading: 'Kalendarz rezerwacji',
      pricingNotice: 'Ceny pobytów uzależnione są od długości rezerwacji oraz sezonu. Po dokonaniu wstępnej rezerwacji skontaktujemy się telefonicznie lub prześlemy szczegółowe informacje drogą mailową. Dodatkowo przy rezerwacji bezpośredniej oferujemy 5% rabatu.',
      room1: 'Pokój 1',
      room2: 'Pokój 2',
      selectedDates: 'Wybrane daty:',
      checkIn: 'Przyjazd',
      checkOut: 'Wyjazd',
      guests: 'Liczba osób',
      firstName: 'Imię',
      lastName: 'Nazwisko',
      phone: 'Numer telefonu',
      email: 'Adres e-mail',
      message: 'Wiadomość dodatkowa',
      submit: 'ZAREZERWUJ',
      available: 'dostępny',
      selected: 'wybrany',
      occupied: 'zajęty',
      confirmation: 'Dziękujemy. Twoja rezerwacja została wysłana. Skontaktujemy się w celu potwierdzenia.',
      monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
      dayNames: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'],
    },

    // Reviews
    reviews: {
      heading: 'Opinie Gości',
      overallLabel: 'Znakomicie',
      reviewsCount: '20 opinii',
      authenticity: 'Wszystkie opinie są weryfikowane pod kątem autentyczności.',
      categories: [
        { name: 'Obsługa', score: 9.5 },
        { name: 'Udogodnienia', score: 9.2 },
        { name: 'Czystość', score: 9.6 },
        { name: 'Komfort', score: 9.0 },
        { name: 'Stosunek ceny do jakości', score: 9.0 },
        { name: 'Lokalizacja', score: 10.0 },
        { name: 'Bezpłatne Wi-Fi', score: 7.5 },
      ],
    },

    // Final Story
    finalStory: {
      quote: 'To miejsce dla osób, które traktują Zakopane jako przestrzeń aktywności i natury — a apartament jako spokojną bazę po dniu w górach.',
      since: 'Od 1994',
    },

    // Footer
    footer: {
      brand: 'Willa Jagiellonka',
      tagline: 'Apartament w sercu Zakopanego',
      navigationLabel: 'Nawigacja',
      locationLabel: 'Adres',
      contactLabel: 'Kontakt',
      addressLine1: 'Jagiellońska 16',
      addressLine2: '34-500 Zakopane',
      addressLine3: 'Polska',
      phone: 'Tel: +48 695 445 652',
      email: 'jagiellonka16@op.pl',
      facebookLabel: 'Śledź nas na Facebooku',
      rights: '© 2026 Willa Jagiellonka. Wszelkie prawa zastrzeżone.',
    },
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      apartment: 'Apartment',
      location: 'Location',
      reviews: 'Reviews',
      contact: 'Contact',
      booking: 'Booking',
    },

    // Hero Section
    hero: {
      title: 'Willa Jagiellonka',
      subtitle: 'Apartment in the heart of Zakopane',
      introduction: 'A comfortable space for those who come to the Tatras for movement, fresh air, and views. A practical base for mountain hiking enthusiasts, active recreation, and the natural Zakopane atmosphere.',
    },

    // Editorial
    editorial: {
      title: 'Willa Jagiellonka',
      text: 'The property is located in an excellent location that allows you to fully enjoy the charms of the Podhale region at any time of year. It is the ideal base for summer hikes along picturesque Tatra trails and valleys, as well as winter excursions to the most popular ski slopes in Zakopane and the surrounding area. The proximity of the bus stop (5-minute walk) ensures quick and convenient access to the biggest attractions of the region, and only 250 meters from the property there is a small ski slope.',
    },

    // Location
    location: {
      heading: 'Location',
      intro: 'The apartment is located in the very center of Zakopane:',
      mapHeading: 'Find Us',
      items: [
        '300 meters to PKP and PKS train/bus station',
        '100 meters to Zakopane Thermal Baths',
        'a few minutes walk to Krupówki',
        'approx. 25 minutes walk to Wielka Krokiew',
        '20 minutes walk to Gubałówka lower station',
        '5 minutes walk to the bus stop',
        '250 meters to a small ski slope',
        '50 meters to Biedronka supermarket',
        '115 km from Kraków–Balice Airport',
        'nearby restaurant, bistro and traditional inn',
      ],
    },

    // Apartment
    apartment: {
      heading: 'Apartment Configuration',
      typeLabel: 'Type',
      typeValue: 'Private Apartment',
      guestsLabel: 'Maximum Guests',
      guestsValue: '2 adults',
      layoutLabel: 'Layout',
      layoutItems: [
        '1 main room (bedroom / living area)',
        '1 private bathroom (shower + separate toilet)',
        'mini kitchenette with basic equipment',
      ],
      sleepingLabel: 'Sleeping',
      sleepingValue: '1 double bed or 2 single beds',
      kitchenHeading: 'Mini kitchenette',
      kitchenText: 'Each apartment has a mini kitchenette equipped with a coffee maker. Perfect for preparing breakfast, coffee or simple meals. Restaurants, bistro and a traditional inn are nearby.',
      note: 'The space is compact, functional, and intended for adults.',
      noteChildren: 'Children cannot be accommodated in this property.',
    },

    // Amenities
    amenities: {
      heading: 'Amenities',
      items: [
        'free Wi-Fi',
        'TV',
        'private bathroom',
        'kitchenette',
        'free parking',
        'maps and guides',
      ],
      noSmoking: {
        title: 'No Smoking',
        description: 'Smoking permitted outside only',
      },
    },

    // Kitchen
    kitchen: {
      heading: 'Kitchenette',
      text1: 'The kitchenette is equipped with basic kitchen utensils.',
      text2: 'Not suitable for cooking full meals – ideal for preparing breakfast, coffee, or simple snacks.',
      text3: 'Nearby restaurants, bistro and traditional inn, as well as numerous venues in the center of Zakopane.',
    },

    // Guest Types
    guestTypes: {
      heading: 'Who is this place for?',
      items: [
        'for couples',
        'for solo travelers',
        'for trekking enthusiasts',
        'for winter sports lovers',
        'for those who value a central location',
      ],
    },

    // Booking
    booking: {
      heading: 'Booking Calendar',
      pricingNotice: 'Prices depend on the length of stay and the season. After making a preliminary reservation, we will contact you by phone or send detailed information by email. Additionally, we offer a 5% discount for direct bookings.',
      room1: 'Room 1',
      room2: 'Room 2',
      selectedDates: 'Selected dates:',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Number of guests',
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone number',
      email: 'Email address',
      message: 'Additional message',
      submit: 'BOOK NOW',
      available: 'available',
      selected: 'selected',
      occupied: 'occupied',
      confirmation: 'Thank you. Your reservation has been sent. We will contact you to confirm.',
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    },

    // Reviews
    reviews: {
      heading: 'Guest Reviews',
      overallLabel: 'Superb',
      reviewsCount: '20 reviews',
      authenticity: 'We moderate 100% of our reviews for authenticity.',
      categories: [
        { name: 'Staff', score: 9.5 },
        { name: 'Facilities', score: 9.2 },
        { name: 'Cleanliness', score: 9.6 },
        { name: 'Comfort', score: 9.0 },
        { name: 'Value for money', score: 9.0 },
        { name: 'Location', score: 10.0 },
        { name: 'Free WiFi', score: 7.5 },
      ],
    },

    // Final Story
    finalStory: {
      quote: 'This place is for those who treat Zakopane as a space for activity and nature — and the apartment as a peaceful base after a day in the mountains.',
      since: 'Since 1994',
    },

    // Footer
    footer: {
      brand: 'Willa Jagiellonka',
      tagline: 'Apartment in the heart of Zakopane',
      navigationLabel: 'Navigation',
      locationLabel: 'Address',
      contactLabel: 'Contact',
      addressLine1: 'Jagiellońska 16',
      addressLine2: '34-500 Zakopane',
      addressLine3: 'Poland',
      phone: 'Tel: +48 695 445 652',
      email: 'jagiellonka16@op.pl',
      facebookLabel: 'Follow us on Facebook',
      rights: '© 2026 Willa Jagiellonka. All rights reserved.',
    },
  },
};

export type TranslationKeys = typeof translations.pl;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pl' ? 'en' : 'pl'));
  };

  const t = translations[language] as TranslationKeys;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
