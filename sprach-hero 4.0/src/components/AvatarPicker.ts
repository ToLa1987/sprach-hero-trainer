import { avatars } from "../data/avatars.js";
import { saveAvatar } from "../utils/avatarStorage.js";

export default function AvatarPicker() {
  const container = document.createElement("div");
  container.className = "avatar-picker";

  Object.entries(avatars).forEach(([key, src]) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "avatar-option";
    img.onclick = () => saveAvatar(key);
    container.appendChild(img);
  });

  return container;
}
