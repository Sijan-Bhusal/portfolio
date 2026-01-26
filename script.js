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

  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
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
    themeIcon.setAttribute("aria-label", label);
  }
  if (mobileThemeIcon) {
    mobileThemeIcon.textContent = iconText;
  }
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", initTheme);
