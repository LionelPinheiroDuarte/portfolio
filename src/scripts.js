const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach((item) => item.classList.add('animation'));

// Dark mode toggle
const html = document.documentElement;
const btn = document.getElementById('theme-toggle');

const labels = {
  fr: { toDark: 'Passer en mode sombre', toLight: 'Passer en mode clair' },
  en: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' }
};
const lang = html.lang || 'en';
const t = labels[lang] || labels.en;

const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
const initial = saved || (systemDark() ? 'dark' : 'light');

applyTheme(initial);

btn.addEventListener('click', () => {
  const next = html.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

function applyTheme(theme) {
  html.classList.remove('dark', 'light');
  html.classList.add(theme);
  btn.textContent = theme === 'dark' ? '☀' : '☾';
  btn.setAttribute('aria-label', theme === 'dark' ? t.toLight : t.toDark);
  btn.setAttribute('aria-pressed', String(theme === 'dark'));
}
