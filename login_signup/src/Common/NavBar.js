import React, { useEffect, useRef, useState } from 'react';
import "../Style/Style.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../Assests/logo.png';

function Navbar(props) {
    const [userName, setUserName] = useState("");
    const prevPropsRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        setUserName(props.userName)
        props.userName.length > 0 ? navigate("/notes") : navigate("/")
    }, [props.userData]);

    return (
        <nav style={{ padding: "5px 10px" }} className="navbar">
            <div className="navbar__logo">
                <img style={{borderRadius:"10px"}} width="40px" src={logo} alt="logo" /></div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <NavLink to={Object.keys(props.userData).length > 0 ? "/createNote" : "/login"} className="navbar__link" >Create Note's</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to={Object.keys(props.userData).length > 0 ? "/notes" : "/login"} className="navbar__link" >Your Note's</NavLink>
                </li>
            </ul>
            <div className="navbar__buttons">
                {props.userName.length > 0 ?
                    <p style={{ fontSize: "25px" }}>{userName}</p> :
                    <>
                        <NavLink to="/login" className="navbar__login" >Login</NavLink>
                    </>
                }
            </div>
        </nav>
    );
}

export default Navbar;