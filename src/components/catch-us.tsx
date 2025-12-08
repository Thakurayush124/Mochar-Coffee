"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const leftImgRef = useRef<HTMLDivElement | null>(null);
  const rightImgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!leftImgRef.current || !rightImgRef.current) return;

    // Left Image 
    gsap.to(leftImgRef.current, {
      y: 250,
      ease: "none",
      scrollTrigger: {
        trigger: leftImgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Right Image 
    gsap.to(rightImgRef.current, {
      y: -250,
      ease: "none",
      scrollTrigger: {
        trigger: rightImgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="w-full bg-[#171412] py-40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* Left  Image */}
        <div ref={leftImgRef} className="flex justify-center will-change-transform">
          <Image
            src="/catch2.avif"
            alt="Iced Coffee"
            width={450}
            height={550}
            className="rounded-xl object-cover shadow-xl"
          />
        </div>

        {/* Middle Content */}
        <div className="text-center text-white px-4">
          <p className="text-sm tracking-widest text-[#c8a98d] mb-2">GET IN TOUCH</p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-8">CATCH US HERE</h2>

          <p className="text-lg mb-4">Call us book a table & delivery:</p>

          <h3 className="text-4xl font-bold text-[#c8a98d] mb-10">978-789-89699</h3>

          <h4 className="text-lg font-semibold mb-3">INFORMATION RESTAURANT:</h4>

          <p className="text-sm opacity-70">Address: 6738 Washington Ave. Manchester, USA</p>
          <p className="text-sm opacity-70 mb-4">Mail: support@gmail.com</p>

          <p className="text-sm text-[#c8a98d] font-medium mb-10">
            Opening Hour: Mon - Fri : 9.00am - 22.00pm, Holidays : Close
          </p>

          <button className="bg-white text-black rounded-full px-8 py-3 font-medium shadow-md hover:bg-gray-200 transition">
            GET DIRECTION
          </button>
        </div>

        {/* Right Image */}
        <div ref={rightImgRef} className="flex justify-center will-change-transform">
          <Image
            src="/catch1.avif"
            alt="Hot Coffee"
            width={450}
            height={550}
            className="rounded-xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
