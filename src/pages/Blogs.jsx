import React from 'react'

export default function Blogsind() {
  return (
    <div className="">
      {/* Main Image */}
      <div>
        <img
          src="University-Section.png"
          alt=""
          className="w-full h-[80vh] object-cover"
        />
      </div>

      {/* Main Blog Title */}
      <div className="px-3 lg:mx-30 mt-3 text-center md:text-left">
        <h1
          style={{ fontFamily: "Montserrat" }}
          className="bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]
            bg-clip-text text-transparent text-3xl md:text-6xl font-bold uppercase drop-shadow-lg max-w-[90vw] sm:max-w-3xl mx-auto md:mx-0"
        >
          Blog Title
        </h1>
        <p className="text-xl mt-2">Published on : [25/08/2025]</p>
      </div>

      {/* Blog Content & Form */}
      <div className="px-3 lg:mx-30 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-gray-100 p-4 rounded-lg bg-gray-100 shadow-md">
          <h2 className="text-2xl font-bold mt-4">Blog Content</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
          </p>
        </div>
        <div className="p-8 border-gray-400 rounded-lg bg-white shadow-lg w-full h-full flex flex-col">
          <h2
            style={{ fontFamily: "Roboto" }}
            className="text-xl text-center font-bold mb-1"
          >
            Get More Info
          </h2>
          <form className="space-y-3 flex-grow flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="number"
              placeholder="Phone"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <textarea
              name="textarea"
              className="border border-gray-300 rounded-md p-2 w-full"
            ></textarea>
            <button className="px-6 py-2 w-full bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-white font-semibold rounded">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Related Blogs Heading */}
      <div>
        <h1 className="px-3 lg:mx-30 text-3xl font-bold mt-5 text-center md:text-left">
          Related Blogs
        </h1>
      </div>

      {/* Related Blogs Grid */}
      <div className="px-3 lg:mx-30 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 mb-6">
        {/* Blog 1 */}
        <div className="text-center md:text-left">
          <img
            className="w-full h-auto rounded-lg mx-auto md:mx-0"
            src="1.png"
            alt=""
          />
          <h2 className="text-2xl font-bold mt-2">Blog Title</h2>
          <p className="text-gray-600">Published on : [25/08/2025]</p>
          <p className="mt-2">
            Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-white font-semibold rounded">
            Read More
          </button>
        </div>

        {/* Blog 2 */}
        <div className="text-center md:text-left">
          <img
            className="w-full h-auto rounded-lg mx-auto md:mx-0"
            src="2.png"
            alt=""
          />
          <h2 className="text-2xl font-bold mt-2">Blog Title</h2>
          <p className="text-gray-600">Published on : [25/08/2025]</p>
          <p className="mt-2">
            Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-white font-semibold rounded">
            Read More
          </button>
        </div>

        {/* Blog 3 */}
        <div className="text-center md:text-left">
          <img
            className="w-full h-auto rounded-lg mx-auto md:mx-0"
            src="3.png"
            alt=""
          />
          <h2 className="text-2xl font-bold mt-2">Blog Title</h2>
          <p className="text-gray-600">Published on : [25/08/2025]</p>
          <p className="mt-2">
            Brief description of the blog content goes here. It should be concise and engaging to encourage readers to click through.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-white font-semibold rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}