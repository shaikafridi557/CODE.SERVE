// Typewriter Effect
const roles = [
  "Web Apps", 
  "UI/UX", 
  "Frontend", 
  "Backend", 
  "Full-Stack"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

const typeWriter = () => {
  const currentRole = roles[roleIndex];
  const displayText = isDeleting 
    ? currentRole.substring(0, charIndex - 1)
    : currentRole.substring(0, charIndex + 1);
  
  document.getElementById("dynamic-role").textContent = displayText;
  
  if (!isDeleting && displayText === currentRole) {
    isDeleting = true;
    typingSpeed = 1000; // Pause at end
  } else if (isDeleting && displayText === "") {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 200;
  } else {
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    typingSpeed = isDeleting ? 50 : 150;
  }
  
  setTimeout(typeWriter, typingSpeed);
};

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');

  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNavMenu.classList.toggle('active');
    
    // Prevent scrolling when mobile menu is open
    if (mobileNavMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.mobile-nav-menu .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileNavMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Typing animation for dynamic role
  const dynamicRole = document.getElementById('dynamic-role');
  const roles = ["Web Applications", "Mobile Apps", "User Experiences", "Digital Solutions"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isEnd = false;

  function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      dynamicRole.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      dynamicRole.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isEnd = true;
      isDeleting = true;
      setTimeout(typeRole, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    } else {
      const typingSpeed = isDeleting ? 100 : 150;
      setTimeout(typeRole, typingSpeed);
    }
  }

  // Start typing animation after a short delay
  setTimeout(typeRole, 1000);
});