// ============================================================================
// Configuration File for Arkanna - Moroccan Argan Cooperative
// ============================================================================
// Edit this file to customize all content on your site.

// Language type
export type Language = 'fr' | 'ar';

// Hero Section Configuration
export interface HeroConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  chocolateText: string;
  ctaText: string;
  heroImage: string;
  leafImages: [string, string];
}

export const heroConfig: Record<Language, HeroConfig> = {
  fr: {
    subtitle: "Coopérative Féminine du Maroc",
    titleLine1: "ARKANNA",
    titleLine2: "أركاننا",
    tagline: "Beauté Naturelle · Argan Authentique",
    chocolateText: "Huile d'Argan 100% Bio du Maroc",
    ctaText: "Découvrir nos Produits",
    heroImage: "images/hero_argan.jpg",
    leafImages: ["images/leaf_1.png", "images/leaf_2.png"],
  },
  ar: {
    subtitle: "تعاونية نسائية مغربية",
    titleLine1: "أركاننا",
    titleLine2: "ARKANNA",
    tagline: "جمال طبيعي · أركان أصيل",
    chocolateText: "زيت أركان عضوي 100% من المغرب",
    ctaText: "اكتشف منتجاتنا",
    heroImage: "images/hero_argan.jpg",
    leafImages: ["images/leaf_1.png", "images/leaf_2.png"],
  },
};

// Story Section Configuration
export interface StoryStatConfig {
  value: string;
  label: string;
}

export interface StoryConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  paragraphs: string[];
  stats: StoryStatConfig[];
  storyImage: string;
}

export const storyConfig: Record<Language, StoryConfig> = {
  fr: {
    label: "Notre Histoire",
    heading: ["Une Tradition", "de Femmes"],
    headingAccent: "Passionnées",
    paragraphs: [
      "Fondée au cœur de la région de Souss au Maroc, notre coopérative rassemble plus de 50 femmes artisanes dédiées à la préservation du savoir-faire traditionnel de l'argan.",
      "Chaque goutte d'huile que nous produisons est le fruit d'un travail minutieux, transmis de génération en génération, respectant les méthodes ancestrales d'extraction.",
      "En choisissant nos produits, vous soutenez directement l'autonomisation des femmes rurales marocaines et la pérennité de cette tradition millénaire.",
    ],
    stats: [
      { value: "50+", label: "Femmes Artisanes" },
      { value: "100%", label: "Bio & Naturel" },
      { value: "15+", label: "Années d'Expertise" },
    ],
    storyImage: "images/artisans.jpg",
  },
  ar: {
    label: "قصتنا",
    heading: ["تقليد", "نساء"],
    headingAccent: "مخلصات",
    paragraphs: [
      "تأسست في قلب منطقة سوس بالمغرب، تجمع تعاونيتنا أكثر من 50 امرأة حرفية مكرسة للحفاظ على المعرفة التقليدية لإنتاج الأركان.",
      "كل قطرة زيت ننتجها هي ثمرة عمل دقيق، انتقل من جيل إلى جيل، يحترم الطرق التقليدية لاستخراج الزيت.",
      "من خلال اختيار منتجاتنا، تدعم مباشرة تمكين المرأة الريفية المغربية واستمرار هذه التقاليد الأصيلة.",
    ],
    stats: [
      { value: "50+", label: "امرأة حرفية" },
      { value: "100%", label: "عضوي وطبيعي" },
      { value: "15+", label: "سنة خبرة" },
    ],
    storyImage: "images/artisans.jpg",
  },
};

// Product Section Configuration
export interface ProductConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  productTitle: string;
  description: string;
  features: string[];
  price: string;
  priceLabel: string;
  specs: string;
  specsLabel: string;
  ctaPrimary: string;
  ctaSecondary: string;
  productImage: string;
}

