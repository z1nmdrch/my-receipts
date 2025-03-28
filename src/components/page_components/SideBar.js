import { FaUser, FaCloudUploadAlt, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
    return (
        <nav className={`sidebar ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
                <FaUser className="user-icon" size={40} />
                <p className="user-name">User Userovich</p>
                <p className="user-email">user@gmail.com</p>
            </div>
            <ul className="sidebar-menu">
                <li><FaCloudUploadAlt />
                    <Link to="/home">
                        Upload Receipts
                    </Link>
                </li>
                <li><FaChartLine />
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li><FaCog /> Settings</li>
            </ul>
            <button className="logout-button"><FaSignOutAlt /> Exit</button>
        </nav>
    );
}
