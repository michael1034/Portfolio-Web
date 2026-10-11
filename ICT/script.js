// 1. Footer year updates automatically
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 2. Highlight the nav link for the section currently on screen
const navLinks = document.querySelectorAll(".nav-links a");
const sections = [];

navLinks.forEach((link) => {
  const id = link.getAttribute("href");
  if (id && id.startsWith("#") && id.length > 1) {
    const section = document.querySelector(id);
    if (section) sections.push(section);
  }
});

function setActiveLink(id) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

// 3. Clear the highlight when scrolled back to the top
window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    navLinks.forEach((link) => link.classList.remove("active"));
  }
});