"use client";
import arrayShuffle from "array-shuffle";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { generate } from "random-words";
import Countdown from "react-countdown";
export default function Game(props: {
  searchParams?: {
    punctuation?: string;
    numbers?: string;
    casing?: string;
    time?: string;
  };
}) {
  const searchParams = props.searchParams;
  const punctuation = searchParams?.punctuation;
  const casing = searchParams?.casing;
  const numbers = searchParams?.numbers;
  let gametime = 300;
  if (searchParams?.time === "one-minute") {
    gametime = 1;
  } else if (searchParams?.time === "two-minute") {
    gametime = 2;
  } else {
    gametime = 5;
  }
  const wordslength = 50;
  const [words, setWords] = useState<string[]>([]);
  const [incorrect, setIncorrect] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [currInput, setCurrInput] = useState<string>("");
  const [currWordIndex, setCurrWordIndex] = useState<number>(0);
  const [countdownDate] = useState(Date.now() + gametime * 60 * 1000);
  const [incorrectList, setIncorrectList] = useState<number[]>([]);
  const punctuationMarks = [
    "'",
    ".",
    ",",
    "!",
    "?",
    ";",
    ":",
    "(",
    ")",
    "{",
    "}",
  ];
  const handleCountdownComplete = () => {
    const wpm_results = Math.round(correct / gametime);
    alert("Countdown completed! Your WPM is " + wpm_results);
    console.log("Custom function executed in Next.js!");
  };
  const textInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    textInput.current?.focus();
    generateWords();
  }, []);
  useEffect(() => {
    if (currWordIndex >= words.length) {
      generateWords();
      setIncorrectList([]);
      setCurrWordIndex(0);
    }
  }, [currWordIndex]);
  function addPunctuation(word: string) {
    const placeAtStart = Math.random() < 0.5;
    const punctuationToAdd =
      punctuationMarks[Math.floor(Math.random() * punctuationMarks.length)];
    if (placeAtStart) {
      return punctuationToAdd + word;
    } else {
      return word + punctuationToAdd;
    }
  }
  function generateWords() {
    let wordDefault = generate({ exactly: wordslength });
    let wordPunctuation: string[] = [];
    let wordCasing: string[] = [];
    let wordNumber: string[] = [];
    console.log(searchParams);
    if (punctuation === "true") {
      wordPunctuation = (
        generate({ exactly: wordslength / 2 }) as string[]
      ).map((word: string) => addPunctuation(word));
    }
    if (casing === "true") {
      wordCasing = (generate({ exactly: wordslength / 2 }) as string[]).map(
        (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
      );
    }
    if (numbers === "true") {
      wordNumber = (generate({ exactly: wordslength / 8 }) as string[]).map(
        (word: string) => Math.floor(Math.random() * 1000).toString()
      );
    }
    console.log("all details ", wordNumber, wordCasing, wordPunctuation);
    setWords(
      arrayShuffle([
        ...wordNumber,
        ...wordCasing,
        ...wordPunctuation,
        ...wordDefault,
      ]).slice(0, wordslength)
    );
  }
  // Handle user input
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    const { key } = event;
    if (key === " ") {
      console.log("current input : ", currInput);
      if (words[currWordIndex] === currInput.trim()) {
        setCorrect(correct + 1);
      } else {
        setIncorrect(incorrect + 1);
        setIncorrectList((prev) => [...prev, currWordIndex]);
      }
      setCurrWordIndex(currWordIndex + 1);
      setCurrInput("");
    }
  }

  function PreviousWords({ i, word }: { i: number; word: string }) {
    if (i === currWordIndex) {
      return (
        <span className="text-green-950 border fill-red-900 border-green-950 p-1 opacity-500">
          {word}
        </span>
      );
    } else if (incorrectList.includes(i)) {
      return <span className="text-red-800">{word}</span>;
    } else {
      return <span>{word}</span>;
    }
  }

  return (
    <div className=" flex flex-col gap-4 justify-center items-center h-screen text-black ">
      <Countdown
        date={countdownDate}
        onComplete={handleCountdownComplete}
        renderer={({ minutes, seconds }) => (
          <div className="text-2xl">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
      />
      <input
        ref={textInput}
        type="text"
        className="text-black p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-600"
        onKeyDown={handleKeyDown}
        value={currInput}
        onChange={(e) => setCurrInput(e.target.value)}
      />
      <div className="content text-black mx-9 text-2xl">
        {words.map((word, i) => (
          <span key={i}>
            <PreviousWords i={i} word={word} />
            <span> </span>
          </span>
        ))}
      </div>
    </div>
  );
}

{
  /*Todo : 
  1. Write a detailed note on how you solved this problem
  1. send this correct and wrong words information to the main program when the time completes 
  1. space shouldn't move to another word 
  
  */
}
