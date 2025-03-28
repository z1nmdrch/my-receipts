import Header from "../components/page_components/Header";
import React, { useState } from "react";
import Sidebar from "../components/page_components/SideBar";
import { FaUser, FaEdit, FaLock, FaSignOutAlt } from "react-icons/fa";
import "../css/Account.css";
import {useCookies} from "react-cookie";

export default function UserPage() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    return (
        <>
            <div className="header-container">
                <Header title={"Account"} onMenuClick={(e) => {
                    e.stopPropagation();
                    setIsNavOpen(!isNavOpen);
                }}/>
                <Sidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)}/>
            </div>

            <main className="user-page-main">
                <div className="account-container">
                    <div className="profile">
                        <div className="profile-card">
                            <div className="user-profile-picture">
                                <FaUser className="profile-avatar" size={70}/>
                            </div>
                            <h2 className="profile-name">
                                {
                                    cookies.user ?
                                        `${cookies.user.name} ${cookies.user.lastName}` :
                                        "User User"
                                }
                            </h2>
                            <p className="profile-type">
                                {
                                    cookies.user ? cookies.user.username :
                                        "Username"
                                }
                            </p>
                            <p className="profile-email">
                                {
                                    cookies.user ? cookies.user.email :
                                        "user@example.com"
                                }
                            </p>
                        </div>

                        <div className="settings-section">
                            <button className="settings-button logout">
                                <FaSignOutAlt/> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
