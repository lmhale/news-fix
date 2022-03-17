import React from "react"
import {Link, useNavigate} from "react-router-dom"
export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div >

        <a style={{margin:"10px"}} href="/"  >Home</a>
        <a href="favorites">Favorites</a>
        <a style={{margin:"10px"}} href="/login" >Login</a>

        </div>
    )
}