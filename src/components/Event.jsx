import React, { useState, useEffect, useRef } from "react";
import "../font.css";

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [events, setEvents] = useState([]);
  const intervalRef = useRef(null);

  
  useEffect(() => {
    const query = `*[_type == "event"]{
      title,
      subtitle,
      homescreenbuttons,
      description,
      "image": image.asset->url
    }`;

    const encodedQuery = encodeURIComponent(query);

    fetch(
      `https://poxqiqf3.api.sanity.io/v2021-10-21/data/query/production?query=${encodedQuery}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch from Sanity");
        return res.json();
      })
      .then((data) => {
        setEvents(data.result || []);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);


  useEffect(() => {
    if (!isHovered && events.length) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % events.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, events.length]);

  
  if (!events.length) {
    return <div className="text-white p-8">Loading...</div>;
  }

  const prev = (current - 1 + events.length) % events.length;
  const next = (current + 1) % events.length;
  const currentImage = events[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % events.length);
  };

  return (
    <div className="bg-[#2d2d2d] w-full py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="w-full flex justify-center">
        <h1
          style={{ fontFamily: "Epika" }}
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
              src={events[prev].image}
              alt={events[prev].title}
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-sm font-semibold text-white">
              {events[prev].title}
            </h2>
            <p className="text-xs text-white">{events[prev].subtitle}</p>
            <button className="mt-1 px-3 py-1 text-xs text-white rounded-full hover:bg-black">
              {events[prev].homescreenbuttons[0]}
            </button>
          </div>
        </div>

        {/* Center Card */}
        <div
          className="w-full sm:w-[64%] max-w-2xl transition-all duration-700 transform hover:scale-[1.01] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="h-[450px] overflow-hidden rounded-2xl shadow-2xl relative">
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="w-full h-full object-cover object-[center_30%]"
            />
            {/* Save Your Seat Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <button className="bg-[#fff] text-black font-bold px-6 py-2 rounded-full shadow hover:cursor-pointer hover:scale-110 transition-all duration-300">
                Save Your Seat
              </button>
            </div>
          </div>

          <div className="mt-4 px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {currentImage.title}
            </h2>
            <h3 className="text-md sm:text-lg text-white">
              {currentImage.subtitle}
            </h3>
            <p className="text-sm text-white mt-2">{currentImage.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {currentImage.homescreenbuttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 text-sm text-white rounded-full hover:bg-black transition"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="w-full flex justify-center gap-4 mt-6 mb-2">
            <button
              onClick={handlePrev}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-[#fff] hover:text-black transition-all duration-300 hover:cursor-pointer"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-[#fff] hover:text-black transition-all duration-300 hover:cursor-pointer"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="hidden sm:flex flex-col w-[18%] max-w-[180px] opacity-40 hover:opacity-60 transition-all duration-300">
          <div className="h-[300px] overflow-hidden rounded-xl shadow">
            <img
              src={events[next].image}
              alt={events[next].title}
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-sm font-semibold text-white">
              {events[next].title}
            </h2>
            <p className="text-xs text-white">{events[next].subtitle}</p>
            <button className="mt-1 px-3 py-1 text-xs text-white rounded-full hover:bg-black">
              {events[next].homescreenbuttons[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;