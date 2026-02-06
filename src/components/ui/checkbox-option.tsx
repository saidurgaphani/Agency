import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxOptionProps {
  label: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  suffix?: React.ReactNode;
  className?: string;
}

export const CheckboxOption = ({
  label,
  checked,
  onChange,
  suffix,
  className,
}: CheckboxOptionProps) => {
  return (
    <label
      className={cn(
        "flex items-center cursor-pointer group",
        suffix ? "justify-between" : "space-x-3",
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={cn(
            "w-5 h-5 min-w-5 min-h-5 shrink-0 border-2 rounded flex items-center justify-center transition-colors",
            "focus-within:ring-2 focus-within:ring-accent-red focus-within:ring-offset-2 focus-within:ring-offset-background",
            checked
              ? "border-accent-red bg-accent-red"
              : "border-muted-foreground group-hover:border-foreground/50"
          )}
        >
          {checked && <Check className="w-3 h-3 text-foreground" />}
        </div>
        <span className="text-foreground">{label}</span>
      </div>
      {suffix && <span className="text-accent-red">{suffix}</span>}
    </label>
  );
};
