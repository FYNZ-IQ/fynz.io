"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/** Observe an element once; returns true after it enters the viewport. */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15, ...options }
    );
    io.observe(node);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { ref, inView };
}

type RevealProps<T extends React.ElementType> = {
  as?: T;
  /** Stagger index; each step adds 80ms. */
  index?: number;
  /** Stagger the element's direct children instead of the element itself. */
  group?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/** Fade + 20px rise, once, on scroll. */
export function Reveal<T extends React.ElementType = "div">({
  as,
  index = 0,
  group = false,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as React.ElementType;
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn(group ? "rv-group" : "rv", inView && "in", className)}
      style={index ? ({ "--i": index } as React.CSSProperties) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Adds `.play` once in view so the CSS mini-UI animations run. */
export function Playable({ className, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  return (
    <div ref={ref} className={cn("mock", inView && "play", className)} {...rest}>
      {children}
    </div>
  );
}
