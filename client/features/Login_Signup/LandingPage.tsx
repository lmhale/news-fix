import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login"
import { Paper, Button, Box, Typography } from "@mui/material";
const LandingPage = () => {
  const [memberStatus, setMemberStatus] = useState(true);

  return (
    <Paper sx={{padding:6}}>
      {memberStatus ? (
        <Box sx={{ textAlign: "center" }}>
          <Login /> 
          <Typography variant='overline'>Not a Registered User?</Typography>
          <Button onClick={() => setMemberStatus(false)}>Signup</Button>
        </Box>
      ) : (
        <Box sx={{textAlign:'center'}} >
        <Signup />
        <Typography variant='overline'>Already Have an Account?</Typography>
        <Button onClick={() => setMemberStatus(true)}>Login</Button>
        </Box>
       
       
      )}
    </Paper>
  );
};

export default LandingPage;
