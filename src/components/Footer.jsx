import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const socialLinks = [
  { href: "#", icon: "fab fa-facebook-f", label: "Facebook" },
  { href: "#", icon: "fab fa-twitter", label: "Twitter" },
  { href: "#", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { href: "#", icon: "fab fa-youtube", label: "YouTube" },
  { href: "#", icon: "fab fa-instagram", label: "Instagram" },
  { href: "#", icon: "fab fa-tiktok", label: "TikTok" }
];

const footerLinks = [
  {
    title: "HQ Office:",
    links: ["Via di Villamagna 98 Florence","Weekdays: 9:00am to 5:00pm"]
  },
  {
    title: "Quick Links",
    links: ["Undergratudate Courses", "Master/Phd. Courses", "Short Courses","Scholarships","Events and talk","About Maitri"]
  },
  {
    title: "Countries",
    links: [
        "Italy",
        "France",
        "Germany",
        "United Kingdom",
        "United States",
        "China",
        "Japan",
        "India",
        "Brazil",
        "Canada"
    ]
  },
  {
    title: "Career Areas",
    links: ["Art", "Fashion & Design",
"Business & Management",
"Film, Animation, Media & Acting",
"Hospitality & Culinary Arts",
"Engineering, Humanities & Social Sciences"]
  },
  {
    title: "Courses",
    links: ["Portfolio Preparation","Italian Language Course",]
  },
  {
    title: "SHORT COURSES",
    links: ["Fashion", "Design", "Art"]
  },
  {
    title: "Subscribe to newsletter",
    links: ["Recieve update on latest scholarships, events, career tips and study abroad experience"]
  },
  {
    title: "Phone",
    links: ["+393318476757", "+393249887245"]
  },
  {
    title: "NEWSROOM",
    links: ["News & Events", "Open Day", "UK & the EU Settlement Scheme", "Talent projects", "Photo gallery"]
  },
  {
    title: "I'M ALUMNI",
    links: ["Alumni stories", "Community groups", "I'M Mentors"]
  },
  {
    title: "CAREERS & INDUSTRY RELATIONS",
    links: ["Students", "Enterprises"]
  },
  {
    title: "ABOUT US",
    links: ["Representative Offices & Information Centre", "International promoters", "Contacts", "Work with us"]
  }
];

const legalLinks = ["Privacy", "Cookies", "Cookie settings"];

const Footer = () => (
  <footer className="bg-[#232323] text-white pt-8 pb-4 px-4 md:px-12 w-full">
    <div className="max-w-7xl mx-auto">
      {/* Logo and Social */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <img src="maitri.png" alt="Logo" className="h-8 md:h-10" />
            <span className="text-xs md:text-sm text-gray-300">since 2009</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center mt-4 md:mt-0">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition-colors duration-200"
            >
              <i className={`${s.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-6 md:gap-x-10 text-sm mb-8">
        {footerLinks.map((col, idx) => (
          <div key={idx}>
            <h4 className="font-bold mb-2 text-[13px] tracking-wide text-white">{col.title}</h4>
            <ul>
              {col.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-150 block py-0.5">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legal and Copyright */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-700 pt-4 text-xs text-gray-400">
        <div className="flex flex-row gap-4 mb-2 md:mb-0">
          {legalLinks.map((l, i) => (
            <a key={i} href="#" className="hover:text-white transition-colors duration-150">{l}</a>
          ))}
        </div>
        <div className="text-center md:text-right font-semibold text-white">
          2025 Maitri Global Education. All Rights Reserved ·
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
