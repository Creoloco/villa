import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { Coffee } from 'lucide-react';

interface ApartmentSectionProps {
  imageUrl: string;
}

export function ApartmentSection({ imageUrl }: ApartmentSectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} id="apartment" className="bg-white py-20 md:py-40">
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
          {t.apartment.heading}
        </motion.h2>

        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Type */}
            <div className="border-b border-[#E5E5E5] pb-6">
              <p
                className="text-[#6E6E6E] mb-2"
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {t.apartment.typeLabel}
              </p>
              <p
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(19px, 4.5vw, 24px)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}
              >
                {t.apartment.typeValue}
              </p>
            </div>

            {/* Guests */}
            <div className="border-b border-[#E5E5E5] pb-6">
              <p
                className="text-[#6E6E6E] mb-2"
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {t.apartment.guestsLabel}
              </p>
              <p
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(19px, 4.5vw, 24px)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}
              >
                {t.apartment.guestsValue}
              </p>
            </div>

            {/* Layout */}
            <div className="border-b border-[#E5E5E5] pb-6">
              <p
                className="text-[#6E6E6E] mb-4"
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {t.apartment.layoutLabel}
              </p>
              <ul className="space-y-3">
                {t.apartment.layoutItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#1A1A1A] flex items-start"
                    style={{
                      fontSize: '16px',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.7,
                    }}
                  >
                    <span className="text-[#C9A96A] mr-3">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sleeping */}
            <div className="border-b border-[#E5E5E5] pb-6">
              <p
                className="text-[#6E6E6E] mb-3"
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {t.apartment.sleepingLabel}
              </p>
              <p
                className="text-[#1A1A1A]"
                style={{
                  fontSize: '16px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7,
                }}
              >
                {t.apartment.sleepingValue}
              </p>
            </div>

            {/* Kitchenette - Integrated */}
            <div className="bg-[#F5F3EF] p-8 border-l-4 border-[#C9A96A]">
              <div className="flex items-center gap-3 mb-4">
                <Coffee size={24} className="text-[#C9A96A]" strokeWidth={1.5} />
                <h3
                  className="text-[#1A1A1A]"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(17px, 4vw, 22px)',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                  }}
                >
                  {t.apartment.kitchenHeading}
                </h3>
              </div>
              <p
                className="text-[#6E6E6E]"
                style={{
                  fontSize: '16px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.8,
                }}
              >
                {t.apartment.kitchenText}
              </p>
            </div>

            {/* Important Notes */}
            <div className="bg-[#F5F3EF] p-6 mt-8">
              <p
                className="text-[#6E6E6E] mb-2"
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                {t.apartment.note}{' '}
                <span className="text-[#1A1A1A] font-normal">
                  {t.apartment.noteChildren}
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