export const productConfig: Record<Language, ProductConfig> = {
  fr: {
    label: "Produit Vedette",
    heading: ["Huile d'Argan"],
    headingAccent: "Pure",
    productTitle: "Huile d'Argan Bio Premium",
    description: "Notre huile d'argan pure est pressée à froid pour préserver tous ses bienfaits. Riche en vitamine E et en acides gras essentiels, elle nourrit en profondeur votre peau et vos cheveux.",
    features: [
      "Pressée à froid pour une qualité optimale",
      "Riche en vitamine E naturelle",
      "Sans additifs ni conservateurs",
      "Absorption rapide et non grasse",
      "Convient à tous types de peau",
      "Emballage en verre ambré protecteur",
    ],
    price: "249 MAD",
    priceLabel: "Prix",
    specs: "50ml / flacon",
    specsLabel: "Format",
    ctaPrimary: "Ajouter au Panier",
    ctaSecondary: "Voir Détails",
    productImage: "images/product_oil.jpg",
  },
  ar: {
    label: "المنتج المميز",
    heading: ["زيت أركان"],
    headingAccent: "نقي",
    productTitle: "زيت أركان العضوي الممتاز",
    description: "يتم عصر زيت الأركان النقي لدينا على البارد للحفاظ على جميع فوائده. غني بفيتامين E والأحماض الدهنية الأساسية، يغذي بشرتك وشعرك بعمق.",
    features: [
      "معصور على البارد لأفضل جودة",
      "غني بفيتامين E الطبيعي",
      "بدون إضافات أو مواد حافظة",
      "امتصاص سريع وغير دهني",
      "مناسب لجميع أنواع البشرة",
      "تعبئة في زجاجة كهرمانية واقية",
    ],
    price: "249 درهم",
    priceLabel: "السعر",
    specs: "50 مل / قنينة",
    specsLabel: "الحجم",
    ctaPrimary: "أضف إلى السلة",
    ctaSecondary: "عرض التفاصيل",
    productImage: "images/product_oil.jpg",
  },
};

// Explore Section Configuration (Production Process)
export interface HotspotConfig {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  iconType: "bird" | "pawprint" | "treepine" | "flower";
  image: string;
}

export interface ExploreConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  description: string;
  hint: string;
  exploreImage: string;
  hotspots: HotspotConfig[];
}

export const exploreConfig: Record<Language, ExploreConfig> = {
  fr: {
    label: "Processus Traditionnel",
    heading: ["La Fabrication"],
    headingAccent: "Artisanale",
    description: "Découvrez les étapes traditionnelles de fabrication de notre huile d'argan, transmises de génération en génération.",
    hint: "Cliquez sur les points pour explorer",
    exploreImage: "images/argan_landscape.jpg",
    hotspots: [
      {
        id: "harvest",
        x: 20,
        y: 35,
        title: "Récolte",
        description: "Les fruits de l'arganier sont récoltés à la main lorsqu'ils sont parfaitement mûrs, entre juin et août.",
        iconType: "treepine",
        image: "images/process_harvest.jpg",
      },
      {
        id: "cracking",
        x: 45,
        y: 55,
        title: "Cassage",
        description: "Les noix sont cassées une à une à la main pour extraire les amandes, une étape nécessitant patience et dextérité.",
        iconType: "pawprint",
        image: "images/process_cracking.jpg",
      },
      {
        id: "grinding",
        x: 70,
        y: 40,
        title: "Broyage",
        description: "Les amandes sont broyées avec une meule en pierre pour obtenir une pâte onctueuse.",
        iconType: "flower",
        image: "images/process_grinding.jpg",
      },
      {
        id: "extraction",
        x: 85,
        y: 70,
        title: "Extraction",
        description: "La pâte est pressée pour extraire l'huile précieuse, pur or liquide aux mille vertus.",
        iconType: "bird",
        image: "images/process_extraction.jpg",
      },
    ],
  },
  ar: {
    label: "العملية التقليدية",
    heading: ["الصناعة"],
    headingAccent: "اليدوية",
    description: "اكتشفوا المراحل التقليدية لصنع زيت الأركان، المتوارثة من جيل إلى جيل.",
    hint: "انقر على النقاط للاستكشاف",
    exploreImage: "images/argan_landscape.jpg",
    hotspots: [
      {
        id: "harvest",
        x: 20,
        y: 35,
        title: "الحصاد",
        description: "يتم حصاد ثمار شجرة الأركان يدوياً عندما تنضج تماماً، بين يونيو وأغسطس.",
        iconType: "treepine",
        image: "images/process_harvest.jpg",
      },
      {
        id: "cracking",
        x: 45,
        y: 55,
        title: "الكسر",
        description: "يتم كسر المكسرات واحدة تلو الأخرى يدوياً لاستخراج اللوز، وهي خطوة تتطلب الصبر والمهارة.",
        iconType: "pawprint",
        image: "images/process_cracking.jpg",
      },
      {
        id: "grinding",
        x: 70,
        y: 40,
        title: "الطحن",
        description: "يتم طحن اللوز باستخدام رحى حجرية للحصول على عجينة ناعمة.",
        iconType: "flower",
        image: "images/process_grinding.jpg",
      },
      {
        id: "extraction",
        x: 85,
        y: 70,
        title: "الاستخراج",
        description: "يتم عصر العجينة لاستخراج الزيت الثمين، الذهب السائل ذو الفوائد العديدة.",
        iconType: "bird",
        image: "images/process_extraction.jpg",
      },
    ],
  },
};

