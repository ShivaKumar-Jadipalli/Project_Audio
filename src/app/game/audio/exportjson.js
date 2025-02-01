import fs from "fs"; // Use `import` for ES modules
import SrtParser2 from "srt-parser-2";

const parser = new SrtParser2();

fs.readFile("OneDance.srt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  try {
    const srtArray = parser.fromSrt(data);
    const nextWords = srtArray.map(
      (entry) =>
        entry.text
          .split(/[\s.,?!:;"\-\[\]\\]+/) // Split based on delimiters
          // .split(/[\s.,?!:;"\-\[\]\(\)]+/) // Split based on delimiters
          .filter(
            (word) =>
              typeof word === "string" &&
              word.trim() !== "" &&
              /^[a-zA-Z0-9]+$/.test(word) // Allow only alphanumeric characters
          )
          .map((word) => word.toLowerCase()) // Convert valid strings to lowercase
    );
    let countwords = 0;
    function Temp(entry) {
      countwords += entry.length;
      return countwords;
    }
    const wordslength = nextWords.map((entry) => Temp(entry));
    // const wordslength = nextWords.map((entry) => entry.length);
    // console.log("nextWords : ", nextWords);
    // console.log("wordslength : ", wordslength);
    const updatedSrtArray = srtArray.map((item, index) => ({
      ...item,
      words: nextWords[index], // Add the corresponding sample array
      wordslength: wordslength[index], // Add the corresponding
    }));
    // Convert the array to JSON format and save it to a file
    const jsonFileName = "onedance31.json";
    fs.writeFile(
      jsonFileName,
      JSON.stringify(updatedSrtArray, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing the JSON file:", writeErr);
        } else {
          console.log(`SRT data successfully saved to ${jsonFileName}`);
        }
      }
    );
  } catch (parseErr) {
    console.error("Error parsing the SRT file:", parseErr);
  }
});

{
  /*
  
  */
}
