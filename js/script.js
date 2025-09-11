// Toggle mobile menu
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// User dropdown click
const userDrop = document.getElementById('userDrop');
const userMenu = document.getElementById('userMenu');
userDrop.addEventListener('click', (e) => {
  e.preventDefault();
  userMenu.classList.toggle('show');
});

// Quick links dropdown click
const quickDrop = document.getElementById('quickDrop');
const quickMenu = document.getElementById('quickMenu');
quickDrop.addEventListener('click', (e) => {
  e.preventDefault();
  quickMenu.classList.toggle('show');
});

// Close dropdowns when clicking outside
window.addEventListener('click', (e) => {
  if (!userDrop.contains(e.target) && !userMenu.contains(e.target)) {
    userMenu.classList.remove('show');
  }
  if (!quickDrop.contains(e.target) && !quickMenu.contains(e.target)) {
    quickMenu.classList.remove('show');
  }
});


// Animate Quick Links Cards on scroll
const cards = document.querySelectorAll('.animate-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 }); // 30% visible

cards.forEach(card => observer.observe(card));


document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;
  let today = new Date().toISOString().split("T")[0];

  // Clear previous errors
  document.querySelectorAll(".error-msg").forEach(el => el.style.display = "none");
  document.querySelectorAll(".form-control").forEach(el => el.classList.remove("error"));

  let name = document.getElementById("name");
  if (!/^[A-Za-z\s]{3,}$/.test(name.value.trim())) {
    document.getElementById("nameError").style.display = "block";
    name.classList.add("error");
    isValid = false;
  }

  let email = document.getElementById("email");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    document.getElementById("emailError").style.display = "block";
    email.classList.add("error");
    isValid = false;
  }

  let phone = document.getElementById("phone");
  if (!/^\d{10,15}$/.test(phone.value.trim())) {
    document.getElementById("phoneError").style.display = "block";
    phone.classList.add("error");
    isValid = false;
  }

  let petType = document.getElementById("petType");
  if (petType.value === "") {
    document.getElementById("petTypeError").style.display = "block";
    petType.classList.add("error");
    isValid = false;
  }

  let date = document.getElementById("date");
  if (date.value < today) {
    document.getElementById("dateError").style.display = "block";
    date.classList.add("error");
    isValid = false;
  }

  let message = document.getElementById("message");
  if (message.value.trim().length > 500) {
    document.getElementById("messageError").style.display = "block";
    message.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    alert("✅ Appointment booked successfully!");
    this.reset();
  }
});