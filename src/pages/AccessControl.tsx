import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Plus,
  Search,
  MoreHorizontal,
  User,
  Key,
  Clock,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const admins = [
  {
    id: 1,
    name: "Alex Thompson",
    email: "alex@eamt.io",
    role: "Super Admin",
    permissions: ["Full Access"],
    lastLogin: "2 hours ago",
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@eamt.io",
    role: "Internal Admin",
    permissions: ["Companies", "Employees", "Content", "Reports"],
    lastLogin: "5 hours ago",
    status: "active",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@eamt.io",
    role: "Support Agent",
    permissions: ["Companies (Read)", "Employees (Read)", "Support"],
    lastLogin: "1 day ago",
    status: "active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@eamt.io",
    role: "Internal Admin",
    permissions: ["Content", "Email Delivery", "Reports"],
    lastLogin: "3 days ago",
    status: "inactive",
  },
];

const auditLog = [
  {
    id: 1,
    action: "Company suspended",
    user: "Alex Thompson",
    target: "TechStart Inc",
    ip: "192.168.1.45",
    timestamp: "Jan 19, 2024 14:32",
  },
  {
    id: 2,
    action: "New lesson created",
    user: "Sarah Johnson",
    target: "Social Engineering Tactics",
    ip: "192.168.1.23",
    timestamp: "Jan 19, 2024 11:15",
  },
  {
    id: 3,
    action: "User role updated",
    user: "Alex Thompson",
    target: "Emily Davis",
    ip: "192.168.1.45",
    timestamp: "Jan 18, 2024 16:45",
  },
  {
    id: 4,
    action: "Report exported",
    user: "Michael Chen",
    target: "Monthly Engagement Report",
    ip: "192.168.1.67",
    timestamp: "Jan 18, 2024 09:22",
  },
];

export default function AccessControl() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAdmins = admins.filter((admin) =>
    admin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Access Control</h1>
          <p className="text-muted-foreground mt-1">
            Manage admin roles, permissions, and audit logs
          </p>
        </div>
        <div className="action-group">
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Admin
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Total Admins</p>
          <p className="text-2xl font-semibold mt-1">{admins.length}</p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Super Admins</p>
          <p className="text-2xl font-semibold mt-1">
            {admins.filter((a) => a.role === "Super Admin").length}
          </p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Internal Admins</p>
          <p className="text-2xl font-semibold mt-1">
            {admins.filter((a) => a.role === "Internal Admin").length}
          </p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Support Agents</p>
          <p className="text-2xl font-semibold mt-1">
            {admins.filter((a) => a.role === "Support Agent").length}
          </p>
        </div>
      </div>

      {/* Admins table */}
      <div className="module-card mb-6">
        <div className="module-card-header flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <h3 className="font-semibold">Admin Users</h3>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search admins..."
              className="search-input w-48"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Admin</th>
                <th>Role</th>
                <th>Permissions</th>
                <th>Last Login</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.map((admin) => (
                <tr key={admin.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                        <User className="w-4 h-4 text-background" />
                      </div>
                      <div>
                        <p className="font-medium">{admin.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {admin.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`status-badge ${
                        admin.role === "Super Admin"
                          ? "status-active"
                          : admin.role === "Internal Admin"
                          ? "status-pending"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {admin.role}
                    </span>
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {admin.permissions.slice(0, 2).map((perm) => (
                        <span
                          key={perm}
                          className="text-xs bg-secondary px-2 py-0.5 rounded"
                        >
                          {perm}
                        </span>
                      ))}
                      {admin.permissions.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{admin.permissions.length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-muted-foreground">{admin.lastLogin}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        admin.status === "active"
                          ? "status-active"
                          : "status-inactive"
                      }`}
                    >
                      {admin.status}
                    </span>
                  </td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit permissions</DropdownMenuItem>
                        <DropdownMenuItem>Reset password</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit log */}
      <div className="module-card">
        <div className="module-card-header flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <h3 className="font-semibold">Audit Log</h3>
          </div>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>User</th>
                <th>Target</th>
                <th>IP Address</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {auditLog.map((log) => (
                <tr key={log.id}>
                  <td className="font-medium">{log.action}</td>
                  <td className="text-muted-foreground">{log.user}</td>
                  <td>{log.target}</td>
                  <td className="font-mono text-sm text-muted-foreground">
                    {log.ip}
                  </td>
                  <td className="text-muted-foreground">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
