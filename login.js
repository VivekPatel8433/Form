document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const message = document.getElementById("alert");

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dateOfBirth = document.getElementById("dateOfBirth").value;
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
        const response = await fetch("https://form-m9wq.onrender.com/api/auth/login", {
            method: "POST", 
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({ firstName, lastName, dateOfBirth, email, password})
        })

        const data = await response.json();
        console.log("Server Response", data);

        if(response.ok) {
            window.location.href = "https://vivekpatel8433.github.io/Portfolio-V1/";
            message.textContent = data;
        } else {
             message.textContent = "User Already Exists!"; 
             message.style.color = "red";
        }
    } catch(error) {
        console.error("Server error", error);
        message.textContent = "Something went wrong. Try again later.";
        message.style.color = "red";
    }
})