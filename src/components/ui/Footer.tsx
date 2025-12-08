import React from "react";

export default function MocharFooter() {
  return (
    <div className="bg-[#0d0d0d] text-white w-full py-20 px-6 flex flex-col select-none">

      {/* Heading */}
      <h1 className="text-[18vw] md:text-[200px] font-bold text-[#c6a27e] leading-none tracking-widest text-center">
        MOCHAR
      </h1>

      {/* Content Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-0 mt-20 text-center md:text-left">

        {/* We Are Here */}
        <div className="md:border-r border-gray-700 md:pr-16 pb-10 md:pb-0">
          <h2 className="text-xl font-semibold uppercase">We Are Here</h2>
          <div className="w-12 h-[2px] bg-[#c6a27e] mt-2 mb-6 mx-auto md:mx-0"></div>

          <p className="text-sm text-gray-300 font-bold mb-2">Location:</p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Address: 6738 Washington Ave.<br />
            Manchester, Kentucky 748393, USA
          </p>

          <p className="text-sm text-gray-300 font-bold mt-4 mb-2">Book A Table:</p>
          <p className="text-sm text-gray-400 leading-relaxed">info@mochar.com<br />7829-3789-297</p>
        </div>

        {/* About Us */}
        <div className="md:border-r border-gray-700 md:px-16 pb-10 md:pb-0">
          <h2 className="text-xl font-semibold text-center uppercase">About Us</h2>
          <div className="w-12 h-[2px] bg-[#c6a27e] mt-2 mb-6 mx-auto"></div>

          <p className="text-sm text-center text-gray-400 leading-relaxed max-w-[300px] mx-auto">
            Join us for weekly live music nights, poetry readings, and special tasting events.
            Because coffee is best enjoyed with good company.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#c6a27e] transition text-xs">
              f
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#c6a27e] transition text-xs">
              𝕏
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#c6a27e] transition text-xs">
              in
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#c6a27e] transition text-xs">
              ▶
            </a>
          </div>
        </div>

        {/* Opening Time */}
        <div className="md:pl-16 pb-10 md:pb-0">
          <h2 className="text-xl text-right font-semibold uppercase">Opening Time</h2>
          <div className="w-12 h-[2px] bg-[#c6a27e] mt-2 mb-6 ml-auto"></div>

          <p className="text-sm text-right text-[#c6a27e] leading-relaxed">Monday - Friday : 9:00 am - 22:00 pm</p>
          <p className="text-sm text-right text-[#c6a27e] leading-relaxed">Saturday : 10:00 am - 23:00 pm</p>
          <p className="text-sm text-right text-[#c6a27e] leading-relaxed">Sunday : 5:00 pm - 23:00 pm</p>
          <p className="text-sm text-right text-gray-400 leading-relaxed mt-2">Holidays : Closed</p>
          <p className="text-sm text-right text-[#c6a27e] leading-relaxed mt-2">Happy Hours : 18:00 pm - 20:00 pm</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl w-full flex justify-between items-center text-gray-500 text-xs mt-16 md:border-t border-gray-700 pt-6">
        <p>Copyright and design by <span className="text-[#c6a27e] font-bold">@Ascentify Studio</span> - 2025. All rights reserved.</p>
        <div className="flex gap-6 text-[10px]">
          <button>PASSWORD</button>
          <button>LICENSES</button>
          <button>CHANGELOG</button>
          <button>404</button>
        </div>
      </div>
    </div>
  );
}
