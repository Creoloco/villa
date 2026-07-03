import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.apartment, id: 'apartment' },
    { label: t.nav.location, id: 'location' },
    { label: t.nav.reviews, id: 'reviews' },
    { label: t.nav.contact, id: 'contact' },
    { label: t.nav.booking, id: 'rezerwacja' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1180px] mx-auto px-8 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className={`text-sm tracking-[0.2em] uppercase transition-colors ${
            isScrolled ? 'text-[#1A1A1A]' : 'text-white'
          }`}
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Willa Jagiellonka
        </button>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-70 ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
              style={{ fontWeight: 300 }}
            >
              {item.label}
            </button>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`text-xs tracking-[0.15em] uppercase border px-3 py-1 transition-all duration-300 hover:opacity-80 ${
              isScrolled
                ? 'border-[#C9A96A] text-[#C9A96A] hover:bg-[#C9A96A] hover:text-white'
                : 'border-white/70 text-white hover:bg-white hover:text-[#1A1A1A]'
            }`}
            style={{ fontWeight: 400 }}
          >
            {language === 'pl' ? 'EN' : 'PL'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
