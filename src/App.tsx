import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import { Navbar } from './components/custom/Navbar';
import { CartDrawer } from './components/custom/CartDrawer';
import { HeroSection } from './sections/HeroSection';
import { StorySection } from './sections/StorySection';
import { ProductSection } from './sections/ProductSection';
import { ProductsGrid } from './components/custom/ProductsGrid';
import { ExploreSection } from './sections/ExploreSection';
import { TastingSection } from './sections/TastingSection';
import { TestimonialsSection } from './components/custom/TestimonialsSection';
import { CTASection } from './components/custom/CTASection';
import { FooterSection } from './sections/FooterSection';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="relative w-full overflow-x-hidden bg-[#FAEDCD]">
          <Navbar />
          <CartDrawer />
          <main>
            <HeroSection />
            <StorySection />
            <ProductSection />
            <ProductsGrid />
            <ExploreSection />
            <TastingSection />
            <TestimonialsSection />
            <CTASection />
          </main>
          <FooterSection />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
