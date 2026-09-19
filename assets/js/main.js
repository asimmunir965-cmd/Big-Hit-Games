
const menuBtn = document.querySelector('[data-menu-btn]');
const navLinks = document.querySelector('[data-nav-links]');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const contactForm = document.querySelector('[data-contact-form]');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#name')?.value.trim() || '';
    const email = document.querySelector('#email')?.value.trim() || '';
    const subject = document.querySelector('#subject')?.value.trim() || 'Website inquiry';
    const message = document.querySelector('#message')?.value.trim() || '';
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:contact@bighitgames.site?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
