import React, { useState } from 'react';
import "./profile.css"
import { Box, Button, Container, TextField, TextareaAutosize } from '@mui/material'
import MultiplSelectChip from './chip';
import { subject, boards } from './options';
import BasicTimePicker from './TimePicker';
import { locations } from './options';
// ----initial---input--fields---state---
const initialInputState = {
    name: "",
    email: "",
    textArea: "",
}

const initialOptionState={
    board:[],
    subject:[],
    location:[],
  }
function Profile() {
    // ----states---
    const [values, setValues] = useState(initialInputState);
    const [file, setFile] = useState();
    const [selectedTime, setSelectedTime] = useState(null);
    const [optionsName, setOptionsName] = React.useState(initialOptionState);

    //----handel---inputs-----
    const handelCreateProfileInputs=(e)=>{
        const {name,value}=e.target;
        setValues(
            {...values,
                [name]:value,
            }
        )
    }
    // ------handelUploadimage--------
    const handelImage = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    // ------handelProfileSubmit--------
    const handelCreateProfileSubmit = (event) => {
        event.preventDefault();
        console.log(optionsName)
        console.log(selectedTime)
    }
    
    // ------get---all--child--datas------
    // ---Chip(selected--options)---
    const hadelMultiplSelectChip = (values) => {
        setOptionsName((prevOptions) => {
          // Create a copy of the previous state
          const updatedOptions = { ...prevOptions };
      
          // Update the property in the state based on the provided name
          updatedOptions[values.name] = values.value;
      
          // Return the updated state
          return updatedOptions;
        });
      };
    return (
        <Container sx={{ marginTop: "50px" }}>
            <Box>
                <form method='GET' onSubmit={handelCreateProfileSubmit}>
                    <label htmlFor='name'>Enter your name</label>
                    <input type="text" id="name" name="name" onChange={handelCreateProfileInputs} placeholder='john' value={values.name} />
                    <label htmlFor='email'>Enter your Email</label>
                    <input type="email" id="emai" name="email" onChange={handelCreateProfileInputs} placeholder="abc@gmail.com" value={values.email} />
                    <label htmlFor="img">Select image: *optional</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={handelImage} />
                    <img src={file} />
                    <label>Select Board *optional</label>
                    <MultiplSelectChip options={boards} name="board" hadelMultiplSelectChip={hadelMultiplSelectChip}/>
                    <label>Select Subjects</label>
                    <MultiplSelectChip options={subject} name="subject" hadelMultiplSelectChip={hadelMultiplSelectChip}/>
                    <label>Select your preferabl time</label>
                    <BasicTimePicker setSelectedTime={setSelectedTime}/>
                    <label>Select Location</label>
                    <MultiplSelectChip name="location" options={locations} hadelMultiplSelectChip={hadelMultiplSelectChip}/>
                    <TextareaAutosize
                        name='textArea' value={values.textArea}
                        onChange={handelCreateProfileInputs}
                        placeholder="Please write a short message introducing yourself, explaining how you can be a good teacher..."
                        style={{ width: '80%', marginTop: '8px', height: "150px" }}

                    />
                    <Box mt={3}><Button type='submit'>Create</Button></Box>
                </form>
            </Box>
        </Container>
    )
}

export default Profile
