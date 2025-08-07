import React, { useState } from "react";

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
  const isEven = current % 2 === 0;

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
    <div className="w-full bg-[#2d2d2d] overflow-hidden">
      {/* Desktop Layout */}
      <div
        key={current}
        className={`hidden xl:flex w-full h-[80vh] transition-all duration-700 ${
          direction === "right" ? "animate-slide-right" : "animate-slide-left"
        }`}
      >
        {isEven ? (
          <>
            <div
              className="relative h-full w-[70%] overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              }}
            >
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] bg-[#2d2d2d] flex items-center justify-center text-center p-6">
              <div className="max-w-md text-white space-y-4">
                <div className="flex justify-center">
                  <img
                    src="https://landing.istitutomarangoni.com/images/logo_marangoni.svg"
                    alt="Logo"
                    className="w-48 h-auto"
                  />
                </div>
                <h1
                  style={{ fontFamily: "Epika" }}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-5xl font-bold tracking-wide uppercase"
                >
                  {slide.heading}
                </h1>
                <h2
                  style={{ fontFamily: "Epika" }}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl font-bold tracking-wide uppercase"
                >
                  {slide.subheading}
                </h2>
                <p className="text-xl font-light">{slide.text}</p>
                <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-105 cursor-pointer">
                  Apply Now
                </button>
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={prev}
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={next}
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-[30%] bg-[#2d2d2d] flex items-center justify-center text-center p-6">
              <div className="max-w-md text-white space-y-4">
                <div className="flex justify-center">
                  <img
                    src="https://landing.istitutomarangoni.com/images/logo_marangoni.svg"
                    alt="Logo"
                    className="w-48 h-auto"
                  />
                </div>
                <h1
                  style={{ fontFamily: "Epika" }}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-5xl font-bold tracking-wide uppercase"
                >
                  {slide.heading}
                </h1>
                <h2
                  style={{ fontFamily: "Epika" }}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl font-bold tracking-wide uppercase"
                >
                  {slide.subheading}
                </h2>
                <p className="text-xl font-light">{slide.text}</p>
                <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-105 cursor-pointer">
                  Apply Now
                </button>
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={prev}
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={next}
                    className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
            <div
              className="relative h-full w-[70%] overflow-hidden"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-full object-cover"
              />
            </div>
          </>
        )}
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="xl:hidden flex flex-col w-full text-white">
        <img src={slide.image} alt="Slide" className="w-full h-64 object-cover" />
        <div className="bg-[#2d2d2d] px-6 py-8 text-center space-y-4">
          <div className="flex justify-center">
            <img
              src="https://landing.istitutomarangoni.com/images/logo_marangoni.svg"
              alt="Logo"
              className="w-48 h-auto"
            />
          </div>
          <h1
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-4xl font-bold tracking-wide uppercase"
          >
            {slide.heading}
          </h1>
          <h2
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-3xl font-bold tracking-wide uppercase"
          >
            {slide.subheading}
          </h2>
          <p className="text-lg font-light">{slide.text}</p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-105 cursor-pointer">
            Apply Now
          </button>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold cursor-pointer"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
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
