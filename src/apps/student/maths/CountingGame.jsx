import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, RefreshCw } from 'lucide-react';

const CountingGame = () => {
  const [count, setCount] = useState(generateCount());
  const [options, setOptions] = useState(generateOptions(count));
  const [message, setMessage] = useState('');

  function generateCount() {
    return Math.floor(Math.random() * 9) + 1;
  }

  function generateOptions(correct) {
    const opts = [correct];
    while (opts.length < 3) {
      const r = Math.floor(Math.random() * 9) + 1;
      if (!opts.includes(r)) opts.push(r);
    }
    return opts.sort(() => Math.random() - 0.5);
  }

  const handleGuess = (guess) => {
    if (guess === count) {
      setMessage('Correct! 🎉');
      setTimeout(() => {
        const newCount = generateCount();
        setCount(newCount);
        setOptions(generateOptions(newCount));
        setMessage('');
      }, 1500);
    } else {
      setMessage('Try Again! 😅');
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex items-center gap-4 w-full">
        <Link to=".." className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h1 className="text-3xl font-bold text-accent">Counting Game</h1>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl min-h-[300px] flex flex-wrap items-center justify-center gap-4 border-b-8 border-green-200">
        {Array.from({ length: count }).map((_, i) => (
          <Star key={i} size={64} className="text-yellow-400 fill-yellow-400 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      <div className="text-2xl font-bold h-8 text-accent">{message}</div>

      <div className="flex gap-6">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleGuess(opt)}
            className="w-24 h-24 bg-white rounded-2xl shadow-lg text-4xl font-bold text-gray-700 hover:scale-110 transition-transform border-b-8 border-blue-200 active:border-b-0 active:translate-y-2"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountingGame;
