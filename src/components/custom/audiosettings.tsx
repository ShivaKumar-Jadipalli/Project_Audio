"use client";
import React, { useState } from "react";
import { Button } from "../tremor/Button";
import { Checkbox } from "../tremor/Checkbox";
import { Label } from "../tremor/Label";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../tremor/Select";
export default function AudioGameSettings() {
  const [punctuation, setPunctuation] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [casing, setcasing] = useState(false);
  const [time, setTime] = useState("two-minute");
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`./game/audio`);
  };
  function DefaultTime() {
    const data = [
      {
        value: "one-minute",
        label: "1 Min",
      },
      {
        value: "two-minute",
        label: "2 Min",
      },
      {
        value: "five-minute",
        label: "5 Min",
      },
    ];
    return (
      <div>
        <Select
          defaultValue={time}
          onValueChange={(value) => setTime(value)} // Capture the selected value
        >
          <SelectTrigger className="mx-auto">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-32">
      <span>Audio settings</span>
      <div className="flex flex-row gap-2">
        <Checkbox
          id="r1"
          checked={punctuation}
          onCheckedChange={() => setPunctuation(!punctuation)}
          className="text-blue-600"
        />
        <Label htmlFor="r1" className="!text-black">
          Punctuation
        </Label>
        <Checkbox
          id="r2"
          checked={numbers}
          onCheckedChange={() => setnumbers(!numbers)}
          className="text-blue-600"
        />
        <Label htmlFor="r2" className="!text-black">
          Numbers
        </Label>
        <Checkbox
          id="r3"
          checked={casing}
          onCheckedChange={() => setcasing(!casing)}
          className="text-blue-600"
        />
        <Label htmlFor="r3" className="!text-black">
          CamelCase
        </Label>
        <DefaultTime />
      </div>
      <Button onClick={() => handleNavigation()}>Start</Button>
    </div>
  );
}

// TODO : Try to make the settings persist over the game session.
