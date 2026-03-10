import { motion } from 'framer-motion';
import { JungleLeaf } from '../components/custom/JungleLeaf';
import { useLanguage } from '../contexts/LanguageContext';
import { heroConfig } from '../config';

export function HeroSection() {
  const { language, dir } = useLanguage();
  const config = heroConfig[language];

  // Null check for empty config
  if (!config.heroImage || !config.titleLine1 || !config.titleLine2) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const productVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FAEDCD] via-[#FEFAE0] to-[#FAEDCD]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(212, 163, 115, 0.2) 0%, transparent 40%),
                           radial-gradient(circle at 80% 70%, rgba(204, 213, 174, 0.25) 0%, transparent 40%)`,
        }} />
      </div>

      {/* Decorative Leaves */}
      {config.leafImages[0] && (
        <>
          <JungleLeaf
            src={config.leafImages[0]}
            position={{ x: dir === 'rtl' ? '85%' : '-5%', y: '10%' }}
            size={280}
            rotation={dir === 'rtl' ? 15 : -15}
            followMouse
            sway
            zIndex={5}
          />
          <JungleLeaf
            src={config.leafImages[0]}
            position={{ x: dir === 'rtl' ? '-5%' : '85%', y: '50%' }}
            size={200}
            rotation={dir === 'rtl' ? -45 : 45}
            followMouse
            zIndex={3}
          />
        </>
      )}
      {config.leafImages[1] && (
        <>
          <JungleLeaf
            src={config.leafImages[1]}
            position={{ x: dir === 'rtl' ? '5%' : '75%', y: '5%' }}
            size={320}
            rotation={dir === 'rtl' ? -25 : 25}
            followMouse
            sway
            zIndex={5}
          />
          <JungleLeaf
            src={config.leafImages[1]}
            position={{ x: dir === 'rtl' ? '75%' : '-8%', y: '55%' }}
            size={240}
            rotation={dir === 'rtl' ? 30 : -30}
            followMouse
            zIndex={3}
          />
        </>
      )}

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 xl:px-16 pt-20 lg:pt-0 gap-8 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className={`flex-1 text-center lg:text-${dir === 'rtl' ? 'right' : 'left'} max-w-xl`}>
          {/* Brand Name */}
          {config.subtitle && (
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-[#D4A373] text-sm tracking-[0.3em] uppercase font-medium">
                {config.subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-wide"
          >
            <span className="gold-gradient-text">{config.titleLine1}</span>
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide"
          >
            <span className="text-[#3D2914]">{config.titleLine2}</span>
          </motion.h1>

          {config.tagline && (
            <motion.p
              variants={itemVariants}
              className="text-[#3D2914]/70 text-lg md:text-xl mb-8 tracking-wider"
            >
              {config.tagline}
            </motion.p>
          )}

          {/* CTA Button */}
          {config.ctaText && (
            <motion.a
              href="#products"
              variants={itemVariants}
              className="inline-block argan-button text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.ctaText}
            </motion.a>
          )}
        </div>

        {/* Product Image */}
        <motion.div
          variants={productVariants}
          className="relative flex-shrink-0"
        >
          <motion.div
            className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#D4A373]/20 blur-3xl rounded-full scale-75" />

            <img
              src={config.heroImage}
              alt="Argan Oil Product"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
            />

            {/* Product Badge */}
            {config.chocolateText && (
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FEFAE0] border border-[#D4A373]/30 px-6 py-3 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <span className="text-[#D4A373] text-sm font-medium tracking-wider">{config.chocolateText}</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAEDCD] to-transparent z-20" />
    </section>
  );
}
