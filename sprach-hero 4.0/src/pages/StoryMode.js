import { stories } from "../data/stories.js";
import { addXP } from "../logic/xpSystem.js";

export default function StoryMode() {
  const root = document.createElement("div");
  root.className = "story-mode";

  const story = stories[0];
  let index = 0;
  let input = "";

  function render() {
    const current = story.words[index];

    root.innerHTML = `
      <h2>${story.title}</h2>
      <p>Wort ${index + 1} von ${story.words.length}</p>
      <div class="card"><h3>${current.word}</h3></div>
      <input id="storyInput" placeholder="Übersetzung eingeben" value="${input}">
      <button class="btn-primary" id="nextBtn">Weiter</button>
    `;

    document.getElementById("storyInput").oninput = e => input = e.target.value;
    document.getElementById("nextBtn").onclick = check;
  }

  function check() {
    const current = story.words[index];
    const correct = input.trim().toLowerCase() === current.translation.toLowerCase();

    if (correct) addXP(15);

    input = "";
    if (index < story.words.length - 1) index++;
    else alert("Story abgeschlossen! 🎉");

    render();
  }

  render();
  return root;
}
