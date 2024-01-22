import React from 'react';
import "../../style/Global.css";
import { Container, Typography, Box, Button } from '@mui/material';
import {useNavigate} from "react-router-dom";
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
function Hero() {
    const navigate=useNavigate();
  return (
    <main>
      <Container
        sx={{
          height: "calc(100vh - 120px)"
        }}
      >
        <Box marginTop={"3.6rem"} textAlign={"center"}>
          <Typography variant="h1"
            sx={{
              fontSize: "3.6rem",
              textAlign: "center",
              fontFamily: "'Comfortaa', sans-serif",
              width: "70%",
              margin: "auto",
              fontWeight: "900",
            }}>
            Match with your
            <span className="txt-grandient">
              perfect personal teacher </span> today with GetTutor
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "row", gap: 3, justifyContent: "center", marginTop: "2.7rem" }}
          >
            <Button onClick={()=>navigate("/signup/teachers",{state: { key: "teachers" }})}><RocketLaunchOutlinedIcon />Signup as Teacher</Button>
            <Button onClick={()=>navigate("/signup/students",{state: { key: "student" }})}><RocketLaunchOutlinedIcon /> as Student</Button>
          </Box>
        </Box>
      </Container>
    </main>
  )
}

export default Hero
