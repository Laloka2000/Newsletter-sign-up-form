// Form Elements
const form = document.getElementById('subscriptionForm');
const successMessage = document.getElementById('successMessage');
const dismissButton = document.getElementById('dismissButton');
const emailInput = document.getElementById('email');
const displayEmail = document.getElementById('displayEmail');
const errorMessage = document.getElementById('errorMessage');

// Email Validation Regex
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form Submission Handler
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = emailInput.value;

  // Check if email field is empty
  if (!emailValue) {
    showError('Email address cannot be empty.');
  }
  // Check if email is valid
  else if (!emailPattern.test(emailValue)) {
    showError('Please provide a valid email address.');
  } else {
    // Show Success Message
    displayEmail.textContent = emailValue;
    form.style.display = 'none';
    successMessage.style.display = 'block';
  }
});

// Error Display Function
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Hide error when user starts typing again
emailInput.addEventListener('input', function () {
  errorMessage.style.display = 'none';
});

// Dismiss Success Message
dismissButton.addEventListener('click', function () {
  successMessage.style.display = 'none';
  form.style.display = 'block';
  form.reset();
});
