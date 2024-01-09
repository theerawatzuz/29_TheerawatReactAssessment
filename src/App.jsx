import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from './Layout';
import {Card} from '@mui/material';
import {CardContent} from '@mui/material';
import {CardMedia} from '@mui/material';
import {Typography} from '@mui/material';
import {CardActionArea } from '@mui/material';


export default function App() {
  return (
    <Layout>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p:3}}>
        <Card sx={{ maxWidth: 500}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image="https://unsplash.com/photos/a-man-standing-in-front-of-a-tall-waterfall-8F4npKj5U14"
                alt="profile-Pic"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Bang - GroupC - 29
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Electronics and Computer Officer with 3 years, incl. 1 year as a System Integrator, seeking to become a Software
                    Tester. Skilled in system design, policy compliance, and efficient planning. Experienced in teamwork and precise
                    integration. Driven by a passion for reliable software, eager to apply analytical skills in testing. Excited about
                    contributing to innovative projects and committed to high-quality standards. Ready to use a unique skill set for success
                    as a Software Tester
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      </Container>
    </React.Fragment>
    </Layout>
  );
}