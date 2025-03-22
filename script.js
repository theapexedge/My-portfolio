// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjust for fixed header height
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form Handler (Demo - Customize as needed)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Replace this with your own form handling logic or API call
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});
