import React, { useState } from "react";
import {
  Home,
  GraduationCap,
  Award,
  User,
  HelpCircle,
  Menu,
} from "lucide-react";

interface MobileBottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

/**
 * Mobile Bottom Navigation Component
 * UPDATED: Navigation items now match desktop sidebar
 * Improved responsiveness and visual design
 */
const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Updated navigation items to match desktop sidebar
  const navItems = [
    { id: "home", icon: Home, label: "Dashboard" },
    { id: "universities", icon: GraduationCap, label: "Universities" },
    { id: "results", icon: Award, label: "Rankings" },
    { id: "faq", icon: HelpCircle, label: "FAQ" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  // Additional menu items for the drawer
  const menuItems = [
    {
      id: "Counselling",
      label: "Counselling",
      description: "NEET Counselling Process",
    },
    { id: "support", label: "Support", description: "Get Help & Assistance" },
    {
      id: "universities",
      label: "Universities",
      description: "Medical Colleges",
    },
    {
      id: "results",
      label: "Results & Rankings",
      description: "NIRF Rankings",
    },
  ];

  return (
    <>
      {/* Fixed Bottom Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-200/50 px-2 py-2 z-40 shadow-lg pointer-events-auto">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-all duration-200 ${
                activeSection === item.id
                  ? "text-blue-600 bg-blue-50 shadow-sm scale-105"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center justify-center w-14 h-12 rounded-xl text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-all duration-200"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </div>

      {/* Right Side Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Drawer Content */}
          <div
            className="relative bg-white/95 backdrop-blur-xl w-80 h-full shadow-2xl border-l border-slate-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Navigation
                  </h3>
                  <p className="text-sm text-slate-600">Explore more options</p>
                </div>
                <button
                  className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-slate-500 text-xl">×</span>
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 hover:bg-slate-50 ${
                    activeSection === item.id
                      ? "bg-blue-50 border border-blue-200"
                      : "border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4
                        className={`font-semibold ${
                          activeSection === item.id
                            ? "text-blue-700"
                            : "text-slate-800"
                        }`}
                      >
                        {item.label}
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activeSection === item.id
                          ? "bg-blue-500"
                          : "bg-slate-300"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200/50 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="text-center">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Need Help?
                </h4>
                <button
                  onClick={() => {
                    onSectionChange("support");
                    setMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileBottomNav;
