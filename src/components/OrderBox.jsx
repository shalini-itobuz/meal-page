import React, { useState, useEffect } from "react";

const OrderBox = ({ setCartCount, food, setFoodOrders }) => {
    const q = JSON.parse(localStorage.getItem("foodDetails")).find((ele) => ele.foodName === food).quantity || 1
    const [quantity, setQuantity] = useState(q);
    const [showModal, setShowModal] = useState(false);
    const [notes, setNotes] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Retrieve stored orders
        const storedOrders = JSON.parse(localStorage.getItem('foodDetails')) || [];

        // Find the index of the current food item
        const orderIndex = storedOrders.findIndex(order => order.foodName === food);

        // If the food item exists, update its quantity
        if (orderIndex !== -1) {
            storedOrders[orderIndex].quantity = quantity;
        } else {
            // If the food item doesn't exist, create a new entry
            const newOrder = { foodName: food, quantity };
            storedOrders.push(newOrder);
        }

        // Update local storage with the modified orders
        localStorage.setItem('foodDetails', JSON.stringify(storedOrders));
        setFoodOrders(storedOrders)
    }, [quantity, food]);


    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    const handleSubmit = () => {
        toggleModal();
        console.log("Notes submitted:", notes);
        setNotes("");
    };

    const handleDelete = () => {
        let storedOrders = JSON.parse(localStorage.getItem('foodDetails')) || [];

        // Filter out the deleted item
        storedOrders = storedOrders.filter(order => order.foodName !== food);

        // Update local storage with the modified orders
        localStorage.setItem('foodDetails', JSON.stringify(storedOrders));
        setFoodOrders(storedOrders);
        setCartCount(storedOrders.length)
    };

    return (
        <div
            className="p-[10px] w-[300px] relative rounded-[15px]"
            style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <button
                    onClick={handleDelete}
                    className="absolute top-[-8px] right-[-8px] bg-white cursor-pointer rounded-[50%]"
                    style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 6L6 19"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6 6L19 19"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            )}
            <div className="flex justify-between items-center ">
                <div className="w-[60%] px-4">
                    <div>{food}</div>
                    <div className="w-[60%] text-blue-600">
                        <button onClick={toggleModal}>Add Notes</button>
                    </div>
                </div>
                <div className="w-[30%] flex justify-evenly">
                    <button className="border border-gray px-2 rounded-md" onClick={decreaseQuantity}>-</button>
                    <div
                        style={{
                            display: "inline-block",
                            margin: "0 10px",
                            color: "#ff8400",
                            fontWeight: "bold",
                        }}
                    >
                        {quantity}
                    </div>
                    <button className="border border-gray px-2 rounded-md"
                        style={{ color: "#ff8400", fontWeight: "bold" }}
                        onClick={increaseQuantity}
                    >
                        +
                    </button>
                </div>
            </div>
            {showModal && (
                <div
                    className="modal"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        position: "fixed",
                        zIndex: "7",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="modal-content"
                        style={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderRadius: "5px",
                            maxWidth: "400px",
                        }}
                    >
                        <span
                            className="close"
                            style={{ float: "right", cursor: "pointer" }}
                            onClick={toggleModal}
                        >
                            &times;
                        </span>
                        <h2>Add Notes</h2>
                        <textarea
                            value={notes}
                            onChange={handleNotesChange}
                            placeholder="Enter notes here..."
                            style={{ width: "100%", height: "100px" }}
                        />
                        <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderBox;
