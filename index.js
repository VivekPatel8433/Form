document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const message = document.getElementById("alert");

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dateOfBirth = document.getElementById("dateOfBirth").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if(!firstName || !lastName || !dateOfBirth || !email || !password || !confirmPassword) {
        message.textContent = "Please fill out all the required fields"; 
    }

    if(password !== confirmPassword) {
        message.textContent = "Password Does Not Match";
    } else {
        message.textContent = "";
    }

    try{
        const response = await fetch("https://form-m9wq.onrender.com", {
            method: "POST", 
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify(firstName,lastName,dateOfBirth,email,password)
        });
        
        const data = await response.json();
        console.log("Server Response", data);

        if(response.ok) {
            message.textContent = "Registration Successful, Welcome! ";
        } else {
            message.textContent = "Registration Failed, Please Try Again! "; 
        }
    }  catch(err) {
        console.error("Server error", err);
        }
});