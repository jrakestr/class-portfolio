import React from 'react';
import { X } from 'lucide-react';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonPopup = ({ isOpen, onClose }: ComingSoonPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-slate-900 p-8 rounded-lg shadow-xl max-w-md mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-emerald-400">Coming Soon!</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-300">
          This demo is currently under development. Please check back soon to see it in action!
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPopup;