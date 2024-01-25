import "./Signup.css";
import { Container, Box, Button, Stack, } from '@mui/material'
import React from 'react'
import signupImg from "../../image/signupImg.png"
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";

// -----form---initial---values---
const initialValues = {
  name: "",
  email: "",
  password: ""
}
function Signup() {
  const { state } = useLocation();
  // -----states-----
  const [values, setValues] = useState(initialValues);
  // ---handelFormClick-----

  const handelFormClick = (e) => {
    const {name,value}=e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  // -----handel---form----data--after---submit----
  const handelFormSubmit=(e)=>{
    e.preventDefault();
    console.log(values)
  }
  return (
    <>
      <Container sx={{ height: "calc(100vh - 100px)" }}>
        <Stack height={"100%"} width={"80%"} margin={"auto"}>
          <Stack height={"100%"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"} gap={3}>
            <Stack width={"40%"}>
              <form method="post" onSubmit={handelFormSubmit} >
                <label htmlFor="name" >Enter name</label>
                <input type="text" value={values.name} onChange={handelFormClick} placeholder="name" name="name" id="name" />

                <label htmlFor="email" >Enter email</label>
                <input type="email" value={values.email} onChange={handelFormClick} placeholder="example@gmail.com" name="email" id="email" />

                <label htmlFor="password">Enter password</label>
                <input type="password" onChange={handelFormClick} value={values.password} placeholder="1234#$abM" name="password" id="password" />
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Button type="submit" >Sign Up</Button><hr/><Button>Sign up with Google</Button>
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