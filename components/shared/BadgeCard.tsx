import * as React from "react";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface BadgeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  status?: string;
}

export function BadgeCard({ className, title, subtitle, icon, status, children, ...props }: BadgeCardProps) {
  return (
    <Card
      className={cn(
        "bg-navy-800 text-white border-white/10 rounded-[var(--r-lg)] p-[28px_24px] relative transition-all duration-250 hover:-translate-y-1 hover:border-copper/40 shadow-none",
        className
      )}
      {...props}
    >
      {status && (
        <div className="absolute top-5 right-5 flex items-center gap-[6px] font-mono text-[11px] tracking-[0.14em] text-green">
          <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_var(--green)] animate-pulse" />
          {status}
        </div>
      )}
      {icon && (
        <div className="w-[52px] h-[52px] rounded-2xl mb-[18px] bg-gradient-to-br from-copper-tint to-copper/5 border border-copper/25 grid place-items-center text-copper">
          {icon}
        </div>
      )}
      {title && <h4 className="font-display font-bold text-[1.05rem] mb-1">{title}</h4>}
      {subtitle && (
        <span className="block font-mono text-[11px] tracking-[0.16em] uppercase text-copper mb-3">
          {subtitle}
        </span>
      )}
      {children && <div className="text-[0.85rem] text-slate-300">{children}</div>}
    </Card>
  );
}
