import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ReadingSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link to=".." className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h1 className="text-3xl font-bold text-secondary">Let's Read!</h1>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {alphabet.map((letter) => (
          <Link 
            key={letter} 
            to={`letter/${letter}`}
            className="aspect-square bg-white rounded-2xl shadow-md flex items-center justify-center text-4xl font-bold text-primary hover:scale-110 transition-transform border-b-4 border-blue-100"
          >
            {letter}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReadingSection;
