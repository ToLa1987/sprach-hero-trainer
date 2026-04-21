import AppLogo from "../components/AppLogo.js";
import ThemeToggle from "../components/ThemeToggle.js";
import { loadAvatar } from "../utils/avatarStorage.js";
import { avatars } from "../data/avatars.js";
import { loadXP, getLevel } from "../logic/xpSystem.js";
import { loadStats } from "../logic/statsSystem.js";

export default function Dashboard() {
  const root = document.createElement("div");
  root.className = "dashboard";

  root.appendChild(ThemeToggle());
  root.appendChild(AppLogo("small"));

  const avatar = document.createElement("img");
  avatar.src = avatars[loadAvatar()];
  avatar.className = "dashboard-avatar";
  root.appendChild(avatar);

  const xp = loadXP();
  const level = getLevel(xp);
  const stats = loadStats();

  root.innerHTML += `
    <h2>Willkommen zurück!</h2>
    <div class="stats">
      <div class="stat">XP: ${xp}</div>
      <div class="stat">Level: ${level}</div>
      <div class="stat">Fehlerquote: ${
        stats.wrong + stats.correct === 0
          ? 0
          : Math.round((stats.wrong / (stats.correct + stats.wrong)) * 100)
      }%</div>
      <div class="stat">Streak: ${stats.streak} Tage</div>
    </div>
    <div class="progress">
      <div class="progress-label">Tagesziel: ${stats.dailyProgress}/20 Wörter</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${(stats.dailyProgress / 20) * 100}%"></div></div>
    </div>
    <div class="actions">
      <button class="btn-primary" onclick="location='#/trainer'">Vokabel‑Trainer</button>
      <button class="btn-secondary" onclick="location='#/story'">Story‑Modus</button>
      <button class="btn-secondary" onclick="location='#/import'">CSV‑Import</button>
    </div>
  `;

  return root;
}
