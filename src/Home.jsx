import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {ButtonGroup} from '@mui/material';
import {Dialog} from '@mui/material';
import {DialogTitle } from '@mui/material';
import {DialogContent} from '@mui/material';
import {DialogContentText } from '@mui/material';
import {DialogActions  } from '@mui/material';
import {TextField } from '@mui/material';
import {Grid } from '@mui/material';
import { MenuItem } from '@mui/material';
import Link from '@mui/material/Link';

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

export default function Home() {
    const [items, setItems] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [selectedUserId, setSelectedUserId] = React.useState(null);
  
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");

    useEffect(() => {
      UserGet();
    }, []);
  
    const UserGet = () => {
      fetch("https://jsd5-mock-backend.onrender.com/members")
        .then((res) => res.json())
        .then((result) => {
          setItems(result);
          setIsLoaded(true);
        });
    };
  
    const UserDelete = (id) => {
      var raw = "";
  
      var requestOptions = {
        method: "DELETE",
        body: raw,
        redirect: "follow",
      };
  
      fetch(`https://jsd5-mock-backend.onrender.com/member/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result["message"] === `deleted ${id}`) {
            alert("Delete user successful");
            window.location.href = "/";
          } else {
            alert("Server is Unavailable, Please contact admin.");
          }
        })
        .catch((error) => console.log("error", error));
    };
  
    const UserEdit = () => {
        const updatedUser = {
          id: selectedUserId,
          name: name,
          lastname: lastname,
          position: position,
        };
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: JSON.stringify(updatedUser),
          redirect: 'follow',
        };
        fetch(`https://jsd5-mock-backend.onrender.com/members`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result["message"] === 'updated') {
                window.location.reload();
              } else {
                alert("Server is Unavailable, Please contact admin.");
              }
        })
        .catch(error => console.log('error', error));
        setOpen(false);
    };


  
    const handleClickOpen = (id) => {
        const selectedUser = items.find((user) => user.id === id)
        setSelectedUserId(id);
        setName(selectedUser.name);
        setLastname(selectedUser.lastname);
        setPosition(selectedUser.position);
    
        setOpen(true);
    };
  
    const handleClose = () => {
        setName("");
        setLastname("");
        setPosition("");
      setOpen(false);
    };

    const isTokenAdmin = localStorage.getItem('tokenAdmin') === 'true';
  
    return (
      <Layout>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" sx={{ p: 3 }}>
            <Paper sx={{ p: 3 }}>
              <Box display="flex">
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Current Users
                  </Typography>
                </Box>
                <Box>
                  <Link href="/Signup">
                    <Button variant="contained" color="secondary">
                      ADD (+)
                    </Button>
                  </Link>
                </Box>
              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Lastname</TableCell>
                      <TableCell align="right">Position</TableCell>
                      {isTokenAdmin && (
                        <TableCell align="right">Action</TableCell>
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.lastname}</TableCell>
                        <TableCell align="right">{row.position}</TableCell>
                        <TableCell align="right">
                        {isTokenAdmin && (
                          <ButtonGroup
                            variant="contained"
                            aria-label="outlined primary button group"
                          >
                            <Button onClick={() => handleClickOpen(row.id)}>
                              Edit
                            </Button>
                            <Button onClick={() => UserDelete(row.id)}>
                              Delete
                            </Button>
                          </ButtonGroup>
                        )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Container>
        </React.Fragment>
        <React.Fragment>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit User ID {selectedUserId}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please edit with be careful
              </DialogContentText>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField id="name" label="Name" variant="outlined" 
                    fullWidth 
                    required
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="lastname" label="Lastname" variant="outlined" 
                    fullWidth 
                    required
                    value={lastname}
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
                    value={position}
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
            </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={UserEdit} autoFocus>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </Layout>
    );
  }
  