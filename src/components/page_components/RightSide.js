import "../../css/RightSide.css";
import googleLogo from "../../imgs/google-logo.png";

export default function RightSide() {
    return (
        <div className="right-wrapper">

            <div className="right-container">

                <form className="auth">

                    <h3 className="form-title">
                        Create an Account
                    </h3>

                    <div className="email-wrapper">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="text" name="email" id="" placeholder="Email"/>
                    </div>

                    <div className="password-wrapper">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" id="" placeholder="Password"/>
                    </div>

                    <div className="buttons-column">
                        <button type="button" id="authorize">
                            Create Account
                        </button>

                        <button type="button" id="with-google">
                            <img src={googleLogo} alt="Google Logo" className="google-logo"/>
                            Continue With Google
                        </button>
                    </div>

                    <p>
                        Already have an account?
                        <span className="login">
                            Login!
                        </span>
                    </p>

                </form>

            </div>

        </div>
    )
}