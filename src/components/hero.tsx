"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mochaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {



      gsap.to(outerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top +=300 top",
          end: "bottom top",
          scrub: 0.6,
        },
        scale: 0.85,
        rotate: 40,
        y: 450,
        ease: "none",
      });

      // Mocha fade & drop
      gsap.fromTo(mochaRef.current,
        { opacity: 0, y: -100 },
        {
          opacity: 100,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top+=200",
            end: "center top",
            scrub: 1.2,
          },
          ease: "power1.out",
        }
      );

      // Shake animation
      gsap.to(innerRef.current, {
        x: 6, y: -4, rotateZ: 1.5,
        duration: 2.6, repeat: -1, yoyo: true,
        ease: "sine.inOut",
      });

    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[170vh] w-full flex items-center justify-center bg-white relative"
    >

      {/* Faded Hero BG */}
      <div ref={mochaRef} className="absolute top-[10%] w-full flex justify-center">
      </div>

      {/* Coffee Cup */}
      <div
        ref={outerRef}
        className="relative w-[350px] h-[250px]"
        style={{
          transform: "scale(2.7) rotate(-15deg) translateY(-50px)", // <<< initial state FIXED HERE
          transformOrigin: "50% 60%",
        }}
      >
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
