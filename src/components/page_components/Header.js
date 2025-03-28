import { FaBars, FaBell, FaUser } from "react-icons/fa";

export default function Header({ title, onMenuClick }) {
    return (
        <header className="header">
            <button className="menu-button" onClick={onMenuClick}>
                <FaBars size={24} />
            </button>
            <h1 className="company-title">{title}</h1>
            <div className="header-icons">
                <FaBell size={24} className="icon" />
                <FaUser size={24} className="icon" />
            </div>
        </header>
    );
}
