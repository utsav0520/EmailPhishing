import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Download,
  FileText,
  Calendar,
  Mail,
  Building2,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const engagementData = [
  { company: "EduTech", engagement: 95 },
  { company: "Legal Eagles", engagement: 91 },
  { company: "Global Finance", engagement: 87 },
  { company: "Manufacturing", engagement: 82 },
  { company: "Retail Masters", engagement: 78 },
  { company: "Acme Corp", engagement: 72 },
];

const riskDistribution = [
  { name: "Low Risk", value: 58, color: "hsl(0 0% 85%)" },
  { name: "Medium Risk", value: 12, color: "hsl(0 0% 55%)" },
  { name: "High Risk", value: 2, color: "hsl(0 0% 20%)" },
];

const reportTemplates = [
  {
    id: 1,
    name: "Monthly Engagement Report",
    description: "Company-wise engagement metrics and trends",
    lastGenerated: "Jan 15, 2024",
    format: "PDF",
  },
  {
    id: 2,
    name: "Employee Risk Assessment",
    description: "Risk scores and flagged users by company",
    lastGenerated: "Jan 14, 2024",
    format: "PDF",
  },
  {
    id: 3,
    name: "Quiz Performance Analysis",
    description: "Quiz scores and completion rates",
    lastGenerated: "Jan 12, 2024",
    format: "CSV",
  },
  {
    id: 4,
    name: "Email Delivery Summary",
    description: "Delivery rates, opens, and bounces",
    lastGenerated: "Jan 10, 2024",
    format: "PDF",
  },
];

export default function Reports() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Generate and export platform reports
          </p>
        </div>
        <div className="action-group">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="w-4 h-4" />
            Schedule Report
          </Button>
          <Button size="sm" className="gap-2">
            <FileText className="w-4 h-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Reports This Month</p>
          <p className="text-2xl font-semibold mt-1">24</p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Auto-Scheduled</p>
          <p className="text-2xl font-semibold mt-1">12</p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Avg Engagement</p>
          <p className="text-2xl font-semibold mt-1">84.2%</p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Companies at Risk</p>
          <p className="text-2xl font-semibold mt-1">2</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Company engagement */}
        <div className="lg:col-span-2 chart-container">
          <h3 className="font-semibold mb-4">Company Engagement Rankings</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData} layout="vertical">
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
                  width={100}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0 0% 100%)",
                    border: "1px solid hsl(0 0% 90%)",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [`${value}%`, "Engagement"]}
                />
                <Bar dataKey="engagement" fill="hsl(0 0% 20%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk distribution */}
        <div className="chart-container">
          <h3 className="font-semibold mb-4">Risk Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0 0% 100%)",
                    border: "1px solid hsl(0 0% 90%)",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {riskDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {item.name} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report templates */}
      <div className="module-card">
        <div className="module-card-header flex items-center justify-between">
          <h3 className="font-semibold">Report Templates</h3>
          <Button variant="outline" size="sm">
            Create Template
          </Button>
        </div>
        <div className="divide-y divide-border">
          {reportTemplates.map((report) => (
            <div
              key={report.id}
              className="p-4 flex items-center justify-between hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{report.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {report.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Last generated</p>
                  <p className="text-sm">{report.lastGenerated}</p>
                </div>
                <span className="status-badge status-pending">{report.format}</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="w-3 h-3" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Mail className="w-3 h-3" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
