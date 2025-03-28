import googleLogo from "../../imgs/google-logo.png";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function SignUpForm() {
    const navigation = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    const [signUpData, setSignUpData] = useState( {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        passwordHash: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignUpData((data) => ({
            ...data, [name]: value })
        );
    }

    const submitSignUp = async (e) => {
        if(
            signUpData.lastName === "" ||
            signUpData.email === "" ||
            signUpData.firstName === "" ||
            signUpData.passwordHash === "" ||
            signUpData.username === ""
        ) {
            alert("Make sure to fill all the fields.");
            return;
        }

        e.preventDefault();

        console.log(signUpData);

        try {
            const response = await fetch("http://localhost:5000/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData)
            });

            if (response.ok) {
                setCookie("user", JSON.stringify({
                    username: signUpData.username,
                    firstName: signUpData.firstName,
                    lastName: signUpData.lastName,
                    email: signUpData.email
                }), { path: "/"});
                navigation("/home");
            } else {
                const errorData = await response.json();
                alert(`Failed to sign up, ${errorData}`);
            }
        } catch (error) {
            alert(error)
        }
    }

    return <>
        <div className="username-wrapper">
            <label htmlFor="username">
                Username
            </label>
            <input type="text" name="username" placeholder="Username" required
                   onChange={handleChange}/>
        </div>

        <div className="name-wrapper">
            <label htmlFor="firstName">
                Name
            </label>
            <input type="text" name="firstName" placeholder="First Name" required
                   onChange={handleChange}/>
        </div>

        <div className="lastname-wrapper">
            <label htmlFor="lastName">
                Last Name
            </label>
            <input type="text" name="lastName" placeholder="Last Name" required
                   onChange={handleChange}/>
        </div>

        <div className="email-wrapper">
            <label htmlFor="email">
                Email
            </label>
            <input type="text" name="email" placeholder="Email" required
                   onChange={handleChange}/>
        </div>

        <div className="password-wrapper">
            <label htmlFor="password">
                Password
            </label>
            <input type="password" name="passwordHash" placeholder="Password" required
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