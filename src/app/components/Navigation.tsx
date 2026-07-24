import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // blokada przewijania strony, gdy menu mobilne jest otwarte
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
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

  const darkText = isScrolled || isMenuOpen;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-4 md:py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className={`text-sm tracking-[0.2em] uppercase transition-colors ${
            darkText ? 'text-[#1A1A1A]' : 'text-white'
          }`}
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Willa Jagiellonka
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile: przelacznik jezyka + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLanguage}
            className={`text-xs tracking-[0.15em] uppercase border px-3 py-1 transition-all duration-300 ${
              darkText
                ? 'border-[#C9A96A] text-[#C9A96A]'
                : 'border-white/70 text-white'
            }`}
            style={{ fontWeight: 400 }}
          >
            {language === 'pl' ? 'EN' : 'PL'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={darkText ? 'text-[#1A1A1A]' : 'text-white'}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - rozwijane */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-[#F0EDE7] overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-4 border-b border-[#F5F3EF] last:border-b-0 text-[#1A1A1A] text-sm tracking-[0.15em] uppercase active:text-[#C9A96A] transition-colors"
                  style={{ fontWeight: 300 }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
