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
import Link from '@mui/material/Link';


export default function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        UserGet()
    }, [] )

    
    const UserGet = () => {
        fetch("https://jsd5-mock-backend.onrender.com/members")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
                setIsLoaded(true)
            }
        )
    }

    const UserDelete = id => {
        var raw = "";

        var requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
        };

        fetch(`https://jsd5-mock-backend.onrender.com/member/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result['message'] === `deleted ${id}`) {
                alert("Delete user successful");
                window.location.href = '/';
            } else {
                alert("Server is Unavailable, Please contact admin.")
            }
            
        })
        .catch(error => console.log('error', error));
    }


  return (
    <Layout>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{p: 3}}>
        <Paper sx={{ p: 3}}>
        <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant='h6' gutterBottom component="div">Users</Typography> 
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
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>Edit</Button>
                    <Button onClick={() => UserDelete(row.id)}>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </Paper>
      </Container>
    </React.Fragment>
    </Layout>
  );
}