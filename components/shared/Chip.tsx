import * as React from "react";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
}

export function Chip({ className, variant = "secondary", children, ...props }: ChipProps) {
  return (
    <Badge
      variant={variant}
      className={cn(
        "font-mono text-[11px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-full bg-copper-tint text-copper border-transparent hover:bg-copper-tint/80",
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  );
}