// Tasting Section Configuration (Benefits Section)
export interface TastingCardConfig {
  iconType: "eye" | "wind" | "sparkles";
  title: string;
  description: string;
  notes: string[];
}

export interface FlavorBarConfig {
  label: string;
  value: number;
  color: string;
}

export interface TastingConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  description: string;
  tastingCards: TastingCardConfig[];
  flavorWheel: {
    title: string;
    description: string;
    tags: string[];
    bars: FlavorBarConfig[];
  };
}

export const tastingConfig: Record<Language, TastingConfig> = {
  fr: {
    label: "Bienfaits",
    heading: ["Vertus de l'"],
    headingAccent: "Argan",
    description: "L'huile d'argan est reconnue mondialement pour ses nombreuses propriétés bénéfiques pour la peau, les cheveux et les ongles.",
    tastingCards: [
      {
        iconType: "eye",
        title: "Hydratation Profonde",
        description: "Pénètre en profondeur pour hydrater et nourrir la peau, la laissant douce et souple.",
        notes: ["Peau hydratée", "Texture lisse", "Éclat naturel"],
      },
      {
        iconType: "wind",
        title: "Réparation Capillaire",
        description: "Nourrit et répare les cheveux abîmés, leur redonnant brillance et vitalité.",
        notes: ["Cheveux forts", "Brillance", "Sans frisottis"],
      },
      {
        iconType: "sparkles",
        title: "Anti-Âge Naturel",
        description: "Riche en antioxydants, combat les signes du vieillissement et préserve la jeunesse de la peau.",
        notes: ["Rides atténuées", "Peau ferme", "Teint unifié"],
      },
    ],
    flavorWheel: {
      title: "Composition Naturelle",
      description: "Notre huile d'argan pure contient des nutriments essentiels pour votre beauté naturelle.",
      tags: ["Vitamine E", "Oméga-6", "Oméga-9", "Antioxydants", "Acides gras", "Phytostérols"],
      bars: [
        { label: "Hydratation", value: 95, color: "#D4A373" },
        { label: "Nutrition", value: 90, color: "#CCD5AE" },
        { label: "Protection", value: 85, color: "#D4A373" },
        { label: "Régénération", value: 88, color: "#CCD5AE" },
      ],
    },
  },
  ar: {
    label: "الفوائد",
    heading: ["فوائد"],
    headingAccent: "الأركان",
    description: "يُعرف زيت الأركان عالمياً بفوائده العديدة للبشرة والشعر والأظافر.",
    tastingCards: [
      {
        iconType: "eye",
        title: "ترطيب عميق",
        description: "يخترق بعمق لترطيب وتغذية البشرة، تاركاً إياها ناعمة ومرنة.",
        notes: ["بشرة مرطبة", "ملمس ناعم", "إشراقة طبيعية"],
      },
      {
        iconType: "wind",
        title: "إصلاح الشعر",
        description: "يغذي ويصلح الشعر التالف، مرداً إليه لمعانه وحيويته.",
        notes: ["شعر قوي", "لمعان", "بدون تجعد"],
      },
      {
        iconType: "sparkles",
        title: "مضاد للشيخوخة",
        description: "غني بمضادات الأكسدة، يحارب علامات الشيخوخة ويحافظ على شباب البشرة.",
        notes: ["تجاعيد مخففة", "بشرة مشدودة", "لون موحد"],
      },
    ],
    flavorWheel: {
      title: "التكوين الطبيعي",
      description: "يحتوي زيت الأركان النقي على مغذيات أساسية لجمالك الطبيعي.",
      tags: ["فيتامين E", "أوميغا-6", "أوميغا-9", "مضادات الأكسدة", "أحماض دهنية", "فيتوستيرولات"],
      bars: [
        { label: "ترطيب", value: 95, color: "#D4A373" },
        { label: "تغذية", value: 90, color: "#CCD5AE" },
        { label: "حماية", value: 85, color: "#D4A373" },
        { label: "تجديد", value: 88, color: "#CCD5AE" },
      ],
    },
  },
};

// Footer Section Configuration
export interface SocialLinkConfig {
  platform: "instagram" | "facebook" | "twitter";
  href: string;
}

