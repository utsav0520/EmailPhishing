import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { GrowthChart } from "@/components/dashboard/GrowthChart";
import { RecentCompanies } from "@/components/dashboard/RecentCompanies";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { QuickStats } from "@/components/dashboard/QuickStats";
import {
  Building2,
  Users,
  Mail,
  DollarSign,
} from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your email awareness training platform
          </p>
        </div>
        <div className="action-group">
          <select className="search-input text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Total Companies"
          value="72"
          change={{ value: 18, period: "vs last month" }}
          trend="up"
          icon={<Building2 className="w-5 h-5" />}
        />
        <KPICard
          title="Active Employees"
          value="2,680"
          change={{ value: 12, period: "vs last month" }}
          trend="up"
          icon={<Users className="w-5 h-5" />}
        />
        <KPICard
          title="Emails This Week"
          value="14,250"
          change={{ value: 5, period: "vs last week" }}
          trend="up"
          icon={<Mail className="w-5 h-5" />}
        />
        <KPICard
          title="Monthly Revenue"
          value="$48,500"
          change={{ value: 22, period: "vs last month" }}
          trend="up"
          icon={<DollarSign className="w-5 h-5" />}
        />
      </div>

      {/* Quick Stats */}
      <div className="mb-6">
        <QuickStats />
      </div>

      {/* Charts and Alerts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <GrowthChart />
        </div>
        <div>
          <AlertsPanel />
        </div>
      </div>

      {/* Recent Companies */}
      <RecentCompanies />
    </DashboardLayout>
  );
}
