import React, { useState } from 'react';
import "./profile.css"
import { Box, Button, Container, TextField, TextareaAutosize } from '@mui/material'
import MultiplSelectChip from './chip';
import { subject, boards } from './options';
import BasicTimePicker from './TimePicker';
import { locations } from './options';
import { useUserContext } from "../../context/UserContext";
import { ProfileValidation } from './ProfileValidation';
// ----initial---input--fields---state---
const initialInputState = {
    name: "",
    email: "",
    textArea: "",
    amount: "",
}
//--initial--options---
const initialOptionState = {
    board: [],
    subject: [],
    location: [],
}
function Profile() {
    // ----states---
    const [values, setValues] = useState(initialInputState);
    const [file, setFile] = useState();
    const [selectedTime, setSelectedTime] = useState(null);
    const [optionsName, setOptionsName] = React.useState(initialOptionState);
    const [profileErrors, setProfileErrors] = React.useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    //----handel---inputs-----
    const handelCreateProfileInputs = (e) => {
        const { name, value } = e.target;
        setValues(
            {
                ...values,
                [name]: value,
            }
        )
    }
    // ------handelUploadimage--------
    const handelImage = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
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

    // --set--textarea--msg--based---on--user--
    // ---get--the--user--from--the--context--
    const { user } = useUserContext();
    const placeholder =
        user === 'teacher'
            ?
            "Please write a short message introducing yourself, explaining how you can be a good teacher..."
            :
            " please write a short description...";


    // ------handelProfileSubmit--------
    const handelCreateProfileSubmit = (event) => {
        console.log("click1")
        event.preventDefault();
        // --validate--all-thae--fields---
        setProfileErrors(ProfileValidation(values, selectedTime, optionsName))
        setIsSubmit(true);
    }
    React.useEffect(() => {
        console.log("click2")
        if (isSubmit == true && Object.keys(profileErrors).length === 0) {
            console.log("Everything is fine !")
        } else {
            console.log(profileErrors)
        }
    }, [isSubmit, profileErrors])


    return (
        <Container sx={{ marginTop: "50px" }}>
            <Box>
                <form method='GET' onSubmit={handelCreateProfileSubmit}>

                    <label htmlFor='name'>Enter your name</label>
                    <input type="text" id="name" name="name" onChange={handelCreateProfileInputs} placeholder='john' value={values.name} />
                    {profileErrors?.name && <p className='errorMsg'>{profileErrors?.name}</p>}

                    <label htmlFor='email'>Enter your Email</label>
                    <input type="email" id="emai" name="email" onChange={handelCreateProfileInputs} placeholder="abc@gmail.com" value={values.email} />
                    {profileErrors?.email && <p className='errorMsg'>{profileErrors?.email}</p>}

                    <label htmlFor="img">Select image: *optional</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={handelImage} />
                    <img src={file} />

                    <label>Expected amount *optionaal</label>
                    <input type="number" name="amount" id="amount" onChange={handelCreateProfileInputs} placeholder='0.00' value={values.amount} />

                    <label>Select Board *optional</label>
                    <MultiplSelectChip options={boards} name="board" hadelMultiplSelectChip={hadelMultiplSelectChip} />
                    {profileErrors?.board && <p className='errorMsg'>{profileErrors?.board}</p>}

                    <label>Select Subjects</label>
                    <MultiplSelectChip options={subject} name="subject" hadelMultiplSelectChip={hadelMultiplSelectChip} />
                    {profileErrors?.subject && <p className='errorMsg'>{profileErrors?.subject}</p>}

                    <label>Select your preferabl time</label>
                    <BasicTimePicker setSelectedTime={setSelectedTime} />
                    {profileErrors?.time && <p className='errorMsg'>{profileErrors?.time}</p>}

                    <label>Select Location</label>
                    <MultiplSelectChip name="location" options={locations} hadelMultiplSelectChip={hadelMultiplSelectChip} />
                    {profileErrors?.location && <p className='errorMsg'>{profileErrors?.location}</p>}

                    <TextareaAutosize
                        name='textArea' value={values.textArea}
                        onChange={handelCreateProfileInputs}
                        placeholder={placeholder}
                        style={{ width: '80%', marginTop: '8px', height: "150px" }}

                    />
                    <Box mt={3}><Button type='submit'>Create</Button></Box>
                </form>
            </Box>
        </Container>
    )
}

export default Profile
