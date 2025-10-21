"use client"; 


import { useState } from "react"; 

export default function Counter() {

  const [count, setCount] = useState(0);

  
  const increase = () => setCount(count + 1);

 
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

 
  const reset = () => setCount(0);

  
  const double = () => setCount(count * 2);

  
  const divide = () => setCount(Math.floor(count / 2));

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      
      <h1 className="text-3xl font-bold">Count: {count}</h1>

    
      <div className="flex gap-2">
        <button 
          onClick={increase} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Нэмэх
        </button>

        <button 
          onClick={decrease} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          - Хасах
        </button>

        <button 
          onClick={reset} 
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Тэглэх
        </button>

        <button 
          onClick={double} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          ×2
        </button>

        <button 
          onClick={divide} 
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          ÷2
        </button>
      </div>
    </div>
  );
}
