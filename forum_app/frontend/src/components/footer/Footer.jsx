import { Container } from '@mui/system'
import React from 'react'

function Footer() {
    const Container_style ={
         height:'17vh',
         backgroundColor:'black',
         color:'white',
         position: 'fixed',
         bottom: 0
    }
  return (
    
      <Container  style={Container_style} maxWidth={'100'} >
        Helloo
      </Container>

  )
}

export default Footer
