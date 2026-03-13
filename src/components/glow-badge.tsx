import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlowBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const GlowBadge = ({ children, icon, className }: GlowBadgeProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isListening, setIsListening] = React.useState(false);
  const [circles, setCircles] = React.useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    fadeState: "in" | "out" | null;
  }>>([]);
  const lastAddedRef = React.useRef(0);

  const createCircle = React.useCallback((x: number, y: number) => {
    const width = containerRef.current?.offsetWidth || 0;
    const xPos = x / width;
    const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${xPos * 100
      }%)`;

    setCircles((prev) => [
      ...prev,
      { id: Date.now(), x, y, color, fadeState: null },
    ]);
  }, []);

  const handlePointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isListening) return;

      const currentTime = Date.now();
      if (currentTime - lastAddedRef.current > 100) {
        lastAddedRef.current = currentTime;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        createCircle(x, y);
      }
    },
    [isListening, createCircle]
  );

  const handlePointerEnter = React.useCallback(() => {
    setIsListening(true);
  }, []);

  const handlePointerLeave = React.useCallback(() => {
    setIsListening(false);
  }, []);

  React.useEffect(() => {
    circles.forEach((circle) => {
      if (!circle.fadeState) {
        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c) =>
              c.id === circle.id ? { ...c, fadeState: "in" } : c
            )
          );
        }, 0);

        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c) =>
              c.id === circle.id ? { ...c, fadeState: "out" } : c
            )
          );
        }, 1000);

        setTimeout(() => {
          setCircles((prev) => prev.filter((c) => c.id !== circle.id));
        }, 2200);
      }
    });
  }, [circles]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative isolate px-4 py-2 rounded-full",
        "text-foreground font-semibold text-sm leading-6",
        "backdrop-blur-lg bg-[rgba(43,55,80,0.1)]",
        "inline-flex justify-center items-center gap-2 text-center",
        "overflow-hidden cursor-default",
        "before:content-[''] before:absolute before:inset-0",
        "before:rounded-[inherit] before:pointer-events-none",
        "before:z-[1]",
        "before:shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)]",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        "--circle-start": "#a0d9f8",
        "--circle-end": "#3a5bbf",
      } as React.CSSProperties}
    >
      {circles.map(({ id, x, y, color, fadeState }) => (
        <div
          key={id}
          className={cn(
            "absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full",
            "blur-lg pointer-events-none z-[-1] transition-opacity duration-300",
            fadeState === "in" && "opacity-75",
            fadeState === "out" && "opacity-0 duration-[1.2s]",
            !fadeState && "opacity-0"
          )}
          style={{
            left: x,
            top: y,
            background: color,
          }}
        />
      ))}
      {icon || <Sparkles className="w-4 h-4 text-foreground relative z-10" />}
      <span className="text-center text-foreground relative z-10">
        {children}
      </span>
    </div>
  );
};
