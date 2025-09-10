// Contact form validation and feedback
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop actual form submit

  // Collect values
  const name = contactForm.querySelector("input[type='text']").value.trim();
  const email = contactForm.querySelector("input[type='email']").value.trim();
  const subject = contactForm.querySelector("input[type='text']:nth-of-type(2)").value.trim();
  const message = contactForm.querySelector("textarea").value.trim();

  // Basic validation
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (subject.length < 3) {
    alert("Please enter a subject.");
    return;
  }
  if (message.length < 10) {
    alert("Message must be at least 10 characters long.");
    return;
  }

  // Success message
  alert("Thank you for reaching out! We’ll get back to you soon 🐾");

  // Reset form
  contactForm.reset();
});
