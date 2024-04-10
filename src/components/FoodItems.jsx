import React, { useState, useEffect } from 'react';
import food from "../assets/catagory/food.png"

const FoodCard = ({ setCartCount, setFoodOrders, foodName, cost }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        // Retrieve existing data from localStorage or initialize an empty array
        const existingData = JSON.parse(localStorage.getItem('foodDetails')) || [];

        // Check if the item is present in local storage
        const isItemAdded = existingData.some(item => item.foodName === foodName);

        // Update isAdded state based on presence of item
        setIsAdded(isItemAdded);
        setCartCount(existingData.length);
    }, [foodName]);

    const handleToggle = () => {
        setIsAdded(!isAdded);

        // Create an object with food details and quantity
        const foodDetails = { foodName, cost, quantity };

        // Retrieve existing data from localStorage or initialize an empty array
        const existingData = JSON.parse(localStorage.getItem('foodDetails')) || [];

        // Add new food details to the array
        if (isAdded) {
            // Remove the item if already added
            const newData = existingData.filter(item => item.foodName !== foodName);
            localStorage.setItem('foodDetails', JSON.stringify(newData));
            setFoodOrders(newData)
            setCartCount(newData.length)
        } else {
            // Add new item
            existingData.push(foodDetails);
            localStorage.setItem('foodDetails', JSON.stringify(existingData));
            setFoodOrders(existingData)
            setCartCount(existingData.length)
        }
    };



    return (
        <div className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]' style={{ borderRadius: '28px', width: '330px', margin: '20px' }}>

            <div style={{ position: 'relative' }}>
                <img src={food} alt="Food" style={{ width: '100%', borderRadius: '30px 30px 0px 0px' }} />

                <button className='absolute top-2 right-4 bg-white bg-opacity-50 rounded-md '>&#8226;&#8226;&#8226;</button>
            </div>

            <div className='p-[12px]'
            >
                <div className='flex justify-between items-center'
                >
                    <div>
                        <h4>{foodName}</h4>
                        <p className='text-orange-500 font-bold'>{cost}</p>
                    </div>

                    <button
                        onClick={handleToggle}
                        className={`  border-2 border-solid border-[#f97516] top-[10px] right-[10px] cursor-pointer rounded-[5px] py-[5px] px-[15px] font-bold ${isAdded ? "text-white bg-[#f97516]" : "text-orange-500 bg-transparent"}`}

                    >
                        {isAdded ? '-' : '+'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
