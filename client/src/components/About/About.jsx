

import { Box, Container, Typography, CardMedia, Card, Button } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./About.css";

function About() {
  return (
    <Container
      sx={{ marginTop: "4rem" }}
    >
      <Box
        display={"flex"} gap="2rem" mt={"3rem"}
        justifyContent={"space-between"}
      >
        <Box width="50%" display={"flex"} flexDirection={"column"} gap={"30px"}>
          <Box>
            <Typography fontSize={"20px"}>It's hard to find Personalised guid.</Typography>
            <Typography fontSize={"20px"} className='txt-grandient'>GetTutor to solve this.</Typography>
          </Box>
          <Typography>
            Our platform connects students with personal teachers, simplifying the process of finding the right match. We understand the challenge and make it easy for students to connect with passionate educators for personalized guidance.
          </Typography>
          <Typography>
            We value one-on-one student-teacher interaction for personalized learning. Unlike group or institutional settings, our platform addresses individual needs by connecting students with tailored teachers. 
          </Typography>
          <Box>
            <Button>Let's go <ArrowForwardIcon /></Button>
          </Box>
        </Box>
        <Box width="40%" className="about-bgImg" >
          <Card sx={{ maxWidth: 300, background: "transparent" }}>
            <CardMedia
              sx={{ height: 180, opacity: "0.5" }}
              image="./assets/about/aboutImg.jpg"
              title="green iguana"
            />
            <CardMedia
              sx={{ height: 180 }}
              image="./assets/about/aboutImg6.jpg"
              title="green iguana"
              className='about-second-img'
            />
          </Card>
        </Box>

      </Box>
    </Container>
  )
}

export default About
