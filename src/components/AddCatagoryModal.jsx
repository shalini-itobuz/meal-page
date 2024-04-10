import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const AddCategoryModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [files, setFiles] = useState([]);

    const closeModal = () => {
        setIsOpen(false);
    };

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg w-[400px]">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-semibold text-xl">Add New Category</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className='flex gap-2 flex-col'>
                    <div className='text-gray-500'>
                        Image Upload
                    </div>
                    <div {...getRootProps()} className=' flex justify-center items-center focus:outline-none border bg-gray-100 rounded-[10px] border-dashed border-gray-200 w-[99%] h-[80px]'>
                        <input {...getInputProps()} />
                        <p className='text-gray-500 '>Drop image here</p>
                    </div>
                </div>

                <div className='flex gap-2 flex-col mt-4'>
                    <div className='text-gray-500'>
                        Category Name
                    </div>
                    <input className='focus:outline-none p-2 border rounded-[10px]  border-gray-300 w-[99%] h-[40px]' />
                </div>

                <div className='flex gap-2 flex-col mt-4'>
                    <div className='text-gray-500'>
                        Description
                    </div>
                    <input className='focus:outline-none border rounded-[10px]  border-gray-200 w-[99%] h-[80px]' />
                </div>
                <div className='flex justify-end'>
                    <button className='bg-[#ff4b00] mt-4  px-9 rounded-[10px] py-3 text-white'>
                        Add Category
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AddCategoryModal;
