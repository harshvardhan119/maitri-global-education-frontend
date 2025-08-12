import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Pooja Krishnan",
    role: "Education Counsellor",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/64e4b061a8296.jpg",
    linkedin: "#",
    bio: "When Ed isn’t enjoying a newly brewed tipple ... rolling the dice."
  },
  {
    name: "Aliza Singh",
    role: "Global Head of Marketing",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/6864e2551b208.jpeg",
    linkedin: "#",
    bio: "Elsa feels most at home cooking in her kitchen ... at any given opportunity."
  },
  {
    name: "Roshni Dhandabani",
    role: "Academic Counselor - Design",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/686d42e7def28.png",
    linkedin: "#",
    bio: "Known as the team’s resident garden guru ... playing games."
  },
  {
    name: "Simran Vohra",
    role: "Lead Generation Manager - Marketing",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/6872772a679e7.png",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Riddhi Das",
    role: "Marketing Lead",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/687288b65c53c.png",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Mr. Abraham Choorickapra Mani",
    role: "Co-founder & President (Maitri Association)",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/60f693a9eb3d3.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Mr. George Syriac",
    role: "Co-founder & Admissions Manager",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/60f6940f23506.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Priyanka☻ Yadav",
    role: "International Educational Coordinator",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/644fb7af1be70.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Mr. Cirio Mario",
    role: "Financial Advisor",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/6167b9d32a4d8.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
  {
    name: "Renuka C Shekhar",
    role: "Fashion Stylist and portfolio design coach",
    image: "https://maitriglobaleducation.com/crm/public/uploads/team/60f69bc800445.jpg",
    linkedin: "#",
    bio: "Sara has a love for cold water swimming ... she volunteers with."
  },
];

const partners = [
  "/partner1.png",
  "/partner2.png",
  "/partner3.png",
  "/partner4.png",
  "/partner5.png",
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Organization Heading */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-2">Maitri Global Education</h1>
        <div className="mx-auto w-24 border-b-4 border-blue-600 transition-all duration-500 hover:w-48"></div>
      <p className="py-[2%] px-[10%]">Maitri Global Education is an organization born in 2009 under the umbrella of Associazione Maitri a registered association to promote the exchange between cultures specifically focusing on international education. Developed itself through the years rendering services to large groups of students, schools, and educational institutions such as counselling for higher education, institutional collaborations, educational tours, etc. In 2017 Maitri Global Education which was under the Associazione Maitri got separated and registered itself in the chamber of commerce of Florence with its REA number FI651447 and registered name "Maitri Global Sas" . The company has extended its services during the pandemic with the preparation of students before admission online with coaching and language classes.</p>
      </section>

    {/* Why Maitri Global */}
<section className="max-w-6xl mx-auto px-4 mb-12">
  <h2 className="text-2xl font-semibold mb-6">Why Maitri Global?</h2>
  <ul className="space-y-3 text-gray-700">
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">📌</span>
      MGE guides the student in discerning and decision making, in the selection of the course and institution
    </li>
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">📌</span>
      Admission process is taken care of by a dedicated staff.
    </li>
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">📌</span>
      The student is followed up given the right guidance in visa process and other paper works. MGE intervenes in the case of a VISA problem or other paper work difficulties.
    </li>
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">📌</span>
      MGE provides the following ground services:
    </li>
  </ul>

  {/* Two-column services list */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
    {[
      "Complete presence throughout the time of study.",
      "Guidance in time of need during the stay.",
      "A constant link between parents, students and the institution.",
      "Pick up at the airport.",
      "Accommodation.",
      "Residence permit.",
      "Fiscal code.",
      "Bank account.",
      "Information for student pass.",
      "Support for medical assistance.",
      "Assistance in time of internships and placements.",
      "A student advisor in need.",
      "Above all, a home away from home."
    ].map((service, index) => (
      <div key={index} className="flex items-start">
        <span className="text-orange-500 mr-2">🔄</span>
        <span>{service}</span>
      </div>
    ))}
  </div>
</section>


      {/* Vision / Mission */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/abts.jpg"
          alt="About Maitri"
          className="w-full rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision & Mission</h2>
          <p className="text-gray-600 mb-6">
           The Core purpose of Maitri Global Education, is to be a bridge between cultures, extending high quality education and services reachable to every aspiring student.
          </p>
         <ul>
          <li>MGE guides the student in discerning and decision making, in the selection of the course and institution</li>
          <li>MGE is dedicated to find institutions where, talented students are given the opportunity to be trained under experts, making the international experience a reality.</li>
          <li>MGE engages to enhance the international learning by interlinking the educational institutions, students and teachers worldwide.</li>
         </ul>
        </div>
      </section>

      {/* Our Team (unchanged) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mt-2">
                  {member.role}
                </span>
                <p className="mt-4 text-gray-600 text-sm">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Maitri */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            🌍 <h3 className="font-semibold mt-2">Global Network</h3>
            <p className="text-gray-600 text-sm mt-2">
              Access top universities worldwide.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            🎓 <h3 className="font-semibold mt-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm mt-2">
              Personalized career and education counseling.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            🤝 <h3 className="font-semibold mt-2">Trusted Support</h3>
            <p className="text-gray-600 text-sm mt-2">
              From application to admission.
            </p>
          </div>
        </div>
      </section> */}

      {/* Partners */}
      {/* <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white border p-4 rounded-lg shadow hover:shadow-md transition flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default About;
