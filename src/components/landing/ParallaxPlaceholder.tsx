"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  side: "left" | "right";
  speed?: number; // 0.0–1.0 (lower = slower)
  top?: number; // initial top offset in px
  width: number;
  height: number;
  rotation?: number; // degrees for diagonal tilt
  className?: string; // optional extra classes
};

export default function ParallaxPlaceholder({
  side,
  speed = 0.25,
  top = 80,
  width,
  height,
  rotation = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.style.transform = `translateY(0px) rotate(${rotation}deg)`;
      return;
    }

    let rafId = 0;
    const onScroll = () => {
      rafId = window.requestAnimationFrame(() => {
        const y = window.scrollY * speed;
        el.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
      });
    };

    onScroll(); // set initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [speed, rotation]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed p-3 bg-amber-200/50 rounded-4xl ${
        side === "left" ? "left-4" : "right-8"
      } z-1 ${className}`}
      style={{
        top,
        willChange: "transform",
      }}
    >
      <Image
        src="/placeholder.svg"
        alt=""
        width={width}
        height={height}
        className="opacity-70 rounded-lg"
        priority
      />
    </div>
  );
}
