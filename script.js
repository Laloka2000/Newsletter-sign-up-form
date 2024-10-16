const form = document.getElementById('subscriptionForm');
const successMessage = document.getElementById('successMessage');
const dismissButton = document.getElementById('dismissButton');
const emailInput = document.getElementById('email');
const displayEmail = document.getElementById('displayEmail');
const errorMessage = document.getElementById('errorMessage');
const mainContent = document.getElementById('mainContent');
const main = document.getElementById('main');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = emailInput.value;

  if (!emailValue) {
    showError("Enter an email address.");
  }
  else if (!emailPattern.test(emailValue)) {
    showError('Please provide a valid email address.');
    emailInput.style.backgroundColor = '#FB6767';
    if(emailInput.value === ""){
      emailInput.style.backgroundColor = '';
    }
  } else {
    displayEmail.textContent = emailValue;
    mainContent.style.display = 'none';
    successMessage.style.display = 'block';
    main.style.display = 'none';
  }
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

emailInput.addEventListener('input', function () {
  errorMessage.style.display = 'none';
});

dismissButton.addEventListener('click', function () {
  successMessage.style.display = 'none';
  
  if(successMessage){
      mainContent.style.display = "";
      form.reset();
  }
});
