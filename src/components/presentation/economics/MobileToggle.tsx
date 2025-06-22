
import React from 'react';

interface MobileToggleProps {
  currentView: number;
  setCurrentView: (view: number) => void;
}

const MobileToggle = ({ currentView, setCurrentView }: MobileToggleProps) => {
  return (
    <div className="flex bg-slate-100 rounded-2xl p-1">
      <button
        onClick={() => setCurrentView(0)}
        className={`flex-1 py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 ${
          currentView === 0 
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        До AIVA
      </button>
      <button
        onClick={() => setCurrentView(1)}
        className={`flex-1 py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 ${
          currentView === 1 
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm' 
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        С AIVA
      </button>
    </div>
  );
};

export default MobileToggle;
