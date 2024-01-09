import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from './Layout';
import { Grid, Typography, TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Button, Paper } from '@mui/material';

const PositionData = [
    {
      value: 'CEO',
      label: 'CEO',
    },
    {
      value: 'CTO',
      label: 'CTO'
    },
    {
      value: 'Manager',
      label: 'Manager'
    },
    {
      value: 'Programmer',
      label: 'Programmer'
    },
    {
      value: 'Staff',
      label: 'Staff'
    },
    {
      value: 'Finance',
      label: 'Finance'
    },
    {
      value: 'Software Tester',
      label: 'Software Tester'
    },
    {
      value: 'Other',
      label: 'Other'
    },
  ];

export default function SignUp() {
    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "id": "",
            "name": name,
            "lastname": lastname,
            "position": position
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://jsd5-mock-backend.onrender.com/members", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result['message'] === 'created') {
                    alert("Create user successful");
                    window.location.href = '/';
                }
                else {
                    alert("Sever is Unavailable, Please contact admin.")
                }
            })
                
            .catch(error => console.log('error', error));

    }
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [position, setPosition] = useState('');

  return (
    <Layout>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p: 3}}>
        <Typography variant='h6' gutterBottom component="div">
            Register
        </Typography> 
        <Paper sx={{ p: 3}}>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField id="name" label="Name" variant="outlined" 
                    fullWidth 
                    required 
                    onChange={(e) => setName(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="lastname" label="Lastname" variant="outlined" 
                    fullWidth 
                    required
                    onChange={(e) => setLastname(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    id="position"
                    select
                    label="Select"
                    defaultValue="Position"
                    fullWidth
                    required
                    onChange={(e) => setPosition(e.target.value)}
                    xs={{ minWidth: '100%' }}
                    >
                    {PositionData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button
                    type="submit" 
                    variant="contained" 
                    color="secondary" 
                    fullWidth
                    >
                        Create
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