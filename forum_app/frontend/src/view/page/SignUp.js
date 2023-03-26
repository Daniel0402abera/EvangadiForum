import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container, maxWidth } from "@mui/system";
import bgImg from "../../images/evangadi_bg.svg";

function Login() {
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
              />

              <TextField
                style={{ width: "45%", marginRight: "5%" }}
                label="First Name"
                placeholder="First Name"
                margin={"normal"}
                required
              />
              <TextField
                style={{ width: "50%" }}
                label="Last Name"
                margin={"normal"}
                placeholder="Last Name"
                required
              />
              <TextField
                style={input_field}
                label="User"
                placeholder="User Name"
                type="password"
                fullWidth
                required
              />

              <TextField
                style={input_field}
                label="password"
                placeholder="Your Password"
                type="password"
                fullWidth
                required
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={login_btn}
              >
                Agree and Join
              </Button>

              <Grid align="center">
                <p>Already have account?</p>
                <a href="#">Sign In</a>
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
