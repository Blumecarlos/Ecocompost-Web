"use client";

import Image from "next/image";

const images = [
  { src: "/react.webp", alt: "React" },
  { src: "/homis.png", alt: "Homis" },
  { src: "/typescript.svg", alt: "TypeScript" },
  { src: "/reciclagem-logo-1.png", alt: "Reciclagem" }
];

export default function EndlessScroll() {
  return (
    <div className="py-8 bg-gray-800/50 overflow-hidden">
      <div className="flex animate-scroll">
        {[...images, ...images, ...images, ...images, ...images, ...images].map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-16 h-16 relative mx-8"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 