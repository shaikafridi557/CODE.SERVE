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

  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    
    let currentIndex = 0;
    const itemWidth = 100; // 100%
    const totalItems = items.length;
    
    function updateCarousel() {
      inner.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
    }
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    });
    
    // Auto-rotate every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, 5000);
  }

  // Animate solution cards on scroll
  const solutionCards = document.querySelectorAll('.solution-card');
  if (solutionCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    solutionCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `all 0.5s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }
});