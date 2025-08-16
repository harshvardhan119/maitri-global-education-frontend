import React, { useState, useEffect, useRef } from "react";

function Locations() {
  const locations = [
    { name: "Italy", img: "https://cdn.sanity.io/images/poxqiqf3/production/016727fb84be42e4eb57bf5c70f012a020526a71-300x295.png" },
    { name: "Paris", img: "https://cdn.sanity.io/images/poxqiqf3/production/2fa61791aaeab839d419eef2a1306573e078388b-300x295.png" },
    { name: "India", img: "https://cdn.sanity.io/images/poxqiqf3/production/d28811abd444a7281769f052556e3f1a9558a186-300x295.png" },
    { name: "London", img: "https://cdn.sanity.io/images/poxqiqf3/production/1fa6b59359f6d02f76c53c3c099c55f780b64f5e-300x295.png" },
    { name: "New York", img: "https://cdn.sanity.io/images/poxqiqf3/production/3865e0d7a385eab776280275e86f10cb8805aa19-300x295.png" },
    { name: "Tokyo", img: "https://cdn.sanity.io/images/poxqiqf3/production/59763ba859f527891e377a259ff22be7a16e9080-300x295.png" }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const animRef = useRef(null);

  // Responsive layout
  useEffect(() => {
    const updateView = () => {
      const w = window.innerWidth;
      setWindowWidth(w);
      if (w < 640) setItemsPerPage(1);
      else if (w < 1024) setItemsPerPage(3);
      else setItemsPerPage(4);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // Auto scroll
  useEffect(() => {
    const speed = 1.8; // slightly faster
    const step = () => {
      if (!isPaused && trackRef.current) {
        positionRef.current -= speed;
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;

        const firstItem = trackRef.current.children[0];
        if (firstItem) {
          const itemWidth = firstItem.getBoundingClientRect().width + 16;
          if (Math.abs(positionRef.current) >= itemWidth) {
            trackRef.current.appendChild(firstItem);
            positionRef.current += itemWidth;
          }
        }
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  return (
    <div className="w-full overflow-hidden bg-[#2d2d2d] p-3">
      {/* Heading */}
      <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-20">
        <h1
          style={{ fontFamily: "Epika" }}
          className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b]
          bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase drop-shadow-lg 
          max-w-[90vw] sm:max-w-3xl mx-auto md:mx-0"
        >
          STUDY IN PRESTIGIOUS LOCATIONS
        </h1>
        <a className="text-lg text-white underline" href="#">Find out our school</a>
      </div>

      {/* Carousel */}
      <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-20 my-8 relative">
        <div
          ref={trackRef}
          className="flex gap-4 transition-none items-center"
          style={{ willChange: "transform" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => expandedIndex === null && setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => expandedIndex === null && setIsPaused(false)}
        >
          {[...locations, ...locations].map((loc, idx) => {
            const isExpanded = expandedIndex === idx;
            const baseWidth = 100 / itemsPerPage;

            return (
              <div
                key={idx}
                onClick={() =>
                  setExpandedIndex((prev) => (prev === idx ? null : idx))
                }
                className={`relative group cursor-pointer overflow-hidden rounded-xl flex-shrink-0 border-2
                  ${isExpanded ? "shadow-2xl z-10" : "border-transparent"} 
                   transition-all duration-500 ease-in-out`}
                style={{
                  flex: `0 0 ${
                    windowWidth < 640
                      ? "100%" // full width on mobile
                      : isExpanded
                      ? baseWidth * 1.5 + "%" // expanded width
                      : baseWidth + "%"
                  }`,
                  height: isExpanded ? "24rem" : "20rem", // height grows too
                  margin: windowWidth < 640 ? "0 8px" : "0",
                  transition: "flex-basis 0.5s ease, height 0.5s ease, border-color 0.3s ease"
                }}
              >
                <img
                  src={loc.img}
                  alt={loc.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isExpanded ? "scale-105" : "group-hover:scale-105"
                  }`}
                />
                <h1 className="absolute top-2 left-1/2 transform -translate-x-1/2 
                  text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {loc.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Locations;
