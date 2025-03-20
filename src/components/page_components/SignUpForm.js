import googleLogo from "../../imgs/google-logo.png";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function SignUpForm() {
    const navigation = useNavigate();

    const [signUpData, setSignUpData] = useState( {
        name: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignUpData((data) => ({
            ...data, [name]: value })
        );
    }

    const submitSignUp = (e) => {
        e.preventDefault();
        console.log("Sign Up Data: ", signUpData);

        navigation("/home");
    }

    return <>
        <div className="name-wrapper">
            <label htmlFor="name">
                Name
            </label>
            <input type="text" name="name" id="" placeholder="Name" required
            onChange={handleChange}/>
        </div>

        <div className="lastname-wrapper">
            <label htmlFor="lastName">
                Last Name
            </label>
            <input type="text" name="lastName" id="" placeholder="Last Name" required
            onChange={handleChange}/>
        </div>

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
            onChange={handleChange}/>
        </div>

        <div className="buttons-column">
            <button type="button" id="authorize" onClick={submitSignUp}>
                Create Account
            </button>

            <button type="button" id="with-google">
                <img src={googleLogo} alt="Google Logo" className="google-logo"/>
                Continue With Google
            </button>
        </div>

        <p>
            Already have an account?
            <Link to="/login" className="go-to-login">
                Login!
            </Link>
        </p>
    </>
}