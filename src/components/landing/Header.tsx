import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SecureAware</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#sample" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sample Email
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Contact
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
