import React from "react";
import { useNavigate } from "react-router";
import { Logout } from "./Logout"
import { FormComponent } from "./FormComponent";
import { useDispatch } from 'react-redux'
import { setCredentials } from '../redux-app/features/users/authslice'
import { useSignupMutation } from "../redux-app/features/users/auth.api.slice";

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
            <h1>Signup</h1>
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