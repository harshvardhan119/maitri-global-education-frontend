import React, { useState } from "react";

const locations = [
  { name: "MILANO FASHION", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/Milano.jpg" },
  { name: "MILANO DESIGN", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/Design.jpg" },
  { name: "FIRENZE", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/Firenze.jpg" },
  { name: "PARIS", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/Paris.jpg" },
  { name: "LONDON", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/London.jpg" },
  { name: "DUBAI", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/dubai.jpg" },
  { name: "RIYADH", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/image003.jpg" },
  { name: "MUMBAI", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/Mumbai.jpg" },
  { name: "SHANGHAI", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/Shanghai.jpg" },
  { name: "SHENZHEN", img: "https://www.istitutomarangoni.com/marangoni/entities/campus/Shenzhen.jpg" }
];

const Locations = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + locations.length) % locations.length);
  };

  return (
    <div className="bg-[#2d2d2d] min-h-screen w-full px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1
          style={{ fontFamily: "Epika", fontWeight: "bold" }}
          className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg"
        >
          STUDY IN PRESTIGIOUS<br />LOCATIONS
        </h1>
        <a href="#" className="text-sm font-semibold text-white underline mb-8 inline-block">
          FIND OUT ALL SCHOOLS
        </a>

        {/* Mobile View */}
        <div className="block md:hidden mt-10">
          <div className="flex flex-col items-center">
            <span className="text-md font-bold text-white mb-4 tracking-wide">{locations[current].name}</span>
            <div className="bg-white p-2 shadow-lg w-full aspect-square flex items-center justify-center overflow-hidden">
              <img src={locations[current].img} alt={locations[current].name} className="object-contain w-full h-full" />
            </div>
            <div className="flex justify-between w-full mt-4">
              <button onClick={prevSlide} className="text-white text-xl px-4">←</button>
              <button onClick={nextSlide} className="text-white text-xl px-4">→</button>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white p-2 shadow-lg w-full aspect-square flex items-center justify-center overflow-hidden transition-transform duration-300">
                <img src={loc.img} alt={loc.name} className="object-contain w-full h-full transition-transform duration-300 hover:scale-110" />
              </div>
              <span className="text-md font-bold text-white mt-3 tracking-wide">{loc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
