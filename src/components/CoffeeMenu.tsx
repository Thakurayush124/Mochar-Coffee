export default function Menu() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center py-10 px-6">
      <h3 className="flex items-center gap-2 uppercase text-sm text-gray-400 mb-2 tracking-wide">☕ Our Menu</h3>
      <h1 className="text-3xl font-bold mb-10 tracking-wide">Menu Highlights</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Menu List */}
        <div className="space-y-6">
          {[
            {name: "Flat White", price: "€7.85", desc: "1/2 milk, 1/2 espresso, ice, caramel"},
            {name: "Long Black", price: "€4.95", desc: "1/4 cream, 3/4 espresso, ice, cinnamon"},
            {name: "Turkish Coffee", price: "€3.20", desc: "1/3 milk, 2/3 espresso, ice, vanilla"},
            {name: "Espresso", price: "€4.75", desc: "No milk, 1 espresso, ice, caramel"},
            {name: "Mocha", price: "€5.95", desc: "2/3 milk, 1/3 espresso, ice, hazelnut"},
            {name: "Caramel Latte", price: "€7.45", desc: "1/4 cream, 3/4 espresso, ice, caramel"},
            {name: "Nitro Cold Brew", price: "€4.30", desc: "1/2 milk, 1/2 espresso, ice, caramel"},
            {name: "Café Au Lait", price: "€2.65", desc: "1/3 milk, 2/3 espresso, ice, vanilla"},
          ].map((item, index) => (
            <div key={index} className="flex justify-between border-b border-gray-700 pb-4">
              <div className="h-full sticky top-0">
                <h2 className="font-semibold uppercase text-sm mb-1">{item.name}</h2>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
              <span className="text-sm font-medium">{item.price}</span>
            </div>
          ))}

          <button className="mt-6 px-6 py-2 border rounded-md hover:bg-white hover:text-black transition-all text-sm uppercase">Make your order</button>
        </div>

        {/* Image */}
        <div>
          <img
            src="/coffee-menu.webp"
            alt="Coffee shop"
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
