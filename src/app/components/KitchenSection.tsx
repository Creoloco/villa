import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

interface KitchenSectionProps {
  imageUrl: string;
}

export function KitchenSection({ imageUrl }: KitchenSectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-[700px] mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-[#1A1A1A] mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(26px, 6.5vw, 44px)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 1.2,
            }}
          >
            {t.kitchen.heading}
          </h2>
          <p
            className="text-[#6E6E6E] mb-4 leading-relaxed"
            style={{
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '0.01em',
              lineHeight: 1.8,
            }}
          >
            {t.kitchen.text1}
          </p>
          <p
            className="text-[#6E6E6E] mb-4 leading-relaxed"
            style={{
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '0.01em',
              lineHeight: 1.8,
            }}
          >
            {t.kitchen.text2}
          </p>
          <p
            className="text-[#6E6E6E] leading-relaxed"
            style={{
              fontSize: '16px',
              fontWeight: 300,
              letterSpacing: '0.01em',
              lineHeight: 1.7,
            }}
          >
            {t.kitchen.text3}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
