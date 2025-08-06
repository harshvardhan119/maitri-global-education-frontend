import React, { useState } from "react";
import Button from "./Button";

const slides = [
  {
    image: "/s1.png",
    heading: "€10,000",
    subheading: "SCHOLARSHIP",
    text: "ALL POSTGRADUATE PROGRAMS",
    tag: "istitutomarangoni",
    tagline: "enhancing talent since 1935",
  },
  {
    image: "/s2.png",
    heading: "€12,000",
    subheading: "SCHOLARSHIP",
    text: "ALL POSTGRADUATE PROGRAMS",
    tag: "globalacademy",
    tagline: "inspiring leaders of tomorrow",
  },
  {
    image: "/s3.png",
    heading: "€15,000",
    subheading: "SCHOLARSHIP",
    text: "ALL POSTGRADUATE PROGRAMS",
    tag: "intellectus",
    tagline: "bridging cultures through education",
  },
  {
    image: "/s4.png",
    heading: "€18,000",
    subheading: "FUNDING",
    text: "FOR OVERSEAS STUDENTS",
    tag: "novusuni",
    tagline: "learning without limits",
  },
  {
    image: "/s5.png",
    heading: "€18,000",
    subheading: "FUNDING",
    text: "FOR OVERSEAS STUDENTS",
    tag: "novusuni",
    tagline: "learning without limits",
  },
  {
    image: "/s6.png",
    heading: "€18,000",
    subheading: "FUNDING",
    text: "FOR OVERSEAS STUDENTS",
    tag: "novusuni",
    tagline: "learning without limits",
  },
];

const Scholarships = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");

  const slide = slides[current];
  const isEven = current % 2 === 1;

  const prev = () => {
    setDirection("left");
    setCurrent((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setDirection("right");
    setCurrent((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-[70vh] sm:h-[80vh] bg-[#2d2d2d] overflow-hidden">


      {/* For sm, md, lg – Image Top + Content Below */}
      <div className="xl:hidden flex flex-col w-full h-full">
        {/* Image Top */}
        <div className="w-full h-1/2">
          <img
            src={slide.image}
            alt="Slide"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content – No top/bottom margin or padding */}
        <div className="bg-[#2d2d2d] flex-1 flex items-center justify-center text-center px-0 py-0 md:px-0 md:py-0">
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="https://landing.istitutomarangoni.com/images/logo_marangoni.svg"
              alt="Logo"
              className="w-36 h-auto"
            />
            <h1 style={{ fontFamily: "Epika" }} className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg" >
              {slide.heading}
            </h1>
            <h2 className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg" style={{ fontFamily: "Epika" }}>
              {slide.subheading}
            </h2>
            <p className="text-lg font-medium text-white mb-2">{slide.text}</p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition mb-4">
              Apply Now
            </button>
            <div className="flex justify-center gap-4">
              <button
                onClick={prev}
                className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold"
              >
                &#8592;
              </button>
              <button
                onClick={next}
                className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* For xl and up – Clip-path Side Layout */}
      <div
        key={current}
        className={`hidden xl:block relative w-full h-full overflow-hidden ${
          direction === "right" ? "animate-slide-right" : "animate-slide-left"
        }`}
      >
        {/* Clipped Image */}
        <div
          className="absolute inset-0 z-10"
          style={{
            clipPath: isEven
              ? "polygon(25% 0, 100% 0, 100% 100%, 52% 100%)"
              : "polygon(0 1%, 75% 0, 46% 100%, 0% 100%)",
          }}
        >
          <img
            src={slide.image}
            alt="Slide"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Side Content */}
        <div
          className={`absolute inset-0 bg-[#2d2d2d] z-0 flex items-center ${
            isEven ? "justify-start pl-20" : "justify-end pr-20"
          }`}
        >
          <div className="max-w-md text-white text-center z-20">
            <div className="flex justify-center mb-4">
              <img
                src="https://landing.istitutomarangoni.com/images/logo_marangoni.svg"
                alt="Logo"
                className="w-48 h-auto"
              />
            </div>
            <h1 className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg" style={{ fontFamily: "Epika" }}>
              {slide.heading}
            </h1>
            <h2 className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg" style={{ fontFamily: "Epika" }}>
              {slide.subheading}
            </h2>
            <p style={{ fontFamily: "Roboto" }} className="text-2xl font-thin my-6">{slide.text}</p>

            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-105 hover:cursor-pointer">
              Apply Now
            </button>
           


            <div className="flex justify-center align-center gap-4 mt-6">

              <button
                onClick={prev}
                className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold hover:scale-105 hover:cursor-pointer"

              >
                &#8592;
              </button>
              <button
                onClick={next}
                className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold hover:scale-105 hover:cursor-pointer"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Animations */}
      <style>{`
        .animate-slide-right {
          animation: slideRight 1s ease-in-out;
        }
        .animate-slide-left {
          animation: slideLeft 1s ease-in-out;
        }
        @keyframes slideRight {
          0% {
            transform: translateX(100%);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes slideLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Scholarships;

