// Screenshot frames (.shots) and the shared lightbox (#lightbox, rendered by
// base.njk on project pages). Diagrams in the prose (img.diagram) open in it too.
(function () {
  var box = document.getElementById('lightbox');
  var page = document.querySelector('.container');

  // --- Lightbox ----------------------------------------------------------
  // open(items, index, opener, onChange): items are { src, alt, title };
  // with several items, prev / next buttons and arrow keys browse them and
  // onChange(index) keeps the frame that opened the lightbox in sync.
  var lightbox = (function () {
    if (!box) return null;
    var img = box.querySelector('.lightbox__img');
    var caption = box.querySelector('.lightbox__caption');
    var close = box.querySelector('.lightbox__close');
    var prev = box.querySelector('[data-lightbox-prev]');
    var next = box.querySelector('[data-lightbox-next]');
    var items = [], i = 0, opener = null, onChange = null;

    function show(k) {
      i = (k + items.length) % items.length;
      img.src = items[i].src;
      img.alt = items[i].alt;
      caption.textContent = items.length > 1 ? (items[i].title || '') : '';
      if (onChange) onChange(i);
    }

    function hide() {
      if (box.hidden) return;
      box.hidden = true;
      if (page) page.inert = false;
      document.body.style.overflow = '';
      if (opener) opener.focus();
    }

    close.addEventListener('click', hide);
    prev.addEventListener('click', function () { show(i - 1); });
    next.addEventListener('click', function () { show(i + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) hide(); });

    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') { hide(); return; }
      if (items.length > 1 && e.key === 'ArrowLeft') { e.preventDefault(); show(i - 1); return; }
      if (items.length > 1 && e.key === 'ArrowRight') { e.preventDefault(); show(i + 1); return; }
      // Focus trap: Tab cycles through the dialog's visible buttons only
      if (e.key === 'Tab') {
        var focusables = [close, prev, next].filter(function (b) { return !b.hidden; });
        var at = focusables.indexOf(document.activeElement);
        var to = e.shiftKey ? at - 1 : at + 1;
        e.preventDefault();
        focusables[(to + focusables.length) % focusables.length].focus();
      }
    });

    return {
      open: function (list, index, from, change) {
        items = list; opener = from; onChange = change || null;
        prev.hidden = next.hidden = items.length < 2;
        show(index);
        box.hidden = false;
        if (page) page.inert = true;        // background unreachable while open
        document.body.style.overflow = 'hidden';
        close.focus();
      }
    };
  })();

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

    if (zoom && lightbox) {
      zoom.hidden = false;
      zoom.addEventListener('click', function () { lightbox.open(shots, i, zoom, show); });
    }
  });

  // --- Diagrams --------------------------------------------------------------
  if (lightbox) {
    document.querySelectorAll('.prose img.diagram').forEach(function (diagram) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'zoomable';
      btn.setAttribute('aria-label', box.getAttribute('data-zoom-label') + ' — ' + diagram.alt);
      diagram.parentNode.insertBefore(btn, diagram);
      btn.appendChild(diagram);
      btn.addEventListener('click', function () {
        lightbox.open([{ src: diagram.src, alt: diagram.alt }], 0, btn);
      });
    });
  }
})();
