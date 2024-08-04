'use client'

import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";

const terms = [
  { id: 1, label: "MONTSERRAT (Default)" },
  { id: 2, label: "THE BOLD FONT" },
  { id: 3, label: "DEUTSCH" },
  { id: 4, label: "ADDISON" },
  { id: 5, label: "LEMON" },
  { id: 6, label: "HOLTWOOD ONE" },
  { id: 7, label: "HOLTWOOD ONE" },
  { id: 8, label: "HOLTWOOD ONE" },
  { id: 9, label: "HOLTWOOD ONE" },
  { id: 10, label: "HOLTWOOD ONE" },
  { id: 11, label: "HOLTWOOD ONE" },
  { id: 12, label: "HOLTWOOD ONE" },
];


const FontSelector = () => {
  const [selectedColor, setSelectedColor] = useState("#23a05b");

  const handleColorChange = (event: any) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="flex flex-col pt-36 items-center justify-center">
      <h1 className="text-5xl">Select your Fonts</h1>
      <h2 className="mt-6 text-neutral-400 text-sm">
        You can select multiple fonts to be used in your Series.
      </h2>
      <h2 className="text-neutral-400 text-sm">
        Selected fonts will be chosen at random per video.
      </h2>

      <div className="mt-4">
        <input
          type="color"
          id="color-picker"
          value={selectedColor}
          onChange={handleColorChange}
          className="mr-2"
        />
        <label
          htmlFor="color-picker"
          className="font-bold leading-none text-xl"
        >
          Color
        </label>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-5 mt-10 items-center justify-center">
          {terms.map((term) => (
            <div key={term.id} className="flex items-center space-x-2">
              <Checkbox id={`terms-${term.id}`} />
              <label
                htmlFor={`terms-${term.id}`}
                className="text-sm font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                style={{ color: selectedColor }}
              >
                {term.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FontSelector;
