const LANG_KEY = 'tw_lang';

function applyLang(lang) {
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'en' ? '中' : 'EN';

  document.querySelectorAll('[data-zh]').forEach(el => {
    if (el.tagName === 'TITLE') {
      document.title = lang === 'en' ? el.dataset.en : el.dataset.zh;
    } else {
      el.textContent = lang === 'en' ? el.dataset.en : el.dataset.zh;
    }
  });

  document.dispatchEvent(new Event('langChanged'));
}

function toggleLang() {
  const current = localStorage.getItem(LANG_KEY) || 'zh';
  const next = current === 'zh' ? 'en' : 'zh';
  localStorage.setItem(LANG_KEY, next);
  applyLang(next);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(LANG_KEY) || 'zh';
  applyLang(saved);
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.addEventListener('click', toggleLang);
});
