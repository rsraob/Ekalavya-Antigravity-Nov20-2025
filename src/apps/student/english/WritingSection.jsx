import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Undo } from 'lucide-react';
import CanvasDraw from 'react-canvas-draw';

const WritingSection = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#4F46E5');

  const colors = ['#4F46E5', '#EC4899', '#8B5CF6', '#10B981', '#F59E0B'];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link to=".." className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h1 className="text-3xl font-bold text-secondary">Let's Write!</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Tools */}
        <div className="flex md:flex-col gap-4 bg-white p-4 rounded-2xl shadow-md">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-10 h-10 rounded-full border-4 ${color === c ? 'border-gray-300 scale-110' : 'border-transparent'}`}
              style={{ backgroundColor: c }}
            />
          ))}
          <div className="h-px bg-gray-200 my-2 hidden md:block" />
          <button onClick={() => canvasRef.current.undo()} className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 text-gray-600">
            <Undo size={24} />
          </button>
          <button onClick={() => canvasRef.current.clear()} className="p-2 bg-red-100 rounded-xl hover:bg-red-200 text-red-500">
            <Trash2 size={24} />
          </button>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-dashed border-gray-200 relative">
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <span className="text-[300px] font-bold text-gray-900">A</span>
           </div>
           <CanvasDraw
            ref={canvasRef}
            brushColor={color}
            brushRadius={8}
            lazyRadius={2}
            canvasWidth={800}
            canvasHeight={500}
            className="w-full h-full touch-none"
          />
        </div>
      </div>
    </div>
  );
};

export default WritingSection;
