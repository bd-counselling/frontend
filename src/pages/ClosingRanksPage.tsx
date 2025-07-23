import React from 'react';
import { ArrowLeft, TrendingUp, Construction } from 'lucide-react';

interface ClosingRanksPageProps {
  onBack: () => void;
}

/**
 * NEW COMMIT: Closing Ranks Page Component
 * Coming Soon page for closing ranks data
 */
const ClosingRanksPage: React.FC<ClosingRanksPageProps> = ({ onBack }) => {
  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Closing Ranks</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <Construction className="w-10 h-10 text-white animate-bounce" />
            </div>
            
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Closing Ranks Data</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We're working on bringing you comprehensive closing ranks data for all medical colleges. 
              This will include year-wise trends, category-wise cutoffs, and detailed analysis.
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
    </div>
  );
};

export default ClosingRanksPage;