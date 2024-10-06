import "mapbox-gl/dist/mapbox-gl.css";

import NavBar from "../Components/NavBar";
import MyFoodCard from "../Components/MyFoodCard";
import Modal from "../Components/AddFoodModal"; // Import the Modal component

import { getUserInfo } from "../api";
import { useEffect, useState } from "react";

import "../App.css";

function MyListingsPage() {
    const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

    const handleAddFood = () => {
        setModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Close the modal
    };

    return (
        <>
            <NavBar />
            <div className="left70pad">
                <h1>Thanks for reducing food waste!</h1>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Your food listings</h3>
                    <button onClick={handleAddFood} className="add-food-button">+</button>
                </div>
                <br></br>
                <div className="food-card-container">
                    {/* Your MyFoodCard components go here */}
                    <MyFoodCard
                        className="my-food-card"
                        foodItem={{
                            name: "Bok choy",
                            description: "2 heads of baby bok choy.",
                            expiry: 2,
                            image: "./bokchoy.png",
                            user: "Bobby Brown",
                        }}
                    />
                    <MyFoodCard
                        className="my-food-card"
                        foodItem={{
                            name: "Bok choy",
                            description: "2 heads of baby bok choy.",
                            expiry: 2,
                            image: "./bokchoy.png",
                            user: "Bobby Brown",
                        }}
                    />
                    <MyFoodCard
                        className="my-food-card"
                        foodItem={{
                            name: "Bok choy",
                            description: "2 heads of baby bok choy.",
                            expiry: 2,
                            image: "./bokchoy.png",
                            user: "Bobby Brown",
                        }}
                    />
                    <MyFoodCard
                        className="my-food-card"
                        foodItem={{
                            name: "Bok choy",
                            description: "2 heads of baby bok choy.",
                            expiry: 2,
                            image: "./bokchoy.png",
                            user: "Bobby Brown",
                        }}
                    />
                    <MyFoodCard
                        className="my-food-card"
                        foodItem={{
                            name: "Bok choy",
                            description: "2 heads of baby bok choy.",
                            expiry: 2,
                            image: "./bokchoy.png",
                            user: "Bobby Brown",
                        }}
                    />
                    <MyFoodCard
                        className="my-food-card"
                        foodItem={{
                            name: "Bok choy",
                            description: "2 heads of baby bok choy.",
                            expiry: 2,
                            image: "./bokchoy.png",
                            user: "Bobby Brown",
                        }}
                    />
                    {/* Duplicate MyFoodCard components as necessary */}
                </div>
            </div>
            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            {/* <p>{JSON.stringify(response, null, 2)}</p> */}
        </>
    );
}

export default MyListingsPage;
