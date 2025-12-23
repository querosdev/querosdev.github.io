(function () {
  const items = Array.from(document.querySelectorAll('.nav-item'));
  const sections = Array.from(document.querySelectorAll('.section'));
  const contentPath = document.getElementById('contentPath');

  const map = new Map(sections.map(s => [s.dataset.section, s]));
  const titleMap = new Map([
    ['about',   { file: 'about.md',    cmd: 'cat' }],
    ['projects',{ file: 'projects.md', cmd: 'ls'  }],
    ['skills',  { file: 'skills.md',   cmd: 'cat' }],
    ['contact', { file: 'contact.md',  cmd: 'cat' }],
  ]);

  function setActive(key, pushHash = true) {
    if (!map.has(key)) key = 'about';

    items.forEach(b => b.classList.toggle('active', b.dataset.target === key));
    items.forEach(b => {
      if (b.dataset.target === key) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });

    sections.forEach(s => s.classList.toggle('active', s.dataset.section === key));

    const t = titleMap.get(key) || titleMap.get('about');
    if (contentPath) {
      contentPath.innerHTML =
        '<span class="prompt">nikodem@dev</span>:<span class="file">~/portfolio</span>$ ' +
        (t.cmd || 'cat') + ' <span class="file">' + (t.file || 'about.md') + '</span>';
    }

    if (pushHash) history.replaceState(null, '', '#' + key);
  }

  items.forEach(btn => btn.addEventListener('click', () => setActive(btn.dataset.target, true)));

  const initial = (location.hash || '').replace('#','').trim();
  setActive(initial || 'about', false);

  // Copy email button
  const copyBtn = document.getElementById('copyEmail');
  const emailText = document.getElementById('emailText');

  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', async () => {
      const email = (emailText.textContent || '').trim();
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'Skopiowano';
        setTimeout(() => copyBtn.textContent = 'Kopiuj e-mail', 1200);
      } catch {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = 'Skopiowano';
        setTimeout(() => copyBtn.textContent = 'Kopiuj e-mail', 1200);
      }
    });
  }

  // Keyboard navigation in menu
  const nav = document.querySelector('.nav-list');
  if (nav) {
    nav.addEventListener('keydown', (e) => {
      if (!['ArrowUp','ArrowDown','Home','End'].includes(e.key)) return;
      const focusables = items;
      const idx = focusables.indexOf(document.activeElement);

      let next = idx;
      if (e.key === 'ArrowUp') next = Math.max(0, idx - 1);
      if (e.key === 'ArrowDown') next = Math.min(focusables.length - 1, idx + 1);
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = focusables.length - 1;

      if (next !== idx) {
        e.preventDefault();
        focusables[next].focus();
      }
    });
  }

  // =========================
  // Boot / loader (first visit)
  // =========================
  const boot = document.getElementById('boot');
  const bootBar = document.getElementById('bootBar');
  const bootLog = document.getElementById('bootLog');

  function log(line) {
    if (!bootLog) return;
    const div = document.createElement('div');
    div.innerHTML = line;
    bootLog.appendChild(div);
    bootLog.scrollTop = bootLog.scrollHeight;
  }

  function showBootIfFirstTime() {
    if (!boot || !bootBar) return;

    // only first time per browser (you can change to sessionStorage if preferred)
    const key = 'portfolio_boot_seen';
    const seen = localStorage.getItem(key) === '1';
    if (seen) return;

    localStorage.setItem(key, '1');

    boot.classList.add('active');
    boot.setAttribute('aria-hidden', 'false');

    const steps = [
      { p: 10, t: '<span class="p">boot</span> :: initializing ui shell...' },
      { p: 28, t: '<span class="p">boot</span> :: loading sections (about/projects/skills/contact)' },
      { p: 46, t: '<span class="p">boot</span> :: checking security defaults (csrf/sessions)' },
      { p: 66, t: '<span class="p">boot</span> :: warming cache <span class="dim">(fonts/layout)</span>' },
      { p: 82, t: '<span class="p">boot</span> :: preparing navigation handlers' },
      { p: 100, t: '<span class="p">boot</span> :: done — welcome</span>' },
    ];

    let i = 0;
    bootBar.style.width = '0%';
    log('<span class="p">nikodem@dev</span> <span class="dim">starting…</span>');

    const tick = () => {
      if (i >= steps.length) {
        setTimeout(() => {
          boot.classList.add('fadeout');
          setTimeout(() => {
            boot.classList.remove('active', 'fadeout');
            boot.setAttribute('aria-hidden', 'true');
          }, 420);
        }, 250);
        return;
      }

      const s = steps[i++];
      bootBar.style.width = s.p + '%';
      log(s.t);
      const jitter = 140 + Math.floor(Math.random() * 220);
      setTimeout(tick, jitter);
    };

    // Start after content is ready
    setTimeout(tick, 220);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBootIfFirstTime, { once: true });
  } else {
    showBootIfFirstTime();
  }
})();