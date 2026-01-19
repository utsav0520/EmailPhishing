import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentCompanies = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Technology",
    employees: 245,
    status: "active",
    engagement: 87,
    joined: "2 days ago",
  },
  {
    id: 2,
    name: "Global Finance Ltd",
    industry: "Finance",
    employees: 520,
    status: "active",
    engagement: 92,
    joined: "5 days ago",
  },
  {
    id: 3,
    name: "HealthCare Plus",
    industry: "Healthcare",
    employees: 180,
    status: "pending",
    engagement: 0,
    joined: "1 week ago",
  },
  {
    id: 4,
    name: "Retail Masters Inc",
    industry: "Retail",
    employees: 890,
    status: "active",
    engagement: 78,
    joined: "1 week ago",
  },
  {
    id: 5,
    name: "EduTech Solutions",
    industry: "Education",
    employees: 120,
    status: "active",
    engagement: 95,
    joined: "2 weeks ago",
  },
];

export function RecentCompanies() {
  return (
    <div className="module-card animate-fade-in">
      <div className="module-card-header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          <h3 className="font-semibold">Recently Onboarded</h3>
        </div>
        <Link to="/companies">
          <Button variant="ghost" size="sm" className="gap-1">
            View all
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Industry</th>
              <th>Employees</th>
              <th>Status</th>
              <th>Engagement</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {recentCompanies.map((company) => (
              <tr key={company.id}>
                <td className="font-medium">{company.name}</td>
                <td className="text-muted-foreground">{company.industry}</td>
                <td>{company.employees}</td>
                <td>
                  <span
                    className={`status-badge ${
                      company.status === "active"
                        ? "status-active"
                        : "status-pending"
                    }`}
                  >
                    {company.status}
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground rounded-full"
                        style={{ width: `${company.engagement}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {company.engagement}%
                    </span>
                  </div>
                </td>
                <td className="text-muted-foreground">{company.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
