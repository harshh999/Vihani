import HeroSection from '@/components/sections/HeroSection';
import CompanyIntro from '@/components/sections/CompanyIntro';
import ProductPortfolio from '@/components/sections/ProductPortfolio';
import IndustriesSection from '@/components/sections/IndustriesSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductPortfolio />
      <CompanyIntro />
      <IndustriesSection />
      <CapabilitiesSection />
    </>
  );
}
