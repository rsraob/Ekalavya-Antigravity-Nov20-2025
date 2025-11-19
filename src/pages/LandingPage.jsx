import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo-1.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        <img src={logo1} alt="Ékalavya Logo" className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-white/50 shadow-lg" />
        <h1 className="text-5xl font-display font-bold mb-2">Ékalavya</h1>
        <p className="text-xl font-light italic mb-8">"Your teacher always with you"</p>
        
        <div className="space-y-4">
          <Link to="/student" className="block w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold rounded-xl transition-transform transform hover:scale-105 shadow-lg text-xl">
            I am a Student
          </Link>
          <Link to="/parent" className="block w-full py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl transition-colors border border-white/30">
            Parent Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
