import { Shield, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--hero-gradient)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-up">
            <Shield className="w-4 h-4" />
            Trusted by 500+ Organizations
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Turn Employees Into Your{" "}
            <span className="gradient-text">First Line of Cyber Defense</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
            Reduce phishing, fraud, and human error with 2-minute weekly security awareness emails. No training sessions, no disruptions.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Mail className="w-5 h-5" />
              View Sample Email
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-up stagger-4">
            <p className="text-sm text-muted-foreground mb-4">Join industry leaders protecting their workforce</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-foreground/50">TechCorp</div>
              <div className="text-2xl font-bold text-foreground/50">FinanceHub</div>
              <div className="text-2xl font-bold text-foreground/50">GlobalBank</div>
              <div className="hidden sm:block text-2xl font-bold text-foreground/50">SecureHealth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
