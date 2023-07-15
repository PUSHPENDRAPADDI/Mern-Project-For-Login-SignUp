import React, { useEffect, useRef, useState } from 'react';
import "../Style/Style.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
    const [userName, setUserName] = useState("");
    const prevPropsRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        setUserName(props.userData.name)
        Object.keys(props.userData).length > 0 ? navigate("/notes") : navigate("/")
    }, [props.userData]);

    return (
        <nav style={{padding:"5px 10px"}} className="navbar">
            <div className="navbar__logo">My-Notes</div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <NavLink to={Object.keys(props.userData).length > 0 ? "/createNote" : "/login"} className="navbar__link" >Create Note's</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to={Object.keys(props.userData).length > 0 ? "/notes" : "/login"} className="navbar__link" >Your Note's</NavLink>
                </li>
            </ul>
            <div className="navbar__buttons">
                {Object.keys(props.userData).length > 0 ?
                    <p>{userName.split(' ')[0]}</p>:
                    <>
                        <NavLink to="/login" className="navbar__login" >Login</NavLink>
                    </>
                }
            </div>
        </nav>
    );
}

export default Navbar;