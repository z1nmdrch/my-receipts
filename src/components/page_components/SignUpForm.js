import googleLogo from "../../imgs/google-logo.png";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function SignUpForm() {
    const navigation = useNavigate();
    const [cookies, setCookie] = useCookies(["user"]);

    const [step, setStep] = useState(1);

    const [signUpData, setSignUpData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        passwordHash: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpData((data) => ({
            ...data,
            [name]: value
        }));
    };

    const handleNext = () => {
        if (signUpData.email === "" || signUpData.passwordHash === "") {
            alert("Please fill out email and password.");
            return;
        }
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const submitSignUp = async (e) => {
        e.preventDefault();

        if (
            signUpData.username === "" ||
            signUpData.firstName === "" ||
            signUpData.lastName === ""
        ) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData),
            });

            if (response.ok) {
                setCookie("user", JSON.stringify({
                    username: signUpData.username,
                    firstName: signUpData.firstName,
                    lastName: signUpData.lastName,
                    email: signUpData.email
                }), { path: "/" });
                navigation("/home");
            } else {
                const errorData = await response.json();
                alert(`Failed to sign up: ${errorData}`);
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            {step === 1 && (
                <>
                    <div className="email-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="password-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="passwordHash"
                            placeholder="Password"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="buttons-column">
                        <button type="button" id="authorize" onClick={handleNext}>
                            Continue
                        </button>

                        <button type="button" id="with-google">
                            <img src={googleLogo} alt="Google Logo" className="google-logo" />
                            Continue With Google
                        </button>
                    </div>

                    <p className="already-account">
                        Already have an account?
                        <Link to="/login" className="go-to-login">
                            Login!
                        </Link>
                    </p>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="username-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="name-wrapper">
                        <label htmlFor="firstName">Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="lastname-wrapper">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="buttons-column">
                        <button type="button" id="authorize" onClick={submitSignUp}>
                            Create Account
                        </button>

                        <button type="button" id="with-google">
                            <img src={googleLogo} alt="Google Logo" className="google-logo" />
                            Continue With Google
                        </button>
                    </div>

                    <p>
                        <button onClick={handleBack} style={{ background: "none", border: "none", color: "#fefefe", cursor: "pointer", padding: 0 }}>
                            ← Back
                        </button>
                    </p>
                </>
            )}
        </>
    );
}
