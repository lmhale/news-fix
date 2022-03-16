import * as React from "react";
import { TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";


interface Values {
    email:string,
    passwordHash:string
}

interface Props {
  onSubmit: (values:Values) => void;
}

export const FormComponent: React.FC<Props> = ({onSubmit}) => {
  return (

    <Formik initialValues={{email:'', passwordHash:''}} onSubmit={values => {
        onSubmit(values)
    }}
    >
      {({values, handleChange, handleBlur}) => (
      
        <Form>
         
          <TextField 
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          />
          <div>
             <TextField 
             placeholder="password"
          name="passwordHash"
          value={values.passwordHash}
          onChange={handleChange}
          onBlur={handleBlur}
          />
        
          </div>
          <Button variant="contained"type="submit">Submit</Button>
        </Form>
    
      )}
    </Formik>
      
  );
};
