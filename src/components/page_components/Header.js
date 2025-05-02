import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../css/Header.css"

export default function Header({ title, onMenuClick }) {
    const navigate = useNavigate();

    function to(path) {
        navigate(path);
    }

    return (
        <header className="header">
            <button className="menu-button" onClick={onMenuClick}>
                <FaBars size={24} />
            </button>

            <h2 className="header-title">
                Smart Scan
            </h2>

            <div className="header-icons">
                <ul className="header-list-menu">
                    <li
                        className={`header-list-item ${title === "main" ? "header-list-item-active" : ""}`}
                        onClick={() => to("/")}
                    >
                        Main
                    </li>
                    <li
                        className={`header-list-item ${title === "home" ? "header-list-item-active" : ""}`}
                        onClick={() => to("/home")}
                    >
                        Home
                    </li>
                    <li
                        className={`header-list-item ${title === "stats" ? "header-list-item-active" : ""}`}
                        onClick={() => to("/statistics")}
                    >
                        Statistics
                    </li>
                    <li
                        className={`header-list-item ${title === "account" ? "header-list-item-active" : ""}`}
                        onClick={() => to("/account")}
                    >
                        Profile
                    </li>
                </ul>
            </div>
        </header>
    );
}
