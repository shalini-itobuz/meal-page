import React, { useState } from 'react';
import deleteicon from "../assets/catagory/delete.png";
const DeleteCategoryModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };




    return (
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg w-[400px]">
                <div className="flex justify-between items-center mb-5">
                    <div></div>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='flex justify-center'> <img src={deleteicon} /></div>


                <div className='text-black font-light text-center text-2xl'>
                    Are you sure you want to delete this category?
                </div>
                <div className='text-center mt-4 text-sm text-gray-500'>You will not be able to recover it once it is deleted.</div>
                <div className='flex gap-4 justify-center'>
                    <button className='bg-[#ff4b00] mt-4  px-9 rounded-[10px] py-3 text-white'>
                        Delete
                    </button>
                    <button className='bg-[#ffff] mt-4  px-9 rounded-[10px] py-3 text-orange-600 border border-orange-500'>
                        Cancel
                    </button>
                </div>



            </div>

        </div >
    );
};

export default DeleteCategoryModal;
