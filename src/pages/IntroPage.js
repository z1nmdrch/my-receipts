import "../css/IntroPage.css"
import introImg from "../imgs/title-image.png";
import {Link, useNavigate} from "react-router-dom";

export default function IntroPage() {
    const navigate = useNavigate();

    return (
        <main id="intro-page-content">
            <div className="intro-page-container">
                <div className="intro-left-side">
                    <div className="intro-block">
                        <h1 className="intro-logo-title">
                            SmartScan
                        </h1>
                        <p className="intro-subtitle">
                            Get analysis of your purchases scanning receipts!
                        </p>
                    </div>

                    <div className="intro-buttons-row">
                        <Link to="/login" className="toLoginButton intro-button">
                            Login
                        </Link>
                        <Link to="/register" className="toSignUpButton intro-button">
                            Sign Up
                        </Link>
                    </div>
                </div>

                <div className="intro-right-side">
                    <img src={introImg} alt=""/>
                </div>
            </div>
        </main>
    )
}