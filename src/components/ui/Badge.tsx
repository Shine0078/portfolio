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
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" &&
          "border-border/40 bg-surface-elevated/55 text-text-secondary shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]",
        variant === "accent" &&
          "border-accent/30 bg-accent/10 text-accent shadow-[0_0_20px_rgb(var(--color-accent)/0.12)]",
        className
      )}
    >
      {children}
    </span>
  );
}
