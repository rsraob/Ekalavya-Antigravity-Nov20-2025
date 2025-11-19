import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Mic } from 'lucide-react';

const EnglishDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-secondary text-center mb-4">English World</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="read" className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform border-b-8 border-pink-200">
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
            <BookOpen size={40} />
          </div>
          <span className="text-2xl font-bold text-gray-700">Read</span>
        </Link>

        <Link to="write" className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform border-b-8 border-purple-200">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
            <PenTool size={40} />
          </div>
          <span className="text-2xl font-bold text-gray-700">Write</span>
        </Link>

        <Link to="speak" className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform border-b-8 border-yellow-200">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500">
            <Mic size={40} />
          </div>
          <span className="text-2xl font-bold text-gray-700">Speak</span>
        </Link>
      </div>
    </div>
  );
};

export default EnglishDashboard;
