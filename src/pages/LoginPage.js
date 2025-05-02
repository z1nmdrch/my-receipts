import LeftSide from "../components/page_components/LeftSide";
import RightSide from "../components/page_components/RightSide";

export default function LoginPage() {
    return (
        <div className="main-wrapper">
            <RightSide isLogin={true}/>
        </div>
    );
}