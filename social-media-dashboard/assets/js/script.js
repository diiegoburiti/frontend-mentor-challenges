const inputCheck = document.querySelector('input[name=theme]');
const body = document.querySelector('body');

inputCheck.addEventListener('change', isCheck)
function isCheck() {
  if (inputCheck.checked) {
    change()
    document.documentElement.setAttribute('data-theme', 'light');
    console.log('check');
  } else {
    change();
    document.documentElement.setAttribute('data-theme', 'dark');
    console.log('no-check');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  inputCheck.checked = true;
}) 

let change = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
}