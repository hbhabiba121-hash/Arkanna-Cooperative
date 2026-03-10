import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { storyConfig } from '../config';

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const nonNumericSuffix = value.replace(/[0-9]/g, '');

  return (
    <span ref={ref}>
      {count}{nonNumericSuffix}{suffix}
    </span>
  );
}

export function StorySection() {
  const { language, dir } = useLanguage();
  const config = storyConfig[language];

  if (!config.storyImage || config.paragraphs.length === 0) {
    return null;
  }

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#FEFAE0] overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                src={config.storyImage}
                alt="Our Story"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2914]/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className={`absolute -bottom-6 ${dir === 'rtl' ? '-left-6' : '-right-6'} w-32 h-32 bg-[#D4A373]/20 rounded-full blur-2xl`} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4A373] text-sm font-medium uppercase tracking-wider"
            >
              {config.label}
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#3D2914] font-display mt-3 mb-6"
            >
              {config.heading.map((line, i) => (
                <span key={i}>
                  {line}{' '}
                  {i === config.heading.length - 1 && (
                    <span className="text-[#D4A373]">{config.headingAccent}</span>
                  )}
                  {i < config.heading.length - 1 && <br />}
                </span>
              ))}
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              {config.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-[#3D2914]/70 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            {config.stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-6"
              >
                {config.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#D4A373] font-display">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-sm text-[#3D2914]/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
