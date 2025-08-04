import { useState } from "react";
// import "../font.css";

const navLinks = [
  { title: "EXPLORE", href: "#" },
  { title: "SCHOLARSHIPS", href: "#" },
  { title: "EVENTS & WEBINARS", href: "#" },
  { title: "BLOGS", href: "#" },
  { title: "SERVICES", href: "#" },
  { title: "JOB SEARCH", href: "#" },
  { title: "ABOUT", href: "#" },
  { title: "CONTACT US", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav  style={{ fontFamily: 'roboto'}} className="w-full bg-black text-gray-300 z-20  font-thin">
      {/* Hamburger for mobile - always top right */}
      <button
        className="md:hidden absolute top-3 right-4 p-2 focus:outline-none z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className="block w-7 h-0.5 bg-white mb-1 rounded"></span>
        <span className="block w-7 h-0.5 bg-white mb-1 rounded"></span>
        <span className="block w-7 h-0.5 bg-white rounded"></span>
      </button>
      {/* Row 1: Logo */}
      <div className="flex flex-col items-center py-1">
        <img
          src="/maitri.png"
          alt="maitri logo"
          className="h-16 w-auto mx-auto"
        />
        {/* <p className="text-white text-xs mt-1 font-antic">Nurturing Dreams Since 2009</p> */}
      </div>
      {/* Row 2: Nav Links */}
      <div className="relative">
        {/* Nav links (desktop) */}
        <div className="hidden md:flex justify-center gap-14 py-1 text-sm md:text-base">
          {navLinks.map((item, id) => (
            <a
           
              key={id}
              href={item.href}
              className="hover:text-white transition-colors duration-200 text-sm"
            >
              {item.title}
            </a>
          ))}
        </div>
        {/* Nav links (mobile, toggled) */}
        {menuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bg-black flex flex-col items-center h-full justify-center gap-4 py-4 shadow-lg animate-fade-in z-40">
            {navLinks.map((item, id) => (
              <a
                key={id}
                href={item.href}
                className="hover:text-yellow-300 text-base block w-full text-center py-1 font-normal"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
