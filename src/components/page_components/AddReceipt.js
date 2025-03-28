import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { Modal } from "@mui/material";
import { Button, ModalClose, ModalDialog, Typography } from "@mui/joy";
import "../../css/AddReceipt.css";

export default function AddReceipt() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setSelectedImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedImage) {
            alert("Please select an image first.");
            return;
        }

        const base64Data = selectedImage.split(",")[1];

        const payload = {
            receiptId: "1234",
            image: base64Data
        };

        try {
            const response = await fetch("http://localhost:8080/extract", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert("Image uploaded successfully!");
                setSelectedImage(null);
                setIsModalOpen(false);
            } else {
                alert("Upload failed.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Something went wrong.");
        }
    };


    return (
        <>
            <button onClick={() => setIsModalOpen(true)} className="add-button">
                <FaPlus size={24} />
            </button>

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalDialog>
                    <ModalClose onClick={() => setIsModalOpen(false)} />
                    <Typography variant="h6">Add Receipt</Typography>

                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="image-preview"
                        />
                    )}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                    />

                    <button className="custom-file-button" onClick={() => fileInputRef.current.click()}>
                        Choose Image
                    </button>

                    <Button variant="solid" color="neutral" onClick={handleUpload}>
                        Add to Database
                    </Button>
                </ModalDialog>
            </Modal>
        </>
    );
}
