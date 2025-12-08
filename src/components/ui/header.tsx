"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/Mochar.png" // update your logo file here
            width={120}
            height={40}
            alt="Mochar Logo"
            className="object-contain"
          />
        </div>

        {/* CENTER MENU */}
        <ul className="hidden md:flex items-center gap-10 text-[16px] font-semibold">
          <li className="cursor-pointer text-black hover:text-gray-600">HOME</li>
          <li className="cursor-pointer text-black hover:text-gray-600">ABOUT</li>

          {/* Pages Dropdown */}
          <li
            className="flex items-center gap-1 cursor-pointer text-black hover:text-gray-600 relative"
            onClick={() => setOpen(!open)}
          >
            PAGES <ChevronDown size={18} />
            {open && (
              <div className="absolute left-0 top-6 bg-white shadow-md rounded-lg w-36 py-2">
                <p className="px-4 py-2 text-black hover:text-gray-600 hover:bg-gray-100 cursor-pointer">Blog</p>
                <p className="px-4 py-2 text-black hover:text-gray-600 hover:bg-gray-100 cursor-pointer">Menu</p>
                <p className="px-4 py-2 text-black hover:text-gray-600 hover:bg-gray-100 cursor-pointer">Team</p>
              </div>
            )}
          </li>

          <li className="cursor-pointer text-black hover:text-gray-600">CONTACT</li>
        </ul>

        {/* BUTTON */}
        <button className="hidden md:block bg-black text-white rounded-xl px-6 py-3 font-semibold">
          GET OFFER
        </button>

        {/* Mobile Menu Hamburger (optional) */}
        <button
          className="md:hidden flex flex-col gap-[6px]"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[3px] bg-black"></span>
          <span className="w-6 h-[3px] bg-black"></span>
          <span className="w-6 h-[3px] bg-black"></span>
        </button>
      </div>
    </nav>
  );
}
