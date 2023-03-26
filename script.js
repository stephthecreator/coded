const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  
  if (name === '') {
    showError('name', 'Please enter your name');
  } else if (name.length < 2) {
    showError('name', 'Name must be at least 2 characters long');
  } else {
    hideError('name');
  }
  
  if (email === '') {
    showError('email', 'Please enter your email');
  } else if (!isValidEmail(email)) {
    showError('email', 'Please enter a valid email address');
  } else {
    hideError('email');
  }
  
  // If all fields are valid, submit the form
  if (form.checkValidity()) {
    submitForm(name, email);
  }
});

function showError(field, message) {
  const error = form.querySelector(`#${field}-error`);
  error.textContent = message;
  error.style.display = 'block';
}

function hideError(field) {
  const error = form.querySelector(`#${field}-error`);
  error.style.display = 'none';
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function submitForm(name, email) {
  // Send form data to server using fetch or XMLHttpRequest
}
