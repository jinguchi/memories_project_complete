import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Posts from './components/posts/posts'
import Form from './components/form/form'
// import {Container, AppBar, Typography, Grow, Grid} from '@mui/core'

const App = () => {
  return (
    <div>
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
              <Typography variant="h2" align="center">
                Makahadoma
              </Typography>
              <div align="center">
                <img src = "https://i.imgur.com/eXd1UhJ.jpg" alt= "memories" height = "20%" width = "20%" />
              </div>
            </AppBar>
            <Grow in>
              <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <Posts/>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Form/>
                  </Grid>
                </Grid>
              </Container>
            </Grow>
        </Container>
    </div>
  )
}

export default App