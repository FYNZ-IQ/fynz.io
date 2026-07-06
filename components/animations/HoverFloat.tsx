"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export interface HoverFloatProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  yOffset?: number;
  duration?: number;
  delay?: number;
}

export function HoverFloat({
  children,
  className,
  yOffset = -15,
  duration = 3,
  delay = 0,
  ...props
}: HoverFloatProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced || !container.current) return;

      gsap.to(container.current, {
        y: yOffset,
        duration,
        delay,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={cn("will-change-transform", className)} {...props}>
      {children}
    </div>
  );
}
