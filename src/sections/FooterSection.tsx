import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { footerConfig } from '../config';

const socialIconMap = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
};

export function FooterSection() {
  const { language, dir } = useLanguage();
  const config = footerConfig[language];

  if (!config.brandName) return null;

  return (
    <footer id="contact" className="relative bg-[#3D2914] text-white overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A373]/50 to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold font-display mb-1">{config.brandName}</h3>
            <p className="text-[#D4A373] text-lg mb-4">{config.brandTagline}</p>
            <p className="text-white/70 text-sm leading-relaxed mb-6">{config.brandDescription}</p>

            {/* Social Links */}
            <div className={`flex gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              {config.socialLinks.map((link, index) => {
                const Icon = socialIconMap[link.platform];
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">{config.navSectionTitle}</h4>
            <ul className="space-y-3">
              {config.navLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-white/70 hover:text-[#D4A373] transition-colors inline-flex items-center gap-2"
                    whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">{config.contactSectionTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm whitespace-pre-line">{config.contactAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4A373]" />
                <a
                  href={`tel:${config.contactPhone}`}
                  className="text-white/70 hover:text-[#D4A373] transition-colors text-sm"
                >
                  {config.contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4A373]" />
                <a
                  href={`mailto:${config.contactEmail}`}
                  className="text-white/70 hover:text-[#D4A373] transition-colors text-sm"
                >
                  {config.contactEmail}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-2">{config.newsletterTitle}</h4>
            <p className="text-white/70 text-sm mb-4">{config.newsletterDescription}</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={config.newsletterPlaceholder}
                className="flex-1 px-4 py-3 bg-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4A373] text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 bg-[#D4A373] rounded-lg hover:bg-[#C49365] transition-colors"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>

            {/* Left Side */}
            <div className="text-center md:text-left">
              <p className="text-white/50 text-sm">{config.copyright}</p>
              <p className="text-white/40 text-xs mt-1">
                {config.developerCredit}
              </p>
            </div>

            {/* Policy Links */}
            <div className={`flex gap-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              {config.policyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/50 hover:text-[#D4A373] text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}