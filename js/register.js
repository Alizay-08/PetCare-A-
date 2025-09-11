const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

emailInput.addEventListener('input', () => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  emailError.style.display = valid ? 'none' : 'block';
});

passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;
  const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(val);
  passwordError.style.display = valid ? 'none' : 'block';
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(passwordInput.value);

  emailError.style.display = emailValid ? 'none' : 'block';
  passwordError.style.display = passwordValid ? 'none' : 'block';

  if(emailValid && passwordValid){
    alert("Login successful!"); // replace with backend
    loginForm.reset();
  }
});
