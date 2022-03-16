import React from "react";
import { FormComponent } from "./FormComponent";
import { useLoginMutation } from "../redux-app/features/users/auth.api.slice";
import  {useNavigate}  from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../redux-app/features/users/authslice'

const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

const handleSubmit = async(email, passwordHash)=> {
  try {
    const user = await login({email, passwordHash}).unwrap()
    dispatch(setCredentials(user))
    navigate("../", { replace: true });
  } catch (error) {
    
  }
   
}

  return (
    <div style={{ textAlign: "center" }}>
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
