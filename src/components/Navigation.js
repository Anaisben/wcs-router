import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
 
const Navigation = () => {
    return (
        <div>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            <NavLink to="/notre-histoire"activeClassName="active">Notre histoire</NavLink>
        </div>
    );
};

export default Navigation;