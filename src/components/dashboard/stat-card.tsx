import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  icon?: React.ReactNode;
}

export const StatCard = ({ title, value, change, trend, icon }: StatCardProps) => {
  const isPositive = trend === "up";

  return (
    <div className="relative p-6 rounded-3xl bg-white/5 border border-border backdrop-blur-sm shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.1)]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm font-medium">{title}</span>
          <span className="text-foreground text-3xl font-semibold tracking-tight">{value}</span>
        </div>
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center gap-2">
        <div
          className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
            isPositive 
              ? "bg-emerald-500/10 text-emerald-400" 
              : "bg-red-500/10 text-red-400"
          )}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {Math.abs(change)}%
        </div>
        <span className="text-muted-foreground text-xs">vs last month</span>
      </div>
    </div>
  );
};
