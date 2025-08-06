import React, { useState, useEffect, useRef } from "react";
import "../font.css";

const baseImages = [
  {
    src: "/e1.jpg",
    title: "Mountains",
    subtitle: "Where silence speaks",
    desc: "Peaceful view of the mountains with serene skies and fresh air.",
    buttons: ["Trek Now", "Gallery", "Explore", "Share"],
  },
  {
    src: "/e2.jpg",
    title: "Ocean",
    subtitle: "The blue abyss",
    desc: "Waves crashing onto the shore bring calmness and inspiration.",
    buttons: ["Sail Away", "Dive In", "Gallery", "Subscribe"],
  },
  {
    src: "/e3.jpg",
    title: "Forest",
    subtitle: "Nature’s Heartbeat",
    desc: "Feel the breath of the Earth with green surroundings and calm.",
    buttons: ["Discover", "Wildlife", "Gallery", "Join Us"],
  },
  {
    src: "/e4.jpg",
    title: "Desert",
    subtitle: "Golden Tranquility",
    desc: "The golden dunes hold secrets of time and endless stories.",
    buttons: ["Ride Now", "Heatwave", "Gallery", "Follow"],
  },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % baseImages.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const prev = (current - 1 + baseImages.length) % baseImages.length;
  const next = (current + 1) % baseImages.length;
  const currentImage = baseImages[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + baseImages.length) % baseImages.length);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % baseImages.length);
  };

  return (
    <div className="bg-[#2d2d2d] w-full py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="w-full flex justify-center">
        <h1
          style={{ fontFamily: 'Epika' }}
          className="inline-block bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg"
        >
          Events & Engagements
        </h1>
      </div>
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
            <h2 className="text-sm font-semibold text-white">{baseImages[prev].title}</h2>
            <p className="text-xs text-white">{baseImages[prev].subtitle}</p>
            <button className="mt-1 px-3 py-1 text-xs bg-gray-500 text-white rounded-full hover:bg-black">
              {baseImages[prev].buttons[0]}
            </button>
          </div>
        </div>

        {/* Center Card */}
        <div className="w-full sm:w-[64%] max-w-2xl transition-all duration-700 transform hover:scale-[1.01] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="h-[450px] overflow-hidden rounded-2xl shadow-2xl relative">
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-full object-cover"
            />
            {/* Save Your Seat Button - absolutely positioned at bottom center of image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <button className="bg-[#fff] text-black font-bold px-6 py-2 rounded-full shadow hover:cursor-pointer hover:scale-110 transition-all duration-300">Save Your Seat</button>

            </div>
          </div>
          <div className="mt-4 px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">{currentImage.title}</h2>
            <h3 className="text-md sm:text-lg text-white">{currentImage.subtitle}</h3>
            <p className="text-sm text-white mt-2">{currentImage.desc}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {currentImage.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full hover:bg-black transition"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
      
        {/* Navigation Buttons - bottom center after the centered card */}
        <div className="w-full flex justify-center gap-4 mt-6 mb-2">
          <button onClick={handlePrev} className="bg-black text-white px-4 py-2 rounded-full hover:bg-[#fff] hover:text-black transition-all duration-300 hover:cursor-pointer">&#8592;</button>
          <button onClick={handleNext} className="bg-black text-white px-4 py-2 rounded-full hover:bg-[#fff] hover:text-black transition-all duration-300 hover:cursor-pointer">&#8594;</button>
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
            <h2 className="text-sm font-semibold text-white">{baseImages[next].title}</h2>
            <p className="text-xs text-white">{baseImages[next].subtitle}</p>
            <button className="mt-1 px-3 py-1 text-xs bg-gray-500 text-white rounded-full hover:bg-black">
              {baseImages[next].buttons[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
