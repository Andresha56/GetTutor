import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
function Hero() {
  return (
    <main>
      <Container
      sx={{
        height:"calc(100vh - 120px)"
      }}
      >
        <Box marginTop={"3.6rem"}  textAlign={"center"}>
          <Typography variant="h1"
            sx={{
              fontSize: "3.6rem",
              textAlign: "center",
              fontFamily:"'Comfortaa', sans-serif",
              width:"70%",
              margin:"auto",
              fontWeight:"900"
            }}>
            Match with your <span style={{color:"cornsilk"}}>perfect personal teacher </span> today with GetTutor
          </Typography>
          <Box
          sx={{display:"flex",flexDirection:"row",gap:3,justifyContent:"center",marginTop:"2.7rem"}}
          >
          <Button><RocketLaunchOutlinedIcon color="secondary"/>Signup as Teacher</Button>
          <Button><RocketLaunchOutlinedIcon color="secondary"/> as Student</Button>
          </Box>
        </Box>
      </Container>
    </main>
  )
}

export default Hero
