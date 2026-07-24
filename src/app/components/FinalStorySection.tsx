import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

interface FinalStorySectionProps {
  imageUrl: string;
}

export function FinalStorySection({ imageUrl }: FinalStorySectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Mountain sunset"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p
            className="text-white mb-6 max-w-[800px] mx-auto"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(25px, 6vw, 42px)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 1.5,
            }}
          >
            {t.finalStory.quote}
          </p>
          <p
            className="text-white/80 mb-12"
            style={{
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {t.finalStory.since}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
