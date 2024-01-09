import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';


export default function Home() {
    const [items, setItems] = useState([]);
   
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

              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Lastname</TableCell>
                      <TableCell align="right">Position</TableCell>
                   
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
  