const root = document.documentElement;
const themeButton = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("lab8-tailwind-theme");
function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  themeButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  localStorage.setItem("lab8-tailwind-theme", theme);
}
setTheme(savedTheme || "light");
themeButton.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
const form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  document.querySelector('[data-error="name"]').classList.toggle("hidden", Boolean(name.value.trim()));
  document.querySelector('[data-error="email"]').classList.toggle("hidden", validEmail);
  if (!name.value.trim() || !validEmail) return;
  document.querySelector("#form-status").textContent = "Амжилттай илгээгдлээ.";
  form.reset();
});
