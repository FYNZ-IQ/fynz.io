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

/** Continuous visibility (not once). */
export function useVisible<T extends HTMLElement>(threshold = 0.4) {
  const ref = React.useRef<T>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold });
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    const raf = requestAnimationFrame(update);
    mq.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", update);
    };
  }, []);
  return reduced;
}

/**
 * Cursor parallax: writes --mx / --my (−1…1) onto the element as the pointer
 * moves over it. Pointer devices only; no-ops on touch and reduced motion.
 */
export function useParallax<T extends HTMLElement>() {
  const ref = React.useRef<T>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        const mx = ((e.clientX - r.left) / r.width) * 2 - 1;
        const my = ((e.clientY - r.top) / r.height) * 2 - 1;
        el.style.setProperty("--mx", mx.toFixed(3));
        el.style.setProperty("--my", my.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return ref;
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

/**
 * Adds `.play` while in view so the CSS mini-UI animations run. With `loop`,
 * the animation restarts every `loop` ms for as long as the element is visible,
 * like a looping product illustration. Reduced motion plays once.
 */
export function Playable({
  className,
  children,
  loop,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { loop?: number }) {
  const { ref, visible } = useVisible<HTMLDivElement>(0.45);
  const reduced = useReducedMotion();
  const [started, setStarted] = React.useState(false);
  const [play, setPlay] = React.useState(false);

  React.useEffect(() => {
    if (!visible) return;
    const raf = requestAnimationFrame(() => {
      setStarted(true);
      setPlay(true);
    });
    if (!loop || reduced) return () => cancelAnimationFrame(raf);
    const id = window.setInterval(() => {
      // Drop the class for one frame so CSS animations restart from the top.
      setPlay(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setPlay(true)));
    }, loop);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(id);
    };
  }, [visible, loop, reduced]);

  return (
    <div ref={ref} className={cn("mock", (play || (started && !visible)) && "play", className)} {...rest}>
      {children}
    </div>
  );
}
