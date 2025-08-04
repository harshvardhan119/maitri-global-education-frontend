import React, { useState } from "react";
import Button from "./Button";

const scholarships = [
  { img: "/1.png", title: "Early Bird Scholarship", description: "Apply early to secure your spot and enjoy exclusive benefits. Limited seats available!", cta: "Apply Now" },
  { img: "/2.png", title: "Merit Scholarship", description: "Awarded to students with outstanding academic achievements.", cta: "Apply Now" },
  { img: "/3.png", title: "Women in Design", description: "Supporting women pursuing careers in design and creative fields.", cta: "Apply Now" },
  { img: "/4.png", title: "International Student Grant", description: "Special grants for international students joining our programs.", cta: "Apply Now" },
  { img: "/5.png", title: "Leadership Award", description: "For students who have demonstrated exceptional leadership skills.", cta: "Apply Now" },
  { img: "/6.png", title: "Community Service Scholarship", description: "Recognizing students making a difference in their communities.", cta: "Apply Now" },
  { img: "/b1.png", title: "Creative Talent Scholarship", description: "For students with a strong creative portfolio.", cta: "Apply Now" }
];

const Scholarships = () => {
  const [start, setStart] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const itemsPerPage = isMobile ? 1 : 3;
  const maxStart = scholarships.length - itemsPerPage;

  const prev = () => setStart((prev) => (prev <= 0 ? maxStart : prev - 1));
  const next = () => setStart((prev) => (prev >= maxStart ? 0 : prev + 1));

  const visibleScholarships = scholarships.slice(start, start + itemsPerPage);

  return (
    <section className="w-full flex flex-col items-center py-8 px-2">
      <h1
        style={{ fontFamily: "Epika", fontWeight: "bold" }}
        className="bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-wide uppercase drop-shadow-xl"
      >
        Scholarships
      </h1>

      {/* Scholarships Grid */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl relative">
          {visibleScholarships.map((sch, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] min-h-[400px] flex flex-col items-center group"
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden z-0">
                <img
                  src={sch.img}
                  alt={sch.title}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Description + CTA */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-4 text-center">
                  <p className="text-white text-sm md:text-base mb-3">{sch.description}</p>
                  {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition-colors duration-200">
                    {sch.cta}
                  </button> */}
                  {/* <Button></Button> */}
                  <Button text={sch.cta}/>
                </div>
              </div>

              {/* Title */}
              <div className="mt-4 px-4 text-center">
                <h3 style={{ fontFamily: 'Anton' }} className="text-lg md:text-xl text-black-800">{sch.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons for Mobile */}
      <div className="flex justify-between w-full max-w-xs mt-6 md:hidden">
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

      {/* Navigation Buttons for Desktop - aligned below cards */}
      <div className="hidden md:flex justify-between w-full max-w-6xl mt-8 px-2">
        <button
          onClick={prev}
          className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="bg-gray-300 hover:bg-gray-400 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Scholarships;
