import { AlertTriangle, Mail, TrendingDown, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: 1,
    type: "engagement",
    icon: TrendingDown,
    title: "Low engagement detected",
    description: "Global Finance Ltd has dropped below 50% completion rate",
    time: "2 hours ago",
    severity: "warning",
  },
  {
    id: 2,
    type: "email",
    icon: XCircle,
    title: "Email delivery failed",
    description: "48 emails bounced for Retail Masters Inc",
    time: "4 hours ago",
    severity: "error",
  },
  {
    id: 3,
    type: "risk",
    icon: AlertTriangle,
    title: "High-risk user activity",
    description: "3 employees clicked simulated phishing links",
    time: "6 hours ago",
    severity: "warning",
  },
  {
    id: 4,
    type: "email",
    icon: Mail,
    title: "SMTP rate limit approaching",
    description: "85% of daily email quota used",
    time: "1 day ago",
    severity: "info",
  },
];

export function AlertsPanel() {
  return (
    <div className="module-card animate-fade-in">
      <div className="module-card-header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          <h3 className="font-semibold">Active Alerts</h3>
          <span className="bg-foreground text-background text-xs px-2 py-0.5 rounded-full">
            {alerts.length}
          </span>
        </div>
        <Button variant="outline" size="sm">
          Clear all
        </Button>
      </div>
      <div className="divide-y divide-border">
        {alerts.map((alert) => (
          <div key={alert.id} className="alert-row hover:bg-accent/50 transition-colors">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                alert.severity === "error"
                  ? "bg-foreground text-background"
                  : alert.severity === "warning"
                  ? "bg-secondary text-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <alert.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{alert.title}</p>
              <p className="text-sm text-muted-foreground truncate">
                {alert.description}
              </p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {alert.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
