/* ==========================================================================
   ATELIER BESPOKE — MAIN APPLICATION LOGIC
   Handles interactive sliders, filterable galleries, multi-step appointment UI,
   and interactive widgets across the template
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Before / After Alteration Slider Logic
  const baContainer = document.querySelector('.ba-container');
  if (baContainer) {
    const handle = baContainer.querySelector('.ba-slider-handle');
    const afterLayer = baContainer.querySelector('.ba-after-layer');
    let isDragging = false;

    const setSliderPosition = (x) => {
      const rect = baContainer.getBoundingClientRect();
      let offsetX = x - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;
      const percentage = (offsetX / rect.width) * 100;
      afterLayer.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };

    const startDrag = () => { isDragging = true; };
    const stopDrag = () => { isDragging = false; };

    handle.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    // Touch support for mobile devices
    handle.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.touches[0].clientX);
    });
  }

  // 2. Fabric Collection Filter Logic
  const filterBtns = document.querySelectorAll('.fabric-filter-btn');
  const fabricItems = document.querySelectorAll('.fabric-item');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active', 'btn-tailor-primary'));
        filterBtns.forEach(b => b.classList.add('btn-tailor-outline'));

        btn.classList.add('active', 'btn-tailor-primary');
        btn.classList.remove('btn-tailor-outline');

        const filter = btn.getAttribute('data-filter');

        fabricItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  // 3. Appointment Form Multi-Step & Interactive Calculator
  const appointmentForm = document.getElementById('appointmentBookingForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('appointmentSuccessAlert');
      if (alertBox) {
        alertBox.classList.remove('d-none');
        alertBox.scrollIntoView({ behavior: 'smooth' });
        appointmentForm.reset();
      }
    });
  }

  // 4. Turnaround & Cost Estimation Helper (UI Only)
  const calcGarment = document.getElementById('calcGarmentSelect');
  const calcSpeed = document.getElementById('calcSpeedSelect');
  const calcOutputPrice = document.getElementById('calcPriceDisplay');
  const calcOutputDays = document.getElementById('calcDaysDisplay');

  function updateEstimate() {
    if (!calcGarment || !calcSpeed || !calcOutputPrice || !calcOutputDays) return;
    const basePrice = parseInt(calcGarment.value) || 350;
    const speedMultiplier = parseFloat(calcSpeed.value) || 1.0;
    const daysBase = parseInt(calcGarment.options[calcGarment.selectedIndex].dataset.days) || 10;

    const finalPrice = Math.round(basePrice * speedMultiplier);
    const finalDays = Math.max(2, Math.round(daysBase / speedMultiplier));

    calcOutputPrice.innerText = `$${finalPrice}`;
    calcOutputDays.innerText = `${finalDays} Business Days`;
  }

  if (calcGarment && calcSpeed) {
    calcGarment.addEventListener('change', updateEstimate);
    calcSpeed.addEventListener('change', updateEstimate);
    updateEstimate();
  }

  // 5. Contact & Newsletter Form State Placeholders
  const contactForm = document.getElementById('tailorContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out to Atelier Bespoke. Our master tailor will contact you within 24 hours.');
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to Sartorial Insights!');
      newsletterForm.reset();
    });
  }

  // 6. Back to Top Button Logic
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'backToTopBtn';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
  document.body.appendChild(backToTopBtn);

  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', toggleBackToTop);
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
