import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { testimonials } from '../../config';

export function TestimonialsSection() {
  const { language } = useLanguage();
  const data = testimonials[language];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#FEFAE0] moroccan-pattern">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A373] text-sm font-medium uppercase tracking-wider">
            {language === 'fr' ? 'Témoignages' : 'آراء العملاء'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D2914] font-display mt-3">
            {language === 'fr' ? 'Ce que disent nos ' : 'ما يقوله '}
            <span className="text-[#D4A373]">{language === 'fr' ? 'clients' : 'عملاؤنا'}</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4A373]/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4A373] text-[#D4A373]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#3D2914]/80 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#FAEDCD]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[#3D2914]">{testimonial.name}</h4>
                  <p className="text-sm text-[#3D2914]/60">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
