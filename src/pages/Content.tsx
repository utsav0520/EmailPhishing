import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  FileText,
  Calendar,
  MoreHorizontal,
  Eye,
  Edit,
  Copy,
  Archive,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const lessons = [
  {
    id: 1,
    title: "Phishing Email Red Flags",
    category: "Email Security",
    difficulty: "Beginner",
    status: "sent",
    scheduledDate: "Jan 15, 2024",
    openRate: 72,
    completionRate: 68,
    quizQuestions: 5,
  },
  {
    id: 2,
    title: "Suspicious Link Detection",
    category: "Web Safety",
    difficulty: "Intermediate",
    status: "scheduled",
    scheduledDate: "Jan 22, 2024",
    openRate: null,
    completionRate: null,
    quizQuestions: 4,
  },
  {
    id: 3,
    title: "Social Engineering Tactics",
    category: "Awareness",
    difficulty: "Advanced",
    status: "draft",
    scheduledDate: null,
    openRate: null,
    completionRate: null,
    quizQuestions: 6,
  },
  {
    id: 4,
    title: "Password Security Best Practices",
    category: "Account Security",
    difficulty: "Beginner",
    status: "sent",
    scheduledDate: "Jan 8, 2024",
    openRate: 85,
    completionRate: 79,
    quizQuestions: 5,
  },
  {
    id: 5,
    title: "Identifying Fake Websites",
    category: "Web Safety",
    difficulty: "Intermediate",
    status: "sent",
    scheduledDate: "Jan 1, 2024",
    openRate: 78,
    completionRate: 71,
    quizQuestions: 4,
  },
  {
    id: 6,
    title: "Mobile Device Security",
    category: "Device Security",
    difficulty: "Beginner",
    status: "archived",
    scheduledDate: "Dec 18, 2023",
    openRate: 65,
    completionRate: 58,
    quizQuestions: 5,
  },
];

export default function Content() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch = lesson.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || lesson.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "sent":
        return "status-active";
      case "scheduled":
        return "status-pending";
      case "draft":
        return "bg-secondary text-secondary-foreground";
      case "archived":
        return "status-inactive";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1>Content Management</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage weekly training lessons
          </p>
        </div>
        <div className="action-group">
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Create Lesson
          </Button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Total Lessons</p>
          <p className="text-2xl font-semibold mt-1">{lessons.length}</p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Sent</p>
          <p className="text-2xl font-semibold mt-1">
            {lessons.filter((l) => l.status === "sent").length}
          </p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Scheduled</p>
          <p className="text-2xl font-semibold mt-1">
            {lessons.filter((l) => l.status === "scheduled").length}
          </p>
        </div>
        <div className="kpi-card">
          <p className="text-sm text-muted-foreground">Avg Completion</p>
          <p className="text-2xl font-semibold mt-1">72%</p>
        </div>
      </div>

      {/* Filters row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search lessons..."
              className="search-input w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="search-input text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="sent">Sent</option>
            <option value="archived">Archived</option>
          </select>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            More Filters
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">
          {filteredLessons.length} lessons
        </span>
      </div>

      {/* Content cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="module-card hover-lift animate-fade-in"
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className={`status-badge ${getStatusStyle(lesson.status)}`}>
                    {lesson.status}
                  </span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <Eye className="w-4 h-4" /> Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Edit className="w-4 h-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Copy className="w-4 h-4" /> Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2">
                      <Archive className="w-4 h-4" /> Archive
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <h3 className="font-semibold mb-1">{lesson.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {lesson.category} • {lesson.difficulty}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {lesson.scheduledDate || "Not scheduled"}
                </div>
                <div>{lesson.quizQuestions} questions</div>
              </div>

              {lesson.status === "sent" && (
                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Open Rate
                      </p>
                      <p className="text-lg font-semibold">{lesson.openRate}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Completion
                      </p>
                      <p className="text-lg font-semibold">
                        {lesson.completionRate}%
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
