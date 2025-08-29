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
        message.style.color = "red";
        return;
    }

    if(password !== confirmPassword) {
        message.textContent = "Password Does Not Match";
        message.style.color = "red";
        return;
    } 
        message.textContent = "";

    try { 
        const response = await fetch("https://form-m9wq.onrender.com/api/auth/register", {
            method: "POST", 
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify({firstName,lastName,dateOfBirth,email,password})
        });
        
        const data = await response.json();
        console.log("Server Response", data);

        if(response.ok) {
            message.textContent = "Registration Successful, You Can Now Login! ";
        } else {
            message.textContent = "User Already Exists!"; 
        }
     } catch(err) {
        console.error("Server error", err);
        }
});