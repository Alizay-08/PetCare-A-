// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
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


