import React, {useState} from "react";
import { useNavigate } from "react-router";
import { Logout } from "../../components/Logout"
import { FormComponent } from "../../components/FormComponent";
import { useDispatch } from 'react-redux'
import { setCredentials } from './redux/authslice'
import { useSignupMutation } from "./redux/auth.api.slice";
import { Typography } from "@mui/material";

const Signup = () => {
  const [signUpError, setSignUpError] = useState('')
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [signup, { isLoading }] = useSignupMutation()
    
    const handleSubmit = async(email, passwordHash)=> {
          const user = await signup({email, passwordHash})
          .unwrap()
          // .then((payload) =>  await dispatch(setCredentials(payload)))
          .then((payload) => {
            let resToken = payload.token
            let resId = payload.userId
            console.log(resToken)
            localStorage.setItem('token', resToken)
            localStorage.setItem('userId',resId )
            dispatch(setCredentials(payload))
            })
          .catch((error) => {
            console.log('rejected', error)
            let ErrorMessage = error.data.toString()
            setSignUpError(ErrorMessage)
          })
         
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
          {signUpError ?(
          <Typography color='red' variant='caption'>
          Error: {signUpError}
          </Typography>
    ) : ('')
          }
      </div>
       

    )
    
  
}

export default Signup