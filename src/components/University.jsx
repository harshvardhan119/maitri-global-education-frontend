import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const University = () => {
  const cardData = [
    {
      id: 1,
      reportYear: "2023",
      title: "NABA",
      subtitle: "SYNERGY",
      description:
        "Growing crops under solar panels makes food — and creates healthier solar panels. Agrivoltaics, putting agriculture under solar installations, is a good way to maximize land use. It also makes the solar panels last longer.",
      buttonText: "Go to University Page",
    },
    {
      id: 2,
      reportYear: "2022",
      title: "Istituto Marangoni",
      subtitle: "FARMING",
      description:
        "Can crops grow better under solar panels? Here’s all you need to know about 'agritvoltaic farming'. Agrivoltaic farming is the practice of growing crops underneath solar panels. Scientific studies show some crops thrive when grown in this way.",
      buttonText: "Go to University Page",
    },
    {
      id: 3,
      reportYear: "2023",
      title: "Harvard University",
      subtitle: "SUCCESS",
      description:
        "Agrivoltaics alone could surpass EU photovoltaic 2030 goals. Covering just 1% of the utilised agricultural area (UAA) with agrivoltaic systems could result in 944 GW direct current of installed capacity.",
      buttonText: "Go to University Page",
    },
    {
      id: 4,
      reportYear: "2021",
      title: "Oxford University",
      subtitle: "INNOVATION",
      description:
        "Exploring new ways of combining sustainable energy and agriculture through agrivoltaic systems to create a greener future.",
      buttonText: "Go to University Page",
    },
    {
      id: 5,
      reportYear: "2020",
      title: "Cambridge University",
      subtitle: "VISION",
      description:
        "Research into agrivoltaics shows the potential to transform agriculture and energy sectors simultaneously.",
      buttonText: "Go to University Page",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cardData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === cardData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="relative h-[70vh] w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1537202108838-e7072bad1927?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      {/* Desktop View */}
      <div className="hidden md:flex items-center max-w-7xl mx-auto w-full">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition mr-4"
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {cardData
            .slice(currentIndex, currentIndex + 3)
            .concat(
              currentIndex + 3 > cardData.length
                ? cardData.slice(0, (currentIndex + 3) % cardData.length)
                : []
            )
            .map((card) => (
              <div
                key={card.id}
                className="p-6 rounded-lg shadow-lg text-white border border-white/20 bg-white/10 backdrop-blur-md flex flex-col justify-between min-h-[350px]"
              >
                <div>
                  <p className="text-sm opacity-80">
                    Report | {card.reportYear}
                  </p>
                  <h2 className="text-2xl font-bold mt-2">{card.title}</h2>
                  <h3 className="text-lg font-medium opacity-90">
                    {card.subtitle}
                  </h3>
                  <p className="text-sm mt-4 opacity-90 line-clamp-6">
                    {card.description}
                  </p>
                </div>
                <button className="mt-4 px-4 py-2 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                  {card.buttonText} →
                </button>
              </div>
            ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition ml-4"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden max-w-sm mx-auto">
        <div className="p-6 rounded-lg shadow-lg text-white border border-white/20 bg-white/10 backdrop-blur-md flex flex-col justify-between min-h-[350px]">
          <div>
            <p className="text-sm opacity-80">
              Report | {cardData[currentIndex].reportYear}
            </p>
            <h2 className="text-2xl font-bold mt-2">
              {cardData[currentIndex].title}
            </h2>
            <h3 className="text-lg font-medium opacity-90">
              {cardData[currentIndex].subtitle}
            </h3>
            <p className="text-sm mt-4 opacity-90 line-clamp-6">
              {cardData[currentIndex].description}
            </p>
          </div>
          <button className="mt-4 px-4 py-2 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
            {cardData[currentIndex].buttonText} →
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default University;
