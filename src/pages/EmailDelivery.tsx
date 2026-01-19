import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Send,
  CheckCircle,
  XCircle,
  Eye,
  AlertTriangle,
  RefreshCw,
  Settings,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const deliveryStats = [
  { day: "Mon", sent: 2400, delivered: 2350, opened: 1680 },
  { day: "Tue", sent: 2100, delivered: 2080, opened: 1520 },
  { day: "Wed", sent: 2800, delivered: 2750, opened: 1980 },
  { day: "Thu", sent: 2600, delivered: 2540, opened: 1820 },
  { day: "Fri", sent: 2200, delivered: 2180, opened: 1560 },
  { day: "Sat", sent: 800, delivered: 790, opened: 420 },
  { day: "Sun", sent: 600, delivered: 595, opened: 310 },
];

const recentEmails = [
  {
    id: 1,
    subject: "Weekly Security Training: Phishing Red Flags",
    recipients: 2450,
    status: "delivered",
    sent: "2 hours ago",
    openRate: 68,
  },
  {
    id: 2,
    subject: "Quiz Reminder: Complete Your Training",
    recipients: 890,
    status: "sending",
    sent: "15 min ago",
    openRate: null,
  },
  {
    id: 3,
    subject: "New Training Available: Social Engineering",
    recipients: 1200,
    status: "failed",
    sent: "1 day ago",
    openRate: null,
    failedCount: 48,
  },
  {
    id: 4,
    subject: "Weekly Security Training: Password Security",
    recipients: 2380,
    status: "delivered",
    sent: "1 week ago",
    openRate: 72,
  },
];

export default function EmailDelivery() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Email Delivery</h1>
          <p className="text-muted-foreground mt-1">
            Monitor email delivery, open rates, and manage sender reputation
          </p>
        </div>
        <div className="action-group">
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="w-4 h-4" />
            SMTP Settings
          </Button>
          <Button size="sm" className="gap-2">
            <Send className="w-4 h-4" />
            Send Test Email
          </Button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <Send className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Sent Today</span>
          </div>
          <p className="text-2xl font-semibold">2,847</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Delivered</span>
          </div>
          <p className="text-2xl font-semibold">2,795</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Opened</span>
          </div>
          <p className="text-2xl font-semibold">1,936</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Bounced</span>
          </div>
          <p className="text-2xl font-semibold">52</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Spam Score</span>
          </div>
          <p className="text-2xl font-semibold">1.2</p>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Delivery trend */}
        <div className="chart-container">
          <h3 className="font-semibold mb-4">Delivery Trend (Last 7 Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={deliveryStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 92%)" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0 0% 100%)",
                    border: "1px solid hsl(0 0% 90%)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sent"
                  stroke="hsl(0 0% 10%)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="delivered"
                  stroke="hsl(0 0% 40%)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="opened"
                  stroke="hsl(0 0% 70%)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Delivery breakdown */}
        <div className="chart-container">
          <h3 className="font-semibold mb-4">Daily Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deliveryStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 92%)" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0 0% 100%)",
                    border: "1px solid hsl(0 0% 90%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="delivered" fill="hsl(0 0% 20%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="opened" fill="hsl(0 0% 60%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Sender reputation */}
      <div className="module-card mb-6">
        <div className="module-card-header">
          <h3 className="font-semibold">Sender Reputation</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Domain Health</p>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-foreground rounded-full" style={{ width: "92%" }} />
                </div>
                <span className="font-semibold">92%</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">SPF Status</p>
              <span className="status-badge status-active">Configured</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">DKIM Status</p>
              <span className="status-badge status-active">Configured</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">DMARC Status</p>
              <span className="status-badge status-active">Configured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent emails table */}
      <div className="module-card">
        <div className="module-card-header flex items-center justify-between">
          <h3 className="font-semibold">Recent Emails</h3>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Recipients</th>
                <th>Status</th>
                <th>Open Rate</th>
                <th>Sent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recentEmails.map((email) => (
                <tr key={email.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{email.subject}</span>
                    </div>
                  </td>
                  <td>{email.recipients.toLocaleString()}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        email.status === "delivered"
                          ? "status-active"
                          : email.status === "sending"
                          ? "status-pending"
                          : "bg-foreground text-background"
                      }`}
                    >
                      {email.status}
                    </span>
                    {email.failedCount && (
                      <span className="text-xs text-muted-foreground ml-2">
                        ({email.failedCount} failed)
                      </span>
                    )}
                  </td>
                  <td>
                    {email.openRate ? (
                      <span>{email.openRate}%</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="text-muted-foreground">{email.sent}</td>
                  <td>
                    {email.status === "failed" && (
                      <Button variant="outline" size="sm" className="gap-1">
                        <RefreshCw className="w-3 h-3" />
                        Retry
                      </Button>
                    )}
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
