const cards = [
  {
    title: "ARABICA GREEN",
    text: "Welcome to our warm café retreat, where each brew is made with love.",
    icon: "type1.svg",
  },
  {
    title: "DARK ROAST",
    text: "A bold and rich experience crafted for true coffee lovers.",
    icon: "type2.svg",
  },
  {
    title: "HOUSE BLEND",
    text: "Our signature blend that delivers comfort in every sip.",
    icon: "type3.svg",
  },
];

export default function Foods() {
  return (
    <main className="bg-pista py-24">
      <section className="flex text-black flex-col justify-center items-center gap-2">
        <span className="uppercase text-lg">Available Foods</span>
        <h1 className="uppercase text-4xl">type of coffee’s</h1>
      </section>

      <section>
        <div className="w-full min-h-screen bg-pista flex items-center justify-center py-20 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">

            {cards.map((card, i) => (
              <div
                key={i}
                className="relative bg-pista py-20 px-10 group transition-all duration-300"
              >
                {/* Outer darker frame */}
                <div className="absolute inset-0 border-[2px] border-[#c8a27e] 
                                translate-x-2 translate-y-2 transition-all duration-300"></div>

                {/* Inner lighter frame */}
                <div className="absolute inset-0 border-[2px] border-[#e8d2b8] ml-4
                                group-hover:border-[#c8a27e] transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">

                  {/* 👇 IMAGE HOVER UPWARD */}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-14 h-14 mb-6 opacity-80 transform transition-all duration-300 
                               group-hover:-translate-y-2"
                  />

                  <h2 className="text-2xl font-semibold tracking-wide text-[#1b1b1b]">
                    {card.title}
                  </h2>

                  <p className="text-gray-600 mt-4 text-[17px] leading-relaxed max-w-xs">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
