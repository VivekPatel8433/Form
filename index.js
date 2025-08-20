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
        message.textContent = "Invalid Credentials"; 
    }

    if(password !== confirmPassword) {
        message.textContent = "Password Does Not Match";
    }

})