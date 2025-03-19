import "../../css/RightSide.css";
import googleLogo from "../../imgs/google-logo.png";

export default function RightSide({isLogin = false}) {
    return (
        <div className="right-wrapper">

            <div className="right-container">

                <form className="auth">

                    <h3 className="form-title">
                        {isLogin === true ? "Login" : "Create an Account"}
                    </h3>

                    {isLogin === true ? <LoginForm/> : <SignUpForm/>}

                    <p>
                        {
                            isLogin === true ?
                                <>
                                    Dont' have an account?
                                    <span className="go-to-auth">
                            Create!
                        </span>
                                </> :
                                <>
                                    Already have an account?
                                    <span className="go-to-login">
                            Login!
                        </span>
                                </>
                        }
                    </p>

                </form>

            </div>

        </div>
    )
}

function SignUpForm() {
    return (
        <>
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
        </>
    )
}

function LoginForm() {
    return <>
        <div className="name-wrapper">
            <label htmlFor="name">
                Name
            </label>
            <input type="text" name="name" id="" placeholder="Name"/>
        </div>

        <div className="lastname-wrapper">
            <label htmlFor="lastname">
                Last Name
            </label>
            <input type="text" name="lastname" id="" placeholder="LastName"/>
        </div>

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
    </>
}