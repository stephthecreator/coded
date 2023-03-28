const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  let hasError = false;
  event.preventDefault();

  // Validate name field
  if (nameInput.value === '') {
    hasError = true;
    nameInput.classList.add('error');
    document.getElementById('name-error').textContent = 'Please enter your name';
  } else {
    nameInput.classList.remove('error');
    document.getElementById('name-error').textContent = '';
  }

  // Validate email field
  if (emailInput.value === '') {
    hasError = true;
    emailInput.classList.add('error');
    document.getElementById('email-error').textContent = 'Please enter your email';
  } else if (!validateEmail(emailInput.value)) {
    hasError = true;
    emailInput.classList.add('error');
    document.getElementById('email-error').textContent = 'Please enter a valid email';
  } else {
    emailInput.classList.remove('error');
    document.getElementById('email-error').textContent = '';
  }

  // Validate message field
  if (messageInput.value === '') {
    hasError = true;
    messageInput.classList.add('error');
    document.getElementById('message-error').textContent = 'Please enter a message';
  } else {
    messageInput.classList.remove('error');
    document.getElementById('message-error').textContent = '';
  }

  if (!hasError) {
    // Submit form if no errors
    form.submit();
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
 
