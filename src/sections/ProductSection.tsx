import { motion } from 'framer-motion';
import { Check, ShoppingCart, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { productConfig } from '../config';

export function ProductSection() {
  const { language, dir } = useLanguage();
  const { addItem, setIsCartOpen } = useCart();
  const config = productConfig[language];

  if (!config.productImage || !config.productTitle) {
    return null;
  }

  const handleAddToCart = () => {
    addItem({
      id: 'featured-product',
      name: config.productTitle,
      price: parseInt(config.price.replace(/\D/g, '')),
      image: config.productImage,
      size: config.specs,
    });
    setIsCartOpen(true);
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#FAEDCD] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#CCD5AE]/20 to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <motion.div
              className="relative aspect-[3/4] max-w-md mx-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[#D4A373]/20 blur-3xl rounded-full scale-90" />

              <img
                src={config.productImage}
                alt={config.productTitle}
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />

              {/* Price Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className={`absolute -bottom-4 ${dir === 'rtl' ? '-left-4' : '-right-4'} bg-[#D4A373] text-white px-6 py-4 rounded-2xl shadow-xl`}
              >
                <div className="text-sm opacity-80">{config.priceLabel}</div>
                <div className="text-2xl font-bold">{config.price}</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            {/* Label */}
            <span className="text-[#D4A373] text-sm font-medium uppercase tracking-wider">
              {config.label}
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2914] font-display mt-3 mb-4">
              {config.heading.map((line, i) => (
                <span key={i}>
                  {line}{' '}
                  {i === config.heading.length - 1 && (
                    <span className="text-[#D4A373]">{config.headingAccent}</span>
                  )}
                </span>
              ))}
            </h2>

            {/* Product Title */}
            <h3 className="text-xl font-medium text-[#3D2914] mb-4">
              {config.productTitle}
            </h3>

            {/* Description */}
            <p className="text-[#3D2914]/70 leading-relaxed mb-6">
              {config.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {config.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-[#CCD5AE] flex-shrink-0" />
                  <span className="text-sm text-[#3D2914]/70">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Specs */}
            <div className="flex items-center gap-6 mb-8 text-sm">
              <div>
                <span className="text-[#3D2914]/50">{config.specsLabel}: </span>
                <span className="text-[#3D2914] font-medium">{config.specs}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="argan-button flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                {config.ctaPrimary}
              </motion.button>
              <motion.a
                href="#products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="argan-button-outline flex items-center gap-2"
              >
                {config.ctaSecondary}
                <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
