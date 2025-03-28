import { FaUser, FaCloudUploadAlt, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import "../../css/Sidebar.css";
import {useState} from "react";
import {Modal} from "@mui/material";
import {Button, ModalClose, ModalDialog, Typography} from "@mui/joy";
import {useCookies} from "react-cookie";

export default function Sidebar({ isOpen, onClose }) {
    const navigation = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    function onLogout() {
        removeCookie("user");
        navigation("/");
    }

    const [openExitModal, setOpenExitModal] = useState(false);

    return (
        <nav className={`sidebar ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
                <button className="close-sidebar" onClick={onClose}>✖</button>
                <FaUser className="user-icon" size={40}/>
                <p className="user-name">
                    {
                        cookies.user ?
                            `${cookies.user.name} ${cookies.user.lastName}` :
                            "User User"
                    }
                </p>
                <p className="user-email">
                    {
                        cookies.user ?
                            cookies.user.email :
                            "user@example.com"
                    }
                </p>
            </div>
            <ul className="sidebar-menu">
                <li><FaCloudUploadAlt />
                    <Link to="/home">
                        Main
                    </Link>
                </li>
                <li><FaChartLine />
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li><FaCog /> Settings</li>
                <li>
                    <button className="logout-button" onClick={() => setOpenExitModal(true)}>
                        <FaSignOutAlt/>
                        Exit
                    </button>
                </li>
            </ul>

            <Modal open={openExitModal} onClose={() => setOpenExitModal(false)}>
                <ModalDialog>
                <ModalClose onClick={() => setOpenExitModal(false)}/>
                    <Typography variant="h6">Confirm Exit</Typography>
                    <Typography>You Will Exit From Account</Typography>
                    <div style={{display: "flex", justifyContent: "space-evenly", gap: "10px", marginTop: "15px"}}>
                        <Button variant="solid" color="#fff" onClick={() => setOpenExitModal(false)}>Cancel</Button>
                        <Button variant="solid" color="danger" onClick={onLogout}>Logout</Button>
                    </div>
                </ModalDialog>
            </Modal>
        </nav>
    );
}
