"use client";
import { Button } from "@/components/tremor/Button";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { generate } from "random-words";
import Countdown from "react-countdown";
const NUMB_OF_WORDS: number = 200;
const SECONDS: number = 60;
export default function Game(props: {
  searchParams?: {
    punctuation?: boolean;
    numbers?: boolean;
    casing?: boolean;
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
  // const currentPage = Number(searchParams?.page) || 1;
  const handleCountdownComplete = () => {
    alert("Countdown completed! Running another function...");
    console.log("Custom function executed in Next.js!");
  };
  return (
    <div className=" flex flex-col gap-4 justify-center items-center h-screen text-white">
      <Countdown
        date={Date.now() + gametime * 60 * 1000}
        onComplete={handleCountdownComplete}
        renderer={({ minutes, seconds }) => (
          <div className="text-2xl">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
      />
      <input
        type="text"
        className="text-black p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-600"
      />
    </div>
  );
}
