document.getElementById('contactForm') && document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg = document.getElementById('formMsg');
  
  if(!name || !email || !message){ 
    msg.textContent = 'Please fill all required fields.'; 
    msg.className = 'muted error';
    return; 
  }
  
  // Show a simple success message
  let successMsg = `Thanks ${name}! Your message has been received. I'll get back to you as soon as possible!`;
  
  msg.textContent = successMsg;
  msg.className = 'muted success';
  
  // Reset form after 5 seconds
  setTimeout(()=>{ 
    msg.textContent=''; 
    msg.className = 'muted';
    document.getElementById('contactForm').reset(); 
  }, 5000);
});

// Add focus effects to form inputs
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
  });
});

// Scroll animations - Fixed version
document.addEventListener('DOMContentLoaded', function() {
  // Add scroll animation to elements
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, .skills-grid > div, .project, .hero h1, .hero p, .cta-row');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.animationPlayState = 'running';
      }
    });
  };
  
  // Initial check with delay to prevent flickering
  setTimeout(() => {
    animateOnScroll();
  }, 100);
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
});

// Reveal animations for elements when they come into view - Fixed version
document.addEventListener('DOMContentLoaded', function() {
  // Ensure all elements start visible
  const elements = document.querySelectorAll('.card, .skills-grid > div, .project');
  elements.forEach(el => {
    el.classList.add('animated');
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
  
  // Set up intersection observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  // Observe elements
  document.querySelectorAll('.card, .skills-grid > div, .project').forEach(el => {
    // Only observe if not already animated
    if (!el.classList.contains('animated')) {
      observer.observe(el);
    }
  });
});
