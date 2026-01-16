import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const tiers = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with security awareness.",
    price: "$99",
    period: "/month",
    employees: "Up to 50 employees",
    popular: false,
    features: [
      "Weekly security awareness emails",
      "Pre-built email templates",
      "Basic threat intelligence",
      "Email open tracking",
      "Monthly engagement reports",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "For growing organizations that need comprehensive coverage.",
    price: "$299",
    period: "/month",
    employees: "Up to 250 employees",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Custom email branding",
      "Industry-specific content",
      "Phishing simulation tests",
      "Department-level analytics",
      "Priority email & chat support",
      "Compliance reporting",
      "API access",
    ],
    cta: "Start Free Trial",
    ctaVariant: "hero" as const,
  },
  {
    name: "Enterprise",
    description: "Tailored solutions for large organizations with complex needs.",
    price: "Custom",
    period: "",
    employees: "Unlimited employees",
    popular: false,
    features: [
      "Everything in Professional, plus:",
      "Fully customized content",
      "Dedicated account manager",
      "Advanced threat simulations",
      "SSO & SCIM integration",
      "Custom integrations",
      "On-demand training modules",
      "24/7 phone support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-card">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plans That Scale With Your Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your organization. All plans include a 14-day free trial.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <AnimatedSection
              key={tier.name}
              animation="fade-up"
              delay={index * 150}
            >
              <div
                className={`relative h-full flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-card-hover ${
                  tier.popular
                    ? "border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-security"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{tier.employees}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={tier.ctaVariant}
                  size="lg"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust note */}
        <AnimatedSection className="text-center mt-12" delay={500}>
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
