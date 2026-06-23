"use client";

import { type ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
}

export function MagneticButton({
  children,
  className,
  strength,
  radius,
}: MagneticButtonProps) {
  const magneticRef = useMagnetic<HTMLSpanElement>({ strength, radius });
  return (
    <span
      ref={magneticRef}
      className={cn(
        "inline-block will-change-transform",
        className
      )}
      style={{ transition: "transform 0.3s ease-out" }}
    >
      {children}
    </span>
  );
}
