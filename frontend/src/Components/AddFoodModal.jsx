// Modal.js
import React from 'react';
import "../App.css";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // If the modal is not open, do not render anything

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
                    <div class="upload-box">
                        <input type="file" id="file-upload" class="file-upload" />
                        <label for="file-upload" class="upload-label">
                            <img src="upload.svg" alt="Upload" class="upload-icon" />
                        </label>
                    </div>
                    <form>
                        <div>
                        <input
                            className="food-fields"
                            type="text"
                            placeholder="Food name"
                            name="food_name"
                            />
                        </div>
                        <div>
                        <input
                            className="food-fields"
                            type="text"
                            placeholder="Food description"
                            name="food_description"
                            />
                        </div>
                        <div>
                            {/* <label htmlFor="expiry-date" className="text-white">Expiry date</label>
                            <input type="date" id="expiry-date" required /> */}
                            <input
                            className="food-fields"
                            type="text"
                            placeholder="Expiry Date"
                            name="expiry-date"
                            />
                        </div>
                        <button className="done_button">Done</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
