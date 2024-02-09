

export const ProfileValidation = (values, selectedTime, optionsName) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const { name, email, textArea } = values;
    const { board, location, subject } = optionsName;
    
    if (!name) errors.name = "name required!"
    else if (name.length < 3) errors.name = "name must be at least 3 characters long.";

    if (!email) errors.email = "email required!"
    else if (!emailRegex.test(email)) errors.email = "Invalid email address!";
    if (location.length === 0) errors.location = "location required!";
    if(!textArea) errors.textArea="Description required!"
    if (!selectedTime) errors.selectedTime = "time required!";

    if (board.length === 0) errors.board = "board required!";
    if (subject.length === 0) errors.subject = "subject required!";
   

    return errors;
}