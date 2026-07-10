"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export interface StaggerGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  stagger?: number;
  duration?: number;
  distance?: number;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.15,
  duration = 0.6,
  distance = 30,
  ...props
}: StaggerGroupProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced || !container.current) return;

      const elements = container.current.children;
      if (!elements.length) return;

      gsap.fromTo(
        elements,
        {
          autoAlpha: 0,
          y: distance,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className} {...props}>
      {children}
    </div>
  );
}
