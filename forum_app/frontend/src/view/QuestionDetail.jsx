import { Avatar, Button, Container, Grid, Link, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

function QuestionDetail() {
    const detailWrapper ={
        height:'90vh'
    }
  return (
    <Container style={detailWrapper}>
        <Typography variant='h4' >
            Question
        </Typography>
        <Typography variant='h6'>
            What is react?
        </Typography>
        <Typography>
            How does it work?
        </Typography>
        <hr/>
        <Typography variant='h4'>
            Answer From The Community
        </Typography>
        <hr/>

        <Grid>
        <div style={{ display: "flex", height: "10vh" }}>
          <div style={{ width: "10%" }}>
            <Avatar />
            <Typography>User Name</Typography>
          </div>
          <Typography style={{ paddingTop: "2%", width: "90%" }}>
            lorem ipsum dolor sit amet, consectetur
          </Typography>
        </div>
        </Grid>
        <Grid >
            <Typography variant='h5'>
                Answer The Top Question
            </Typography>
            <Link>Go to Question page</Link>
        </Grid>
        <Grid>
        <TextareaAutosize minRows={15} fullWidth style={{ width: "100%" }} placeholder='Your Answer...' />
        <Button type="submit" variant="contained">
          Post Your Answer
        </Button>
        </Grid>
        
    </Container>
  )
}

export default QuestionDetail
