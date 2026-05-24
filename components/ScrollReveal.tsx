"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** How much of the element must be visible before it triggers (0–1). Default 0.15 */
  threshold?: number;
  /** Delay in ms before the animation starts. Default 0 */
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.15,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s ease ${delay}ms`,
        willChange: "opacity",
      }}
    >
      {children}
    </div>
  );
}
