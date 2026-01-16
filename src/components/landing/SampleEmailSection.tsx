import { AlertTriangle, CheckCircle, Mail, Clock } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const SampleEmailSection = () => {
  return (
    <section id="sample" className="section-padding bg-card">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See What Your Team Receives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Short, practical, and actionable. Here's a sample of our weekly security awareness email.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale-in" delay={200} className="max-w-2xl mx-auto">
          {/* Email card */}
          <div className="card-elevated overflow-hidden shadow-security">
            {/* Email header */}
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">SecureAware Weekly</div>
                  <div className="text-sm text-muted-foreground">security@secureaware.io</div>
                </div>
                <div className="ml-auto flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  2 min read
                </div>
              </div>
              <div className="text-lg font-semibold text-foreground">
                🚨 Urgent Invoice? Think Twice Before You Click
              </div>
            </div>

            {/* Email body */}
            <div className="p-6 space-y-6">
              <p className="text-foreground leading-relaxed">
                This week, scammers impersonated a popular vendor and sent fake invoices to companies just like yours. The emails looked legitimate—logo, formatting, even a real-looking invoice number.
              </p>

              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-destructive font-semibold mb-3">
                  <AlertTriangle className="w-5 h-5" />
                  Red Flags to Watch For:
                </div>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Urgent language like "immediate action required"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Slightly misspelled sender email address
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Request to update payment details
                  </li>
                </ul>
              </div>

              <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-success font-semibold mb-3">
                  <CheckCircle className="w-5 h-5" />
                  Quick Action:
                </div>
                <p className="text-foreground">
                  Always verify payment requests by calling the vendor directly using a known phone number—not the one in the email.
                </p>
              </div>

              <div className="pt-4 border-t border-border text-sm text-muted-foreground">
                Stay alert. Stay secure. See you next week!
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SampleEmailSection;
