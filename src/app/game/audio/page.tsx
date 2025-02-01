"use client";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import ReactPlayer from "react-player/file";
import lyricsData from "./onedance31.json";
const allwords = lyricsData.map((entry) => entry.words).flat();
const wordslength: number[] = lyricsData
  .map((entry) => entry.wordslength)
  .reverse();
const endsecondslist: number[] = lyricsData
  .map((entry) => entry.endSeconds)
  .reverse();
export default function TypingGame() {
  const [currentSet, setCurrentSet] = useState(0);
  const playerRef = useRef(null);
  const [words, setWords] = useState<string[]>([]);
  const [endSeconds, setEndSeconds] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongindex, setWrongIndex] = useState<number[]>([]);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const textInput = useRef<HTMLInputElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        setIsPlaying(endSeconds > playerRef.current.getCurrentTime());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endSeconds]);
  useEffect(() => {
    loadWords();
    textInput.current?.focus();
  }, [currentSet]);
  function loadWords() {
    const startIndex = currentSet * 20;
    const nextWords = allwords.slice(startIndex, startIndex + 20);
    setWords(nextWords);
    setCurrentWordIndex(0);
    setWrongIndex([]);
  }
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    console.log("currentWordIndex : ", currentWordIndex);
    console.log("words length : ", wordslength[wordslength.length - 1]);
    if (event.key === " ") {
      event.preventDefault();
      if (currentInput.trim() === words[currentWordIndex]) {
        setCorrectCount(correctCount + 1);
      } else {
        setIncorrectCount(incorrectCount + 1);
        setWrongIndex([...wrongindex, currentWordIndex]);
      }
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        setCurrentSet(currentSet + 1);
      }
      if (
        correctCount + incorrectCount >=
        wordslength[wordslength.length - 1]
      ) {
        setEndSeconds(Number(endsecondslist.pop()));
        wordslength.pop();
      }
      setCurrentInput("");
    }
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen text-black">
      <div className="text-xl p-4 border rounded-md shadow-sm bg-gray-300 max-w-screen-md">
        {words.map((word, index) => (
          <span
            key={index}
            className={`${
              index === currentWordIndex
                ? "text-green-500 underline"
                : wrongindex.includes(index)
                ? "text-red-500"
                : index < currentWordIndex
                ? "text-gray-500"
                : ""
            }`}
          >
            {word}{" "}
          </span>
        ))}
      </div>
      <input
        ref={textInput}
        type="text"
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="text-sm text-gray-600">
        Correct: {correctCount} | Incorrect: {incorrectCount}
      </div>
      <span>
        end seconds : {endSeconds}, wordsLength :{" "}
        {wordslength[wordslength.length - 1]}
      </span>
      <ReactPlayer
        ref={playerRef}
        url="/audio/OneDance.mp3"
        playing={isPlaying}
      />
    </div>
  );
}

{
  /*
  1. I don't want space to be moving all the words check that 10 fast fingers 
  1. when all the words are done go back to the dashboard with the results 
  */
}
