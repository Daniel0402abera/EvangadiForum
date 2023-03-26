import { Button, Grid, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function AskQuestion() {
  const askquestion = {
    height: "73vh",
  };
  return (
    <Container style={askquestion}>
      <Grid  style={{ paddingTop:'5vh',margin:'auto'}}>
        <Typography variant={"h4"}>Steps to write a good question</Typography>
        <Typography variant={""}>
          • Summerize your problem in a one-line title.
        </Typography>
        <Typography>• Describe your problem in more detail.</Typography>
        <Typography>
          • Describe what you tried and what you expected to happen.
        </Typography>
        <Typography>• Review your question and post it to the site.</Typography>
      </Grid>

      <Grid style={{marginTop:'15vh'}}>
        <Typography variant={"h5"}>Ask a public question</Typography>
        <Typography>Go to Question page.</Typography>
      </Grid>
      <Grid style={{ height: "30vh" }}>
        <TextField placeholder="Text" fullWidth />
        <TextareaAutosize minRows={10} fullWidth style={{ width: "100%" }} />
        <Button type="submit" variant="contained">
          Post Your Question
        </Button>
      </Grid>
    </Container>
  );
}

export default AskQuestion;
