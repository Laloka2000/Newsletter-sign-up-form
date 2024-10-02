let invalidForm = document.getElementById("invalid-form");
let form = document.getElementById("form");
let email = document.getElementById("email");
let successMessage = document.getElementById("message");
let submitButton = document.getElementById("submit-btn");

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEmail(email.value)) {
        successMessage.style.display = "block";
        form.style.display = "none";
    } else {
        invalidForm.style.display = "block";
    }
})

