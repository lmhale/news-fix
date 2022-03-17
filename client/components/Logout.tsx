import { useNavigate } from "react-router"
export const Logout =() => {
    const navigate = useNavigate()
    const handleLogout = () => {
       localStorage.removeItem("userId")
       navigate("../loginorsignup", { replace: true });
    }
    return (
        <>
        <button onClick={()=> handleLogout()}>Logout</button>
        </>
    )
}