import React, { useState } from 'react';
import { addLocation } from '../api';

const Modal = ({ isOpen, onClose, addCard }) => {
    if (!isOpen) return null; // If the modal is not open, do not render anything

    const [formState, setFormState] = useState({
        food_name: '',
        food_description: '',
        expiry_date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formState);
        const today = new Date();
        const expiryDate = new Date(formState.expiry_date);
        const timeDifference = expiryDate - today;
        const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        addCard({
            name: formState.food_name,
            description: formState.food_description,
            expiry: dayDifference,
            image: './raddish.png',
            user: 'Bobby Brown',
        })
        addLocation();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="text-white">Add new listing</h2>
                    <button onClick={onClose} className="close-button">×</button>
                </div>
                <br></br>
                <div className="modal-body">
                    {/* <div className="file-upload">
                    <img src="./upload-icon.png" alt="Upload Icon" />
                </div> */}
                    <div className="upload-box">
                        <input type="file" id="file-upload" className="file-upload" />
                        <label htmlFor="file-upload" className="upload-label">
                            <img src="upload.svg" alt="Upload" className="upload-icon" />
                        </label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                className="food-fields"
                                type="text"
                                id="food_name"
                                name="food_name"
                                value={formState.food_name}
                                onChange={handleInputChange}
                                placeholder='Food Name'
                            />
                        </div>
                        <div>
                            <input
                                className="food-fields"
                                type="text"
                                id="food_description"
                                name="food_description"
                                value={formState.food_description}
                                onChange={handleInputChange}
                                placeholder='Description'
                            />
                        </div>
                        <div>
                            <input
                                className="food-fields"
                                type="date"
                                id="expiry_date"
                                name="expiry_date"
                                value={formState.expiry_date}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className="done_button" type="submit">Add Food</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
