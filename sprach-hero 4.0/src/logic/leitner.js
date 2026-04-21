export function updateWord(word, correct) {
  return {
    ...word,
    box: correct ? Math.min(word.box + 1, 5) : 1
  };
}

export function getNextWord(words) {
  return words.sort((a, b) => a.box - b.box)[0];
}
