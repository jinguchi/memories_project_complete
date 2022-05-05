
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
            <AppBar 
            sx={{
              borderRadius: 15,
              margin: '30px 0',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'static',
              bgcolor: "inherit"
            }}
            // position="static" 
            // color="inherit"
            >
              <Typography 
              sx={{color: 'rgba(0,183,255, 1)'}}
              variant="h2" align="center">
                Makahadoma
              </Typography>
              <img 
                src = "https://i.imgur.com/eXd1UhJ.jpg" 
                alt= "memories"
                // margin-left = '15px'
                height = "10%" 
                width = "10%"
                />
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