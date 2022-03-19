import React from "react";
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

const handleSubmit = async(email, passwordHash)=> {
  try {
    const user = await login({email, passwordHash}).unwrap()
     dispatch(setCredentials(user))
     setTimeout(() => {
      // Delay this action by 2 seconds
      navigate("../", { replace: true });
    }, 2000)
   
  } catch (error) {
    
  }
   
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
    </div>
  );
};









export default Login;
