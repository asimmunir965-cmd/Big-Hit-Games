
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
}
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('form[data-mailto]').forEach(form=>{
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = encodeURIComponent(fd.get('name') || '');
    const email = encodeURIComponent(fd.get('email') || '');
    const message = encodeURIComponent(fd.get('message') || '');
    const subject = encodeURIComponent('Website inquiry from ' + (fd.get('name') || 'Visitor'));
    const body = encodeURIComponent(
      `Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\nMessage:\n${decodeURIComponent(message)}`
    );
    window.location.href = `mailto:contact@bighitgames.site?subject=${subject}&body=${body}`;
  });
});
