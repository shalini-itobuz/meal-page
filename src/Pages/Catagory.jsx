// import OrderBox from "./OrderBox.jsx"
import Orders from "../components/renderOrders.jsx"
import SearchBar from "../components/SearchBar.jsx"
import FoodCard from "../components/FoodItems.jsx"
import AddMenu from "../components/AddMenu.jsx"
import Navbar from "../components/Navbar.jsx"
import { useState, useEffect } from "react"
const Catagory = () => {
    const [cartCount, setCartCount] = useState(0);
    const [foodOrders, setFoodOrders] = useState([]);

    useEffect(() => {
        // Retrieve data
        const storedOrders = JSON.parse(localStorage.getItem('foodDetails')) || [];
        setFoodOrders(storedOrders);
    }, []);
    return (
        <>
            <Navbar cartCount={cartCount} />
            <div className="  w-[90%] lg:w-[75%] m-auto mt-10" >
                <div className="w-[80%] " >
                    Current order:
                </div>
                <div className="flex flex-wrap mt-5 gap-5  justify-center  ">
                    <Orders setCartCount={setCartCount} foodOrders={foodOrders} setFoodOrders={setFoodOrders} />
                </div>
            </div>

            <SearchBar />
            <div className="flex flex-wrap w-[100%] lg:w-[78%] m-auto justify-center items-center">
                <FoodCard setCartCount={setCartCount} setFoodOrders={setFoodOrders} foodName={"Veg burger"} cost={"$23"} />
                <FoodCard setCartCount={setCartCount} setFoodOrders={setFoodOrders} foodName={"Chicken burger"} cost={"$83"} />
                <FoodCard setCartCount={setCartCount} setFoodOrders={setFoodOrders} foodName={"Chowmein"} cost={"$43"} />
                <FoodCard setCartCount={setCartCount} setFoodOrders={setFoodOrders} foodName={"Momos"} cost={"$20"} />
                <FoodCard setCartCount={setCartCount} setFoodOrders={setFoodOrders} foodName={"Panipuri"} cost={"$83"} />
                <FoodCard setCartCount={setCartCount} setFoodOrders={setFoodOrders} foodName={"Mutton kasa"} cost={"$56"} />


            </div>

            <AddMenu />
        </>
    )
}

export default Catagory
