import React from 'react';
import food from "../assets/catagory/food.png"
const MealCard = ({ mealType }) => {
    const handleClick = () => {
        console.log('Dots clicked');
    };

    return (
        <div className='rounded-2xl overflow-hidden w-fit h-auto shadow-2xl flex flex-col  '>
            <div className='w-[100%] '>
                <img src={food} alt="meal type" className='w-full h-full object-cover' />
            </div>
            <div className='p-[20px] bg-white flex justify-between items-center rounded-b-3xl'>
                <p className='font-bold'>{mealType}</p>
                <span onClick={handleClick}>&#8226;&#8226;&#8226;</span>
            </div>
        </div>
    );
};

export default MealCard;
