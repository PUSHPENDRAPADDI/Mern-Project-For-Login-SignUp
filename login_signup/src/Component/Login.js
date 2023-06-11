import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Style/Style.css";
import {Button} from "react-bootstrap";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userDetails = {
        email, password
    }
    const navigate = useNavigate();

    const sendOtp = async (e, userDetails) => {
        e.preventDefault();
        if (email === "") {
            toast.error("Enter your email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid email !")
        } else if (password === "") {
            toast.error("Enter password")
        }
        else {
            props.login(userDetails);
        }
    }
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' id='email' placeholder='Enter your Email address...'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' id='password' placeholder='Enter Password'
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='btn' onClick={(e) => sendOtp(e, userDetails)} >Login</button>
                        <p>Don't have and account <NavLink to="/createAccount">Sign up</NavLink> </p>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}
export default Login;