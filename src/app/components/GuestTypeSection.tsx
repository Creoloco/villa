import { motion } from 'motion/react';
import { Heart, User, Mountain, Snowflake, MapPin } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Heart, User, Mountain, Snowflake, MapPin];

export function GuestTypeSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-[#F5F3EF] py-40">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#1A1A1A] text-center mb-20"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '56px',
            fontWeight: 400,
            letterSpacing: '0.02em',
            lineHeight: 1.2,
          }}
        >
          {t.guestTypes.heading}
        </motion.h2>

        <div className="grid grid-cols-3 gap-8">
          {t.guestTypes.items.map((label, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center border border-[#E5E5E5] hover:border-[#C9A96A] transition-all duration-300"
              >
                <Icon className="mx-auto mb-4 text-[#C9A96A]" size={32} strokeWidth={1.5} />
                <p
                  className="text-[#1A1A1A]"
                  style={{
                    fontSize: '15px',
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
      </div>
    </section>
  );
}
