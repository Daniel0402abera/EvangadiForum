import { Button, Grid, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

function AskQuestion() {
  const [question,setQuestion] = useState({
    title:'',
    questionDesc:''
  })

  console.log(question)
  const askquestion = {
    height: "90vh",
  };

  const handlePost = ()=>{
    fetch('http://localhost/4000/api/askQuestion', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDIxNDRjZGZlMzFkMDlmODE4YTk1MzUiLCJpYXQiOjE2ODAwMDc3NDEsImV4cCI6MTY4MDI2Njk0MX0.ku5mB3gvba5aWhGTj_vcMgBu7q0P9mzf_hO5anpDoA8',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Include any data you want to send in the request body here
        question
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
  }


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

      <Grid style={{marginTop:'5vh'}}>
        <Typography variant={"h5"}>Ask a public question</Typography>
        <Typography>Go to Question page.</Typography>
      </Grid>
      <Grid style={{ height: "30vh" }}>
        <TextField 
        placeholder="Title" 
        fullWidth 
        value={question.title}
        onChange={(e)=>{setQuestion({...question,title:e.target.value})}}
        
        />
        <TextareaAutosize
         minRows={10} 
         fullWidth 
         style={{ width: "100%" }}
         value={question.questionDesc}
         onChange={(e)=>{setQuestion({...question,questionDesc:e.target.value})}}
         
         />
        <Button  onClick={handlePost} variant="contained">
          Post Your Question
        </Button>
      </Grid>
    </Container>
  );
}

export default AskQuestion;
