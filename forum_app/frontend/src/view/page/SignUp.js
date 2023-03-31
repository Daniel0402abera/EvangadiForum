import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container, maxWidth } from "@mui/system";
import bgImg from "../../images/evangadi_bg.svg";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

function Login() {
const [data,setData] = useState({
  email:'',
  firstName:'',
  lastName:'',
  userName:'',
  password:''
});

const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(data)
  }

console.log(data)
  const paperStyle = {
    padding: 5,
    height: "70vh",
    width: "70%",
    marginTop: "2vh",
    marginBottom: "2vh",
    marginLeft: "10vw",
    borderRadius: '20px'

  };
  const login_btn = {
    marginTop: "1vh",
  };

  const input_field = {
    paddingBottom: "1vh",
  };

  const bg_img = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const about_style = {
    height: "25vh",
    paddingTop: 30,
  };
  return (
    <>
      <Container style={bg_img} maxWidth={"100"}>
        <Grid container spacing={2} columnSpacing={2}>
          <Grid item sm={6}>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <h3>Join the network</h3>
              </Grid>
              <TextField
                style={input_field}
                label="Email"
                placeholder="Your Email"
                fullWidth
                required
                type={"email"}
                value={data.email}
                onChange={(e)=>{setData({...data,email:e.target.value})}}
              />

              <TextField
                style={{ width: "45%", marginRight: "5%" }}
                label="First Name"
                placeholder="First Name"
                margin={"normal"}
                required
                value={data.firstName}
                onChange={(e)=>{setData({...data,firstName:e.target.value})}}
              />
              <TextField
                style={{ width: "50%" }}
                label="Last Name"
                margin={"normal"}
                placeholder="Last Name"
                required
                value={data.lastName}
                onChange={(e)=>{setData({...data,lastName:e.target.value})}}
              />
              <TextField
                style={input_field}
                label="User"
                placeholder="User Name"
                type=""
                fullWidth
                required
                value={data.userName}
                onChange={(e)=>{setData({...data,userName:e.target.value})}}
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
                Agree and Join
              </Button>
              {error && <Typography>{error}</Typography>}

              <Grid align="center">
                <p>Already have account?</p>
                <Link to='/'>Sign In</Link>
              </Grid>
            </Paper>
          </Grid>

          <Grid item sm={5}>
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
              <Button type="submit" variant="contained">
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
