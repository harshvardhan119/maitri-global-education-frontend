import React from 'react';

const Scholarshipind = () => {
    return (
        <div>
            {/* Desktop View (lg and above) */}
            <div className="hidden lg:block">
                <div className="relative w-screen h-[80vh]">
                    {/* Full-width Image */}
                    <img src="2.png" alt="Example" className="w-full h-full object-cover" />

                    {/* Text Overlay - Left side */}
                    <div className="absolute inset-1  flex flex-col items-start justify-center pl-16 space-y-4 z-10">
                        <h2 style={{ fontFamily: 'Montserrat' }}
                            className="bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]
                            bg-clip-text text-transparent  text-6xl font-bold leading-tight tracking-wide uppercase drop-shadow-lg text-left">
                            ABC University
                        </h2>
                        <p className="text-white font-bold text-2xl max-w-xl">
                            Empowering students to achieve <br /> their academic goals.
                        </p>
                        
                    </div>

                    {/* Right-side form */}
                    <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center items-center p-8 z-20 translate-y-4/6">
                        <div className='p-6 border-2 border-gray-400 rounded-lg bg-white shadow-lg w-full max-w-md'>
                            <img className='w-full h-72 object-cover rounded-lg mb-4' src="3.png" alt="" />
                            <h2 style={{ fontFamily: 'Roboto' }} className="text-4xl font-bold mb-1">
                                Enquire Now
                            </h2>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-2 w-full" />
                                <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 w-full" />
                                <input type="number" placeholder="Phone" className="border border-gray-300 rounded-md p-2 w-full" />
                                <select className="border text-gray-500 border-gray-300 rounded-md p-2 w-full">
                                    <option value="">Interested in:</option>
                                    <option value="city">Scholarship</option>
                                    <option value="suburban">Admission</option>
                                    <option value="international">Course</option>
                                </select>
                                <button className="px-8 py-2 w-full bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]
                                    text-white font-semibold rounded hover:opacity-90 transition">
                                    Enquire Now
                                </button>
                            </form>
                        </div>

                        <img className='w-128 h-72 object-cover rounded-lg mt-4 mr-12' src="4.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Medium Screens (Nest Hub size, md to lg) */}
            <div className="hidden md:block lg:hidden">
                <div className="relative w-screen h-[80vh]">
                    <img src="2.png" alt="Example" className="w-full h-full object-cover" />

                    {/* Text Overlay */}
                    <div className="absolute inset-1 flex flex-col items-start justify-center pl-10 space-y-4 z-10">
                        <h2 style={{ fontFamily: 'Montserrat' }}
                            className="bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]
                bg-clip-text text-transparent text-3xl font-bold leading-tight uppercase drop-shadow-lg">
                            ABC University
                        </h2>
                        <p className="text-white font-bold text-xl max-w-xl">
                            Empowering students to achieve <br /> their academic goals.
                        </p>
                        
                    </div>

                    {/* Centered Form - shifted down for iPad sizes */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 md:translate-y-8 w-1/2 flex flex-col items-center p-8 z-20">
                        <div className='p-6 border-2 border-gray-400 rounded-lg bg-white shadow-lg w-full max-w-md'>
                            <img className='w-full h-60 object-cover rounded-lg mb-4' src="3.png" alt="" />
                            <h2 style={{ fontFamily: 'Roboto' }} className="text-3xl font-bold mb-1">Enquire Now</h2>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-2 w-full" />
                                <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 w-full" />
                                <input type="number" placeholder="Phone" className="border border-gray-300 rounded-md p-2 w-full" />
                                <select className="border text-gray-500 border-gray-300 rounded-md p-2 w-full">
                                    <option value="">Interested in:</option>
                                    <option value="city">Scholarship</option>
                                    <option value="suburban">Admission</option>
                                    <option value="international">Course</option>
                                </select>
                                <button className="px-6 py-2 w-full bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]
                        text-white font-semibold rounded">
                                    Enquire Now
                                </button>
                            </form>
                        </div>
                        <img className='w-full h-60 object-cover rounded-lg mt-4' src="4.png" alt="" />
                    </div>
                </div>
            </div>


            {/* Mobile View (< sm) */}
            <div className="block sm:hidden">
                {/* Hero Image */}
                <div className="relative w-screen h-auto">
                    <img src="2.png" alt="Example" className="w-full h-auto object-contain" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-4 z-10">
                        <h2 style={{ fontFamily: 'Montserrat' }}
                            className="bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]
                            bg-clip-text text-transparent text-3xl font-bold uppercase drop-shadow-lg">
                            ABC University
                        </h2>
                        <p className="text-white font-bold text-lg max-w-md">
                            Empowering students to achieve <br /> their academic goals.
                        </p>
                       
                    </div>
                </div>

                {/* Form and Image stacked */}
                <div className="flex flex-col w-full px-4 mt-4 gap-4">
                    <div className="p-4 border-2 border-gray-400 rounded-lg bg-white shadow-lg w-full flex flex-col">
                        <img className='w-full h-40 object-cover rounded-lg mb-4' src="3.png" alt="" />
                        <h2 style={{ fontFamily: 'Roboto' }} className="text-xl font-bold mb-1">Enquire Now</h2>
                        <form className="space-y-3 flex-grow">
                            <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-2 w-full" />
                            <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 w-full" />
                            <input type="number" placeholder="Phone" className="border border-gray-300 rounded-md p-2 w-full" />
                            <select className="border text-gray-500 border-gray-300 rounded-md p-2 w-full">
                                <option value="">Interested in:</option>
                                <option value="city">Scholarship</option>
                                <option value="suburban">Admission</option>
                                <option value="international">Course</option>
                            </select>
                            <button className="px-6 py-2 w-full bg-gradient-to-r from-[#d4af37] via-[#e6c200] to-[#b8860b]
                                text-white font-semibold rounded">
                                Enquire Now
                            </button>
                        </form>
                    </div>
                    <img className='w-full object-cover rounded-lg' src="4.png" alt="" />
                </div>
            </div>

            {/* Introduction Section */}
            <div className='relative w-screen  md:h-[52vh] lg:h-[80vh] flex flex-col px-6 sm:px-12 lg:px-16 py-10 lg:py-16'>
                <div>
                    <h1 style={{ fontFamily: 'Roboto' }} className='text-black text-3xl sm:text-4xl font-bold mb-3'>Introduction</h1>
                    <p className='text-lg sm:text-xl'>Brief Introduction highlights <br /> key details about the university</p>

                    <h1 style={{ fontFamily: 'Roboto' }} className='text-black text-3xl sm:text-4xl font-bold mb-3 mt-8'>Locations</h1>
                    <ul className="list-disc pl-5 text-lg sm:text-xl">
                        <li>Number of students</li>
                        <li>Founded</li>
                    </ul>

                    <h1 style={{ fontFamily: 'Roboto' }} className='text-black text-3xl sm:text-4xl font-bold mb-3 mt-8'>Related Links</h1>
                    <p className='text-base sm:text-lg space-x-2'>
                        <a className='border p-2' href="https://maitriglobaleducation.com/">Maitri Global Education</a>
                        <a className='border p-2' href="https://maitriglobaleducation.com/">Scholarship</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Scholarshipind;
