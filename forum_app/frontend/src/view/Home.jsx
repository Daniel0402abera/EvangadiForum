import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";


function Home() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const home = {
    height: "73vh",
  };

  const [question, setQuestion] = useState([]);
  const [error, setError] = useState(null)

  useEffect(()=>{

    const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDIxNDRjZGZlMzFkMDlmODE4YTk1MzUiLCJpYXQiOjE2ODAwMDc3NDEsImV4cCI6MTY4MDI2Njk0MX0.ku5mB3gvba5aWhGTj_vcMgBu7q0P9mzf_hO5anpDoA8'

    const config = {
      headers: {
        Authorization: `Bearer ${Token} `
      }
    };


axios.get('http://localhost/4000/api/getQuestion',config)
  .then((response) => {
    setQuestion(response)
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });






  },[])










  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost/4000/api/getQuestion', {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${Token}`
  //         }
  //       });
  //       const json = await response.json();
  //       setQuestion(json);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetchData();
  // }, []);


  return (
    
      <Container style={home}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <Button onClick={()=>{navigate('/askquestion')}} type="submit" variant="contained">
            Ask Question
          </Button>
          <Typography>{`Welcome ${user.email}`}</Typography>
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
