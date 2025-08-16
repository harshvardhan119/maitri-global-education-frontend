import React from 'react';
import '../index.css';

const scholarshipData = [
    {
        image: "s1.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s2.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s3.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s4.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s5.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    },
    {
        image: "s6.png",
        title: "NABA €5000 Scholarship - First Come, First Serve!",
        deadline: "25 August 2025"
    }
];

const Scholarship = () => {
    return (
        <div className='mx-8'>
            {/* Deep sleep effect from top-left */}
            <style>{`
                .image-tilt-left {
                    transform: perspective(1000px) rotateX(2deg) rotateY(4deg);
                    transform-origin: top left;
                    transition: transform 0.4s ease;
                }

                .image-tilt-left:hover {
                    transform: perspective(1000px) rotateX(0) rotateY(0);
                }
            `}</style>

            {/* Added Heading */}
            <h1
                style={{ fontFamily: 'Epika' }} 
                className="bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#f5deb3] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-wide uppercase drop-shadow-lg text-center mt-10"
            >
                Scholarships
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 p-6">
                {scholarshipData.map((item, index) => (
                    <div key={index} className="p-2">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="image-tilt-left w-full h-60 rounded-lg shadow-md object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                        />
                        <h1
                            style={{ fontFamily: 'Montserrat' }}
                            className="inline-block text-lg md:text-xl font-bold mb-2 mt-4 leading-tight tracking-wide uppercase drop-shadow-lg"
                        >
                            {item.title}
                        </h1>
                        <p className="text-md font-bold">Deadline: {item.deadline}</p>
                        <button  
                            style={{ fontFamily: 'Montserrat' }}  
                            className="mt-2 px-6 py-2 bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b] text-black font-semibold rounded hover:opacity-90 transition cursor-pointer hover:scale-105"
                        >
                            Apply
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scholarship;
