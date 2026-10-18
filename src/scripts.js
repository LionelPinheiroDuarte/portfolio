// Theme toggle. The saved choice is applied by an inline script in <head>
// before first paint; without one, the system preference applies (CSS only).
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  var labels = {
    fr: ['Passer en mode sombre', 'Passer en mode clair'],
    en: ['Switch to dark mode', 'Switch to light mode']
  };
  var t = labels[root.lang] || labels.en;

  function isDark() {
    if (root.classList.contains('dark')) return true;
    if (root.classList.contains('light')) return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function sync() {
    var dark = isDark();
    btn.setAttribute('aria-pressed', String(dark));
    btn.setAttribute('aria-label', dark ? t[1] : t[0]);
  }

  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.classList.remove('dark', 'light');
    root.classList.add(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', sync);
  sync();
})();
