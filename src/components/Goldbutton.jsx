// components/GoldButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const GoldButton = ({ text, to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="bg-gradient-to-r from-[#d4af37] via-[#f5deb3] to-[#b8860b] 
                 text-black font-thin px-6 py-2 shadow-md
                 transform transition-transform duration-300 
                 hover:scale-105 cursor-pointer"
    //   style={{ fontFamily: "" }} // optional if you want same font
    >
      {text}
    </button>
  );
};

export default GoldButton;
