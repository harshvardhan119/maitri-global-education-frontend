import React from "react";

const testimonials = [
  {
    text: "Maitri Global Education made my dream of studying abroad a reality! The guidance and support I received throughout the application process were outstanding. From selecting the right university to visa assistance, they were with me every step of the way.",
    source: "Website"
  },
  {
    text: "The team at Maitri is truly dedicated and knowledgeable. They not only helped me find the perfect course but also prepared me for interviews and ensured my application stood out. I couldn’t have asked for a better experience!",
    source: "Facebook"
  },
  {
    text: "Thanks to Maitri Global Education, I am now pursuing my postgraduate studies in Europe. Their personalized counseling and deep understanding of international education made the entire journey smooth and stress-free.",
    source: "Tiktok"
  }
];

const userImages = [
  "https://www.istitutomarangoni.com/marangoni/entities/mentor/Tanihaha%20130X130.jpg",
  "https://www.istitutomarangoni.com/marangoni/entities/mentor/Divya%20Singh%20bw%20130x130.jpg",
  "https://www.istitutomarangoni.com/marangoni/entities/mentor/AnnaVoportrait%20130X130.jpg",
  "https://www.istitutomarangoni.com/marangoni/entities/mentor/130x130.jpg"
];

const Testomonials = () => (
  <section className="w-full max-w-full py-12 px-2 flex flex-col items-center overflow-hidden">
    {/* User Images Row */}
    <div className="flex flex-row justify-center gap-4 md:gap-24 mb-8 w-full max-w-full overflow-x-auto">
      {userImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={"User " + (idx + 1)}
          className="w-32 h-40 md:w-32 md:h-44 object-cover rounded-md shadow-md border border-gray-200 flex-shrink-0"
          style={{minWidth:'186px',minHeight:'188px',maxWidth:'128px',maxHeight:'176px'}}
        />
      ))}
    </div>
    {/* Headline */}
    <div style={{ fontFamily: 'Epika', fontWeight: 'bold' }} className="text-center mb-10 w-full max-w-full">
      <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">Join over</p>
      <h2 className="text-4xl md:text-6xl font-semibold text-black mb-2">10000+</h2>
      <h2 className="text-4xl md:text-6xl font-semibold text-black">Students</h2>
    </div>
    {/* Testimonials Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-full">
      {testimonials.map((t, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg p-5 md:p-6 flex flex-col h-full bg-white shadow-sm min-h-[220px] max-h-[320px] min-w-0">
          <div className="flex items-center mb-4">
            <span className="text-lg text-black mr-2">★★★★★</span>
          </div>
          <p className="text-gray-800 text-base mb-6 flex-1">“ {t.text} ”</p>
          <div className="flex items-center text-gray-700 text-sm font-medium">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zm3 15c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v10z"/><circle cx="12" cy="12" r="5"/></svg>
            {t.source}
          </div>
        </div>
      ))}
    </div>
    {/* Navigation Arrows */}
    <div className="flex flex-row gap-4 mt-8">
      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors cursor-pointer hover:scale-105">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors cursor-pointer hover:scale-105">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  </section>
);

export default Testomonials;