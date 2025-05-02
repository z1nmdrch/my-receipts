import Header from "../components/page_components/Header";
import React, { useState } from "react";
import Sidebar from "../components/page_components/SideBar";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import "../css/Account.css";
import { useCookies } from "react-cookie";
import { Modal } from "@mui/material";
import { Button, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [selectedReceipt, setSelectedReceipt] = useState(null);
    const [openExitModal, setOpenExitModal] = useState(false);
    const navigate = useNavigate();

    const listOfReceipts = [
        {
            Date: "07-12-2024",
            Organization: "Magnum",
            overallPrice: 2060,
            Items: [
                { ItemName: "Coca Cola 2l", Cost: 750 },
                { ItemName: "Lays Chips 150g", Cost: 890 },
                { ItemName: "Snickers Bar", Cost: 420 }
            ]
        },
        {
            Date: "15-03-2025",
            Organization: "Small Mart",
            overallPrice: 3030,
            Items: [
                { ItemName: "Milk 1L", Cost: 520 },
                { ItemName: "Bread Loaf", Cost: 330 },
                { ItemName: "Butter 200g", Cost: 980 },
                { ItemName: "Eggs 10pcs", Cost: 1200 }
            ]
        },
        {
            Date: "21-02-2025",
            Organization: "Tech Store",
            overallPrice: 24500,
            Items: [
                { ItemName: "USB Cable", Cost: 2500 },
                { ItemName: "Wireless Mouse", Cost: 7500 },
                { ItemName: "Power Bank 10000mAh", Cost: 14500 }
            ]
        }
    ];

    function onLogout() {
        removeCookie("user");
        navigate("/");
    }

    return (
        <>
            <div className="header-container">
                <Header title={"account"} onMenuClick={(e) => {
                    e.stopPropagation();
                    setIsNavOpen(!isNavOpen);
                }} />
                <Sidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
            </div>

            <main className="user-page-main">
                <div className="account-container">
                    <div className="profile">
                        <div className="profile-card">
                            <div className="user-profile-picture">
                                <FaUser className="profile-avatar" size={70} />
                            </div>
                            <h2 className="profile-name">
                                {cookies.user ? `${cookies.user.name} ${cookies.user.lastName}` : "User User"}
                            </h2>
                            <p className="profile-username">
                                {cookies.user ? cookies.user.username : "Username"}
                            </p>
                            <p className="profile-email">
                                {cookies.user ? cookies.user.email : "user@example.com"}
                            </p>
                        </div>

                        <div className="settings-section">
                            <button className="settings-button logout" onClick={() => setOpenExitModal(true)}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </div>
                    </div>

                    <div className="profile-info">
                        <h4 className="user-receipts-title">My Receipts</h4>

                        <ul className="account-receipts-list">
                            {listOfReceipts.map((receipt, index) => (
                                <li key={index} onClick={() => setSelectedReceipt(receipt)}>
                                    <div className="receipt-card">
                                        <p className="receipt-date">{receipt.Date}</p>
                                        <p className="receipt-organization">{receipt.Organization}</p>
                                        <p className="receipt-total">{receipt.overallPrice}₸</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>

            <Modal open={!!selectedReceipt} onClose={() => setSelectedReceipt(null)}>
                <ModalDialog>
                    <ModalClose onClick={() => setSelectedReceipt(null)} />
                    {selectedReceipt && (
                        <>
                            <Typography variant="h6">{selectedReceipt.Organization}</Typography>
                            <Typography>Date: {selectedReceipt.Date}</Typography>
                            <Typography>Total: {selectedReceipt.overallPrice}₸</Typography>

                            <ul className="modal-receipt-items">
                                {selectedReceipt.Items.map((item, idx) => (
                                    <li key={idx} className="modal-receipt-item">
                                        <span className="item-name">{item.ItemName}</span>
                                        <span className="item-cost">{item.Cost}₸</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="solid" onClick={() => setSelectedReceipt(null)}>Close</Button>
                        </>
                    )}
                </ModalDialog>
            </Modal>

            <Modal open={openExitModal} onClose={() => setOpenExitModal(false)}>
                <ModalDialog>
                    <ModalClose onClick={() => setOpenExitModal(false)} />
                    <Typography variant="h6">Confirm Exit</Typography>
                    <Typography>You Will Exit From Account</Typography>
                    <div style={{ display: "flex", justifyContent: "space-evenly", gap: "10px", marginTop: "15px" }}>
                        <Button variant="solid" color="neutral" onClick={() => setOpenExitModal(false)}>Cancel</Button>
                        <Button variant="solid" color="danger" onClick={onLogout}>Logout</Button>
                    </div>
                </ModalDialog>
            </Modal>
        </>
    );
}
