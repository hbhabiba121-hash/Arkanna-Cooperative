import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { productsData, categories, type Product } from '../../config';

export function ProductsGrid() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = productsData[language];
  const cats = categories[language];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-[#FAEDCD]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#D4A373] text-sm font-medium uppercase tracking-wider">
            {language === 'fr' ? 'Notre Collection' : 'مجموعتنا'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2914] font-display mt-3">
            {language === 'fr' ? 'Nos Produits ' : 'منتجاتنا '}
            <span className="text-[#D4A373]">{language === 'fr' ? 'Naturels' : 'الطبيعية'}</span>
          </h2>
          <p className="text-[#3D2914]/70 mt-4 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Découvrez notre gamme complète de produits cosmétiques à base d\'huile d\'argan bio.'
              : 'اكتشف مجموعتنا الكاملة من المنتجات التجميلية بزيت الأركان العضوي.'}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {cats.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#D4A373] text-white shadow-lg'
                  : 'bg-white text-[#3D2914] hover:bg-[#D4A373]/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
            >
              <ProductCard
                product={product}
                onViewDetails={handleViewDetails}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#3D2914]/60">
              {language === 'fr'
                ? 'Aucun produit dans cette catégorie.'
                : 'لا توجد منتجات في هذه الفئة.'}
            </p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