export interface NavLinkConfig {
  label: string;
  href: string;
}

export interface PolicyLinkConfig {
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandTagline: string;
  brandDescription: string;
  socialLinks: SocialLinkConfig[];
  navSectionTitle: string;
  navLinks: NavLinkConfig[];
  contactSectionTitle: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  copyright: string;
  policyLinks: PolicyLinkConfig[];
}
export const footerConfig: Record<Language, FooterConfig> = {
  fr: {
    brandName: "ARKANNA",
    brandTagline: "أركاننا",
    brandDescription:
      "Coopérative féminine marocaine spécialisée dans la production d'huile d'argan bio et de produits cosmétiques naturels.",

    socialLinks: [
      { platform: "instagram", href: "#" },
      { platform: "facebook", href: "#" },
      { platform: "twitter", href: "#" },
    ],

    navSectionTitle: "Liens Rapides",
    navLinks: [
      { label: "Accueil", href: "#" },
      { label: "Produits", href: "#" },
      { label: "Notre Histoire", href: "#" },
      { label: "Contact", href: "#" },
    ],

    contactSectionTitle: "Contact",
    contactAddress:
      "Coopérative Arkanna\nRoute d'Essaouira, Km 25\nAgadir, Maroc",

    contactPhone: "+212 528 123 456",
    contactEmail: "contact@arkanna.ma",

    newsletterTitle: "Newsletter",
    newsletterDescription:
      "Inscrivez-vous pour recevoir nos offres exclusives et nos conseils beauté.",
    newsletterPlaceholder: "Votre email",
    newsletterButton: "S'inscrire",

    copyright: "© 2026 Arkanna. Tous droits réservés.",

    developerCredit: "Conçu et développé par Habiba El Mahfoudi",

    policyLinks: [
      { label: "Politique de confidentialité", href: "#" },
      { label: "Conditions d'utilisation", href: "#" },
    ],
  },

  ar: {
    brandName: "أركاننا",
    brandTagline: "ARKANNA",
    brandDescription:
      "تعاونية نسائية مغربية متخصصة في إنتاج زيت الأركان العضوي والمنتجات التجميلية الطبيعية.",

    socialLinks: [
      { platform: "instagram", href: "#" },
      { platform: "facebook", href: "#" },
      { platform: "twitter", href: "#" },
    ],

    navSectionTitle: "روابط سريعة",
    navLinks: [
      { label: "الصفحة الرئيسية", href: "#" },
      { label: "المنتجات", href: "#" },
      { label: "قصتنا", href: "#" },
      { label: "اتصل بنا", href: "#" },
    ],

    contactSectionTitle: "اتصل بنا",
    contactAddress:
      "تعاونية أركاننا\nطريق الصويرة، كم 25\nأكادير، المغرب",

    contactPhone: "+212 528 123 456",
    contactEmail: "contact@arkanna.ma",

    newsletterTitle: "النشرة الإخبارية",
    newsletterDescription:
      "اشترك لتلقي عروضنا الحصرية ونصائح الجمال.",
    newsletterPlaceholder: "بريدك الإلكتروني",
    newsletterButton: "اشترك",

    copyright: "© 2026 أركاننا. جميع الحقوق محفوظة.",

    developerCredit: "تصميم وتطوير: حبيبة المحفوظي",

    policyLinks: [
      { label: "سياسة الخصوصية", href: "#" },
      { label: "شروط الاستخدام", href: "#" },
    ],
  },
};

// Site Metadata
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: Record<Language, SiteConfig> = {
  fr: {
    title: "Arkanna - Huile d'Argan Bio du Maroc",
    description: "Découvrez nos produits cosmétiques naturels à base d'huile d'argan bio, produits par une coopérative féminine marocaine.",
    language: "fr",
  },
  ar: {
    title: "أركاننا - زيت أركان عضوي من المغرب",
    description: "اكتشف منتجاتنا التجميلية الطبيعية بزيت الأركان العضوي، من إنتاج تعاونية نسائية مغربية.",
    language: "ar",
  },
};

// Navigation Configuration
export interface NavConfig {
  home: string;
  products: string;
  about: string;
  benefits: string;
  contact: string;
  cart: string;
}

export const navConfig: Record<Language, NavConfig> = {
  fr: {
    home: "Accueil",
    products: "Produits",
    about: "Notre Histoire",
    benefits: "Bienfaits",
    contact: "Contact",
    cart: "Panier",
  },
  ar: {
    home: "الصفحة الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    benefits: "فوائد زيت الأركان",
    contact: "اتصل بنا",
    cart: "السلة",
  },
};

