import { Shield, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SecureAware</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Empowering organizations to build a security-first culture through simple, effective awareness training.
            </p>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 SecureAware. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <Shield className="w-4 h-4 text-success" />
            Security-first. Privacy-focused.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
