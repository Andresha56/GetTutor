import "./Signup.css";
import { Container, Box, Button, Stack, } from '@mui/material';
import React, { useEffect } from 'react';
import signupImg from "../../image/signupImg.png";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import { checkValidation } from "./SignUpValidation";
import { sendToDB } from "./sendToDB";

// -----form---initial---formValues---
const initialformValues = {
  name: "",
  email: "",
  password: ""
}

function Signup() {
  const { state } = useLocation();
  // -----states-----
  const [formValues, setFormValues] = useState(initialformValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  // ---handelFormClick-----

  const handelFormformValues = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  // -----handel---form----data--after---submit----
  const handelFormSubmit = (e) => {
    e.preventDefault();
    // Check for errors and update the error state
    setFormErrors((prevErrors) => {
      const newErrors = checkValidation(formValues);
      return newErrors;
    });
    setIsSubmit(true);
  }
  // ----check--form--fields---and---navigate--accordingly---
  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length === 0) {
      sendToDB(formValues)
        .then((response) => {
          if (response.success === false) {
            setIsSignUpSuccess(false);
            setFormErrors((prevErrors) => ({ ...prevErrors, email: response.message }));
          } else {
            setIsSignUpSuccess(true);
            alert("user created successfully");
            setFormValues(initialformValues);
          }
        })

    };
  }, [formErrors, isSubmit,])
  // ------vaildate---function-----

  return (
    <>
      <Container sx={{ height: "calc(100vh - 100px)" }}>
        <Stack height={"100%"} width={"80%"} margin={"auto"}>
          <Stack height={"100%"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"} gap={3}>
            <Stack width={"40%"}>
              <form method="post" onSubmit={handelFormSubmit} >
                <label htmlFor="name">Enter name</label>
                <input type="text" value={formValues.name} onChange={handelFormformValues} placeholder="name" name="name" id="name" />
                {formErrors?.name && <p>{formErrors?.name}</p>}

                <label htmlFor="email">Enter email</label>
                <input type="email" value={formValues.email} onChange={handelFormformValues} placeholder="example@gmail.com" name="email" id="email" />
                {formErrors?.email && <p>{formErrors?.email}</p>}
                <label htmlFor="password">Enter password</label>
                <input type="password" onChange={handelFormformValues} value={formValues.password} placeholder="1234#$abM" name="password" id="password" />
                {formErrors?.password && <p>{formErrors?.password}</p>}
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <Button type="submit" >Sign Up</Button><hr /><Button>Sign up with Google</Button>
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