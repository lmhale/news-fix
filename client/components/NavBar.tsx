import React from "react"
import {Link} from "react-router-dom"
export const NavBar = () => {
    return (
        <div >

        <a style={{margin:"10px"}} href="/">Home</a>
        <a href="favorites">Favorites</a>
        <Link style={{margin:"10px"}}  to={"/login"} >Login</Link>

        </div>
    )
}