import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calculator, LogOut } from 'lucide-react';

const StudentLayout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="min-h-screen bg-blue-50 font-display">
      {/* Top Bar */}
      <header className="bg-white p-4 shadow-md flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
            É
          </div>
          <span className="text-xl font-bold text-primary">Ékalavya</span>
        </div>
        <Link to="/" className="p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition-colors">
          <LogOut size={24} />
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24 max-w-4xl mx-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation (Mobile/Tablet friendly) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 rounded-t-3xl flex justify-around items-center max-w-4xl mx-auto">
        <Link to="/student/dashboard" className={`flex flex-col items-center gap-1 transition-all ${isActive('dashboard') ? 'text-primary scale-110' : 'text-gray-400'}`}>
          <div className={`p-3 rounded-2xl ${isActive('dashboard') ? 'bg-primary/10' : 'bg-transparent'}`}>
            <Home size={32} strokeWidth={2.5} />
          </div>
          <span className="text-xs font-bold">Home</span>
        </Link>
        
        <Link to="/student/english" className={`flex flex-col items-center gap-1 transition-all ${isActive('english') ? 'text-secondary scale-110' : 'text-gray-400'}`}>
          <div className={`p-3 rounded-2xl ${isActive('english') ? 'bg-secondary/10' : 'bg-transparent'}`}>
            <BookOpen size={32} strokeWidth={2.5} />
          </div>
          <span className="text-xs font-bold">English</span>
        </Link>

        <Link to="/student/maths" className={`flex flex-col items-center gap-1 transition-all ${isActive('maths') ? 'text-accent scale-110' : 'text-gray-400'}`}>
          <div className={`p-3 rounded-2xl ${isActive('maths') ? 'bg-accent/10' : 'bg-transparent'}`}>
            <Calculator size={32} strokeWidth={2.5} />
          </div>
          <span className="text-xs font-bold">Maths</span>
        </Link>
      </nav>
    </div>
  );
};

export default StudentLayout;
