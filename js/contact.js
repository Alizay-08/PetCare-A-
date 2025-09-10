// Contact form validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Explicitly select by placeholder text
  const name = contactForm.querySelector("input[placeholder='Your Name']").value.trim();
  const email = contactForm.querySelector("input[placeholder='Your Email']").value.trim();
  const subject = contactForm.querySelector("input[placeholder='Subject']").value.trim();
  const message = contactForm.querySelector("textarea[placeholder='Your Message']").value.trim();

  // Regex patterns
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectRegex = /^[A-Za-z0-9 .,!?-]+$/;
  const messageRegex = /^[A-Za-z0-9 .,!?()'\-]+$/;

  // Validation checks one by one
  if (!nameRegex.test(name)) {
    alert("❌ Name can only contain letters and spaces.");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }
  if (!subjectRegex.test(subject)) {
    alert("❌ Subject cannot contain special characters.");
    return;
  }
  if (!messageRegex.test(message) || message.length < 10) {
    alert("❌ Message must be at least 10 characters and should not include special characters.");
    return;
  }

  // Success
  alert("✅ Thank you for contacting us! We’ll get back to you soon 🐾");
  contactForm.reset();
});
