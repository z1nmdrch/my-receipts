import '../css/Auth.css';
import LeftSide from "../components/page_components/LeftSide";
import RightSide from "../components/page_components/RightSide";

function AuthPage() {
    return (
        <div className="main-wrapper">
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export default AuthPage;
