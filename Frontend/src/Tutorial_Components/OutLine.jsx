import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import CloseIcon from "@mui/icons-material/Close";
const OutLine = () => {
  const [length, setLength] = useState(8);
  return (
    <div className="flex flex-col items-center justify-between h-screen py-10">
      <div className="w-1/2 flex justify-center items-center">
        <button className="hover:bg-red-500 rounded-lg">
          <CloseIcon fontSize="large"></CloseIcon>
        </button>
        <div className="m-4">
          <Slider
            sx={{
              width: 1100,
              height: 20,
              color: "success.main",
            }}
            aria-label="Length"
            defaultValue={8}
            value={length}
            onChange={(event, newValue) => {
              setLength(newValue);
            }}
            min={8}
            max={50}
          />
        </div>
      </div>
      <div className="flex justify-between w-1/2 mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-2xl text-2xl transform hover:scale-105 transition-transform duration-200 w-40">
          Back
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-2xl text-2xl transform hover:scale-105 transition-transform duration-200 w-40">
          Next
        </button>
      </div>
    </div>
  );
};

export default OutLine;
