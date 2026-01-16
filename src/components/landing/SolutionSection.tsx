import { Mail, Clock, Zap, Brain } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Mail,
    title: "Weekly Micro-Emails",
    description: "One focused security tip delivered every week. No overwhelming training modules.",
  },
  {
    icon: Clock,
    title: "2-Minute Read",
    description: "Each email takes less than 2 minutes. Employees stay informed without losing productivity.",
  },
  {
    icon: Zap,
    title: "Real-World Examples",
    description: "Learn from actual attack scenarios and recognize threats before they cause damage.",
  },
  {
    icon: Brain,
    title: "Habit Formation",
    description: "Consistent, small lessons build lasting security habits that stick.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-success/10 text-success rounded-full text-sm font-medium">
            The Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Security Awareness That{" "}
            <span className="gradient-text">Actually Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Forget boring training videos. Our weekly micro-email program delivers practical, memorable security lessons that fit into any workday.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 100}
            >
              <div className="card-elevated p-8 group hover:border-primary/30 transition-colors h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