// Products Data
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  size: string;
}

export const productsData: Record<Language, Product[]> = {
  fr: [
    {
      id: "argan-oil-pure",
      name: "Huile d'Argan Pure",
      category: "argan-oil",
      price: 249,
      image: "images/product_oil.jpg",
      description: "Huile d'argan 100% pure et bio, pressée à froid pour préserver tous ses bienfaits.",
      benefits: ["Hydratation profonde", "Anti-âge naturel", "Réparation capillaire"],
      ingredients: ["100% Huile d'argan biologique"],
      size: "50ml",
    },
    {
      id: "argan-face-cream",
      name: "Crème Visage à l'Argan",
      category: "skincare",
      price: 189,
      image: "images/product_cream.jpg",
      description: "Crème hydratante enrichie à l'huile d'argan pour une peau éclatante.",
      benefits: ["Hydratation 24h", "Teint éclatant", "Texture légère"],
      ingredients: ["Huile d'argan", "Beurre de karité", "Aloe vera"],
      size: "50ml",
    },
    {
      id: "argan-hair-serum",
      name: "Sérum Capillaire",
      category: "haircare",
      price: 159,
      image: "images/product_serum.jpg",
      description: "Sérum réparateur pour des cheveux brillants et sans frisottis.",
      benefits: ["Brillance instantanée", "Protection thermique", "Réparation des pointes"],
      ingredients: ["Huile d'argan", "Vitamine E", "Protéines de soie"],
      size: "30ml",
    },
    {
      id: "argan-soap",
      name: "Savon Naturel à l'Argan",
      category: "soaps",
      price: 49,
      image: "images/product_soap.jpg",
      description: "Savon artisanal enrichi à l'huile d'argan pour une peau douce.",
      benefits: ["Nettoyage doux", "Hydratation", "Parfum délicat"],
      ingredients: ["Huile d'argan", "Huile d'olive", "Beurre de karité"],
      size: "100g",
    },
    {
      id: "argan-gift-box",
      name: "Coffret Cadeau Argan",
      category: "gifts",
      price: 499,
      image: "images/product_giftbox.jpg",
      description: "Coffret cadeau élégant contenant nos meilleurs produits à l'argan.",
      benefits: ["Idéal pour offrir", "Emballage premium", "Collection complète"],
      ingredients: ["Huile d'argan", "Crème visage", "Sérum", "Savon"],
      size: "Ensemble",
    },
    {
      id: "argan-body-lotion",
      name: "Lotion Corporelle",
      category: "skincare",
      price: 129,
      image: "images/product_lotion.jpg",
      description: "Lotion corporelle nourrissante pour une peau satinée.",
      benefits: ["Hydratation intense", "Texture non grasse", "Absorption rapide"],
      ingredients: ["Huile d'argan", "Glycérine végétale", "Vitamine E"],
      size: "200ml",
    },
    {
      id: "argan-lip-balm",
      name: "Baume à Lèvres",
      category: "skincare",
      price: 39,
      image: "images/product_lipbalm.jpg",
      description: "Baume nourrissant pour des lèvres douces et hydratées.",
      benefits: ["Hydratation durable", "Protection", "Brillance naturelle"],
      ingredients: ["Huile d'argan", "Cire d'abeille", "Beurre de cacao"],
      size: "10ml",
    },
  ],
  ar: [
    {
      id: "argan-oil-pure",
      name: "زيت أركان نقي",
      category: "argan-oil",
      price: 249,
      image: "images/product_oil.jpg",
      description: "زيت أركان 100% نقي وعضوي، معصور على البارد للحفاظ على جميع فوائده.",
      benefits: ["ترطيب عميق", "مضاد للشيخوخة", "إصلاح الشعر"],
      ingredients: ["100% زيت أركان عضوي"],
      size: "50 مل",
    },
    {
      id: "argan-face-cream",
      name: "كريم الوجه بالأركان",
      category: "skincare",
      price: 189,
      image: "images/product_cream.jpg",
      description: "كريم مرطب مغذي بزيت الأركان لبشرة مشرقة.",
      benefits: ["ترطيب 24 ساعة", "بشرة نضرة", "ملمس خفيف"],
      ingredients: ["زيت أركان", "زبدة الشيا", "ألوفيرا"],
      size: "50 مل",
    },
    {
      id: "argan-hair-serum",
      name: "سيروم الشعر",
      category: "haircare",
      price: 159,
      image: "images/product_serum.jpg",
      description: "سيروم إصلاحي لشعر لامع وخالي من التجعد.",
      benefits: ["لمعان فوري", "حماية حرارية", "إصلاح الأطراف"],
      ingredients: ["زيت أركان", "فيتامين E", "بروتينات الحرير"],
      size: "30 مل",
    },
    {
      id: "argan-soap",
      name: "صابون طبيعي بالأركان",
      category: "soaps",
      price: 49,
      image: "images/product_soap.jpg",
      description: "صابون حرفي مغذي بزيت الأركان لبشرة ناعمة.",
      benefits: ["تنظيف لطيف", "ترطيب", "عطر رقيق"],
      ingredients: ["زيت أركان", "زيت زيتون", "زبدة الشيا"],
      size: "100 غ",
    },
    {
      id: "argan-gift-box",
      name: "صندوق هدايا الأركان",
      category: "gifts",
      price: 499,
      image: "images/product_giftbox.jpg",
      description: "صندوق هدايا أنيق يحتوي على أفضل منتجاتنا بالأركان.",
      benefits: ["مثالي للهدايا", "تغليف فاخر", "مجموعة كاملة"],
      ingredients: ["زيت أركان", "كريم وجه", "سيروم", "صابون"],
      size: "مجموعة",
    },
    {
      id: "argan-body-lotion",
      name: "لوشن الجسم",
      category: "skincare",
      price: 129,
      image: "images/product_lotion.jpg",
      description: "لوشن جسم مغذي لبشرة حريرية.",
      benefits: ["ترطيب مكثف", "ملمس غير دهني", "امتصاص سريع"],
      ingredients: ["زيت أركان", "جليسرين نباتي", "فيتامين E"],
      size: "200 مل",
    },
    {
      id: "argan-lip-balm",
      name: "مرطب الشفاه",
      category: "skincare",
      price: 39,
      image: "images/product_lipbalm.jpg",
      description: "مرطب مغذي لشفاه ناعمة ورطبة.",
      benefits: ["ترطيب طويل الأمد", "حماية", "لمعان طبيعي"],
      ingredients: ["زيت أركان", "شمع العسل", "زبدة الكاكاو"],
      size: "10 مل",
    },
  ],
};

