import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", companies: 12, employees: 340 },
  { month: "Feb", companies: 18, employees: 520 },
  { month: "Mar", companies: 24, employees: 780 },
  { month: "Apr", companies: 32, employees: 1100 },
  { month: "May", companies: 45, employees: 1580 },
  { month: "Jun", companies: 58, employees: 2100 },
  { month: "Jul", companies: 72, employees: 2680 },
];

export function GrowthChart() {
  return (
    <div className="chart-container animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold">Platform Growth</h3>
          <p className="text-sm text-muted-foreground">
            Companies and employees over time
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-foreground" />
            <span className="text-sm text-muted-foreground">Companies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground" />
            <span className="text-sm text-muted-foreground">Employees</span>
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(0 0% 92%)"
              vertical={false}
            />
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
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0 0% 100%)",
                border: "1px solid hsl(0 0% 90%)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="companies"
              stroke="hsl(0 0% 10%)"
              strokeWidth={2}
              dot={{ fill: "hsl(0 0% 10%)", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="employees"
              stroke="hsl(0 0% 60%)"
              strokeWidth={2}
              dot={{ fill: "hsl(0 0% 60%)", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
