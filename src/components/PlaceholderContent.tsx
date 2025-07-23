import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';

interface PlaceholderContentProps {
  title: string;
  onBack: () => void;
}

const PlaceholderContent: React.FC<PlaceholderContentProps> = ({ title, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <Construction className="w-10 h-10 text-white animate-bounce" />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            This section is currently under development. We're working hard to bring you the best experience.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse w-3/4"></div>
            </div>
            <p className="text-sm text-slate-500">Coming Soon...</p>
          </div>
          
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderContent;