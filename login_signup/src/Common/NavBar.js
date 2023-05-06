import React, { useEffect, useRef, useState } from 'react';
import "../Style/Style.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
    const [userName, setUserName] = useState("");
    const prevPropsRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if (prevPropsRef.current && prevPropsRef.current.userData !== props.userData) {
            setUserName(props.userData.name);
            navigate("/createNote")
        }
        prevPropsRef.current = props;
    });

    return (
        <nav className="navbar">
            <div className="navbar__logo">MyNote</div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <NavLink to="/createAccount" className="navbar__link" >Home</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/createAccount" className="navbar__link" >About</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/createAccount" className="navbar__link" >Contact</NavLink>
                </li>
            </ul>
            <div className="navbar__buttons">
                {userName !== "" ?
                    <p>{userName}</p> :
                    <>
                        <NavLink to="/login" className="navbar__login" >Login</NavLink>
                        <NavLink to="/createAccount" className="navbar__signup" >SignUp</NavLink>
                    </>}
                {/* {Object.keys(props.userData).length > 0 ?
                    <p>{userData.name}</p> :
                    <>
                        <NavLink to="/login" className="navbar__login" >Login</NavLink>
                        <NavLink to="/createAccount" className="navbar__signup" >SignUp</NavLink>
                    </>} */}
            </div>
        </nav>
    );
}

export default Navbar;