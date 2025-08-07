
import React, { useEffect, useState } from "react";


const Locations = () => {
  const [current, setCurrent] = useState(0);
  const [campuses, setCampuses] = useState([]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % campuses.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + campuses.length) % campuses.length);
  };

  useEffect(() => {
    const query = `*[_type == "campus"]{
      name,
      country,
      "imageUrl": image.asset->url
    }[0...10]`;

    const encodedQuery = encodeURIComponent(query);

    fetch(`https://poxqiqf3.api.sanity.io/v2021-10-21/data/query/production?query=${encodedQuery}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch from Sanity");
        }
        return res.json();
      })
      .then((data) => {
        setCampuses(data.result);
      })
      .catch((err) => {
        console.error("Error fetching campuses:", err);
      });
  }, []);

  if (!campuses.length) {
    return (
      <div className="bg-[#2d2d2d] min-h-screen w-full px-4 py-10 text-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#2d2d2d] w-full px-4 py-10">
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

            <span className="text-md font-bold text-white mb-4 tracking-wide">{campuses[current].name}</span>
            <div className="bg-white p-2 shadow-lg w-full aspect-square flex items-center justify-center overflow-hidden">
              <img
                src={campuses[current].imageUrl}
                alt={campuses[current].name}

                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mt-4">
              <button onClick={prevSlide} className="text-white text-xl px-4">←</button>
              <button onClick={nextSlide} className="text-white text-xl px-4">→</button>
            </div>
          </div>
        </div>

        {/* Desktop View */}

        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
          {campuses.map((campus, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white p-2 shadow-lg w-full aspect-square flex items-center justify-center overflow-hidden transition-transform duration-300">
                <img
                  src={campus.imageUrl}
                  alt={campus.name}
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              <span className="text-md font-bold text-white mt-3 tracking-wide">{campus.name}</span>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
