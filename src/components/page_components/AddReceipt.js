import {useRef, useState} from "react";
import {Button, ModalClose, ModalDialog, Typography} from "@mui/joy";
import {Modal} from "@mui/material";

export default function AddReceipt({ open, onClose }) {
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
                onClose();
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
            <Modal open={open} onClose={onClose}>
                <ModalDialog>
                    <ModalClose onClick={onClose} />
                    <Typography variant="h6">Add Receipt</Typography>

                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="image-preview"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "300px",
                                objectFit: "contain",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                            }}
                        />
                    )}


                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                    />

                    <Button style={{backgroundColor: "#6004FF", padding: "5px 0", fontFamily: "Poppins"}} className="custom-file-button" onClick={() => fileInputRef.current.click()}>
                        Choose Image
                    </Button>

                    <Button variant="solid" style={{backgroundColor: "#0C0021", padding: "5px 0", fontFamily: "Poppins"}} onClick={handleUpload}>
                        Add to Database
                    </Button>
                </ModalDialog>
            </Modal>
        </>
    );
}
