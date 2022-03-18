import React from "react";
import { FormComponent } from "../../components/FormComponent";
import { useLoginMutation } from "./redux/auth.api.slice";
import  {useNavigate}  from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './redux/authslice'

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
      <h2>Login</h2>
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
