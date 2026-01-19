import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Mail,
  BarChart3,
  Crosshair,
  CreditCard,
  Shield,
  Settings,
  Lock,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Employees", href: "/employees", icon: Users },
  { name: "Content", href: "/content", icon: FileText },
  { name: "Email Delivery", href: "/email-delivery", icon: Mail },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Phishing Sim", href: "/phishing", icon: Crosshair },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Access Control", href: "/access", icon: Shield },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Security", href: "/security", icon: Lock },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-50",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sidebar-primary rounded flex items-center justify-center">
              <Mail className="w-4 h-4 text-sidebar-primary-foreground" />
            </div>
            <span className="font-semibold text-sidebar-foreground text-sm">
              EAMT Admin
            </span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-sidebar-primary rounded flex items-center justify-center mx-auto">
            <Mail className="w-4 h-4 text-sidebar-primary-foreground" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "nav-item",
                    isActive && "nav-item-active",
                    collapsed && "justify-center px-2"
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-sidebar-border p-2">
        {/* Notifications */}
        <button
          className={cn(
            "nav-item w-full text-sidebar-foreground/70 hover:text-sidebar-foreground",
            collapsed && "justify-center px-2"
          )}
        >
          <Bell className="w-5 h-5" />
          {!collapsed && <span>Notifications</span>}
          {!collapsed && (
            <span className="ml-auto bg-sidebar-accent text-sidebar-accent-foreground text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          )}
        </button>

        {/* Logout */}
        <button
          className={cn(
            "nav-item w-full text-sidebar-foreground/70 hover:text-sidebar-foreground",
            collapsed && "justify-center px-2"
          )}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Logout</span>}
        </button>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "nav-item w-full text-sidebar-foreground/50 hover:text-sidebar-foreground mt-2",
            collapsed && "justify-center px-2"
          )}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
