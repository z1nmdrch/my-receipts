import "../../css/RightSide.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function RightSide({isLogin = false}) {
    return (
        <div className="right-wrapper">

            <div className="right-container">

                <form className="auth">

                    <h3 className="form-title">
                        {isLogin === true ? "Login" : "Create an Account"}
                    </h3>

                    {isLogin === true ? <LoginForm/> : <SignUpForm/>}

                </form>

            </div>

        </div>
    )
}