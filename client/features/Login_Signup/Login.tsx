import React, {useState} from "react";
import { FormComponent } from "../../components/FormComponent";
import { useLoginMutation } from "./redux/auth.api.slice";
import  {useNavigate}  from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './redux/authslice'
import { Typography } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const [loginError, setLoginError] = useState('')

const handleSubmit = async(email, passwordHash)=> {

    const user = await login({email, passwordHash}).unwrap()
    .then((payload) => {
    let resToken = payload.token
    let resId = payload.user
    console.log(resToken)
    localStorage.setItem('token', resToken)
    localStorage.setItem('userId',resId )
    dispatch(setCredentials(payload))
    })
    .then(() => navigate("../", { replace: true }))
    .catch((error) => {
      console.error('rejected', error)
      let ErrorMessage = error.data.toString()
      setLoginError(ErrorMessage)
    })


   
}

  return (
    <div style={{ textAlign: "center" }}>
      <Typography sx={{padding:4, fontWeight:500}} variant='h4'>Login</Typography>
      <FormComponent
       onSubmit={({ email, passwordHash }) => {
          console.log(email, passwordHash);
          handleSubmit(email, passwordHash)
        }}
      />
      {loginError ?(
            <Typography color='red' variant='caption'>
            Error: {loginError}
            </Typography>
      ) : ('success')
      
      }
  
    </div>
  );
};









export default Login;
