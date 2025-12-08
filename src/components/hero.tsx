"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mochaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        outerRef.current,
        {
          rotate: -15,
          scale: 2.7,
          y: -40,
        },
        {
          rotate: 0,
          scale: 1,
          y: 300,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top +=300 top",
            end: "center top",
            scrub: 1,
          },
        }
      );

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
        x: 6, y: -4,
        duration: 2.6, repeat: -1, yoyo: true,
        ease: "sine.inOut",
      });

    });
    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 0.08,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="h-[90vh] w-full flex items-center justify-center bg-white relative"
    >

      {/* Faded Text Background */}
      <div ref={mochaRef} className="absolute top-[10%] w-full flex justify-center pointer-events-none">
        <motion.div
          className="text-center space-y-4 select-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div>
            <svg
              width="1400"
              height="400"
              viewBox="0 0 1400 400"
              className="opacity-[0.08] fill-transparent stroke-neutral-900 stroke-[2px] mx-auto"
            >
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="220"
                fontWeight="900"
              >
                YOUR BRAND
              </text>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Coffee Cup */}
      <div
        ref={outerRef}
        className="relative w-[540px] h-[420px]"
        style={{
          transformOrigin: "50% 50%",
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

      {/* Bottom Left Content */}
      <div className="absolute bottom-10 left-10 w-[300px] text-neutral-800">
        <video 
          src="/hero.mp4"
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-auto rounded-lg mt-3"
        />
        <h3 className="text-2xl uppercase font-semibold">Started in 1996</h3>
        <p className="text-lg opacity-70">Enjoy the aroma, savor the taste, and make yourself at home.</p>
      </div>

      {/* Bottom Right Content */}
      <div className="absolute bottom-10 right-10 flex flex-col gap-4 w-[250px] text-neutral-800 text-left">
        <h3 className="text-4xl uppercase font-semibold">a brewing coffee shop</h3>
        <Link href="/" className="text-xl text-white px-6 rounded-2xl py-4 bg-black uppercase">Make Your Order</Link>
      </div>

    </section>
  );
}
