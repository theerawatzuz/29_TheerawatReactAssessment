import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';




export default function Navbar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
           
{/*             
          {location.pathname !== '/main' && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href="/Home">29 Theerawat-JSD6</a>
            </Typography>
          )} */}

            <Typography pography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href="/Home">29 Theerawat-JSD6</a>
            </Typography>


            <Button color="inherit" href="/Signin">Login</Button>
            <Button color="inherit" href="/Signup">Register</Button>
            <Button color="inherit" href="/Home">Home</Button>
            <Button color="inherit" href="/Owner">Owner</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }