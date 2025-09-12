const registerForm = document.getElementById("registerForm");
const fullName = document.getElementById("fullName");
const nameError = document.getElementById("nameError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

// NAME VALIDATION – only alphabets and spaces allowed
fullName.addEventListener("input", () => {
  const regex = /^[A-Za-z\s]+$/;
  if (!regex.test(fullName.value)) {
    nameError.textContent = "Only alphabets are allowed in name.";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
});

// EMAIL VALIDATION
email.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.textContent = "Enter a valid email address.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

// PASSWORD VALIDATION
password.addEventListener("input", () => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!regex.test(password.value)) {
    passwordError.textContent = "Password must have 8+ chars, upper, lower, number, special.";
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

// FINAL FORM SUBMIT
registerForm.addEventListener("submit", (e) => {
  if (
    nameError.style.display === "block" ||
    emailError.style.display === "block" ||
    passwordError.style.display === "block"
  ) {
    e.preventDefault();
  }
});




