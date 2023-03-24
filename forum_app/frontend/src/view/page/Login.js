import React from 'react'
import {Grid,Paper} from "@mui/material";

function Login() {
    const paperStyle = {padding:20,height:'70vh',width:'30%', margin:'50px'}
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
    Sign IN
    </Paper>
    </Grid>
  )
}

export default Login