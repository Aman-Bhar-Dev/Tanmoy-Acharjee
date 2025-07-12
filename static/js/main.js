// 🍔 MOBILE NAV TOGGLE
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburger.classList.toggle("active");
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("show");
    hamburger.classList.remove("active");
  }
});

// 📈 EXPERIENCE TIMELINE SCROLL PROGRESS
window.addEventListener('scroll', () => {
  const timeline = document.querySelector('.timeline');
  const line = document.querySelector('.timeline-line');

  if (!timeline || !line) return;

  const scrollY = window.scrollY + window.innerHeight;
  const sectionTop = timeline.offsetTop;
  const sectionHeight = timeline.offsetHeight;

  const progress = Math.min(100, Math.max(0, ((scrollY - sectionTop) / sectionHeight) * 100));
  line.style.setProperty('--line-progress', `${progress}%`);
});

// ⬇️ TOGGLE RESEARCH PUBLICATIONS
window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-research');
  const hiddenSection = document.getElementById('more-research');

  if (toggleBtn && hiddenSection) {
    toggleBtn.addEventListener('click', () => {
      hiddenSection.classList.toggle('expanded');
      toggleBtn.classList.toggle('rotated');
    });
  }
});
// 🔝 Scroll-to-Top
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// 🌫 Animate background gradient on scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.body.style.backgroundPosition = `0 ${scrollY * 0.2}px`;
});
