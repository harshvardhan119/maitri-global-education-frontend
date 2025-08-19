export default function Eventsind() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[50vh] relative">
        <img src="event.jpg" alt="" className="w-full h-full object-cover" />

        {/* Text overlay at bottom center */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pb-10">
          <h2
            style={{ fontFamily: "Epika" }}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase drop-shadow-lg max-w-[90vw] sm:max-w-3xl"
          >
            The Event name
          </h2>
          <p className="text-white font-thin text-2xl mt-4 max-w-[90vw] sm:max-w-xl drop-shadow-md">
            The details of the event will be displayed here. This section can include information about the event's purpose, date, time.
          </p>
          <p className="text-white"><span className="text-xl my-4">Date : </span>25/08/25</p>
          <button className="mt-4 px-6 sm:px-8 py-2 bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] text-black font-Thin rounded hover:scale-102 transition duration-300 cursor-pointer">
            Apply now
          </button>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16 px-4 sm:px-10 flex flex-col items-center space-y-16">
        <h1 style={{fontFamily:"Epika"}} className="text-4xl sm:text-5xl font-bold text-center mb-8">More Events</h1>

        <div className="px-3 lg:mx-30 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 mb-6">
        {/* Blog 1 */}
        <div className="text-center md:text-left">
          <img
            className="w-full h-auto rounded-lg mx-auto md:mx-0"
            src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg"
            alt=""
          />
          <h2 className="text-2xl mt-2">Event name</h2>
          <p className="text-gray-600">Published on : 25 Aug 2025</p>
          <p className="mt-2 font-thin">
            Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-black font-Thin  rounded hover:scale-102 transition-all duration-300 cursor-pointer">
            Apply Now
          </button>
        </div>

        {/* Blog 2 */}
        <div className="text-center md:text-left">
          <img
            className="w-full h-auto rounded-lg mx-auto md:mx-0"
            src="https://images.pexels.com/photos/4050297/pexels-photo-4050297.jpeg"
            alt=""
          />
          <h2 className="text-2xl mt-2">Event name</h2>
          <p className="text-gray-600">Published on : 25 Aug 2025</p>
          <p className="mt-2 font-thin">
            Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-black font-Thin rounded hover:scale-102 transition-all duration-300 cursor-pointer">
            Apply Now
          </button>
        </div>

        {/* Blog 3 */}
        <div className="text-center md:text-left">
          <img
            className="w-full h-auto rounded-lg mx-auto md:mx-0"
            src="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg"
            alt=""
          />
          <h2 className="text-2xl mt-2">Event name</h2>
          <p className="text-gray-600">Published on : 25 Aug 2025</p>
          <p className="mt-2 font-thin">
            Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-black font-Thin rounded hover:scale-102 transition-all duration-300 cursor-pointer">
            Apply Now
          </button>
        </div>
     </div>
      </div>
    </div>
  );
}