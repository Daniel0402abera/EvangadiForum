import React from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";

function Home() {
  const home = {
    height: "73vh",
  };
  return (
    <div>
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

        <Typography style={{marginTop:'5vh'}}>
            Question
        </Typography>
        <hr/>
      </Container>
    </div>
  );
}

export default Home;
