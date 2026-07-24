import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroSectionProps {
  imageUrl: string;
}

export function HeroSection({ imageUrl }: HeroSectionProps) {
  const { t } = useLanguage();

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Tatra Mountains"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-[900px]"
        >
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(40px, 11vw, 90px)',
              fontWeight: 400,
              letterSpacing: '0.05em',
              lineHeight: 1.1,
            }}
          >
            {t.hero.title}
          </h1>

          <p
            className="text-white/90 mb-8"
            style={{
              fontSize: 'clamp(17px, 4vw, 22px)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              lineHeight: 1.6,
            }}
          >
            {t.hero.subtitle}
          </p>

          {/* Premium Introduction */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-8 rounded-sm">
            <p
              className="text-white/95"
              style={{
                fontSize: '16px',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: 1.9,
              }}
            >
              {t.hero.introduction}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.button>
    </section>
  );
}
