document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle (unchanged)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');

  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNavMenu.classList.toggle('active');
      document.body.style.overflow = mobileNavMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.mobile-nav-menu .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNavMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Initialize EmailJS with PUBLIC KEY (Updated)
  emailjs.init('C3tQVWJwKdF1rKu7n'); // Replace with your REAL public key

  // Form submission
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.querySelector('.success-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';
      
      // Send email using EmailJS (with your actual service/template IDs)
      emailjs.sendForm('service_982ta77', 'template_198dtqn', this)
        .then(() => {
          successMessage.classList.add('active');
          contactForm.reset();
          
          setTimeout(() => {
            successMessage.classList.remove('active');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span><div class="submit-icon"><i class="fas fa-paper-plane"></i></div>';
          }, 5000);
        }, (error) => {
          alert('Oops! Something went wrong. Please try again later.');
          console.error('EmailJS Error:', error);
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message</span><div class="submit-icon"><i class="fas fa-paper-plane"></i></div>';
        });
    });
  }

  // Rest of your animations (unchanged)
  const formGroups = document.querySelectorAll('.form-group');
  if (formGroups.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    formGroups.forEach((group, index) => {
      group.style.opacity = '0';
      group.style.transform = 'translateY(20px)';
      group.style.transition = `all 0.5s ease ${index * 0.1}s`;
      observer.observe(group);
    });
  }

  const infoCards = document.querySelectorAll('.info-card');
  infoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const iconWave = card.querySelector('.icon-wave');
      iconWave.style.animation = 'wave 2s infinite';
    });
  });
});