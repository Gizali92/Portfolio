(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (current === 'dark') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', current);
    }
    localStorage.setItem('theme', current);
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  const roles = [
    'DevOps Engineer',
    'Kubernetes & Ansible',
    'CI/CD Pipeline Builder',
    'Infrastructure Automation',
    'Jira Cloud Specialist'
  ];
  const typedEl = document.getElementById('typed');
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const word = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 40 : 70);
  }
  typeLoop();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.getElementById('year').textContent = new Date().getFullYear();
})();
