import React, { useState, useEffect } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import petukLogo from '../assets/Navbar/petukLogo.png';
import person from '../assets/Navbar/person.png';

const Navbar = ({ cartCount }) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleCartClick = () => {
        // Handle cart click event
    };

    const handleProfileClick = () => {
        // Handle profile click event
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="md:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  ">
            <nav className="p-lg-8 py-4 flex flex-wrap md:flex-nowrap md:flex-row justify-between md:items-center w-[95%]  md:mx-auto z-40 ">
                <div className="flex items-center justify-between space-x-4 w-[30%]  order-[1] md:order-[1] m-2  md:m-0">
                    <img src={petukLogo} alt="Logo" className="h-8  w-[90%] sm:w-[40%] md:w-[90%] lg:w-[30%] xl:w-[25%]" />
                </div>
                <div className="p-2  flex space-x-4 order-[3] md:order-[2]  gap-3 flex-nowrap mt-3 md:mt-0  lg:me-[-5%] xl:me-[-20%] m-auto md:m-0 w-[100%] md:w-[60%] lg:w-[50%]  flex-col sm:flex-row   justify-center items-center">
                    <div className="flex gap-5 justify-center ">
                        <a href="#" className="text-black py-2 hover:border-b-4 border-orange-500 text-nowrap ">
                            Menu Items
                        </a>
                        <a href="#" className="text-black py-2 hover:border-b-4 border-orange-500">
                            Orders
                        </a>
                    </div>
                    <div className="flex space-x-0 rounded-xl overflow-hidden divide-x-2 border-gray-100 border-2  bg-gray-50 text-gray-600">
                        <div
                            className={`py-2 px-4 text-nowrap cursor-pointer ${selectedOption === 'dine-in' ? 'bg-orange-500 text-white' : 'hover:bg-orange-50 hover:text-black'
                                }`}
                            onClick={() => handleOptionClick('dine-in')}
                        >
                            Dine In
                        </div>
                        <div
                            className={`py-2 px-4 cursor-pointer ${selectedOption === 'takeaway' ? 'bg-orange-500 text-white' : 'hover:bg-orange-50 hover:text-black'
                                }`}
                            onClick={() => handleOptionClick('takeaway')}
                        >
                            Takeaway
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4  w-[30%] md:w-fit justify-center md:justify-end order-[2] md:order-[3] ">
                    <button className="text-black  gap-2 focus:outline-none flex md:flex-col lg:flex-row ms-16 relative" onClick={handleCartClick}>
                        <HiOutlineShoppingBag size={24} />
                        Cart
                        {cartCount > 0 && (
                            <span className="bg-pink-600 border border-white text-sm text-white flex justify-center items-center w-[10px] absolute left-3 top-1 rounded-[50%] h-[17px] px-2 py-1">{cartCount}</span>
                        )}
                    </button>
                    <img className="rounded-full w-[80%]  " src={person} alt="Profile" />
                    <button className=" focus:outline-none flex " onClick={handleProfileClick}>
                        <span className="ml-2 text-black text-nowrap py-2 hidden md:block">John Doe</span>
                    </button>
                    <div >
                        <button className="relative mt-2 md-ms-0 hidden md:block">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 7L10 12L15 7H5Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
