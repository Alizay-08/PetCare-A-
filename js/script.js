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
}, { threshold: 0.3 }); 

cards.forEach(card => observer.observe(card));


