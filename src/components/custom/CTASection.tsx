import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function CTASection() {
  const { language, dir } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#CCD5AE] to-[#D4A373] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/30" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur mb-8"
          >
            <Leaf className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mb-6"
          >
            {language === 'fr' ? (
              <>
                Découvrez la Beauté
                <br />
                <span className="text-[#3D2914]">Naturelle de l'Argan</span>
              </>
            ) : (
              <>
                اكتشفي جمال
                <br />
                <span className="text-[#3D2914]">الأركان الطبيعي</span>
              </>
            )}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {language === 'fr'
              ? 'Rejoignez des milliers de clients satisfaits et offrez à votre peau et vos cheveux les bienfaits authentiques de l\'huile d\'argan bio du Maroc.'
              : 'انضمي إلى آلاف العملاء الراضين ومنحي بشرتك وشعرك فوائد زيت الأركان العضوي الأصيل من المغرب.'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#D4A373] rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              {language === 'fr' ? 'Explorer les Produits' : 'استكشفي المنتجات'}
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
            >
              {language === 'fr' ? 'Notre Histoire' : 'قصتنا'}
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              language === 'fr' ? '100% Naturel' : '100% طبيعي',
              language === 'fr' ? 'Bio Certifié' : 'عضوي معتمد',
              language === 'fr' ? 'Vegan' : 'نباتي',
              language === 'fr' ? 'Cruelty-Free' : 'خالي من القسوة',
            ].map((badge, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
