export function loadXP() {
  return parseInt(localStorage.getItem("xp") || "0");
}

export function saveXP(xp) {
  localStorage.setItem("xp", xp);
}

export function addXP(amount) {
  const updated = loadXP() + amount;
  saveXP(updated);
  return updated;
}

export function getLevel(xp) {
  return Math.floor(Math.sqrt(xp / 50)) + 1;
}
