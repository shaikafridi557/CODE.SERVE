document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
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

  // Animate service cards on scroll
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Animate the icon pulse
          const iconPulse = entry.target.querySelector('.icon-pulse');
          if (iconPulse) {
            setTimeout(() => {
              iconPulse.style.opacity = '0.7';
            }, index * 100);
          }
        }
      });
    }, { threshold: 0.1 });
    
    serviceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `all 0.5s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }

  // Process timeline animation
  const processItems = document.querySelectorAll('.process-item');
  if (processItems.length > 0) {
    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
          
          // Animate the icon
          const icon = entry.target.querySelector('.process-icon');
          if (icon) {
            icon.style.transform = 'scale(1)';
            icon.style.opacity = '1';
          }
        }
      });
    }, { threshold: 0.5 });
    
    processItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.9)';
      item.style.transition = `all 0.5s ease ${index * 0.2}s`;
      
      const icon = item.querySelector('.process-icon');
      if (icon) {
        icon.style.transform = 'scale(0)';
        icon.style.opacity = '0';
        icon.style.transition = `all 0.5s ease ${index * 0.2 + 0.2}s`;
      }
      
      processObserver.observe(item);
    });
  }

  // Scroll reveal animation for sections
  const sections = document.querySelectorAll('.services-section, .process-section');
  if (sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'all 0.6s ease-out';
      sectionObserver.observe(section);
    });
  }
});