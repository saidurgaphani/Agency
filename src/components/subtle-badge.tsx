import { cn } from "@/lib/utils";

interface SubtleBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const SubtleBadge = ({ children, icon, className }: SubtleBadgeProps) => {
  return (
    <div
      className={cn(
        "h-7 px-3.5 bg-muted-foreground/20 rounded-full",
        "outline outline-1 outline-offset-[-1px] outline-foreground/20",
        "backdrop-blur-md",
        "inline-flex justify-center items-center gap-2",
        className
      )}
    >
      {icon && <span className="w-4 h-4 text-foreground">{icon}</span>}
      <span className="text-muted-foreground text-sm font-normal leading-4">
        {children}
      </span>
    </div>
  );
};
