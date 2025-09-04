"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const items = [
  { src: "/ebay-600.png", alt: "eBay" },
  { src: "/etsy-600.jpg", alt: "Etsy" },
  { src: "/vinted-600.png", alt: "Vinted" },
  { src: "/depop-600.png", alt: "Depop" },
  { src: "/not-on-the-high-street-600.png", alt: "Not on the high street" },
];

export default function Carousel({
  height = 100,
  speed = 40,
  pauseOnHover = true,
}: {
  height?: number;
  speed?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div className="relative w-full py-4 overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

      <Marquee speed={speed} pauseOnHover={pauseOnHover} autoFill>
        {items.map((it, i) => (
          <div
            key={`${it.alt}-${i}`}
            className="flex items-center mx-6"
            style={{ height }}
            aria-label={it.alt}
          >
            <Image
              src={it.src}
              alt={it.alt}
              width={height}
              height={height}
              className="object-contain opacity-90 hover:opacity-100 transition"
              priority={i < 4}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
