export function saveAvatar(key) {
  localStorage.setItem("selectedAvatar", key);
}

export function loadAvatar() {
  return localStorage.getItem("selectedAvatar") || "hero";
}
