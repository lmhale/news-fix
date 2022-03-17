import React from "react";
import { useNavigate } from "react-router";
import { Logout } from "./Logout"
import { FormComponent } from "./FormComponent";
const Signup = () => {
    return(
        <div style={{ textAlign: "center" }}>
            <h1>Signup</h1>
        <FormComponent
         onSubmit={({ email, passwordHash }) => {
            console.log(email, passwordHash);
          
          }}
        />
      </div>

    )
    
  
}

export default Signup