import React from 'react';
import { ArrowLeft, BarChart3, Construction } from 'lucide-react';

interface SeatMatrixPageProps {
  onBack: () => void;
}

/**
 * NEW COMMIT: Seat Matrix Page Component
 * Coming Soon page for seat matrix data
 */
const SeatMatrixPage: React.FC<SeatMatrixPageProps> = ({ onBack }) => {
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
          <h1 className="text-xl font-bold text-slate-800">Seat Matrix</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <Construction className="w-10 h-10 text-white animate-bounce" />
            </div>
            
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Seat Matrix Data</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We're preparing detailed seat matrix information for all medical colleges including 
              state-wise distribution, quota-wise allocation, and category-wise reservations.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse w-2/3"></div>
              </div>
              <p className="text-sm text-slate-500">Coming Soon...</p>
            </div>
            
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

export default SeatMatrixPage;