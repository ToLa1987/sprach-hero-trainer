import { loadTheme, saveTheme } from "../logic/theme.js";

export default function ThemeToggle() {
  const btn = document.createElement("button");
  btn.className = "btn-secondary";

  let theme = loadTheme();
  document.documentElement.setAttribute("data-theme", theme);

  btn.textContent = theme === "light" ? "Dark Mode" : "Light Mode";

  btn.onclick = () => {
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    saveTheme(theme);
    btn.textContent = theme === "light" ? "Dark Mode" : "Light Mode";
  };

  return btn;
}
