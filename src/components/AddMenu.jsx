import React from 'react'

const AddMenu = () => {
    return (
        <>
            <div className=' w-fit fixed left-[82%] bottom-[2%] md:left-[91%] flex flex-col items-center '  >
                <button className='bg-black w-[50px] text-white flex justify-center items-center p-2 md:p-0 lg:p-8  rounded-full h-[50px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '50%' }} >
                    +
                </button>
                <div className=" text-gray-800 hidden text-center  md:block">
                    Add New <br />Menu
                </div>
            </div>
        </>
    )
}

export default AddMenu
