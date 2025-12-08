"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeHero() {
  const outerRef = useRef<HTMLDivElement | null>(null); // scroll rotation + scale
  const innerRef = useRef<HTMLDivElement | null>(null); // shaking
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state: larger and tilted
      gsap.set(outerRef.current, {
        scale: 2,
        rotate: -15,
        transformOrigin: "50% 60%",
      });

      // Scroll animation: rotate more while scrolling down and scale down smoothly
      gsap.to(outerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          // animate while the section scrolls through the viewport
          end: "bottom top",
          scrub: 0.6,
        },
        // final visual state while scrolling down
        scale: 0.85,
        // rotate to a larger angle as the user scrolls down
        rotate: 40,
        ease: "none",
      });

      // Keep a subtle infinite shake on the inner cup for life; this remains
      // but is less aggressive visually once scaled down.
      gsap.to(innerRef.current, {
        x: 6,
        y: -4,
        rotateZ: 1.5,
        duration: 2.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[200vh] w-full flex items-center justify-center bg-white"
    >
      {/* OUTER WRAPPER (Scroll-controlled) */}
      <div ref={outerRef} className="relative w-[350px] h-[350px] -mt-50">

        {/* INNER WRAPPER (Shake-controlled) */}
        <div ref={innerRef} className="w-full h-full">
          <Image
            src="/coffee.webp"
            alt="Coffee Cup"
            fill
            className="object-contain pointer-events-none"
          />
        </div>

      </div>
    </section>
  );
}
