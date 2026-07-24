import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin } from 'lucide-react';
import villaWinterImage from '../../imports/Dom_przerobione.PNG';
import villaWinterMapBg from '../../imports/6139ECDD-7C44-4A3E-8EA5-076EECFFEF3B.PNG';

interface LocationSectionProps {
  imageUrl: string;
}

export function LocationSection({ imageUrl }: LocationSectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section ref={ref} id="location" className="bg-[#F5F3EF] py-20 md:py-40">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 items-start mb-20">
          {/* Left Column - Text (Enhanced Visibility) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-[#1A1A1A] mb-10"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(30px, 8vw, 56px)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                lineHeight: 1.2,
              }}
            >
              {t.location.heading}
            </h2>

            <p
              className="text-[#1A1A1A] mb-10"
              style={{
                fontSize: 'clamp(16px, 3.8vw, 20px)',
                fontWeight: 500,
                letterSpacing: '0.01em',
                lineHeight: 1.7,
              }}
            >
              {t.location.intro}
            </p>

            <ul className="space-y-4">
              {t.location.items.map((location, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="flex items-start bg-white p-4 hover:shadow-md transition-shadow duration-300"
                >
                  <span
                    className="text-[#C9A96A] mr-4 mt-1 flex-shrink-0"
                    style={{ fontSize: 'clamp(19px, 4.5vw, 24px)', fontWeight: 700 }}
                  >
                    •
                  </span>
                  <span
                    style={{
                      fontSize: '17px',
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      lineHeight: 1.6,
                      color: '#1A1A1A',
                    }}
                  >
                    {location}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Villa Winter Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[660px] overflow-hidden shadow-lg"
          >
            <img
              src={villaWinterImage}
              alt="Willa Jagiellonka - Winter"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Google Maps Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden shadow-xl"
          style={{ height: '500px' }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={villaWinterMapBg}
              alt="Willa Jagiellonka"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white/85" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 h-full grid grid-cols-3 gap-0">
            {/* Left - Address Info */}
            <div className="bg-white/90 p-10 flex flex-col justify-center border-r border-[#E5E5E5]">
              <div className="flex items-start gap-4 mb-6">
                <MapPin size={32} className="text-[#C9A96A] flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3
                    className="text-[#1A1A1A] mb-4"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(20px, 4.5vw, 28px)',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {t.location.mapHeading}
                  </h3>
                  <p
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(17px, 4vw, 22px)',
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                    }}
                  >
                    Willa Jagiellonka
                  </p>
                  <p
                    className="text-[#6E6E6E]"
                    style={{
                      fontSize: '17px',
                      fontWeight: 400,
                      letterSpacing: '0.01em',
                      lineHeight: 1.8,
                    }}
                  >
                    {t.footer.addressLine1}
                    <br />
                    {t.footer.addressLine2}
                    <br />
                    {t.footer.addressLine3}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Full Map Embed (2 columns) */}
            <div className="col-span-2 h-full">
              <iframe
                title="Willa Jagiellonka location map"
                src="https://maps.google.com/maps?q=Jagiello%C5%84ska+16,+34-500+Zakopane,+Poland&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
