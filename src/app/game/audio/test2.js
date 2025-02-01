const lyricsData = require("./Eminem2.json");
const nextWords = lyricsData
  .slice(0, 2)
  .map((entry) => entry.text.split(" "))
  .flat();
const sample1 = lyricsData;
const sample2 = lyricsData.slice(0, 2);
const sample3 = lyricsData.slice(0, 2).map((entry) => entry.text.split(" "));
console.log("sample 1 : ", sample1);
console.log("sample 2 : ", sample2);
console.log("sample 3 : ", sample3);
console.log("sample 4 : ", nextWords);
