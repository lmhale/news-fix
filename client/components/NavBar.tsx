import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, Box, Toolbar } from "@mui/material";
import { cyan } from '@mui/material/colors';
export const NavBar = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  return (
    <> 
   
      {userId ? (
         <AppBar  position='static'>
      
          <Toolbar sx={{justifyContent: 'flex-end' }}>
          <Button size='large' sx={{ marginRight:2, fontWeight:800}} color='secondary'  href="/">
            Home
          </Button>
          <Button size='large' sx={{ marginRight:2, fontWeight:600}} color='secondary' href="favorites">Favorites</Button>
          <Button size='large' sx={{fontWeight:600}} color='secondary' href="/logout">Logout</Button>
          </Toolbar>
         
     </AppBar>
      ) : (
        <div></div>
      )}
   </>
  );
};
