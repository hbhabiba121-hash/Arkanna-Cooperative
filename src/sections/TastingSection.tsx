import { motion } from 'framer-motion';
import { Eye, Wind, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { tastingConfig } from '../config';

const iconMap = {
  eye: Eye,
  wind: Wind,
  sparkles: Sparkles,
};

export function TastingSection() {
  const { language, dir } = useLanguage();
  const config = tastingConfig[language];

  if (config.tastingCards.length === 0) {
    return null;
  }

  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-[#FAEDCD] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#CCD5AE]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A373]/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A373] text-sm font-medium uppercase tracking-wider">
            {config.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2914] font-display mt-3">
            {config.heading.map((line, i) => (
              <span key={i}>
                {line}
                {i === config.heading.length - 1 && (
                  <span className="text-[#D4A373]">{config.headingAccent}</span>
                )}
              </span>
            ))}
          </h2>
          <p className="text-[#3D2914]/70 mt-4 max-w-2xl mx-auto">
            {config.description}
          </p>
        </motion.div>

        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Benefit Cards */}
          <div className="flex-1 grid gap-6">
            {config.tastingCards.map((card, index) => {
              const Icon = iconMap[card.iconType];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#D4A373]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#3D2914] mb-2">{card.title}</h3>
                      <p className="text-[#3D2914]/70 mb-4">{card.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {card.notes.map((note, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#CCD5AE]/30 text-[#3D2914] text-sm rounded-full"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Composition Chart */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
              <h3 className="text-2xl font-bold text-[#3D2914] mb-2">{config.flavorWheel.title}</h3>
              <p className="text-[#3D2914]/70 mb-6">{config.flavorWheel.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {config.flavorWheel.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-[#FAEDCD] text-[#3D2914] text-sm font-medium rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {config.flavorWheel.bars.map((bar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-[#3D2914]">{bar.label}</span>
                      <span className="text-sm text-[#3D2914]/60">{bar.value}%</span>
                    </div>
                    <div className="h-3 bg-[#FAEDCD] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: bar.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
