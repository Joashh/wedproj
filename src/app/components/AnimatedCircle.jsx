"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCircles() {
  const containerRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      circlesRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const colors = [
    "rgb(217,169,167)",
    "rgb(231,183,181)",
    "rgb(242,206,206)",
    "rgb(246,224,208)",
    "rgb(237,217,193)",
  ];

  return (
    <div ref={containerRef} className="flex justify-center gap-6 py-4">
      {colors.map((color, i) => (
        <div
          key={i}
          ref={(el) => (circlesRef.current[i] = el)}
          className="w-12 h-12 rounded-full shadow-lg border-2 border-white"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
