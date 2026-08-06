/* ==========================================================================
   ATELIER BESPOKE — ANIMATION ENGINE
   Handles GSAP ScrollTrigger reveals and fallback observer animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // IntersectionObserver for Fade-Up and Gallery Reveal Elements
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .gallery-reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // Animated Counter Logic
  const counters = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.innerText = target.toLocaleString() + '+';
            clearInterval(timer);
          } else {
            counter.innerText = Math.ceil(current).toLocaleString() + '+';
          }
        }, stepTime);

        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));

  // GSAP Smooth Hero Reveal (If GSAP script loaded)
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-content h1', {
      duration: 1.2,
      y: 40,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from('.hero-content p', {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.4
    });

    gsap.from('.hero-content .btn-group-hero', {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.6
    });
  }
});
