import React from "react";
import { useNavigate } from "react-router";
import { Logout } from "../../components/Logout"
import { FormComponent } from "../../components/FormComponent";
import { useDispatch } from 'react-redux'
import { setCredentials } from './redux/authslice'
import { useSignupMutation } from "./redux/auth.api.slice";
import { Typography } from "@mui/material";

const Signup = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [signup, { isLoading }] = useSignupMutation()
    
    const handleSubmit = async(email, passwordHash)=> {
        try {
          const user = await signup({email, passwordHash}).unwrap()
           dispatch(setCredentials(user))
           setTimeout(() => {
            // Delay this action by 2 seconds
            navigate("../", { replace: true });
          }, 2000)
         
        } catch (error) {
          
        }
         
      }
    return(
        <div style={{ textAlign: "center" }}>
        <Typography sx={{padding:4, fontWeight:500}} variant='h4'>Sign Up</Typography>
        <FormComponent
         onSubmit={({ email, passwordHash }) => {
            console.log(email, passwordHash);
            handleSubmit(email, passwordHash)
          }}
        />
      </div>

    )
    
  
}

export default Signup