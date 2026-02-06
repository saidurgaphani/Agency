import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlowBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const GlowBadge = ({ children, icon, className }: GlowBadgeProps) => {
  return (
    <div
      className={cn(
        "px-4 py-2 bg-gradient-to-r from-[hsl(var(--badge-from))] via-[hsl(var(--badge-via))] to-[hsl(var(--badge-to))] rounded-full",
        "[box-shadow:0px_0px_16px_1px_hsl(var(--badge-glow)),inset_0px_1px_4px_0.5px_hsl(var(--badge-inset)),inset_0px_-1px_4px_0.5px_hsl(var(--badge-inset))]",
        "outline outline-1 outline-offset-[-1px] outline-[hsl(var(--badge-border))]",
        "inline-flex justify-center items-center gap-2 text-center",
        className
      )}
    >
      {icon || <Sparkles className="w-4 h-4 text-foreground" />}
      <span className="text-center text-foreground text-sm font-semibold leading-6">
        {children}
      </span>
    </div>
  );
};
