// script.js
(function() {
  'use strict';

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.textContent = isOpen ? '✕' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
      });
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Intersection Observer for fade-in
  const sections = document.querySelectorAll('.section');
  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.08 });
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
      observer.observe(section);
    });
    const hero = document.querySelector('.hero');
    if (hero) { hero.style.opacity = '1'; hero.style.transform = 'translateY(0)'; }
  } else {
    sections.forEach(section => { section.style.opacity = '1'; section.style.transform = 'translateY(0)'; });
  }
})();