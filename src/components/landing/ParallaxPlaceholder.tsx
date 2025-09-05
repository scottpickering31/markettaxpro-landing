"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

type Props = {
  side: "left" | "right";
  speed?: number;
  top?: number;
  width: number;
  height: number;
  rotation?: number;
  className?: string;
  image: string;
};

export default function ParallaxPlaceholder({
  side,
  speed = 0.25,
  top = 80,
  width,
  height,
  rotation = 0,
  className = "",
  image,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const initialTransform = `translateY(0px) rotate(${rotation}deg)`;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.style.transform = initialTransform;
      return;
    }

    // Set immediately for the first paint (no RAF so it happens now)
    const set = () => {
      const y = window.scrollY * speed;
      el.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
    };
    set();

    let rafId = 0;
    const onScroll = () => {
      // throttle to next frame
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        set();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [speed, rotation, initialTransform]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed p-3 bg-amber-200/50 rounded-4xl transform-gpu ${
        side === "left" ? "left-4" : "right-8"
      } z-1 ${className}`}
      style={{
        top,
        willChange: "transform",
        transform: initialTransform,
      }}
    >
      <Image
        src={image}
        alt=""
        width={width}
        height={height}
        className=" rounded-lg"
        priority
      />
    </div>
  );
}
