import { Search, Send, BookOpen, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Identify Real Threats",
    description: "We analyze current cyber threats targeting your industry and create relevant content.",
  },
  {
    icon: Send,
    number: "02",
    title: "Weekly Email Delivery",
    description: "One short, focused awareness email arrives in every employee's inbox weekly.",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Learn From Examples",
    description: "Real attack scenarios and practical tips employees can apply immediately.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Build Better Habits",
    description: "Over time, security-conscious behavior becomes second nature for your team.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-card">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven approach to transforming your workforce into a security-aware team.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="relative text-center">
                  {/* Step number circle */}
                  <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border-4 border-primary/20 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
