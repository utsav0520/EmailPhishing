import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  Download,
  MoreHorizontal,
  User,
  AlertTriangle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const employees = [
  {
    id: 1,
    name: "John Anderson",
    email: "john.anderson@acme.com",
    company: "Acme Corporation",
    status: "active",
    completion: 92,
    quizScore: 88,
    lastOpened: "2 hours ago",
    riskFlag: false,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    email: "sarah.m@globalfinance.com",
    company: "Global Finance Ltd",
    status: "active",
    completion: 100,
    quizScore: 95,
    lastOpened: "1 day ago",
    riskFlag: false,
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@healthcare.org",
    company: "HealthCare Plus",
    status: "inactive",
    completion: 15,
    quizScore: 42,
    lastOpened: "3 weeks ago",
    riskFlag: true,
  },
  {
    id: 4,
    name: "Emily Roberts",
    email: "emily.r@retailmasters.com",
    company: "Retail Masters Inc",
    status: "active",
    completion: 78,
    quizScore: 72,
    lastOpened: "5 hours ago",
    riskFlag: false,
  },
  {
    id: 5,
    name: "David Kim",
    email: "d.kim@edutech.io",
    company: "EduTech Solutions",
    status: "active",
    completion: 100,
    quizScore: 100,
    lastOpened: "3 hours ago",
    riskFlag: false,
  },
  {
    id: 6,
    name: "Jessica Taylor",
    email: "j.taylor@acme.com",
    company: "Acme Corporation",
    status: "active",
    completion: 85,
    quizScore: 80,
    lastOpened: "1 day ago",
    riskFlag: false,
  },
  {
    id: 7,
    name: "Robert Wilson",
    email: "r.wilson@manufacturing.com",
    company: "Manufacturing Pro",
    status: "active",
    completion: 65,
    quizScore: 58,
    lastOpened: "4 days ago",
    riskFlag: true,
  },
  {
    id: 8,
    name: "Amanda Garcia",
    email: "a.garcia@legaleagles.com",
    company: "Legal Eagles LLP",
    status: "active",
    completion: 95,
    quizScore: 92,
    lastOpened: "6 hours ago",
    riskFlag: false,
  },
];

export default function Employees() {
  const [searchQuery, setSearchQuery] = useState("");
  const [companyFilter, setCompanyFilter] = useState("all");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCompany =
      companyFilter === "all" || employee.company === companyFilter;
    return matchesSearch && matchesCompany;
  });

  const uniqueCompanies = [...new Set(employees.map((e) => e.company))];

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Employees</h1>
          <p className="text-muted-foreground mt-1">
            View and manage employee training progress
          </p>
        </div>
        <div className="action-group">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Total Employees</p>
          <p className="text-2xl font-semibold mt-1">2,680</p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Active</p>
          <p className="text-2xl font-semibold mt-1">2,456</p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Avg Completion</p>
          <p className="text-2xl font-semibold mt-1">84.2%</p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">At Risk</p>
          <p className="text-2xl font-semibold mt-1">47</p>
        </div>
      </div>

      {/* Filters row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="search-input w-72"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="search-input text-sm"
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
          >
            <option value="all">All Companies</option>
            {uniqueCompanies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            More Filters
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">
          {filteredEmployees.length} employees
        </span>
      </div>

      {/* Employees table */}
      <div className="module-card animate-fade-in">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Company</th>
                <th>Status</th>
                <th>Completion</th>
                <th>Quiz Score</th>
                <th>Last Opened</th>
                <th>Risk</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {employee.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-muted-foreground">{employee.company}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        employee.status === "active"
                          ? "status-active"
                          : "status-inactive"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground rounded-full"
                          style={{ width: `${employee.completion}%` }}
                        />
                      </div>
                      <span className="text-sm">{employee.completion}%</span>
                    </div>
                  </td>
                  <td>
                    <span
                      className={
                        employee.quizScore >= 80
                          ? "text-foreground font-medium"
                          : employee.quizScore >= 60
                          ? "text-muted-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {employee.quizScore}%
                    </span>
                  </td>
                  <td className="text-muted-foreground">
                    {employee.lastOpened}
                  </td>
                  <td>
                    {employee.riskFlag ? (
                      <div className="flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-sm font-medium">Flagged</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">—</span>
                    )}
                  </td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>View training history</DropdownMenuItem>
                        <DropdownMenuItem>Send reminder</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mark inactive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-muted-foreground">
          Showing 1-{filteredEmployees.length} of {employees.length} employees
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
