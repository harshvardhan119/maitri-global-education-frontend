import { useRef, useState } from "react";
import GoldButton from '../components/Goldbutton';

/* ---------------- Filter options ---------------- */
const filterOptions = {
  location: ["Milan", "Rome", "Florence", "India", "Italy", "London"],
  course: ["Fashion design", "Modelling", "Engineering", "Phd", "Summer course", "Short course"],
  institute: [
    "Ecole Ducasse",
    "Regents University",
    "Paris School of Business",
    "IMI",
    "European School of Economics",
    "Macromedia University",
    "NABA",
  ],
  language: ["English", "French", "Spain", "Italy", "German"],
  scholarship: ["Scholarship", "No Scholarship"],
};

/* ---------------- Icons (keep your data URLs) ---------------- */
const filterIcons = {
  location: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTIgMTEuNUEyLjUgMi41IDAgMCAxIDkuNSA5QTIuNSAyLjUgMCAwIDEgMTIgNi41QTIuNSAyLjUgMCAwIDEgMTQuNSA5YTIuNSAyLjUgMCAwIDEtMi41IDIuNU0xMiAyYTcgNyAwIDAgMC03IDdjMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2E3IDcgMCAwIDAtNy03Ii8+PC9zdmc+",
  course: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTkgM2gtMnY2LjVsLTMtMi4yNWwtMyAyLjI1VjNINXYxOGgxNHptLTYgMHYyLjVsMS0uNzVsMSAuNzVWM3ptOCAyMEgzVjFoMTh6Ii8+PC9zdmc+",
  institute: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNS43MiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE5MjAgMTc5MiI+PHBhdGggZmlsbD0iIzAwMCIgZD0ibTk2MCAwbDk2MCAzODR2MTI4aC0xMjhxMCAyNi0yMC41IDQ1dC00OC41IDE5SDE5N3EtMjggMC00OC41LTE5VDEyOCA1MTJIMFYzODR6TTI1NiA2NDBoMjU2djc2OGgxMjhWNjQwaDI1NnY3NjhoMTI4VjY0MGgyNTZ2NzY4aDEyOFY2NDBoMjU2djc2OGg1OXEyOCAwIDQ4LjUgMTl0MjAuNSA0NXY2NEgxMjh2LTY0cTAtMjYgMjAuNS00NXQ0OC41LTE5aDU5em0xNTk1IDk2MHEyOCAwIDQ4LjUgMTl0MjAuNSA0NXYxMjhIMHYtMTI4cTAtMjYgMjAuNS00NXQ0OC41LTE5eiIvPjwvc3ZnPg==",
  language: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTIgMjJxLTIuMDUgMC0zLjg3NS0uNzg4dC0zLjE4Ny0yLjE1dC0yLjE1LTMuMTg3VDIgMTJxMC0yLjA3NS43ODgtMy44ODd0Mi4xNS0zLjE3NXQzLjE4Ny0yLjE1VDEyIDJxMi4wNzUgMCAzLjg4OC43ODh0My4xNzQgMi4xNXQyLjE1IDMuMTc1VDIyIDEycTAgMi4wNS0uNzg4IDMuODc1dC0yLjE1IDMuMTg4dC0zLjE3NSAyLjE1VDEyIDIybTAtMi4wNXEuNjUtLjkgMS4xMjUtMS44NzVUMTMuOSAxNmgtMy44cS4zIDEuMS43NzUgMi4wNzVUMTIgMTkuOTVtLTIuNi0uNHEtLjQ1LS44MjUtLjc4Ny0xLjcxM1Q4LjA1IDE2SDUuMXEuNzI1IDEuMjUgMS44MTMgMi4xNzVUOS40IDE5LjU1bTUuMiAwcTEuNC0uNDUgMi40ODgtMS4zNzVUMTguOSAxNmgtMi45NXEtLjIyNS45NS0uNTYyIDEuODM4VDE0LjYgMTkuNTVNNC4yNSAxNGgzLjRxLS4wNzUtLjUtLjExMi0uOTg3VDcuNSAxMnQuMDM4LTEuMDEyVDcuNjUgMTBoLTMuNHEtLjEyNS41LS4xODcuOTg4VDQgMTJ0LjA2MyAxLjAxM3QuMTg3Ljk4N201LjQgMGg0LjdxLjA3NS0uNS4xMTMtLjk4N1QxNC41IDEydC0uMDM4LTEuMDEyVDE0LjM1IDEwaC00LjdxLS4wNzUuNS0uMTEyLjk4OFQ5LjUgMTJ0LjAzOCAxLjAxM3QuMTEyLjk4N202LjcgMGgzLjRxLjEyNS0uNS4xODgtLjk4N1QyMCAxMnQtLjA2Mi0xLjAxMlQxOS43NSAxMGgtMy40cS4wNzUuNS4xMTMuOTg4VDE2LjUgMTJ0LS4wMzggMS4wMTN0LS4xMTIuOTg3bS0uNC02aDIuOTVxLS43MjUtMS4yNS0xLjgxMi0yLjE3NVQxNC42IDQuNDVxLjQ1LjgyNS43ODggMS43MTNUMTUuOTUgOE0xMC4xIDhoMy44cS0uMy0xLjEtLjc3NS0yLjA3NVQxMiA0LjA1cS0uNjUuOS0xLjEyNSAxLjg3NVQxMC4xIDhtLTUgMGgyLjk1cS4yMjUtLjk1LjU2My0xLjgzOFQ5LjQgNC40NVE4IDQuOSA2LjkxMiA1LjgyNVQ1LjEgOCIvPjwvc3ZnPg==",
  scholarship: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTYgNy43OGwtLjMxMy4wOTVsLTEyLjUgNC4xODhMLjM0NSAxM0wyIDEzLjUzdjguNzVjLS41OTcuMzQ3LTEgLjk4LTEgMS43MmEyIDIgMCAxIDAgNCAwYzAtLjc0LS40MDMtMS4zNzMtMS0xLjcydi04LjA2bDIgLjY1NVYyMGMwIC44Mi41IDEuNSAxLjA5NCAxLjk3Yy41OTQuNDY3IDEuMzMyLjc5NyAyLjIxOCAxLjA5M2MxLjc3NC41OSA0LjExMi45MzcgNi42ODguOTM3czQuOTE0LS4zNDYgNi42ODgtLjkzOGMuODg2LS4yOTUgMS42MjQtLjYyNSAyLjIxOC0xLjA5M0MyNS41IDIxLjUgMjYgMjAuODIgMjYgMjB2LTUuMTI1bDIuODEzLS45MzhMMzEuNjU1IDEzbC0yLjg0My0uOTM4bC0xMi41LTQuMTg3em0wIDIuMDk1TDI1LjM3NSAxM0wxNiAxNi4xMjVMNi42MjUgMTN6bS04IDUuNjg4bDcuNjg4IDIuNTYybC4zMTIuMDk0bC4zMTMtLjA5NUwyNCAxNS41NjJWMjBjMCAuMDEuMDA0LjEyNi0uMzEzLjM3NWMtLjMxNi4yNS0uODgzLjU2NS0xLjYyNS44MTNDMjAuNTggMjEuNjgxIDE4LjM5NSAyMiAxNiAyMnMtNC41OC0uMzE4LTYuMDYzLS44MTNjLS43NC0uMjQ3LTEuMzA4LS41NjMtMS42MjQtLjgxMkM3Ljk5NSAyMC4xMjUgOCAyMC4wMSA4IDIweiIvPjwvc3ZnPg==",
};

