import "../../css/LeftSide.css";
import titleImage from "../../imgs/title-image.png";

export default function LeftSide() {
    return(
        <div className="left-wrapper">

            <div className="left-container">
                <h2 className="brand">
                    Project Name
                </h2>

                <h1 className="motto">
                    Analyze your purchases by scanning
                    <span id="receipts-text"> receipts!</span>
                </h1>

                <img src={titleImage} alt="Title" id="title-img"/>

            </div>

        </div>
    )
}