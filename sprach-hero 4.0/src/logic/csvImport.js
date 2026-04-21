export function parseCSV(text) {
  const lines = text.trim().split("\n");
  const [header, ...rows] = lines;

  return rows.map(line => {
    const [word, translation] = line.split(";");
    return { word, translation, box: 1 };
  });
}
