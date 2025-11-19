import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const ParentLogin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === '1234') {
      navigate('/parent/dashboard');
    } else {
      alert('Invalid PIN (Try 1234)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Parent Access</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter PIN</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-center text-2xl tracking-widest"
              placeholder="••••"
              maxLength={4}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Unlock Dashboard
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">Default PIN: 1234</p>
      </div>
    </div>
  );
};

export default ParentLogin;
