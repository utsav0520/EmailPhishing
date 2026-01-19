import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const revenueData = [
  { month: "Jul", mrr: 28500 },
  { month: "Aug", mrr: 32000 },
  { month: "Sep", mrr: 35800 },
  { month: "Oct", mrr: 39200 },
  { month: "Nov", mrr: 43500 },
  { month: "Dec", mrr: 48500 },
];

const pricingPlans = [
  { name: "Starter", price: 49, employees: "Up to 50", companies: 12 },
  { name: "Professional", price: 149, employees: "Up to 250", companies: 35 },
  { name: "Enterprise", price: 399, employees: "Unlimited", companies: 25 },
];

const recentTransactions = [
  {
    id: 1,
    company: "Acme Corporation",
    plan: "Enterprise",
    amount: 399,
    status: "paid",
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    company: "Global Finance Ltd",
    plan: "Professional",
    amount: 149,
    status: "paid",
    date: "Jan 14, 2024",
  },
  {
    id: 3,
    company: "TechStart Inc",
    plan: "Starter",
    amount: 49,
    status: "overdue",
    date: "Jan 10, 2024",
  },
  {
    id: 4,
    company: "HealthCare Plus",
    plan: "Starter",
    amount: 49,
    status: "pending",
    date: "Jan 12, 2024",
  },
  {
    id: 5,
    company: "EduTech Solutions",
    plan: "Enterprise",
    amount: 399,
    status: "paid",
    date: "Jan 8, 2024",
  },
];

export default function Billing() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Billing & Subscriptions</h1>
          <p className="text-muted-foreground mt-1">
            Manage pricing plans, payments, and invoices
          </p>
        </div>
        <div className="action-group">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Create Invoice
          </Button>
        </div>
      </div>

      {/* Revenue stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">MRR</span>
          </div>
          <p className="text-2xl font-semibold">$48,500</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            <span className="text-sm">+11.5% vs last month</span>
          </div>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Active Subs</span>
          </div>
          <p className="text-2xl font-semibold">72</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            <span className="text-sm">+8 this month</span>
          </div>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Churn Rate</span>
          </div>
          <p className="text-2xl font-semibold">2.4%</p>
          <p className="text-sm text-muted-foreground mt-1">
            Industry avg: 5.2%
          </p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Renewals Due</span>
          </div>
          <p className="text-2xl font-semibold">8</p>
          <p className="text-sm text-muted-foreground mt-1">Next 30 days</p>
        </div>
      </div>

      {/* Charts and plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 chart-container">
          <h3 className="font-semibold mb-4">MRR Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 92%)" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0 0% 100%)",
                    border: "1px solid hsl(0 0% 90%)",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, "MRR"]}
                />
                <Line
                  type="monotone"
                  dataKey="mrr"
                  stroke="hsl(0 0% 10%)"
                  strokeWidth={2}
                  dot={{ fill: "hsl(0 0% 10%)", strokeWidth: 0, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pricing plans */}
        <div className="module-card">
          <div className="module-card-header">
            <h3 className="font-semibold">Pricing Plans</h3>
          </div>
          <div className="divide-y divide-border">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{plan.name}</span>
                  <span className="font-semibold">${plan.price}/mo</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{plan.employees}</span>
                  <span>{plan.companies} active</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-border">
            <Button variant="outline" size="sm" className="w-full">
              Manage Plans
            </Button>
          </div>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="module-card">
        <div className="module-card-header flex items-center justify-between">
          <h3 className="font-semibold">Recent Transactions</h3>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="font-medium">{tx.company}</td>
                  <td>
                    <span className="status-badge status-pending">{tx.plan}</span>
                  </td>
                  <td className="font-semibold">${tx.amount}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        tx.status === "paid"
                          ? "status-active"
                          : tx.status === "pending"
                          ? "status-pending"
                          : "risk-high"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="text-muted-foreground">{tx.date}</td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View invoice</DropdownMenuItem>
                        <DropdownMenuItem>Send reminder</DropdownMenuItem>
                        <DropdownMenuItem>Apply discount</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
