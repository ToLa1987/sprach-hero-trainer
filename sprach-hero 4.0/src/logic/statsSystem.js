export function loadStats() {
  return JSON.parse(localStorage.getItem("stats") || JSON.stringify({
    correct: 0,
    wrong: 0,
    streak: 0,
    lastSession: null,
    dailyProgress: 0
  }));
}

export function saveStats(stats) {
  localStorage.setItem("stats", JSON.stringify(stats));
}

export function updateStats(correct) {
  const stats = loadStats();

  if (correct) stats.correct++;
  else stats.wrong++;

  if (correct) stats.dailyProgress++;

  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (stats.lastSession !== today) {
    stats.streak = stats.lastSession === yesterday ? stats.streak + 1 : 1;
  }

  stats.lastSession = today;

  saveStats(stats);
}
