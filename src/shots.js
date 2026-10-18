// Screenshot frames (.shots) and the shared lightbox (#lightbox, rendered by
// base.njk on project pages). Diagrams in the prose (img.diagram) open in it too.
(function () {
  var box = document.getElementById('lightbox');
  var boxImg = box && box.querySelector('.lightbox__img');
  var boxClose = box && box.querySelector('.lightbox__close');
  var page = document.querySelector('.container');
  var opener = null;

  // --- Lightbox ----------------------------------------------------------
  function openBox(src, alt, from) {
    if (!box) return;
    opener = from;
    boxImg.src = src;
    boxImg.alt = alt;
    box.hidden = false;
    if (page) page.inert = true;          // background unreachable while open
    document.body.style.overflow = 'hidden';
    boxClose.focus();
  }

  function closeBox() {
    if (!box || box.hidden) return;
    box.hidden = true;
    if (page) page.inert = false;
    document.body.style.overflow = '';
    if (opener) opener.focus();
  }

  if (box) {
    boxClose.addEventListener('click', closeBox);
    box.addEventListener('click', function (e) { if (e.target === box) closeBox(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') { closeBox(); return; }
      // Focus trap: the close button is the only control in the dialog
      if (e.key === 'Tab') { e.preventDefault(); boxClose.focus(); }
    });
  }

  // --- Screenshot frames ---------------------------------------------------
  document.querySelectorAll('.shots').forEach(function (el) {
    var shots;
    try { shots = JSON.parse(el.getAttribute('data-shots')); } catch (e) { return; }
    if (!shots || !shots.length) return;

    var img = el.querySelector('.shots__img');
    var title = el.querySelector('.shots__title');
    var count = el.querySelector('.shots__count');
    var url = el.querySelector('.shots__url');
    var zoom = el.querySelector('[data-shots-zoom]');
    var controls = el.querySelector('.shots__controls');
    var countFormat = el.getAttribute('data-count');
    var host = url.textContent;
    var i = 0;

    function show(k) {
      i = (k + shots.length) % shots.length;
      img.src = shots[i].src;
      img.alt = shots[i].alt;
      title.textContent = shots[i].title || shots[i].alt;
      url.textContent = shots[i].url ? shots[i].url.replace(/^https?:\/\//, '') : host;
      if (count) count.textContent = countFormat.replace('{current}', i + 1).replace('{total}', shots.length);
    }

    if (controls) {
      controls.hidden = false;
      var prev = controls.querySelector('[data-shots-prev]');
      var next = controls.querySelector('[data-shots-next]');
      prev.addEventListener('click', function () { show(i - 1); });
      next.addEventListener('click', function () { show(i + 1); });
      [prev, next].forEach(function (btn) {
        btn.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowLeft') { e.preventDefault(); show(i - 1); }
          if (e.key === 'ArrowRight') { e.preventDefault(); show(i + 1); }
        });
      });
      // Warm the cache so switching screenshots does not flash
      shots.slice(1).forEach(function (s) { new Image().src = s.src; });
    }

    if (zoom && box) {
      zoom.hidden = false;
      zoom.addEventListener('click', function () { openBox(shots[i].src, shots[i].alt, zoom); });
    }
  });

  // --- Diagrams --------------------------------------------------------------
  if (box) {
    document.querySelectorAll('.prose img.diagram').forEach(function (diagram) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'zoomable';
      btn.setAttribute('aria-label', box.getAttribute('data-zoom-label') + ' — ' + diagram.alt);
      diagram.parentNode.insertBefore(btn, diagram);
      btn.appendChild(diagram);
      btn.addEventListener('click', function () { openBox(diagram.src, diagram.alt, btn); });
    });
  }
})();
