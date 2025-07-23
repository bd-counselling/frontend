import React from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

/**
 * StateTabs Component Props Interface
 * Defines the props required for the StateTabs component
 */
interface StateTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

/**
 * StateTabs Component
 * Displays state-wise Counselling tabs with navigation
 * Hidden by default as per requirements
 */
const StateTabs: React.FC<StateTabsProps> = ({ activeTab, onTabChange }) => {
  // Tab configuration with labels, icons, and colors
  const tabs = [
    {
      id: "all-india",
      label: "All India Counselling - UG Medical",
      shortLabel: "All India - UG Medical",
      icon: "🏥",
      color: "from-orange-500 to-red-600",
    },
    {
      id: "andhra",
      label: "Andhra Pradesh Management Quota",
      shortLabel: "Andhra Pradesh Mgmt",
      icon: "🏛️",
      color: "from-green-500 to-teal-600",
    },
    {
      id: "assam",
      label: "Assam - UG Medical",
      shortLabel: "Assam - UG Medical",
      icon: "🏥",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "maharashtra",
      label: "Maharashtra - UG Medical",
      shortLabel: "Maharashtra - UG",
      icon: "🏥",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "karnataka",
      label: "Karnataka - Medical Counselling",
      shortLabel: "Karnataka Medical",
      icon: "🏥",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-16 z-30 hidden">
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors hidden lg:block">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>

          <div className="flex items-center space-x-2 lg:space-x-3 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center space-x-2 lg:space-x-3 px-3 py-2 lg:px-4 lg:py-3 rounded-xl whitespace-nowrap transition-all duration-300 transform hover:scale-105 text-sm lg:text-base ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : "text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <span className="text-base lg:text-lg">{tab.icon}</span>
                <span className="font-medium">
                  <span className="lg:hidden">{tab.shortLabel}</span>
                  <span className="hidden lg:inline">{tab.label}</span>
                </span>
              </button>
            ))}
          </div>

          <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors hidden lg:block">
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <button className="flex items-center space-x-2 px-2 lg:px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline text-sm font-medium">Add Tab</span>
        </button>
      </div>
    </div>
  );
};

export default StateTabs;
