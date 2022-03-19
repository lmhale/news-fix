import { useNavigate } from "react-router"
import { Button } from "@mui/material"
export const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("userId")
        navigate("../loginorsignup", { replace: true });
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
            <Button variant='outlined' onClick={() => handleLogout()}>Logout</Button>
        </div>


    )
}