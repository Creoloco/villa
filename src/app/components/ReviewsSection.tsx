import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

export function ReviewsSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'Lucy',
      country: 'UK',
      score: 10,
      text: 'A fantastic comfortable base for exploring Zakopane and the Tatras. Really welcoming host. Gave us lots of information for great walks and things to do in the area. Fantastic location for exploring the Tatras.',
    },
    {
      name: 'Jurgita',
      country: 'Lithuania',
      score: 10,
      text: 'Great location. The hostess was very helpful and ready to tell us about many places to visit.',
    },
    {
      name: 'Karolina',
      country: 'Poland',
      score: 10,
      text: 'Super lokalizacja, bardzo miła Pani właścicielka, czysty i przyjemny pokój. Polecam!',
    },
  ];

  return (
    <section ref={ref} id="reviews" className="bg-white py-20 md:py-40">
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
          {t.reviews.heading}
        </motion.h2>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F5F3EF] p-12 mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <span
              className="text-[#1A1A1A]"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '72px',
                fontWeight: 400,
              }}
            >
              9.2
            </span>
            <div>
              <p
                className="text-[#1A1A1A] mb-1"
                style={{
                  fontSize: 'clamp(19px, 4.5vw, 24px)',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                {t.reviews.overallLabel}
              </p>
              <p
                className="text-[#6E6E6E]"
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                }}
              >
                {t.reviews.reviewsCount}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mt-8">
            {t.reviews.categories.map((category, index) => (
              <div key={index} className="text-left">
                <p
                  className="text-[#6E6E6E] mb-2"
                  style={{
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                  }}
                >
                  {category.name}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#C9A96A] h-full"
                      style={{ width: `${category.score * 10}%` }}
                    />
                  </div>
                  <span
                    className="text-[#1A1A1A]"
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                    }}
                  >
                    {category.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Individual Reviews */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-[#F5F3EF] p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p
                    className="text-[#1A1A1A] mb-1"
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-[#6E6E6E]"
                    style={{
                      fontSize: '12px',
                      fontWeight: 300,
                    }}
                  >
                    {review.country}
                  </p>
                </div>
                <div className="bg-[#C9A96A] text-white px-3 py-1 rounded">
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>
                    {review.score}
                  </span>
                </div>
              </div>
              <p
                className="text-[#6E6E6E]"
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7,
                }}
              >
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-[#6E6E6E] mt-12"
          style={{
            fontSize: '12px',
            fontWeight: 300,
            letterSpacing: '0.05em',
            fontStyle: 'italic',
          }}
        >
          {t.reviews.authenticity}
        </motion.p>
      </div>
    </section>
  );
}
