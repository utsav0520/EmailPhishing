import { ReactNode } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    period: string;
  };
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
}

export function KPICard({ title, value, change, icon, trend = "neutral" }: KPICardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div className="kpi-card hover-lift animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <p className="kpi-label">{title}</p>
          <p className="kpi-value mt-2">{value}</p>
          {change && (
            <div className="flex items-center gap-1.5 mt-2">
              <TrendIcon
                className={cn(
                  "w-4 h-4",
                  trend === "up" && "text-foreground",
                  trend === "down" && "text-muted-foreground",
                  trend === "neutral" && "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "kpi-change",
                  trend === "up" && "text-foreground",
                  trend === "down" && "text-muted-foreground",
                  trend === "neutral" && "text-muted-foreground"
                )}
              >
                {change.value > 0 ? "+" : ""}
                {change.value}%
              </span>
              <span className="text-xs text-muted-foreground">
                {change.period}
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
