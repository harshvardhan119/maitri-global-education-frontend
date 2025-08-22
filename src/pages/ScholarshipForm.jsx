import GoldButton from "../components/Goldbutton";

export default function ScholarshipForm() {
  return (
    <div className="w-full h-auto">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[50vh]">
        <img
          src="course2.jpg"
          alt="Scholarship"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <h1 style={{fontFamily:"Epika"}} className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg max-w-xl">
            20% Merit Scholarship – Milan
          </h1>
          <p className="text-lg md:text-xl text-white mt-2 drop-shadow-md max-w-md">
            Secure your place at a top design school.
          </p>
        </div>

        {/* Floating Form */}
        <div className="absolute bottom-[-4rem] right-6 md:right-16 w-full max-w-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Enquire Now</h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-black-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-black-500"
              />
              <input
                type="number"
                placeholder="Phone"
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-black-500"
              />
              <select className="border border-gray-300 rounded-md p-2 w-full text-gray-500 focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-black-500">
                <option value="">Interested in</option>
                <option value="scholarship">Scholarship</option>
                <option value="admission">Admission</option>
                <option value="course">Course</option>
              </select>
              {/* <button
                className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
              >
                Submit
              </button> */}
              <GoldButton text={'Submit'} to="/course"/>
            </form>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:px-16 mt-20">
        {/* Left Text */}
        <div>
          <h2 style={{fontFamily:"Epika"}} className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ausaue um.
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Deadline:</li>
            <li>Location:</li>
            <li>Duration:</li>
          </ul>
        </div>
        {/* Right Image Placeholder */}
        <div className="bg-gray-300 w-full h-60 rounded-md">
          <img src="course.jpg" className="w-full h-full object-cover" alt="" />
        </div>
      </div>

      {/* Details Section */}
      <div className="p-8 md:px-16">
        <h2 className="text-2xl font-bold mb-2">Details</h2>
        <p className="text-gray-700">
          Details aus altem information em detais. langicam fitais auscitud it.
        </p>
      </div>

      {/* Related Links */}
      <div className="p-8 md:px-16">
        <h2 className="text-2xl font-bold mb-4">Related Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-md p-4 flex flex-col items-center">
            <div className="bg-gray-300 w-full h-36 rounded-md mb-2">
              <img src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
            <p className="text-gray-700">Link 1</p>
          </div>
          <div className="border rounded-md p-4 flex flex-col items-center">
            <div className="bg-gray-300 w-full h-36 rounded-md mb-2">
              <img src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
            <p className="text-gray-700">Link 2</p>
          </div>
          <div className="border rounded-md p-4 flex flex-col items-center">
            <div className="bg-gray-300 w-full h-36 rounded-md mb-2">
              <img src="https://images.pexels.com/photos/8093039/pexels-photo-8093039.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
            <p className="text-gray-700">Link 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
