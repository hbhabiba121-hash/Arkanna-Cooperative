import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language } from '../config';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'Notre Histoire',
    'nav.benefits': 'Bienfaits',
    'nav.contact': 'Contact',
    'nav.cart': 'Panier',
    'cart.empty': 'Votre panier est vide',
    'cart.total': 'Total',
    'cart.checkout': 'Commander',
    'cart.continue': 'Continuer les achats',
    'cart.add': 'Ajouter',
    'cart.remove': 'Supprimer',
    'product.addToCart': 'Ajouter au panier',
    'product.viewDetails': 'Voir les détails',
    'product.related': 'Produits similaires',
    'product.description': 'Description',
    'product.benefits': 'Bienfaits',
    'product.ingredients': 'Ingrédients',
    'filter.all': 'Tous les produits',
    'filter.arganOil': 'Huile d\'Argan',
    'filter.skincare': 'Soin Visage & Corps',
    'filter.haircare': 'Soin Capillaire',
    'filter.soaps': 'Savons Naturels',
    'filter.gifts': 'Coffrets Cadeaux',
    'newsletter.title': 'Newsletter',
    'newsletter.description': 'Inscrivez-vous pour recevoir nos offres exclusives',
    'newsletter.placeholder': 'Votre email',
    'newsletter.button': 'S\'inscrire',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.followUs': 'Suivez-nous',
    'btn.explore': 'Découvrir',
    'btn.buy': 'Acheter',
    'btn.learnMore': 'En savoir plus',
  },
  ar: {
    'nav.home': 'الصفحة الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.benefits': 'فوائد زيت الأركان',
    'nav.contact': 'اتصل بنا',
    'nav.cart': 'السلة',
    'cart.empty': 'سلتك فارغة',
    'cart.total': 'المجموع',
    'cart.checkout': 'إتمام الشراء',
    'cart.continue': 'مواصلة التسوق',
    'cart.add': 'إضافة',
    'cart.remove': 'إزالة',
    'product.addToCart': 'أضف إلى السلة',
    'product.viewDetails': 'عرض التفاصيل',
    'product.related': 'منتجات مشابهة',
    'product.description': 'الوصف',
    'product.benefits': 'الفوائد',
    'product.ingredients': 'المكونات',
    'filter.all': 'جميع المنتجات',
    'filter.arganOil': 'زيت الأركان',
    'filter.skincare': 'عناية الوجه والجسم',
    'filter.haircare': 'عناية الشعر',
    'filter.soaps': 'الصابون الطبيعي',
    'filter.gifts': 'صناديق الهدايا',
    'newsletter.title': 'النشرة الإخبارية',
    'newsletter.description': 'اشترك لتلقي عروضنا الحصرية',
    'newsletter.placeholder': 'بريدك الإلكتروني',
    'newsletter.button': 'اشترك',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'اتصل بنا',
    'footer.followUs': 'تابعنا',
    'btn.explore': 'استكشف',
    'btn.buy': 'اشتري',
    'btn.learnMore': 'اعرف المزيد',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const savedLang = localStorage.getItem('arkanna-language') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'ar')) {
      setLanguageState(savedLang);
      setDir(savedLang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setDir(lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('arkanna-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
