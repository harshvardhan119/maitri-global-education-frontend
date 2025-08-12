import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const careersData = [
  {
    id: 1,
    title: "Fashion Business: A new way to design, build and automate",
    subtitle: "Skybox x Samsung",
    image: "https://i.postimg.cc/4xrKFR75/Fashion-Business.jpg",
    tags: ["Design", "Build", "Automate"],
  },
  {
    id: 2,
    title: "Fashion Design: A new way to design, build and automate",
    subtitle: "Venture.io",
    image: "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Design", "Build", "Automate"],
  },
  {
    id: 3,
    title: "Accessory Designing and Building",
    subtitle: "Truck with Benefits",
    image: "https://images.unsplash.com/photo-1737652423535-c1b0096f9244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFjY2Vzc29yeSUyMGRlc2lnbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Design", "Build"],
  },
  {
    id: 4,
    title: "Interior Design and Architecture Services",
    subtitle: "GOMA",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    tags: ["Design", "Build"],
  },
  {
    id: 4,
    title: "Fashion Photography and Videography",
    subtitle: "GOMA",
    image: "https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEZhc2hpb24lMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Design", "Build"],
  },
];

const Careers = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 20;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1
          style={{ fontFamily: "Epika" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white/20 mb-12 tracking-wider"
        >
         Elite Career Choices
        </h1>

        {/* Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {careersData.map((career) => (
              <div
                key={career.id}
                className="flex-none w-80 sm:w-[340px] snap-start"
              >
                {/* Card */}
                <div className="bg-neutral-900 rounded-2xl rounded-tr-[0px] overflow-hidden mb-6 shadow-lg flex flex-col">
                  {/* Image + tags */}
                  <div className="relative">
                    <img
                      src={career.image}
                      alt={career.title}
                      className="w-full h-[460px] object-cover"
                    />
                    {/* Tag bar */}
                    <div className="absolute top-0 right-0 flex gap-2 px-3 py-2 bg-black rounded-bl-3xl">
                      {career.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-white bg-neutral-900 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                      {career.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{career.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
