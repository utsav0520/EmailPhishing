import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Building2,
  Upload,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const companies = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Technology",
    plan: "Enterprise",
    employees: 245,
    activeUsers: 238,
    engagement: 87,
    riskScore: "low",
    lastTraining: "2 days ago",
    status: "active",
  },
  {
    id: 2,
    name: "Global Finance Ltd",
    industry: "Finance",
    plan: "Professional",
    employees: 520,
    activeUsers: 498,
    engagement: 92,
    riskScore: "low",
    lastTraining: "1 day ago",
    status: "active",
  },
  {
    id: 3,
    name: "HealthCare Plus",
    industry: "Healthcare",
    plan: "Starter",
    employees: 180,
    activeUsers: 45,
    engagement: 25,
    riskScore: "high",
    lastTraining: "2 weeks ago",
    status: "pending",
  },
  {
    id: 4,
    name: "Retail Masters Inc",
    industry: "Retail",
    plan: "Professional",
    employees: 890,
    activeUsers: 756,
    engagement: 78,
    riskScore: "medium",
    lastTraining: "3 days ago",
    status: "active",
  },
  {
    id: 5,
    name: "EduTech Solutions",
    industry: "Education",
    plan: "Enterprise",
    employees: 120,
    activeUsers: 118,
    engagement: 95,
    riskScore: "low",
    lastTraining: "1 day ago",
    status: "active",
  },
  {
    id: 6,
    name: "Manufacturing Pro",
    industry: "Manufacturing",
    plan: "Professional",
    employees: 340,
    activeUsers: 312,
    engagement: 82,
    riskScore: "low",
    lastTraining: "4 days ago",
    status: "active",
  },
  {
    id: 7,
    name: "Legal Eagles LLP",
    industry: "Legal",
    plan: "Enterprise",
    employees: 85,
    activeUsers: 82,
    engagement: 91,
    riskScore: "low",
    lastTraining: "2 days ago",
    status: "active",
  },
  {
    id: 8,
    name: "TechStart Inc",
    industry: "Technology",
    plan: "Starter",
    employees: 28,
    activeUsers: 12,
    engagement: 43,
    riskScore: "medium",
    lastTraining: "1 week ago",
    status: "suspended",
  },
];

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Companies</h1>
          <p className="text-muted-foreground mt-1">
            Manage all onboarded companies and their settings
          </p>
        </div>
        <div className="action-group">
          <Button variant="outline" size="sm" className="gap-2">
            <Upload className="w-4 h-4" />
            Import CSV
          </Button>
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Company
          </Button>
        </div>
      </div>

      {/* Filters row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search companies..."
              className="search-input w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {filteredCompanies.length} companies
          </span>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Companies table */}
      <div className="module-card animate-fade-in">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Industry</th>
                <th>Plan</th>
                <th>Employees</th>
                <th>Engagement</th>
                <th>Risk</th>
                <th>Last Training</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((company) => (
                <tr key={company.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{company.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {company.activeUsers}/{company.employees} active
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-muted-foreground">{company.industry}</td>
                  <td>
                    <span className="status-badge status-pending">
                      {company.plan}
                    </span>
                  </td>
                  <td>{company.employees}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground rounded-full transition-all"
                          style={{ width: `${company.engagement}%` }}
                        />
                      </div>
                      <span className="text-sm">{company.engagement}%</span>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`status-badge ${
                        company.riskScore === "low"
                          ? "risk-low"
                          : company.riskScore === "medium"
                          ? "risk-medium"
                          : "risk-high"
                      }`}
                    >
                      {company.riskScore}
                    </span>
                  </td>
                  <td className="text-muted-foreground">
                    {company.lastTraining}
                  </td>
                  <td>
                    <span
                      className={`status-badge ${
                        company.status === "active"
                          ? "status-active"
                          : company.status === "pending"
                          ? "status-pending"
                          : "status-inactive"
                      }`}
                    >
                      {company.status}
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
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit company</DropdownMenuItem>
                        <DropdownMenuItem>Manage employees</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Suspend company</DropdownMenuItem>
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
          Showing 1-{filteredCompanies.length} of {filteredCompanies.length}{" "}
          companies
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
