import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

interface EditorialIntroProps {
  imageUrl: string;
}

export function EditorialIntro({ imageUrl }: EditorialIntroProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} id="home" className="bg-white py-20 md:py-40">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-[#1A1A1A] mb-8"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(30px, 8vw, 56px)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                lineHeight: 1.2,
              }}
            >
              {t.editorial.title}
            </h2>
            <p
              className="text-[#6E6E6E] leading-relaxed"
              style={{
                fontSize: '18px',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.8,
              }}
            >
              {t.editorial.text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[380px] sm:h-[500px] md:h-[700px] overflow-hidden"
          >
            <img
              src={imageUrl}
              alt="Mountain view"
              className="w-full h-full object-cover object-bottom md:object-center opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
