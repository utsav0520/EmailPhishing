import { AlertTriangle, Users, DollarSign } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const stats = [
  {
    icon: AlertTriangle,
    stat: "90%",
    label: "of breaches start with human error",
  },
  {
    icon: Users,
    stat: "$4.9M",
    label: "average cost of a data breach",
  },
  {
    icon: DollarSign,
    stat: "3.4B",
    label: "phishing emails sent daily worldwide",
  },
];

const threats = [
  "Phishing emails disguised as urgent requests",
  "Fake invoices from impersonated vendors",
  "CEO impersonation asking for wire transfers",
  "Credential harvesting through fake login pages",
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Biggest Security Risk?{" "}
            <span className="text-destructive">Human Error</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cybercriminals don't hack in—they log in. Most attacks succeed because employees unknowingly click, share, or trust the wrong thing.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((item, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
              <div className="card-elevated p-8 text-center h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-destructive/10 text-destructive mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{item.stat}</div>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Threats list */}
        <AnimatedSection className="max-w-2xl mx-auto" delay={300}>
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Common attacks targeting your employees:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10"
              >
                <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-foreground">{threat}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSection;
