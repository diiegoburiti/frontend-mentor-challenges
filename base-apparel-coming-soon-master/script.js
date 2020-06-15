const form = document.querySelector('[data-form]');
const inputEmail = document.querySelector('[data-input]')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInput();
})

function checkInput() {
  const emailValue = inputEmail.value.trim()
  if (emailValue === '') {
    catchError(inputEmail, 'Field cannot be empty!');
  } else if (!validateEmail(emailValue)) {
    catchError(inputEmail, 'Please provide a valid email!');
  } else {
    setSuccess(inputEmail);
  }
}

function catchError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  const iconError = formControl.querySelector('.icon-error');
  small.innerText = message;
  small.style.visibility = 'visible';
  iconError.style.visibility = 'visible';
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  const iconError = formControl.querySelector('.icon-error');
  small.style.visibility = 'hidden';
  iconError.style.visibility = 'hidden';
}

function validateEmail(email) {
  return /[\w.-]+@[\w-]+\.[\w-.]+/gi.test(email);
}
