import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Lock,
  Shield,
  Key,
  Globe,
  AlertTriangle,
  CheckCircle,
  Monitor,
} from "lucide-react";

const loginAlerts = [
  {
    id: 1,
    user: "Alex Thompson",
    location: "New York, US",
    ip: "192.168.1.45",
    device: "Chrome on macOS",
    time: "2 hours ago",
    status: "success",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    location: "London, UK",
    ip: "10.0.0.123",
    device: "Firefox on Windows",
    time: "5 hours ago",
    status: "success",
  },
  {
    id: 3,
    user: "Unknown",
    location: "Moscow, RU",
    ip: "203.0.113.42",
    device: "Unknown",
    time: "1 day ago",
    status: "blocked",
  },
];

export default function Security() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Security & Compliance</h1>
          <p className="text-muted-foreground mt-1">
            Configure security settings and monitor access
          </p>
        </div>
      </div>

      {/* Security status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">Security Score</span>
          </div>
          <p className="text-2xl font-semibold">92/100</p>
          <p className="text-sm text-muted-foreground mt-1">Excellent</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <Key className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">2FA Enabled</span>
          </div>
          <p className="text-2xl font-semibold">4/4</p>
          <p className="text-sm text-muted-foreground mt-1">All admins</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">Blocked Attempts</span>
          </div>
          <p className="text-2xl font-semibold">12</p>
          <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
        </div>
        <div className="kpi-card">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">GDPR Status</span>
          </div>
          <p className="text-2xl font-semibold">Compliant</p>
          <p className="text-sm text-muted-foreground mt-1">Last audit: Jan 10</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Authentication */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <Key className="w-5 h-5" />
              <h3 className="font-semibold">Authentication</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Require 2FA for all admins</p>
                  <p className="text-sm text-muted-foreground">
                    Enforce two-factor authentication
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Session timeout</p>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out inactive users
                  </p>
                </div>
                <select className="search-input w-40">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>4 hours</option>
                  <option>8 hours</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Password requirements</p>
                  <p className="text-sm text-muted-foreground">
                    Minimum 12 characters, mixed case, numbers
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </div>
          </div>

          {/* IP Restrictions */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <h3 className="font-semibold">IP Restrictions</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable IP whitelisting</p>
                  <p className="text-sm text-muted-foreground">
                    Only allow access from approved IPs
                  </p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label>Allowed IP Addresses</Label>
                <div className="flex gap-2">
                  <Input placeholder="Enter IP address or range" className="flex-1" />
                  <Button variant="outline">Add</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Support for single IPs (192.168.1.1) and CIDR notation (192.168.1.0/24)
                </p>
              </div>
            </div>
          </div>

          {/* Login alerts */}
          <div className="module-card">
            <div className="module-card-header flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                <h3 className="font-semibold">Login Activity</h3>
              </div>
              <Button variant="ghost" size="sm">
                View all
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Location</th>
                    <th>Device</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loginAlerts.map((login) => (
                    <tr key={login.id}>
                      <td>
                        <div>
                          <p className="font-medium">{login.user}</p>
                          <p className="text-xs text-muted-foreground font-mono">
                            {login.ip}
                          </p>
                        </div>
                      </td>
                      <td className="text-muted-foreground">{login.location}</td>
                      <td className="text-muted-foreground">{login.device}</td>
                      <td className="text-muted-foreground">{login.time}</td>
                      <td>
                        <span
                          className={`status-badge ${
                            login.status === "success"
                              ? "status-active"
                              : "risk-high"
                          }`}
                        >
                          {login.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Data Encryption */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <h3 className="font-semibold">Data Encryption</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Data at rest</span>
                <span className="status-badge status-active">AES-256</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Data in transit</span>
                <span className="status-badge status-active">TLS 1.3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Backups</span>
                <span className="status-badge status-active">Encrypted</span>
              </div>
            </div>
          </div>

          {/* GDPR Controls */}
          <div className="module-card">
            <div className="module-card-header flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <h3 className="font-semibold">GDPR Controls</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Data export requests</p>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </div>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Deletion requests</p>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </div>
                <span className="font-semibold">1</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Process Requests
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="module-card">
            <div className="module-card-header">
              <h3 className="font-semibold">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                Force password reset (all)
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                Revoke all sessions
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                Download audit log
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                Run security scan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
