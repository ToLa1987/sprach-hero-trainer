import { getNextWord, updateWord } from "../logic/leitner.js";
import { addXP } from "../logic/xpSystem.js";
import { updateStats } from "../logic/statsSystem.js";

export default function Trainer() {
  const root = document.createElement("div");
  root.className = "trainer";

  const stored = localStorage.getItem("words");
  const words = stored ? JSON.parse(stored) : [
    { word: "apple", translation: "Apfel", box: 1 },
    { word: "house", translation: "Haus", box: 1 },
    { word: "car", translation: "Auto", box: 1 }
  ];

  let input = "";
  let feedback = null;

  function render() {
    root.innerHTML = "";
    const current = getNextWord(words);

    const card = document.createElement("div");
    card.className = `card ${feedback || ""}`;
    card.innerHTML = `<h3>${current.word}</h3>`;
    root.appendChild(card);

    const field = document.createElement("input");
    field.placeholder = "Übersetzung eingeben";
    field.value = input;
    field.oninput = e => input = e.target.value;
    root.appendChild(field);

    const btn = document.createElement("button");
    btn.className = "btn-primary";
    btn.textContent = "Prüfen";
    btn.onclick = () => check(current);
    root.appendChild(btn);
  }

  function check(current) {
    const correct = input.trim().toLowerCase() === current.translation.toLowerCase();
    feedback = correct ? "correct" : "wrong";

    const updated = words.map(w =>
      w.word === current.word ? updateWord(w, correct) : w
    );

    localStorage.setItem("words", JSON.stringify(updated));

    updateStats(correct);
    if (correct) addXP(10);

    setTimeout(() => {
      feedback = null;
      input = "";
      render();
    }, 1000);

    render();
  }

  render();
  return root;
}
