import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';




export default function Navbar() {
    const location = useLocation();
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
              <a href='/'>29 Theerawat-JSD6</a>
            </Typography>


            {location.pathname !== '/Signup' && location.pathname !== '/Signin' && (
            <>
              <Button color="inherit" href="/Signin">
                Login
              </Button>
              <Button color="inherit" href="/Signup">
                Register
              </Button>
                <Button color="inherit" href="/Home">
                    Home
                </Button>
                <Button color="inherit" href="/Owner">
                    Owner
                </Button>
            </>
          )}

          {location.pathname === '/Signup' && (
            <>
                already have an account?
                <Button color="inherit" href="/Signin">
                    login
                </Button>
              </>
          )}

          {location.pathname === '/Signin' && (
            <>
                Don't have any account yet?
                <Button color="inherit" href="/Signup">
                    Register
                </Button>
              </>
          )}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }