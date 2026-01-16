import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Start Reducing Human Cyber Risk Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join hundreds of organizations protecting their workforce with simple, effective security awareness.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
            >
              Launch Awareness Program
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
            >
              Schedule a Demo
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
