import React from 'react'
import search from "../assets/catagory/search.png"
const SearchBar = () => {
    return (
        <div className=' w-[80%] lg:w-[80%] xl:w-[75%]  m-auto bg-white mt-5 p-3 flex justify-center gap-3 rounded-xl items-center border border-1 border-gray-200 text-gray-500'>
            <img className="h-[3%] flex " src={search}></img>
            <input className='focus:outline-none w-[50%] ' type="search" placeholder="Search food item" />
        </div>
    )
}

export default SearchBar
