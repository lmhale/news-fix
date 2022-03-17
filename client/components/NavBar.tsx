import React from "react"
import {Link, useNavigate} from "react-router-dom"
export const NavBar = () => {
    const navigate = useNavigate()
    const userId = localStorage.getItem("userId")
    return (
        <div >

        <a style={{margin:"10px"}} href="/"  >Home</a>
        <a href="favorites">Favorites</a>
       {userId ?   <a href="/logout">Logout</a>  :
         <a href="loginorsignup" style={{margin:"10px"}}>Login</a>
        }
    
        </div>
    )
}