// ── Navbar mobile toggle ──────────────────────────────────────
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
if (menu && menuLinks) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });
  menuLinks.querySelectorAll('.navbar__links').forEach(l =>
    l.addEventListener('click', () => {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    })
  );
}

// ── Slideshow ─────────────────────────────────────────────────
const slideshow = document.getElementById('slideshow');
if (slideshow) {
  const slides = slideshow.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slide-dots');
  const prevBtn = slideshow.querySelector('.slide__btn--prev');
  const nextBtn = slideshow.querySelector('.slide__btn--next');
  let current = 0;
  let timer;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'slide__dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i + 1));
    d.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(d);
  });

  function goTo(n) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Touch/swipe support
  let touchStartX = 0;
  slideshow.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  slideshow.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });

  resetTimer();
}
