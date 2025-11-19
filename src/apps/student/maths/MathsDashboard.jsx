import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Hash, Grid } from 'lucide-react';

const MathsDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-accent text-center mb-4">Maths Magic</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="counting" className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform border-b-8 border-green-200">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500">
            <Hash size={40} />
          </div>
          <span className="text-2xl font-bold text-gray-700">Counting</span>
        </Link>

        <Link to="tables" className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform border-b-8 border-orange-200">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
            <Grid size={40} />
          </div>
          <span className="text-2xl font-bold text-gray-700">Tables</span>
        </Link>

        <Link to="operations" className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform border-b-8 border-red-200">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-500">
            <Calculator size={40} />
          </div>
          <span className="text-2xl font-bold text-gray-700">Operations</span>
        </Link>
      </div>
    </div>
  );
};

export default MathsDashboard;
