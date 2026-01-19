import { Mail, Eye, CheckCircle, AlertCircle } from "lucide-react";

const stats = [
  {
    label: "Sent Today",
    value: "2,847",
    icon: Mail,
  },
  {
    label: "Open Rate",
    value: "68.4%",
    icon: Eye,
  },
  {
    label: "Quiz Complete",
    value: "84.2%",
    icon: CheckCircle,
  },
  {
    label: "At Risk",
    value: "12",
    icon: AlertCircle,
  },
];

export function QuickStats() {
  return (
    <div className="module-card animate-fade-in">
      <div className="module-card-header">
        <h3 className="font-semibold">Today's Snapshot</h3>
      </div>
      <div className="grid grid-cols-4 divide-x divide-border">
        {stats.map((stat) => (
          <div key={stat.label} className="quick-stat">
            <div className="flex items-center justify-center mb-2">
              <stat.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="quick-stat-value">{stat.value}</p>
            <p className="quick-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
