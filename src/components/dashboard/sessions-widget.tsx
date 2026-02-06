import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { sessionsData } from "@/data/dashboard-mock-data";
import { cn } from "@/lib/utils";

interface SessionsWidgetProps {
  className?: string;
}

export const SessionsWidget = ({ className }: SessionsWidgetProps) => {
  return (
    <div className={cn("relative p-6 rounded-3xl bg-white/5 border border-border backdrop-blur-sm shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.1)]", className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-foreground text-base font-semibold">Total Sessions</h3>
          <p className="text-muted-foreground text-sm">This week</p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <span className="text-foreground text-3xl font-semibold">12.1K</span>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-emerald-400 text-sm font-medium">+8.7%</span>
            <span className="text-muted-foreground text-xs">vs last week</span>
          </div>
        </div>

        <div className="h-[80px] w-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sessionsData}>
              <defs>
                <linearGradient id="sessionsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(0, 0%, 70%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(0, 0%, 70%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(0, 0%, 70%)"
                strokeWidth={2}
                fill="url(#sessionsGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
