export const sendToDB = async (formValues) => {
    const { name, email, password } = formValues;
   try {
        const response = await fetch("http://localhost:5000/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const responseData = await response.json();
        console.log(responseData)
        return responseData;
    } catch (error) {
        console.log("Error:", error.message);
    }
};
