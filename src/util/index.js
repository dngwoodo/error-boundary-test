export default function getRandomWordFor(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}
