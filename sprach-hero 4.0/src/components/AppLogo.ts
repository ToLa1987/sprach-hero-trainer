import { logos } from "../data/logos.js";

export default function AppLogo(size = "medium") {
  const img = document.createElement("img");
  img.src = logos[size];
  img.className = "app-logo";
  return img;
}