// Buttons section for top buttons
const sections = [
  { id: "All", label: "All" },
  { id: "Courses", label: "Course" },
  { id: "Scholarships", label: "Scholarships" },
  { id: "Events", label: "Events" },
  { id: "Blogs", label: "Blogs" },
  { id: "Location", label: "Location" },
];

/* ---------------- Dynamic sections ---------------- */
const extraSections = [
  {
    title: "Courses",
    btnText: "Apply",
    cards: [
      {
        img: "6.png",
        title: "Fashion Design Course",
        deadline: "30 Sep 2025",
        tags: { course: "Fashion design", location: "Milan", institute: "NABA", language: "English" },
      },
      {
        img: "4.png",
        title: "Modelling Course",
        deadline: "15 Oct 2025",
        tags: { course: "Modelling", location: "Rome", institute: "European School of Economics", language: "French" },
      },
      {
        img: "5.png",
        title: "Engineering Course",
        deadline: "20 Nov 2025",
        tags: { course: "Engineering", location: "India", institute: "IMI", language: "English" },
      },
      {
        img: "1.png",
        title: "Engineering Course",
        deadline: "20 Nov 2025",
        tags: { course: "Engineering", location: "London", institute: "Regents University", language: "German" },
      },
    ],
  },
  {
    title: "Scholarships",
    btnText: "Apply",
    cards: [
      {
        img: "e1.png",
        title: "NABA Scholarship",
        deadline: "25 Aug 2025",
        tags: { scholarship: "Scholarship", institute: "NABA", location: "Milan" },
      },
      {
        img: "e3.png",
        title: "IMI Scholarship",
        deadline: "30 Sep 2025",
        tags: { scholarship: "Scholarship", institute: "IMI", location: "India" },
      },
      {
        img: "e4.png",
        title: "Regents University Scholarship",
        deadline: "15 Oct 2025",
        tags: { scholarship: "Scholarship", institute: "Regents University", location: "London" },
      },
    ],
  },
  {
    title: "Events",
    btnText: "Register",
    cards: [
      {
        img: "b4.png",
        title: "Italy Education Fair",
        deadline: "10 Oct 2025",
        tags: { location: "Italy", language: "Italian" },
      },
      {
        img: "b3.png",
        title: "Florence Open Day",
        deadline: "22 Nov 2025",
        tags: { location: "Florence", language: "English" },
      },
      {
        img: "b1.png",
        title: "London Seminar",
        deadline: "05 Dec 2025",
        tags: { location: "London", language: "English" },
      },
    ],
  },
];

