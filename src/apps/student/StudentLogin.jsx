import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

const StudentLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (name) => {
    // In a real app, this would set auth state
    navigate('/student/dashboard');
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-primary mb-8">Who is learning today?</h1>
      
      <div className="grid grid-cols-2 gap-6 max-w-md w-full">
        <button onClick={() => handleLogin('Raja')} className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center gap-4 hover:scale-105 transition-transform border-b-8 border-blue-200 active:border-b-0 active:translate-y-2">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
            <User size={40} />
          </div>
          <span className="text-xl font-bold text-gray-700">Raja</span>
        </button>

        <button onClick={() => handleLogin('Rani')} className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center gap-4 hover:scale-105 transition-transform border-b-8 border-pink-200 active:border-b-0 active:translate-y-2">
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
            <User size={40} />
          </div>
          <span className="text-xl font-bold text-gray-700">Rani</span>
        </button>
      </div>
    </div>
  );
};

export default StudentLogin;
