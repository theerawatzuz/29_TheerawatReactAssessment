import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from './Layout';
import { Grid, Typography, TextField } from '@mui/material';
import { Button, Paper } from '@mui/material';

export default function Signin() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("https://jsd5-mock-backend.onrender.com/members");
      const data = await response.json();
      
      const user = data.find((item) => item.name === name && item.lastname === lastname);

      if (user) {
        alert("Login successful");
        window.location.href = '/Home';
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server is Unavailable. Please contact admin.");
    }
  };

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <Layout>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ p: 3 }}>
          <Typography variant='h6' gutterBottom component="div">
            Login
          </Typography>
          <Paper sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastname"
                    label="Lastname"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </React.Fragment>
    </Layout>
  );
}
