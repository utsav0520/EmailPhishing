import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Crosshair,
  Plus,
  Play,
  Pause,
  BarChart3,
  Users,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const campaigns = [
  {
    id: 1,
    name: "Q1 Security Assessment",
    status: "active",
    targetCompanies: 5,
    targetEmployees: 450,
    clickRate: 12,
    reportRate: 68,
    startDate: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Finance Team Test",
    status: "completed",
    targetCompanies: 1,
    targetEmployees: 85,
    clickRate: 8,
    reportRate: 82,
    startDate: "Jan 8, 2024",
  },
  {
    id: 3,
    name: "New Employee Baseline",
    status: "scheduled",
    targetCompanies: 3,
    targetEmployees: 120,
    clickRate: null,
    reportRate: null,
    startDate: "Jan 25, 2024",
  },
];

const clickData = [
  { company: "HealthCare Plus", clicked: 18, reported: 42 },
  { company: "TechStart Inc", clicked: 15, reported: 55 },
  { company: "Retail Masters", clicked: 12, reported: 68 },
  { company: "Manufacturing Pro", clicked: 10, reported: 72 },
  { company: "Global Finance", clicked: 8, reported: 78 },
];

export default function Phishing() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Phishing Simulation</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage simulated phishing campaigns
          </p>
        </div>
        <div className="action-group">
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <Crosshair className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Total Campaigns</span>
          </div>
          <p className="text-2xl font-semibold">{campaigns.length}</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Employees Tested</span>
          </div>
          <p className="text-2xl font-semibold">535</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Avg Click Rate</span>
          </div>
          <p className="text-2xl font-semibold">10.5%</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Avg Report Rate</span>
          </div>
          <p className="text-2xl font-semibold">75%</p>
        </div>
      </div>

      {/* Charts and campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Click rate by company */}
        <div className="chart-container">
          <h3 className="font-semibold mb-4">Click vs Report Rate by Company</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clickData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 92%)" horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }}
                />
                <YAxis
                  type="category"
                  dataKey="company"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }}
                  width={120}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0 0% 100%)",
                    border: "1px solid hsl(0 0% 90%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="clicked" fill="hsl(0 0% 20%)" radius={[0, 4, 4, 0]} name="Clicked %" />
                <Bar dataKey="reported" fill="hsl(0 0% 70%)" radius={[0, 4, 4, 0]} name="Reported %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-foreground" />
              <span className="text-sm text-muted-foreground">Clicked Link</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-muted-foreground" />
              <span className="text-sm text-muted-foreground">Reported Phishing</span>
            </div>
          </div>
        </div>

        {/* Campaign templates */}
        <div className="module-card">
          <div className="module-card-header">
            <h3 className="font-semibold">Phishing Templates</h3>
          </div>
          <div className="divide-y divide-border">
            {[
              { name: "Password Reset Request", difficulty: "Easy", used: 12 },
              { name: "IT Support Ticket", difficulty: "Medium", used: 8 },
              { name: "Invoice Attachment", difficulty: "Medium", used: 15 },
              { name: "CEO Wire Transfer", difficulty: "Hard", used: 5 },
              { name: "HR Benefits Update", difficulty: "Easy", used: 10 },
            ].map((template) => (
              <div
                key={template.name}
                className="p-4 flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <div>
                  <p className="font-medium">{template.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Used in {template.used} campaigns
                  </p>
                </div>
                <span
                  className={`status-badge ${
                    template.difficulty === "Easy"
                      ? "risk-low"
                      : template.difficulty === "Medium"
                      ? "risk-medium"
                      : "risk-high"
                  }`}
                >
                  {template.difficulty}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-border">
            <Button variant="outline" size="sm" className="w-full">
              Create Template
            </Button>
          </div>
        </div>
      </div>

      {/* Campaigns table */}
      <div className="module-card">
        <div className="module-card-header flex items-center justify-between">
          <h3 className="font-semibold">Active & Recent Campaigns</h3>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Status</th>
                <th>Targets</th>
                <th>Click Rate</th>
                <th>Report Rate</th>
                <th>Start Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="font-medium">{campaign.name}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        campaign.status === "active"
                          ? "status-active"
                          : campaign.status === "completed"
                          ? "status-inactive"
                          : "status-pending"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td>
                    <span className="text-muted-foreground">
                      {campaign.targetCompanies} companies, {campaign.targetEmployees} employees
                    </span>
                  </td>
                  <td>
                    {campaign.clickRate !== null ? (
                      <span className={campaign.clickRate > 15 ? "font-medium" : ""}>
                        {campaign.clickRate}%
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td>
                    {campaign.reportRate !== null ? (
                      <span>{campaign.reportRate}%</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="text-muted-foreground">{campaign.startDate}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      {campaign.status === "active" ? (
                        <Button variant="ghost" size="sm">
                          <Pause className="w-4 h-4" />
                        </Button>
                      ) : campaign.status === "scheduled" ? (
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      ) : null}
                      <Button variant="ghost" size="sm">
                        <BarChart3 className="w-4 h-4" />
                      </Button>
                    </div>
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
