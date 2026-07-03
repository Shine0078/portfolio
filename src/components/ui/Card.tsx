import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_0_0_1px_rgb(var(--color-accent)/0.08),0_22px_80px_rgb(0_0_0/0.42),0_0_44px_rgb(var(--color-accent)/0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}
