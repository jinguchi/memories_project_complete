import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

const App = () => {
  return (
    <div>
        <Container>
            <AppBar position="static" color="inherit">
              <Typography variant="h2" align="center">
                Makahadoma
              </Typography>
              <div align="center">
                <img src = "https://i.imgur.com/eXd1UhJ.jpg" alt= "memories" height = "20%" width = "20%" />
              </div>
            </AppBar>
        </Container>
    </div>
  )
}

export default App