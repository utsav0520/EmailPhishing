import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Search, User } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main content */}
      <div className="pl-64 transition-all duration-300">
        {/* Top header */}
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="h-full px-6 flex items-center justify-between">
            {/* Search */}
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search companies, employees, content..."
                className="search-input w-full"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                ⌘K
              </kbd>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Super Admin
              </span>
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                <User className="w-4 h-4 text-background" />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
