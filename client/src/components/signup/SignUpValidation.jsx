


export const checkValidation = (formValues) => {
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