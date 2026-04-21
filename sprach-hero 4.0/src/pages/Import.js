import { parseCSV } from "../logic/csvImport.js";

export default function ImportPage() {
  const root = document.createElement("div");
  root.className = "import-page";

  root.innerHTML = `
    <h2>Vokabeln importieren (CSV)</h2>
    <input type="file" id="csvFile" accept=".csv,text/csv">
  `;

  document.getElementById("csvFile").onchange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const words = parseCSV(reader.result);
      localStorage.setItem("words", JSON.stringify(words));
      alert("Vokabeln erfolgreich importiert!");
    };
    reader.readAsText(file, "utf-8");
  };

  return root;
}
