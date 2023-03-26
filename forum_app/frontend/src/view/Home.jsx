import React from "react";
import { Container } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";

function Home() {
  const home = {
    height: "73vh",
  };
  return (
    
      <Container style={home}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <Button type="submit" variant="contained">
            Ask Question
          </Button>
          <Typography>Welcome Daniel Abera</Typography>
        </div>

        <Typography style={{ marginTop: "5vh" }}>Question</Typography>
        <hr />
        <div style={{ display: "flex", height: "10vh" }}>
          <div style={{ width: "10%" }}>
            <Avatar />
            <Typography>User Name</Typography>
          </div>
          <Typography style={{ paddingTop: "2%", width: "90%" }}>
            lorem ipsum dolor sit amet, consectetur
          </Typography>
        </div>
        <hr />
        <div style={{ display: "flex", height: "10vh" }}>
          <div style={{ width: "10%" }}>
            <Avatar />
            <Typography>User Name</Typography>
          </div>
          <Typography style={{ paddingTop: "2%", width: "90%" }}>
            lorem ipsum dolor sit amet, consectetur
          </Typography>
        </div>
        <hr/>
        <div style={{ display: "flex", height: "10vh" }}>
          <div style={{ width: "10%" }}>
            <Avatar />
            <Typography>User Name</Typography>
          </div>
          <Typography style={{ paddingTop: "2%", width: "90%" }}>
            lorem ipsum dolor sit amet, consectetur
          </Typography>
        </div>

        <hr/>
        <div style={{ display: "flex", height: "10vh" }}>
          <div style={{ width: "10%" }}>
            <Avatar />
            <Typography>User Name</Typography>
          </div>
          <Typography style={{ paddingTop: "2%", width: "90%" }}>
            lorem ipsum dolor sit amet, consectetur
          </Typography>
        </div>
        <hr/>
        <div style={{ display: "flex", height: "10vh" }}>
          <div style={{ width: "10%" }}>
            <Avatar />
            <Typography>User Name</Typography>
          </div>
          <Typography style={{ paddingTop: "2%", width: "90%" }}>
            lorem ipsum dolor sit amet, consectetur
          </Typography>
        </div>
        <hr/>
      </Container>
  );
}

export default Home;
