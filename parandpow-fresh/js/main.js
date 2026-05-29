// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-nav-close');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  if (mobileClose) mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
}

// Email form handler
document.querySelectorAll('.email-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    const btn = form.querySelector('button');
    if (input && input.value.includes('@')) {
      btn.textContent = 'You\'re in!';
      btn.style.background = '#2d6a4f';
      input.value = '';
      setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
    }
  });
});

// Destination filter
const filterBtns = document.querySelectorAll('.filter-btn');
const destCards = document.querySelectorAll('[data-region]');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const region = btn.dataset.filter;
    destCards.forEach(card => {
      card.style.display = (region === 'all' || card.dataset.region === region) ? '' : 'none';
    });
  });
});

// Gear filter
const gearFilterBtns = document.querySelectorAll('.gear-filter-btn');
const gearCards = document.querySelectorAll('[data-sport]');
gearFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    gearFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const sport = btn.dataset.sport;
    gearCards.forEach(card => {
      card.style.display = (sport === 'all' || card.dataset.sport === sport) ? '' : 'none';
    });
  });
});
