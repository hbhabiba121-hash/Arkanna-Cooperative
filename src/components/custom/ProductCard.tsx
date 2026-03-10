import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Product } from '../../config';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addItem, setIsCartOpen } = useCart();
  const { language, t } = useLanguage();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size,
    });
    setIsCartOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="product-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#FAEDCD]">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart className="w-5 h-5 text-[#D4A373]" />
          </motion.button>
          {onViewDetails && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onViewDetails(product)}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
            >
              <Eye className="w-5 h-5 text-[#D4A373]" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-medium text-[#3D2914] mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-[#3D2914]/60 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#D4A373]">
            {product.price} {language === 'fr' ? 'MAD' : 'درهم'}
          </span>
          <span className="text-sm text-[#3D2914]/50">{product.size}</span>
        </div>
        
        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="w-full mt-4 argan-button text-sm py-2.5"
        >
          {t('product.addToCart')}
        </motion.button>
      </div>
    </motion.div>
  );
}
