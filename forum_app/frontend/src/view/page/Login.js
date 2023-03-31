import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container, maxWidth } from "@mui/system";
import bgImg from '../../images/evangadi_bg.svg'
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const [data,setData] = useState({
    email:'',
    password:''
  })

  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(data)
  
  }

  console.log(data)
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: "60%",
    marginTop: "5vh",
    marginBottom:'5vh',
    marginLeft:'10vw',
    borderRadius: '20px'
    
  };
  const login_btn = {
    marginTop: "10vh",
  };

  const input_field = {
    paddingBottom: "5vh",
  };

  const bg_img = { 
      backgroundImage: `url(${bgImg})` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
     
    
  };
  const about_style={
    height:'25vh',
    paddingTop:30
  }
  return (
    <>
      <Container style={bg_img} maxWidth={'100'}>

        <Grid container spacing={2} columnSpacing={2}>

          <Grid item lg={6}>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <h3>Login to your account</h3>
              </Grid>
              <TextField
                style={input_field}
                label="Email"
                placeholder="Your Email"
                fullWidth
                required
                value={data.email}
                onChange={(e)=>{setData({...data,email:e.target.value})}}
              />

              <TextField
                style={input_field}
                label="password"
                placeholder="Your Password"
                type="password"
                fullWidth
                required
                value={data.password}
                onChange={(e)=>{setData({...data,password:e.target.value})}}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={login_btn}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Submit
              </Button>

              {error && <Typography>{error}</Typography>}

              <Grid align="center">
                <p>Don't have account?</p>
                <Link to='/signup'>Create new account</Link>
              </Grid>
            </Paper>
          </Grid>

          <Grid item lg={5}>
            <Grid style={about_style}>
              <h4>About</h4>
              <Typography fontSize={30}>Evangadi Networks Q&A</Typography>
              <Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                                  </p>
              </Typography>
              <Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
          
                </p>
              </Typography>
              <Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
          
                </p>
              </Typography>
              <Button 
        type='submit'
        variant='contained'
         >
          HOW IT WORKS
         </Button>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default Login;
