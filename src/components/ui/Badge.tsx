import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-border/60 text-text-secondary",
        variant === "accent" &&
          "bg-accent/10 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
