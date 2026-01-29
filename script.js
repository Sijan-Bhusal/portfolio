// Toggle mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Theme toggle functionality
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");

  // Check for saved theme preference, system preference, or default to light
  let savedTheme = localStorage.getItem("theme");

  if (!savedTheme) {
    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    savedTheme = prefersDark ? "dark" : "light";
  }

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";
      if (!localStorage.getItem("theme")) {
        document.documentElement.setAttribute("data-theme", newTheme);
        updateThemeIcon(newTheme);
      }
    });
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("theme-icon");
  const mobileThemeIcon = document.querySelector(".theme-icon-mobile");
  const iconText = theme === "dark" ? "☀️" : "🌙";
  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  if (themeIcon) {
    themeIcon.textContent = iconText;
    document.getElementById("theme-toggle").setAttribute("aria-label", label);
  }
  if (mobileThemeIcon) {
    mobileThemeIcon.textContent = iconText;
  }
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", initTheme);

// Typewriter effect
const words = ["App", "Web"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 100 : 150;
  setTimeout(type, speed);
}

type();
