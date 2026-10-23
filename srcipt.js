
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll("a");

// Mobile menu open and close
menuBtn.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a section link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Reveal sections when scrolling
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.08 }
);

sections.forEach((section) => {
  observer.observe(section);
});
