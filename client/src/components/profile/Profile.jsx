import { useState } from 'react';
import "./profile.css"
import { Box, Button, Container, TextField, TextareaAutosize } from '@mui/material'
import MultiplSelectChip from './chip';
import { subject, boards } from './options';
import BasicTimePicker from './TimePicker';
import { locations } from './options';
function Profile() {
    const [board, setBoard] = useState('');
    const handleBoard = (event) => {
        setBoard(event.target.value);
    };
    // ------handelUploadimage--------
    const [file, setFile] = useState();
    const handelImage = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    // ------handelProfileSubmit--------
    const handelProfileSubmit=(event)=>{
        event.preventDefault();
    }
    return (
        <Container sx={{ marginTop: "50px" }}>
            <Box>
                <form method='GET' onSubmit={handelProfileSubmit}>
                    <label htmlFor='name'>Enter your name</label>
                    <input type="text" id="name" name="name" placeholder='john' />
                    <label htmlFor='email'>Enter your Email</label>
                    <input type="email" id="emai" l name="email" placeholder="abc@gmail.com" />
                    <label htmlFor="img">Select image: *optional</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={handelImage} />
                    <img src={file} />
                    <label>Select Board *optional</label>
                    <MultiplSelectChip options={boards} />
                    <label>Select Subjects</label>
                    <MultiplSelectChip options={subject} />
                    <label>Select your preferabl time</label>
                    <BasicTimePicker />
                    <label>Select Location</label>
                    <MultiplSelectChip options={locations} />
                    <TextareaAutosize
                        placeholder="Please write a short message introducing yourself, explaining how you can be a good teacher for their kids"
                        style={{ width: '80%', marginTop: '8px', height: "150px" }}

                    />
                   <Box mt={3}><Button >Create</Button></Box> 
                </form>
            </Box>
        </Container>
    )
}

export default Profile