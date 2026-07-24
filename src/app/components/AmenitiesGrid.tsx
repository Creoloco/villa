import { motion } from 'motion/react';
import { Wifi, Tv, Bath, Coffee, Car, Map, CigaretteOff } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

export function AmenitiesGrid() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const amenityIcons = [Wifi, Tv, Bath, Coffee, Car, Map];

  return (
    <section ref={ref} className="bg-[#F5F3EF] py-20 md:py-40">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#1A1A1A] text-center mb-20"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 8vw, 56px)',
            fontWeight: 400,
            letterSpacing: '0.02em',
            lineHeight: 1.2,
          }}
        >
          {t.amenities.heading}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 mb-12">
          {t.amenities.items.map((label, index) => {
            const Icon = amenityIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="mx-auto mb-6 text-[#C9A96A]" size={40} strokeWidth={1} />
                <p
                  className="text-[#1A1A1A]"
                  style={{
                    fontSize: '16px',
                    fontWeight: 300,
                    letterSpacing: '0.02em',
                    lineHeight: 1.6,
                  }}
                >
                  {label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* No Smoking - Dedicated Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-[600px] mx-auto bg-white border-2 border-[#C9A96A] p-8 text-center"
        >
          <CigaretteOff className="mx-auto mb-4 text-[#C9A96A]" size={48} strokeWidth={1} />
          <h3
            className="text-[#1A1A1A] mb-3"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(19px, 4.5vw, 24px)',
              fontWeight: 400,
              letterSpacing: '0.02em',
            }}
          >
            {t.amenities.noSmoking.title}
          </h3>
          <p
            className="text-[#6E6E6E]"
            style={{
              fontSize: '16px',
              fontWeight: 300,
              letterSpacing: '0.01em',
              lineHeight: 1.7,
            }}
          >
            {t.amenities.noSmoking.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
