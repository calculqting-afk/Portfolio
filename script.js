// =============================================
//  NAVBAR — highlight active link on scroll
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId     = section.getAttribute('id');
    const link          = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);

// =============================================
//  NAVBAR — solid background after scrolling
// =============================================
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 23, 42, 0.97)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.85)';
  }
});

// =============================================
//  SMOOTH SCROLL — close mobile nav on click
// =============================================
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =============================================
//  SCROLL REVEAL — fade-in cards on scroll
// =============================================
const revealElements = document.querySelectorAll(
  '.project-card, .about-card, .contact-card, .stat-item'
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// =============================================
//  TYPING EFFECT — hero subtitle
// =============================================
const titles = [
  'Front-End Developer',
  'Web Developer',
  
];

const titleEl = document.querySelector('.hero-title-gradient');

if (titleEl) {
  let titleIndex  = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      titleEl.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 60;
    } else {
      titleEl.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting  = true;
      typingSpeed = 1800; // pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting  = false;
      titleIndex  = (titleIndex + 1) % titles.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  // Small delay before starting
  setTimeout(typeEffect, 800);
}
// =============================================
//  NAVBAR — highlight active link on scroll
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId     = section.getAttribute('id');
    const link          = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);

// =============================================
//  NAVBAR — solid background after scrolling
// =============================================
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 23, 42, 0.97)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.85)';
  }
});

// =============================================
//  SMOOTH SCROLL — close mobile nav on click
// =============================================
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =============================================
//  SCROLL REVEAL — fade-in cards on scroll
// =============================================
const revealElements = document.querySelectorAll(
  '.project-card, .about-card, .contact-card, .stat-item'
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// =============================================
//  TYPING EFFECT — hero subtitle
// =============================================
const titles = [
  'Front-End Developer',
  'Web Developer',
  
];

const titleEl = document.querySelector('.hero-title-gradient');

if (titleEl) {
  let titleIndex  = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      titleEl.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 60;
    } else {
      titleEl.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting  = true;
      typingSpeed = 1800; // pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting  = false;
      titleIndex  = (titleIndex + 1) % titles.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  // Small delay before starting
  setTimeout(typeEffect, 800);
}