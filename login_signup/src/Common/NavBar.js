import React, { useEffect, useRef, useState } from 'react';
import "../Style/Style.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
    const [userName, setUserName] = useState("");
    const prevPropsRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(props.userData.name, "THis is here");
        setUserName(props.userData.name)
    }, [props.userData]);

    return (
        <nav className="navbar">
            <div className="navbar__logo">Your-Note</div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <NavLink to="/createNote" className="navbar__link" >Create Note's</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/notes" className="navbar__link" >Your Note's</NavLink>
                </li>
            </ul>
            <div className="navbar__buttons">
                {/* {userName === "" ? */}
                <>
                    <NavLink to="/login" className="navbar__login" >Login</NavLink>
                    <NavLink to="/createAccount" className="navbar__signup" >SignUp</NavLink>
                </>
                {/* : <p>{userName}</p>
                } */}
            </div>
        </nav>
    );
}

export default Navbar;