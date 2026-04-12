const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const revealItems = document.querySelectorAll('.reveal');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open');
  });
}

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

const setActiveLink = () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields before sending.';
      return;
    }

    formMessage.textContent = `Thank you, ${name}. Your message has been captured. Connect backend/email handling next.`;
    contactForm.reset();
  });
}
