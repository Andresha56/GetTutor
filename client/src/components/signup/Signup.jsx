import "./Signup.css";
import { Container, Box, Typography, Button, TextField, Stack, } from '@mui/material'
import React from 'react'
import signupImg from "../../image/signupImg.png"
import { Link, useLocation } from 'react-router-dom'
function Signup() {
  const { state } = useLocation();
  console.log(state.key);
  return (
    <>
      <Container sx={{ height: "calc(100vh - 100px)" }}>
        <Stack height={"100%"} width={"80%"} margin={"auto"}>
          <Stack height={"100%"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"} gap={3}>
          <Stack width={"40%"}>
            <form method="post" >
              <label htmlFor="name">Enter name</label>
              <input type="text" placeholder="name" name="name" id="name" />

              <label htmlFor="email">Enter email</label>
              <input type="email" placeholder="example@gmail.com" name="email" id="email" />

              <label htmlFor="password">Enter password</label>
              <input type="password" placeholder="1234#$abM" id="password" />

              <Stack flexDirection={"row"} alignItems={"center"}>
                <hr className="hr" /><span>OR</span><hr className="hr" />
              </Stack>

              <Box display={"flex"} justifyContent={"center"}>
                <Button type="submit">Sign up with Google</Button>
              </Box>

              <Stack flexDirection={"row"} justifyContent={"center"} mt={"20px"}>
                <Link sx={{ color: "primary.light" }}>Already have an account? Sign in</Link>
              </Stack>
            </form>

          </Stack>

          <Box width={"40%"}>
            <img src={signupImg} alt="signup" />
          </Box>
          </Stack>
        </Stack>
      </Container>

    </>
  )
}

export default Signup