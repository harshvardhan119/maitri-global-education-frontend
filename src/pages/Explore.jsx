import React, { useEffect, useState } from "react";

export default function Explore() {
  const [scholarships, setScholarships] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    const query = `{
      "scholarships": *[_type == "scholarship"]{
        name,
        amount,
        description,
        "image": image.asset->url
      },
      "universities": *[_type == "university"]{
        Universityname,
        contentTitle,
        subtitle,
        "bannerimage": bannerimage.asset->url
      },
      "courses": *[_type == "course"]{
        name,
        description
      }
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
        setScholarships(data.result.scholarships || []);
        setUniversities(data.result.universities || []);
        setCourses(data.result.courses || []);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const renderScholarships = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {scholarships.map((sch, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
        >
          <img
            src={sch.image}
            alt={sch.name}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h2 className="text-lg font-bold">{sch.name}</h2>
          <p className="text-sm text-gray-500 mb-2">Amount: {sch.amount}</p>
          <p className="text-gray-700">{sch.description}</p>
        </div>
      ))}
    </div>
  );

  const renderUniversities = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {universities.map((uni, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
        >
          <img
            src={uni.bannerimage}
            alt={uni.Universityname}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h2 className="text-lg font-bold">{uni.Universityname}</h2>
          <p className="text-gray-600">{uni.contentTitle}</p>
          <p className="text-gray-500">{uni.subtitle}</p>
        </div>
      ))}
    </div>
  );

  const renderCourses = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {courses.map((course, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-bold">{course.name}</h2>
          <p className="text-gray-500">
            {course.description}
          </p>
         
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explore</h1>

      {/* Section Selector */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setSelectedSection("scholarships")}
          className={`px-4 py-2 rounded-md ${
            selectedSection === "scholarships"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Scholarships
        </button>
        <button
          onClick={() => setSelectedSection("universities")}
          className={`px-4 py-2 rounded-md ${
            selectedSection === "universities"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Universities
        </button>
        <button
          onClick={() => setSelectedSection("courses")}
          className={`px-4 py-2 rounded-md ${
            selectedSection === "courses"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Courses
        </button>
      </div>

      {/* Conditional Rendering */}
      {selectedSection === "scholarships" && renderScholarships()}
      {selectedSection === "universities" && renderUniversities()}
      {selectedSection === "courses" && renderCourses()}
      {!selectedSection && (
        <p className="text-gray-500">Please select a section to explore.</p>
      )}
    </div>
  );
}
