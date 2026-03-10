import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useLanguage } from '../../contexts/LanguageContext';

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const { language, t, dir } = useLanguage();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: dir === 'rtl' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: dir === 'rtl' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full w-full max-w-md bg-[#FEFAE0] shadow-2xl z-50 flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#D4A373]/20">
              <h2 className="text-xl font-bold text-[#3D2914] font-display">
                {language === 'fr' ? 'Votre Panier' : 'سلتك'}
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-[#D4A373]/10 transition-colors"
              >
                <X className="w-5 h-5 text-[#3D2914]" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-[#D4A373]/40 mb-4" />
                  <p className="text-[#3D2914]/60 text-lg">{t('cart.empty')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 p-4 bg-white rounded-xl shadow-sm"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#FAEDCD] flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-[#3D2914] truncate">{item.name}</h3>
                        <p className="text-sm text-[#3D2914]/60">{item.size}</p>
                        <p className="text-[#D4A373] font-bold mt-1">
                          {item.price} {language === 'fr' ? 'MAD' : 'درهم'}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-[#FAEDCD] flex items-center justify-center hover:bg-[#D4A373]/20 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-[#FAEDCD] flex items-center justify-center hover:bg-[#D4A373]/20 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-[#3D2914]/40 hover:text-red-500 transition-colors self-start"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#D4A373]/20 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#3D2914]/60">{t('cart.total')}</span>
                  <span className="text-2xl font-bold text-[#D4A373]">
                    {totalPrice} {language === 'fr' ? 'MAD' : 'درهم'}
                  </span>
                </div>
                <button className="w-full argan-button py-4 text-center">
                  {t('cart.checkout')}
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-3 text-center text-[#3D2914]/60 hover:text-[#D4A373] transition-colors"
                >
                  {t('cart.continue')}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
