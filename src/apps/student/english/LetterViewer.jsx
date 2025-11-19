import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Volume2 } from 'lucide-react';

const LetterViewer = () => {
  const { letter } = useParams();

  const playSound = () => {
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    playSound();
  }, [letter]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <div className="flex items-center gap-4 w-full">
        <Link to=".." className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h1 className="text-3xl font-bold text-secondary">Letter {letter}</h1>
      </div>

      <div className="relative group cursor-pointer" onClick={playSound}>
        <div className="w-64 h-64 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-[150px] font-bold text-primary border-b-8 border-blue-200 transform transition-transform group-hover:scale-105 group-active:scale-95">
          {letter}
        </div>
        <div className="absolute top-4 right-4 p-3 bg-yellow-100 rounded-full text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <Volume2 size={32} />
        </div>
      </div>

      <p className="text-xl text-gray-500">Tap to hear the sound!</p>
    </div>
  );
};

export default LetterViewer;
