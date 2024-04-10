import React, { useState, useEffect } from "react";
import OrderBox from "./OrderBox";

const Orders = ({ setCartCount, foodOrders, setFoodOrders }) => {


    return (
        <div className="flex flex-wrap justify-start gap-8 ">
            {foodOrders.map((order, index) => (
                <OrderBox setCartCount={setCartCount} key={index} food={`${order.foodName}`} setFoodOrders={setFoodOrders} />
            ))}
        </div>
    );
};

export default Orders;
