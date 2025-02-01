import { useEffect, useState } from "react";

const Page = () => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/Eminem3.json")
      .then((response) => response.json())
      .then((data) => {
        setWords(data.words); // Set the 'words' array from the JSON file
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div>
      <h1>Words</h1>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
