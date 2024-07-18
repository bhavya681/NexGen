import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-xs mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Calculator</h2>
      <div className="mb-4 text-right p-2 bg-gray-100 dark:bg-gray-700 rounded">
        <div className="text-gray-600 dark:text-gray-400">{input || "0"}</div>
        <div className="text-2xl font-bold text-black dark:text-white">{result || "0"}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button onClick={handleClear} className="p-2 bg-red-500 text-white rounded">C</button>
        <button onClick={handleDelete} className="p-2 bg-gray-400 text-white rounded">←</button>
        <button onClick={() => handleButtonClick("%")} className="p-2 bg-gray-400 text-white rounded">%</button>
        <button onClick={() => handleButtonClick("/")} className="p-2 bg-gray-400 text-white rounded">/</button>

        <button onClick={() => handleButtonClick("7")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">7</button>
        <button onClick={() => handleButtonClick("8")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">8</button>
        <button onClick={() => handleButtonClick("9")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">9</button>
        <button onClick={() => handleButtonClick("*")} className="p-2 bg-gray-400 text-white rounded">*</button>

        <button onClick={() => handleButtonClick("4")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">4</button>
        <button onClick={() => handleButtonClick("5")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">5</button>
        <button onClick={() => handleButtonClick("6")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">6</button>
        <button onClick={() => handleButtonClick("-")} className="p-2 bg-gray-400 text-white rounded">-</button>

        <button onClick={() => handleButtonClick("1")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">1</button>
        <button onClick={() => handleButtonClick("2")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">2</button>
        <button onClick={() => handleButtonClick("3")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">3</button>
        <button onClick={() => handleButtonClick("+")} className="p-2 bg-gray-400 text-white rounded">+</button>

        <button onClick={() => handleButtonClick("0")} className="col-span-2 p-2 bg-gray-200 dark:bg-gray-600 rounded">0</button>
        <button onClick={() => handleButtonClick(".")} className="p-2 bg-gray-200 dark:bg-gray-600 rounded">.</button>
        <button onClick={handleEqual} className="p-2 bg-green-500 text-white rounded">=</button>
      </div>
    </div>
  );
};

export default Calculator;
