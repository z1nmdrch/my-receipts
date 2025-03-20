import {useState} from "react";
import googleLogo from "../../imgs/google-logo.png";
import {Link} from "react-router-dom";

export default function LoginForm() {
    const [loginData, setLoginData] = useState( { email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((data) => ({
            ...data, [name]: value })
        );
    }

    const submitLogin = (e) => {
        console.log("Submitted Data", loginData)
    }

    return (
        <>
            <div className="email-wrapper">
                <label htmlFor="email">
                    Email
                </label>
                <input type="text" name="email" id="" placeholder="Email" required
                onChange={handleChange}/>
            </div>

            <div className="password-wrapper">
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="" placeholder="Password" required
                onChange={handleChange} />
            </div>

            <div className="buttons-column">
                <button type="button" id="authorize" onClick={submitLogin}>
                    Login
                </button>

                <button type="button" id="with-google">
                    <img src={googleLogo} alt="Google Logo" className="google-logo"/>
                    Continue With Google
                </button>
            </div>

            <p>
                Don't have an account?
                <Link to="/" className="go-to-login">
                    Create!
                </Link>
            </p>
        </>
    )
}