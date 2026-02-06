import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueData } from "@/data/dashboard-mock-data";

export const RevenueChart = () => {
  return (
    <div className="relative p-6 rounded-3xl bg-white/5 border border-border backdrop-blur-sm shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.1)] h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-foreground text-lg font-semibold">Revenue Overview</h3>
          <p className="text-muted-foreground text-sm">Monthly revenue vs expenses</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white" />
            <span className="text-muted-foreground text-sm">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-500" />
            <span className="text-muted-foreground text-sm">Expenses</span>
          </div>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(0, 0%, 100%)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="hsl(0, 0%, 100%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(0, 0%, 50%)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="hsl(0, 0%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 100% / 0.05)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(0 0% 70%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(0 0% 70%)", fontSize: 12 }}
              width={35}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0 0% 10%)",
                border: "1px solid hsl(0 0% 100% / 0.1)",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
              labelStyle={{ color: "hsl(0 0% 100%)" }}
              itemStyle={{ color: "hsl(0 0% 70%)" }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(0, 0%, 100%)"
              strokeWidth={2}
              fill="url(#revenueGradient)"
              name="Revenue"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="hsl(0, 0%, 50%)"
              strokeWidth={2}
              fill="url(#expensesGradient)"
              name="Expenses"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
