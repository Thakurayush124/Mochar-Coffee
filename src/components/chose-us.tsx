"use client";

import Image from "next/image";

export default function TasteDifferenceSection() {
  return (
    <section className="w-full bg-[#e5e0d3] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-[#171412] tracking-wide mb-20">
          TASTE THE DIFFERENCE IN EVERY
        </h2>

        {/* WIDER FIRST ROW */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 max-w-full">

          {/* -------- TOP 3 CARDS -------- */}
          <div className="bg-white p-4 rounded-xl shadow-sm w-96 h-50 max-w-full">
            <Image src="/icons/seating.svg" width={55} height={55} alt="" />
            <h3 className="text-xs md:text-lg font-light text-black mt-5">COMFORTABLE SEATING</h3>
            <p className="text-[#6d6a66] text-xs md:text-sm mt-2">
              Our beans are roasted to perfection,<br/> highlighting smooth and fragrance.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm w-100 h-50 max-w-full">
            <Image src="/icons/wifi.svg" width={55} height={55} alt="" />
            <h3 className="text-xs md:text-lg font-light text-black mt-5">FREE WI-FI</h3>
            <p className="text-[#6d6a66] text-xs md:text-sm mt-2">
              We roast each batch to highlight rich flavors—<br/> bold and fragrant.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm w-100 h-50 max-w-full">
            <Image src="/icons/friendly.svg" width={55} height={55} alt="" />
            <h3 className="text-xs md:text-lg font-light text-black mt-5">FRIENDLY ENVIRONMENT</h3>
            <p className="text-[#6d6a66] text-xs md:text-sm mt-2">
              We roast to perfection to capture full flavors<br/> balanced aromatic.
            </p>
          </div>
        </div>

        {/* SECOND ROW: TWO WIDE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

          <div className="bg-white p-12 rounded-xl shadow-sm">
            <Image src="/icons/outdoor.svg" width={55} height={55} alt="" />
            <h3 className="text-lg text-black  text-left md:text-xl font-light mt-5">OUTdoor SEATING AREA</h3>
            <p className="text-[#6d6a66]  text-left text-sm md:text-base mt-2">
              Every bean is roasted to reveal pure taste—rich, smooth, and delightful.Enjoy our crafted selections and seasonal roasts.
            </p>
          </div>

          <div className="bg-white p-12 rounded-xl shadow-sm">
            <Image src="/icons/music.svg" width={55} height={55} alt="" />
            <h3 className="text-lg text-black text-left md:text-xl font-light mt-5">LIVE MUSIC EVENTS</h3>
            <p className="text-[#6d6a66]  text-left text-sm md:text-base mt-2">
              We roast our beans with passion for flavor aromatic, bold, and lasting.
              Discover our signature specials and limited-time roasts.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
