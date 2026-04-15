import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ReviewsSection />
      <ServicesSection />
      <WhyUsSection />
      <AboutSection />
      <ServiceAreasSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