// Categories
export const categories: Record<Language, { id: string; name: string }[]> = {
  fr: [
    { id: "all", name: "Tous les produits" },
    { id: "argan-oil", name: "Huile d'Argan" },
    { id: "skincare", name: "Soin Visage & Corps" },
    { id: "haircare", name: "Soin Capillaire" },
    { id: "soaps", name: "Savons Naturels" },
    { id: "gifts", name: "Coffrets Cadeaux" },
  ],
  ar: [
    { id: "all", name: "جميع المنتجات" },
    { id: "argan-oil", name: "زيت الأركان" },
    { id: "skincare", name: "عناية الوجه والجسم" },
    { id: "haircare", name: "عناية الشعر" },
    { id: "soaps", name: "الصابون الطبيعي" },
    { id: "gifts", name: "صناديق الهدايا" },
  ],
};

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

export const testimonials: Record<Language, Testimonial[]> = {
  fr: [
    {
      id: "1",
      name: "Sarah M.",
      location: "Paris, France",
      text: "Cette huile d'argan a complètement transformé ma routine beauté. Ma peau est plus douce et éclatante que jamais !",
      image: "images/testimonial_1.jpg",
      rating: 5,
    },
    {
      id: "2",
      name: "Amina K.",
      location: "Casablanca, Maroc",
      text: "Je suis fière de soutenir cette coopérative féminine. Les produits sont d'une qualité exceptionnelle et 100% naturels.",
      image: "images/testimonial_2.jpg",
      rating: 5,
    },
  ],
  ar: [
    {
      id: "1",
      name: "سارة م.",
      location: "باريس، فرنسا",
      text: "لقد غيّر زيت الأركان هذا روتين جمالي بالكامل. بشرتي أكثر نعومة وإشراقاً من أي وقت مضى!",
      image: "images/testimonial_1.jpg",
      rating: 5,
    },
    {
      id: "2",
      name: "أمينة ك.",
      location: "الدار البيضاء، المغرب",
      text: "أنا فخورة بدعم هذه التعاونية النسائية. المنتجات ذات جودة استثنائية و100% طبيعية.",
      image: "images/testimonial_2.jpg",
      rating: 5,
    },
  ],
};
