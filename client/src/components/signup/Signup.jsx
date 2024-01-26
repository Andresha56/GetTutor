import "./Signup.css";
import { Container, Box, Button, Stack, } from '@mui/material';
import React, { useEffect } from 'react';
import signupImg from "../../image/signupImg.png";
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isNavigate,setIsNavigate]=useState(false);
  // ---handelFormClick-----

  const handelFormClick = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  // -----handel---form----data--after---submit----
  const handelFormSubmit = (e) => {
    e.preventDefault();
    // Check for errors and update the error state
    setFormErrors((prevErrors) => {
      const newErrors = checkValidation(values);
      console.log(newErrors);
      return newErrors;
    });
    setIsSubmit(true);
  }
  // ----check--form--fiellds---and---navigate--accordingly ---
  useEffect(()=>{
    if (isSubmit && Object.keys(formErrors).length === 0)setIsNavigate(true);
  },[formErrors,isSubmit])
  // ------vaildate---function-----
  const checkValidation = (formValues) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const { name, email, password } = formValues;
    if (!name) {
      errors.name = "name required!"
    } else if (name.length < 3) {
      errors.name = "name must be at least 3 characters long.";
    };
    if (!email) errors.email = "email required!"
    else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address!";
    };
    if (!password) errors.password = "password required!"
    else if (password.length < 7) {
      errors.password = "Password must be at least 8 characters long.";
    };
    return errors;
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
                {formErrors?.name&& <p>{formErrors?.name}</p> }

                <label htmlFor="email" >Enter email</label>
                <input type="email" value={values.email} onChange={handelFormClick} placeholder="example@gmail.com" name="email" id="email" />
                {formErrors?.email&& <p>{formErrors?.email}</p> }
                <label htmlFor="password">Enter password</label>
                <input type="password" onChange={handelFormClick} value={values.password} placeholder="1234#$abM" name="password" id="password" />
                {formErrors?.password&& <p>{formErrors?.password}</p> }
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