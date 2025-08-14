import React, { useEffect, useState } from "react";

export default function Explore() {
  const [scholarships, setScholarships] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedSection, setSelectedSection] = useState("scholarships");

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

  const SectionCard = ({ children }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-5">
      {children}
    </div>
  );

  const renderScholarships = () => (
    <div className="grid gap-6 md:grid-cols-3">
      {scholarships.map((sch, i) => (
        <SectionCard key={i}>
          <img
            src={sch.image}
            alt={sch.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold">{sch.name}</h2>
          <p className="text-sm text-gray-500 mb-2">
            Amount: <span className="font-medium">{sch.amount}</span>
          </p>
          <p className="text-gray-700 text-sm">{sch.description}</p>
        </SectionCard>
      ))}
    </div>
  );

  const renderUniversities = () => (
    <div className="grid gap-6 md:grid-cols-3">
      {universities.map((uni, i) => (
        <SectionCard key={i}>
          <img
            src={uni.bannerimage}
            alt={uni.Universityname}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold">{uni.Universityname}</h2>
          <p className="text-gray-600 text-sm mb-1">{uni.contentTitle}</p>
          <p className="text-gray-500 text-xs">{uni.subtitle}</p>
        </SectionCard>
      ))}
    </div>
  );

  const renderCourses = () => (
    <div className="grid gap-6 md:grid-cols-3">
      {courses.map((course, i) => (
        <SectionCard key={i}>
          <h2 className="text-lg font-semibold mb-2">{course.name}</h2>
          <p className="text-gray-600 text-sm">{course.description}</p>
        </SectionCard>
      ))}
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Explore Opportunities</h1>
      <p className="text-gray-600 mb-6">
        Discover scholarships, top universities, and courses to help you excel in your academic journey.
      </p>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-8">
        {["scholarships", "universities", "courses"].map((section) => (
          <button
            key={section}
            onClick={() => setSelectedSection(section)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition ${
              selectedSection === section
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      {selectedSection === "scholarships" && renderScholarships()}
      {selectedSection === "universities" && renderUniversities()}
      {selectedSection === "courses" && renderCourses()}
    </div>
  );
}
