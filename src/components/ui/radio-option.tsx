import { cn } from "@/lib/utils";

interface RadioOptionProps {
  label: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  name: string;
  value: string;
  suffix?: React.ReactNode;
  className?: string;
}

export const RadioOption = ({
  label,
  checked,
  onChange,
  name,
  value,
  suffix,
  className,
}: RadioOptionProps) => {
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
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={cn(
            "w-5 h-5 min-w-5 min-h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors",
            "focus-within:ring-2 focus-within:ring-accent-red focus-within:ring-offset-2 focus-within:ring-offset-background",
            checked ? "border-accent-red" : "border-muted-foreground group-hover:border-foreground/50"
          )}
        >
          <div
            className={cn(
              "w-2 h-2 shrink-0 rounded-full transition-colors",
              checked ? "bg-accent-red" : "bg-transparent"
            )}
          />
        </div>
        <span className="text-foreground">{label}</span>
      </div>
      {suffix && <span className="text-accent-red">{suffix}</span>}
    </label>
  );
};
