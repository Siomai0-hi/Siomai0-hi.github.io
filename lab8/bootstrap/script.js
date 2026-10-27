const root = document.documentElement;
const themeButton = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("lab8-bootstrap-theme");
function setTheme(theme) {
  root.setAttribute("data-bs-theme", theme);
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  themeButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  localStorage.setItem("lab8-bootstrap-theme", theme);
}
setTheme(savedTheme || "light");
themeButton.addEventListener("click", () => setTheme(root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark"));
document.querySelectorAll(".needs-validation").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) { event.stopPropagation(); form.classList.add("was-validated"); return; }
    form.querySelector(".form-status").textContent = "Амжилттай илгээгдлээ.";
    form.reset();
    form.classList.remove("was-validated");
  });
});
