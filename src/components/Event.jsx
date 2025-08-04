import React, { useState, useEffect } from "react";
import "../font.css";

const baseImages = [
  {
    src: "https://maitriglobaleducation.com/crm/public/uploads/event/image/6623a51e5fffd.jpg",
    title: "Mountains",
    subtitle: "Where silence speaks",
    desc: "Peaceful view of the mountains with serene skies and fresh air.",
    buttons: ["Trek Now", "Gallery", "Explore", "Share"],
  },
  {
    src: "/d.jpeg",
    title: "Ocean",
    subtitle: "The blue abyss",
    desc: "Waves crashing onto the shore bring calmness and inspiration.",
    buttons: ["Sail Away", "Dive In", "Gallery", "Subscribe"],
  },
  {
    src: "/e.jpg",
    title: "Forest",
    subtitle: "Nature’s Heartbeat",
    desc: "Feel the breath of the Earth with green surroundings and calm.",
    buttons: ["Discover", "Wildlife", "Gallery", "Join Us"],
  },
  {
    src: "/c.png",
    title: "Desert",
    subtitle: "Golden Tranquility",
    desc: "The golden dunes hold secrets of time and endless stories.",
    buttons: ["Ride Now", "Heatwave", "Gallery", "Follow"],
  },
  {
    src: "/d.jpeg",
    title: "City",
    subtitle: "Concrete Dreams",
    desc: "Skyscrapers touching clouds, buzzing with energy and ambition.",
    buttons: ["Visit", "Nightlife", "Gallery", "Subscribe"],
  },
  {
    src: "/e.jpg",
    title: "Valley",
    subtitle: "Green Serenity",
    desc: "Lush valleys and flowing rivers create pure visual poetry.",
    buttons: ["View More", "Nature Trails", "Gallery", "Sign Up"],
  },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % baseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prev = (current - 1 + baseImages.length) % baseImages.length;
  const next = (current + 1) % baseImages.length;
  const currentImage = baseImages[current];

  return (
    <div className="w-full py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Heading */}
    <div className="w-full flex justify-center">
  <h1
    style={{ fontFamily: 'Epika' }}
    className="inline-block bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg"
  >
    Events & Engagements
  </h1>
</div>
      {/* <h1 style={{ fontFamily: 'Epika' }} className="bg-gradient-to-r from-[#d4af37] via-[#e6c200] h-14 bg-clip-text text-transparent to-[#b8860b] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-10">
       Events & Engagements
      </h1> */}
      {/* <h1
        style={{ fontFamily: "Epika", fontWeight: "bold" }}
        className="bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-wide uppercase drop-shadow-lg"
      >
        Scholarships
      </h1> */}

      <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 max-w-6xl mx-auto">
        {/* Left Card */}
        <div className="hidden sm:flex flex-col w-[18%] max-w-[180px] opacity-40 hover:opacity-60 transition-all duration-300">
          <div className="h-[300px] overflow-hidden rounded-xl shadow">
            <img
              src={baseImages[prev].src}
              alt={baseImages[prev].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-sm font-semibold text-gray-800">{baseImages[prev].title}</h2>
            <p className="text-xs text-gray-600">{baseImages[prev].subtitle}</p>
            <button className="mt-1 px-3 py-1 text-xs bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
              {baseImages[prev].buttons[0]}
            </button>
          </div>
        </div>

        {/* Center Card */}
        <div className="w-full sm:w-[64%] max-w-2xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="h-[450px] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{currentImage.title}</h2>
            <h3 className="text-md sm:text-lg text-gray-600">{currentImage.subtitle}</h3>
            <p className="text-sm text-gray-500 mt-2">{currentImage.desc}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {currentImage.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="hidden sm:flex flex-col w-[18%] max-w-[180px] opacity-40 hover:opacity-60 transition-all duration-300">
          <div className="h-[300px] overflow-hidden rounded-xl shadow">
            <img
              src={baseImages[next].src}
              alt={baseImages[next].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-sm font-semibold text-gray-800">{baseImages[next].title}</h2>
            <p className="text-xs text-gray-600">{baseImages[next].subtitle}</p>
            <button className="mt-1 px-3 py-1 text-xs bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
              {baseImages[next].buttons[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
