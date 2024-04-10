// MealPage.jsx
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import Orders from "../components/renderOrders.jsx";
import MealCard from "../components/MealCard.jsx"; // Import the MealCard component
import Catagory from "./Catagory.jsx";
import Navbar from "../components/Navbar.jsx";
function MealPage() {
    const [cartCount, setCartCount] = useState(0);
    const [foodOrders, setFoodOrders] = useState([]);
    const [mealTypes, setMealTypes] = useState([]); // Initialize mealTypes state

    useEffect(() => {
        // Retrieve data
        const storedOrders = JSON.parse(localStorage.getItem('foodDetails')) || [];
        setFoodOrders(storedOrders);
        setCartCount(storedOrders.length)
        // Set mealTypes array
        setMealTypes(['Breakfast', 'Lunch', 'Snacks', 'Dinner']);
    }, []);

    console.log("helloo");
    return (
        <>
            <Navbar cartCount={cartCount} />
            <div className="  w-[90%] lg:w-[75%] m-auto mt-10" >
                <div className="w-[80%]" >
                    Current order:
                </div>
                <div className="flex flex-wrap mt-5 gap-5 justify-center  ">
                    <Orders setCartCount={setCartCount} foodOrders={foodOrders} setFoodOrders={setFoodOrders} />
                </div>
            </div >
            <SearchBar />
            <div className="flex w-[75%] m-auto items-center justify-between mt-4">
                <div>
                    Food Catagories:
                </div>
                <div >
                    <button className='bg-[#ff4b00] flex gap-1  px-9 rounded-[10px] py-3 text-white'>
                        +  Add <span className="hidden sm:flex">Category</span>
                    </button>
                </div>
            </div>

            <div className="w-[80%] m-auto mt-5 flex gap-2 justify-center flex-wrap">
                {mealTypes.map((mealType, index) => (
                    <MealCard key={index} mealType={mealType} />
                ))}
            </div>
        </>
    );
}

export default MealPage;
