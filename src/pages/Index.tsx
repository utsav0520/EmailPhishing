import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PricingSection from "@/components/landing/PricingSection";
import SampleEmailSection from "@/components/landing/SampleEmailSection";
import WhyItWorksSection from "@/components/landing/WhyItWorksSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
        <SampleEmailSection />
        <WhyItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
