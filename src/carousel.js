(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lang = document.documentElement.lang || 'en';

  const i18n = {
    fr: { prev: 'Projet précédent', next: 'Projet suivant', close: 'Fermer', fullscreen: 'Agrandir : ' },
    en: { prev: 'Previous project', next: 'Next project', close: 'Close', fullscreen: 'Enlarge: ' }
  };
  const t = i18n[lang] || i18n.en;

  // ---- Carousel instances ----
  const instances = [];

  document.querySelectorAll('.carousel').forEach(function (carousel) {
    const track = carousel.querySelector('.carousel__track');
    const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
    const prevBtn = carousel.querySelector('.carousel__btn--prev');
    const nextBtn = carousel.querySelector('.carousel__btn--next');
    const dots = Array.from(carousel.querySelectorAll('.carousel__dot'));
    const announcer = carousel.querySelector('.carousel__announcer');
    const imgs = slides.map(function (s) { return s.querySelector('.carousel__img'); });

    if (slides.length === 0) return;

    let current = 0;

    function goTo(index) {
      index = ((index % slides.length) + slides.length) % slides.length;
      slides[current].setAttribute('aria-hidden', 'true');
      if (dots[current]) dots[current].removeAttribute('aria-current');
      current = index;
      slides[current].removeAttribute('aria-hidden');
      if (dots[current]) dots[current].setAttribute('aria-current', 'true');
      if (prefersReducedMotion) track.style.transition = 'none';
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      if (announcer) announcer.textContent = slides[current].getAttribute('aria-label') || '';
    }

    // Init
    slides.forEach(function (slide, i) {
      if (i !== 0) slide.setAttribute('aria-hidden', 'true');
    });
    if (dots[0]) dots[0].setAttribute('aria-current', 'true');

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    [prevBtn, nextBtn].filter(Boolean).forEach(function (btn) {
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
      });
    });

    instances.push({ imgs: imgs, goTo: goTo, getCurrent: function () { return current; }, length: slides.length });
  });

  // ---- Lightbox ----
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', lang === 'fr' ? 'Image en plein écran' : 'Full screen image');
  lightbox.hidden = true;

  const lbPrev = document.createElement('button');
  lbPrev.className = 'lightbox__btn lightbox__btn--prev';
  lbPrev.setAttribute('aria-label', t.prev);
  lbPrev.textContent = '←';

  const lbNext = document.createElement('button');
  lbNext.className = 'lightbox__btn lightbox__btn--next';
  lbNext.setAttribute('aria-label', t.next);
  lbNext.textContent = '→';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox__close';
  closeBtn.setAttribute('aria-label', t.close);
  closeBtn.textContent = '✕';

  const figure = document.createElement('figure');
  figure.className = 'lightbox__figure';

  const lightboxImg = document.createElement('img');
  lightboxImg.className = 'lightbox__img';
  lightboxImg.alt = '';

  const caption = document.createElement('figcaption');
  caption.className = 'lightbox__caption';

  figure.appendChild(lightboxImg);
  figure.appendChild(caption);

  lightbox.appendChild(closeBtn);
  lightbox.appendChild(lbPrev);
  lightbox.appendChild(figure);
  lightbox.appendChild(lbNext);
  document.body.appendChild(lightbox);

  let triggerEl = null;
  let activeInstance = null;

  function updateLightboxImg() {
    if (!activeInstance) return;
    const img = activeInstance.imgs[activeInstance.getCurrent()];
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    caption.textContent = img.alt;
    lbPrev.style.display = activeInstance.length > 1 ? '' : 'none';
    lbNext.style.display = activeInstance.length > 1 ? '' : 'none';
  }

  function openLightbox(img, instance) {
    triggerEl = img;
    activeInstance = instance;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    updateLightboxImg();
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
    activeInstance = null;
    if (triggerEl) triggerEl.focus();
    triggerEl = null;
  }

  // Wire images to lightbox
  instances.forEach(function (instance) {
    instance.imgs.forEach(function (img) {
      if (!img) return;
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', t.fullscreen + img.alt);
      img.addEventListener('click', function () { openLightbox(img, instance); });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img, instance); }
      });
    });
  });

  lbPrev.addEventListener('click', function () {
    if (!activeInstance) return;
    activeInstance.goTo(activeInstance.getCurrent() - 1);
    updateLightboxImg();
  });

  lbNext.addEventListener('click', function () {
    if (!activeInstance) return;
    activeInstance.goTo(activeInstance.getCurrent() + 1);
    updateLightboxImg();
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') { closeLightbox(); return; }
    if (e.key === 'ArrowLeft') { e.preventDefault(); lbPrev.click(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); lbNext.click(); }
  });

  // Focus trap
  lightbox.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    const focusable = Array.from(lightbox.querySelectorAll('button')).filter(function (b) {
      return b.style.display !== 'none';
    });
    if (focusable.length === 0) return;
    e.preventDefault();
    const idx = focusable.indexOf(document.activeElement);
    const next = e.shiftKey ? (idx - 1 + focusable.length) % focusable.length : (idx + 1) % focusable.length;
    focusable[next].focus();
  });
})();
