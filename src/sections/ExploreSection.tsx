import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TreePine, PawPrint, Flower2, Bird } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { exploreConfig, type HotspotConfig } from '../config';

const iconMap = {
  bird: Bird,
  pawprint: PawPrint,
  treepine: TreePine,
  flower: Flower2,
};

function HotspotMarker({ hotspot, onClick }: { hotspot: HotspotConfig; onClick: () => void }) {
  const Icon = iconMap[hotspot.iconType];

  return (
    <motion.button
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#D4A373] pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-[#D4A373] pulse-ring animation-delay-400" />

      {/* Marker */}
      <div className="relative w-12 h-12 rounded-full bg-[#D4A373] flex items-center justify-center shadow-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
    </motion.button>
  );
}

function HotspotModal({ hotspot, isOpen, onClose }: { hotspot: HotspotConfig; isOpen: boolean; onClose: () => void }) {
  const Icon = iconMap[hotspot.iconType];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="absolute inset-x-4 bottom-4 md:inset-auto md:bottom-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-[#FEFAE0] rounded-2xl p-6 shadow-2xl max-w-sm z-20"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-[#D4A373]/10 transition-colors"
          >
            <X className="w-5 h-5 text-[#3D2914]" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#FAEDCD]">
              <img src={hotspot.image} alt={hotspot.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-[#D4A373]" />
                <h3 className="font-bold text-[#3D2914]">{hotspot.title}</h3>
              </div>
              <p className="text-sm text-[#3D2914]/70">{hotspot.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ExploreSection() {
  const { language } = useLanguage();
  const config = exploreConfig[language];
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  if (!config.exploreImage || config.hotspots.length === 0) {
    return null;
  }

  const activeHotspotData = config.hotspots.find((h) => h.id === activeHotspot);

  return (
    <section className="relative py-24 md:py-32 bg-[#FEFAE0] overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#D4A373] text-sm font-medium uppercase tracking-wider">
            {config.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2914] font-display mt-3">
            {config.heading.map((line, i) => (
              <span key={i}>
                {line}{' '}
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

        {/* Interactive Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] max-w-5xl mx-auto"
        >
          <img
            src={config.exploreImage}
            alt="Production Process"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D2914]/40 via-transparent to-transparent" />

          {/* Hotspots */}
          {config.hotspots.map((hotspot) => (
            <HotspotMarker
              key={hotspot.id}
              hotspot={hotspot}
              onClick={() => setActiveHotspot(hotspot.id)}
            />
          ))}

          {/* Active Hotspot Modal */}
          {activeHotspotData && (
            <HotspotModal
              hotspot={activeHotspotData}
              isOpen={!!activeHotspot}
              onClose={() => setActiveHotspot(null)}
            />
          )}

          {/* Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm text-[#3D2914]/70"
          >
            {config.hint}
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {config.hotspots.map((hotspot, index) => {
            const Icon = iconMap[hotspot.iconType];
            return (
              <motion.div
                key={hotspot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4A373]/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-[#D4A373]" />
                </div>
                <h4 className="font-medium text-[#3D2914] mb-1">{hotspot.title}</h4>
                <p className="text-xs text-[#3D2914]/60 line-clamp-2">{hotspot.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
