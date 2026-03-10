import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Product } from '../../config';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addItem, setIsCartOpen } = useCart();
  const { language, t } = useLanguage();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size,
    });
    onClose();
    setIsCartOpen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-[#FEFAE0] rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="h-full overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto md:h-full bg-[#FAEDCD]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors md:hidden"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col">
                  {/* Close Button (Desktop) */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors hidden md:flex"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#3D2914] font-display mb-2">
                    {product.name}
                  </h2>

                  <p className="text-3xl font-bold text-[#D4A373] mb-4">
                    {product.price} {language === 'fr' ? 'MAD' : 'درهم'}
                  </p>

                  <p className="text-[#3D2914]/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-[#3D2914] mb-3 uppercase tracking-wide">
                      {t('product.benefits')}
                    </h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-[#3D2914]/70">
                          <Check className="w-4 h-4 text-[#CCD5AE] flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-[#3D2914] mb-3 uppercase tracking-wide">
                      {t('product.ingredients')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#CCD5AE]/30 text-[#3D2914] text-sm rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div className="mb-8">
                    <span className="text-sm text-[#3D2914]/60">
                      {language === 'fr' ? 'Format: ' : 'الحجم: '}
                    </span>
                    <span className="font-medium text-[#3D2914]">{product.size}</span>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="w-full argan-button py-4 flex items-center justify-center gap-2 mt-auto"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {t('product.addToCart')}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
