import React from "react"
import {Link} from "react-router-dom"
export const NavBar = () => {
    return (
        <div>
        
        <Link style={{margin:"10px"}} to="/favorites">Favorites</Link>
        <Link to="/">Home</Link>
        </div>
    )
}