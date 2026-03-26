const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

ScrollReveal().reveal('.hero', { delay: 200, distance: '25px', origin: 'bottom' });
ScrollReveal().reveal('#about', { delay: 300, distance: '20px', origin: 'bottom' });
ScrollReveal().reveal('#skills', { delay: 300, distance: '20px', origin: 'bottom' });
ScrollReveal().reveal('#projects', { delay: 300, distance: '20px', origin: 'bottom' });
ScrollReveal().reveal('#videos', { delay: 300, distance: '20px', origin: 'bottom' });
ScrollReveal().reveal('#contact', { delay: 300, distance: '20px', origin: 'bottom' });
