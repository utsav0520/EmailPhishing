import { RefreshCw, Eye, MessageSquare } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: RefreshCw,
    title: "Repetition Builds Habits",
    description: "Weekly touchpoints keep security top-of-mind. Unlike annual training that's quickly forgotten, consistent reminders create lasting behavior change.",
  },
  {
    icon: Eye,
    title: "Real Examples Increase Awareness",
    description: "Abstract concepts don't stick. Our emails use actual attack scenarios so employees recognize threats in their real inbox.",
  },
  {
    icon: MessageSquare,
    title: "Simple Format Ensures Engagement",
    description: "No videos to watch, no quizzes to complete. Just a quick, scannable email that delivers value in under 2 minutes.",
  },
];

const WhyItWorksSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why This Approach Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on behavioral science and proven learning principles.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <div className="relative p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-6">
                  <reason.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
