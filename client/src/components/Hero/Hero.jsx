


import { Container, Typography, Box, Button } from '@mui/material'
import React from 'react'

function Hero() {
  return (
    <main>
      <Container>
        <Box sx={{marginTop: "3.1rem", textAlign:"center"}}>
          <Typography variant="h1"
            sx={{
              fontSize: "3.6rem",
              textAlign: "center",
              fontFamily:"'Comfortaa', sans-serif",
              width:"70%",
              margin:"auto",
              fontWeight:"900"
            }}>
            Match with your perfect personal teacher today with GetTutor
          </Typography>
          <Box
          sx={{display:"flex",flexDirection:"row",gap:3,justifyContent:"center",marginTop:"2.7rem"}}
          >
          <Button>Signup as Teacher</Button>
          <Button>Signup as Student</Button>
          </Box>
        </Box>
      </Container>
    </main>
  )
}

export default Hero
