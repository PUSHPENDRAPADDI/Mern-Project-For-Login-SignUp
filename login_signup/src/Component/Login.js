import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Style/Style.css";
import imgpng from '../Assests/notebook.png'
import imgpng1 from '../Assests/notebook (1).png'
import imgpng2 from '../Assests/notebook (2).png'
import imgpng3 from '../Assests/notebook (3).png'
import imgpng4 from '../Assests/notebook (4).png'
import imgpng5 from '../Assests/notebook (5).png'

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
                        <p>Hi, we are glad to you are back. Please login.</p>
                    </div>
                    <div className="effect-wrap">
                        <div className="effect effect-1">
                            <img src={imgpng} alt="this is img" width="40px" />
                        </div>
                        <div className="effect effect-2">
                            <img src={imgpng1} alt="this is img" width="40px" />
                        </div>
                        <div className="effect effect-6">
                            <img src={imgpng} alt="this is img" width="40px" />
                        </div>
                        <div className="effect effect-7">
                            <img src={imgpng1} alt="this is img" width="40px" />
                        </div>
                        <div className="effect effect-3">
                            <img src={imgpng2} alt="this is img" width="40px" />
                        </div>
                        <div className="effect effect-4">
                            <img src={imgpng3} alt="this is img" width="40px" />
                        </div>
                        <div className="effect effect-5">
                            <img src={imgpng4} alt="this is img" width="40px" />
                        </div>
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