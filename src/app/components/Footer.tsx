import { Mail, MapPin } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.apartment, id: 'apartment' },
    { label: t.nav.location, id: 'location' },
    { label: t.nav.reviews, id: 'reviews' },
    { label: t.nav.contact, id: 'contact' },
    { label: t.nav.booking, id: 'rezerwacja' },
  ];

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white py-20">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12 mb-16">
          {/* Brand & Address */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(19px, 4.5vw, 24px)',
                fontWeight: 400,
                letterSpacing: '0.05em',
              }}
            >
              {t.footer.brand}
            </h3>
            <p
              className="text-white/70 mb-6"
              style={{
                fontSize: '14px',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7,
              }}
            >
              {t.footer.tagline}
            </p>
            <div className="flex items-start gap-2 text-white/60">
              <MapPin
                size={16}
                className="mt-0.5 flex-shrink-0 text-[#C9A96A]"
                strokeWidth={1.5}
              />
              <div>
                <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7 }}>
                  {t.footer.addressLine1}
                </p>
                <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7 }}>
                  {t.footer.addressLine2}
                </p>
                <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7 }}>
                  {t.footer.addressLine3}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {t.footer.navigationLabel}
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 hover:text-white transition-colors"
                    style={{
                      fontSize: '14px',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {t.footer.locationLabel}
            </h4>
            <p
              className="text-white/70"
              style={{
                fontSize: '14px',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.9,
              }}
            >
              {t.footer.addressLine1}
              <br />
              {t.footer.addressLine2}
              <br />
              {t.footer.addressLine3}
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {t.footer.contactLabel}
            </h4>
            <p
              className="text-white/70 mb-1"
              style={{
                fontSize: '14px',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7,
              }}
            >
              {t.footer.phone}
            </p>
            <p
              className="text-white/70 mb-6"
              style={{
                fontSize: '14px',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7,
              }}
            >
              {t.footer.email}
            </p>

            {/* Social Media */}
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/p/Willa-Jagiellonka-Zakopane-100069121777656/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#C9A96A] transition-colors group"
              >
                <FaFacebookF size={18} />
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                  }}
                >
                  {t.footer.facebookLabel}
                </span>
              </a>
              <a
                href="mailto:jagiellonka16@op.pl"
                className="flex items-center gap-3 text-white/70 hover:text-[#C9A96A] transition-colors"
              >
                <Mail size={20} strokeWidth={1.5} />
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                  }}
                >
                  Email
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col gap-2 items-start md:flex-row md:items-center md:justify-between">
          <p
            className="text-white/50"
            style={{
              fontSize: '12px',
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
          >
            {t.footer.rights}
          </p>
          <p
            className="text-white/30"
            style={{
              fontSize: '12px',
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
          >
            {t.footer.addressLine1}, {t.footer.addressLine2}
          </p>
        </div>
      </div>
    </footer>
  );
}