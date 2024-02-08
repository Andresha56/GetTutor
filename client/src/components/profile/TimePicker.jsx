import React,{useState} from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicTimePicker({setSelectedTime}) {

  // Handler function for time change
  const handleTimeChange = (newTime) => {  
    console.log('Selected Time:', newTime);
    const hours = newTime?.format('HH');
    const minutes = newTime?.format('mm');
    const amPm = newTime?.format('A');
    setSelectedTime(`${hours}:${minutes} ${amPm}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
        onChange={handleTimeChange}
      sx={{
        border:"1px solid white",
        borderRadius:"5px",
        '& input': {
          color: 'white',
        },
      }}  
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}