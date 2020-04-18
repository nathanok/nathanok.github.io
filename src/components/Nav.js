import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
    
    return (
    
    <div>
    
    <NavLink to="/"> Home</NavLink>
    <NavLink to="/Gallery"> Gallery</NavLink>
    <NavLink to="/Videos"> Videos</NavLink>
        
    </div>
        
    );
};

export default Nav;