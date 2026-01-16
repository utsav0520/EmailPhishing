import { DollarSign, Clock, Users, Brain, ShieldCheck, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: DollarSign,
    title: "Low Cost",
    description: "Fraction of the cost of traditional security training programs.",
  },
  {
    icon: Clock,
    title: "No Productivity Loss",
    description: "2-minute emails don't interrupt workflow or require scheduling.",
  },
  {
    icon: Users,
    title: "Easy to Scale",
    description: "Works for teams of 10 or 10,000. Simple deployment across your organization.",
  },
  {
    icon: Brain,
    title: "High Retention",
    description: "Weekly repetition reinforces learning better than annual training.",
  },
  {
    icon: ShieldCheck,
    title: "Real Risk Reduction",
    description: "Employees recognize and report threats before damage occurs.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Track engagement and see security awareness improve over time.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefits That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Security awareness doesn't have to be expensive, time-consuming, or boring.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 80}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all h-full">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