export default function Explore() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    location: [],
    course: [],
    institute: [],
    language: [],
    scholarship: [],
  });

  const sectionRefs = useRef({});
  const normalize = (s) => s.toLowerCase().trim();

  // Synonyms -> section title
  const sectionAlias = {
    event: "Events",
    events: "Events",
    scholarship: "Scholarships",
    scholarships: "Scholarships",
    course: "Courses",
    courses: "Courses",
  };

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const alreadySelected = prev[type].includes(value);
      return {
        ...prev,
        [type]: alreadySelected
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value],
      };
    });
  };

  const filterCards = (cards) =>
    cards.filter((card) =>
      Object.keys(filters).every((type) => {
        if (filters[type].length === 0) return true;
        return filters[type].includes(card.tags?.[type]);
      })
    );

  const handleSearch = () => {
    const q = normalize(search);
    if (!q) return;

    const aliasHit = sectionAlias[q];
    if (aliasHit && sectionRefs.current[aliasHit]) {
      sectionRefs.current[aliasHit].scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    let foundSection = null;
    for (const section of extraSections) {
      const matchedCard = section.cards.find((card) => normalize(card.title).includes(q));
      if (matchedCard) {
        foundSection = section.title;
        break;
      }
    }
    if (foundSection && sectionRefs.current[foundSection]) {
      sectionRefs.current[foundSection].scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    for (const section of extraSections) {
      const matchedByTag = section.cards.find((card) =>
        Object.values(card.tags || {}).some((v) => normalize(String(v)).includes(q))
      );
      if (matchedByTag) {
        sectionRefs.current[section.title].scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  //  Scroll when section buttons are clicked
  const scrollToSection = (title) => {
    if (title === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (sectionRefs.current[title]) {
      sectionRefs.current[title].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Header + Search */}
      <div className="justify-center mt-4">
        <h2
          style={{ fontFamily: "Epika" }}
          className="bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] bg-clip-text text-transparent text-center text-3xl md:text-6xl font-bold uppercase drop-shadow-lg"
        >
          Explore Your Educational <br /> Possibilities
        </h2>
        <p
          style={{ fontFamily: "Montserrat" }}
          className="text-center mt-2 text-lg md:text-2xl"
        >
          Discover universities, programs, scholarships, and areas of study tailored to your interests and goals.
        </p>
        <div className="flex justify-center mt-4 bg-gray-100 p-4 rounded-lg w-full md:w-2/3 mx-auto gap-3">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-3"
            placeholder="🔍 Search: events, scholarships, courses, titles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {/* FIX: Make Search button call handleSearch */}
          <div className="mt-1 rounded" onClick={handleSearch}>
            <GoldButton text={'Search'} />
          </div>
        </div>
      </div>

      {/* Filters + Sections */}
      <div className="flex flex-col lg:flex-row mt-4">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/6 p-4 border-2 border-gray-200 rounded mb-4 lg:mb-0">
          {/* Mobile filters */}
          <div className="block lg:hidden">
            <details className="w-full">
              <summary className="flex items-center justify-between cursor-pointer text-xl font-bold p-2 list-none">
                <div className="flex items-center">
                  <span>Filters</span>
                </div>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="flex flex-col gap-4 mt-3 pl-2">
                {Object.entries(filterOptions).map(([type, options]) => (
                  <details key={type} className="pl-2">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold capitalize py-2">
                      <div className="flex items-center">
                        <img src={filterIcons[type]} alt={`${type} icon`} className="w-5 h-5 mr-2" />
                        <span>{type}</span>
                      </div>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="flex flex-col gap-2 pl-6 mt-2">
                      {options.map((option) => (
                        <label key={option} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name={type}
                            value={option}
                            checked={filters[type].includes(option)}
                            onChange={() => handleFilterChange(type, option)}
                            className="appearance-none w-5 h-5 rounded-full border-2 border-black checked:bg-[#d4af37] checked:border-black"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>
          </div>

          {/* Desktop filters */}
          <div className="hidden lg:block">
            <div className="mb-4">
              <span className="text-xl font-bold">Filters</span>
            </div>
            <div className="flex flex-col gap-4 mt-3 pl-2">
              {Object.entries(filterOptions).map(([type, options]) => (
                <details key={type} className="pl-2" open>
                  <summary className="flex items-center justify-between cursor-pointer font-semibold capitalize py-2">
                    <div className="flex items-center">
                      <img src={filterIcons[type]} alt={`${type} icon`} className="w-5 h-5 mr-2" />
                      <span>{type}</span>
                    </div>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="flex flex-col gap-2 pl-6 mt-2">
                    {options.map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name={type}
                          value={option}
                          checked={filters[type].includes(option)}
                          onChange={() => handleFilterChange(type, option)}
                          className="appearance-none w-5 h-5 rounded-full border-2 border-black checked:bg-[#d4af37] checked:border-black"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="w-full lg:w-5/6 p-4 border-2 border-gray-200 rounded">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {sections.map((section) => (
              <div key={section.id} onClick={() => scrollToSection(section.id)}>
                <GoldButton text={section.label} />
              </div>
            ))}
            
          </div>

          <div className="mt-6 space-y-12">
            {extraSections.map((section) => (
              <div
                key={section.title}
                ref={(el) => {
                  if (el) sectionRefs.current[section.title] = el;
                }}
              >
                <h2 className="text-3xl font-extrabold mb-5">{section.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {filterCards(section.cards).length === 0 ? (
                    <p className="text-gray-500">No matching results</p>
                  ) : (
                    filterCards(section.cards).map((card, idx) => (
                      <div key={idx} className="flex flex-col items-center sm:items-start w-full max-w-xs sm:max-w-none">
                        <img
                          src={card.img}
                          alt=""
                          className="w-full h-auto max-h-56 sm:max-h-64 md:max-h-72 lg:max-h-60 rounded-lg shadow-md object-cover"
                        />
                        <h1
                          style={{ fontFamily: "Montserrat" }}
                          className="text-lg sm:text-xl md:text-2xl font-bold mb-1 mt-2 text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]"
                        >
                          {card.title}
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg font-bold text-center sm:text-left">
                          Deadline: {card.deadline}
                        </p>
                        <GoldButton text={'Read More'} to="#" />
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
