import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Bell,
  User,
  Heart,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * Header Component Props Interface
 * Defines the props required for the Header component
 */
interface HeaderProps {
  onSearchChange: (value: string) => void;
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
  user?: any;
  onSectionChange: (section: string) => void;
}

/**
 * Header Component
 * Main navigation header with search, user menu, and mobile navigation
 * Responsive design with different layouts for mobile and desktop
 */
const Header: React.FC<HeaderProps> = ({
  onSearchChange,
  onMobileMenuToggle,
  isMobileMenuOpen,
  user,
  onSectionChange,
}) => {
  // State for search input value
  const [searchValue, setSearchValue] = useState("");
  // State for managing dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  /**
   * Handle search input changes
   * Updates local state and calls parent callback
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  /**
   * Toggle dropdown menu visibility
   * @param dropdown - The dropdown identifier to toggle
   */
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/50 px-4 lg:px-6 py-2 lg:py-2 sticky top-0 z-40 shadow-sm h-16">
      <div className="flex items-center justify-between h-full">
        {/* Mobile Header Layout */}
        <div className="xl:hidden flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">BD</span>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BD-Counselling
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Navigation Arrows */}
            <button className="p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>

            <button className="p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></span>
            </button>

            <button
              onClick={() => onSectionChange("profile")}
              className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              <span className="font-medium text-sm">{user?.avatar || "U"}</span>
            </button>

            <button
              onClick={onMobileMenuToggle}
              className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Header Layout */}
        <div className="hidden xl:flex items-center justify-between w-full">
          <div className="flex items-center space-x-4 lg:space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">BD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BD-Counselling
                </h1>
                <p className="text-xs text-slate-500">
                  Medical Career Guidance
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("neet")}
                  className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium"
                >
                  <span>NEET UG</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "neet" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 py-2 z-50 animate-in slide-in-from-top-2">
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      NEET UG
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      NEET PG
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      INICET
                    </a>
                  </div>
                )}
              </div>

              <button
                className="flex items-center space-x-2 px-4 py-2 text-pink-600 hover:bg-pink-50 rounded-xl transition-all duration-200 font-medium"
                onClick={() => onSectionChange("ChoiceLists")}
              >
                <Heart className="w-4 h-4" />
                <span>My Choice Lists</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses, colleges..."
                value={searchValue}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2.5 w-64 lg:w-80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 transition-all duration-200"
              />
            </div>

            <div className="flex items-center space-x-2">
              {/* Navigation Arrows */}
              <button className="p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("institutes")}
                  className="flex items-center space-x-1 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <span>Institutes</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "institutes" && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 py-2 z-50 animate-in slide-in-from-top-2">
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      All Institutes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Top Institutes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Government
                    </a>
                  </div>
                )}
              </div>
              <button
                onClick={() => onSectionChange("faq")}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                FAQ
              </button>

              <button
                onClick={() => onSectionChange("support")}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Support
              </button>
            </div>

            <button className="p-2.5 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></span>
            </button>

            <button
              onClick={() => onSectionChange("profile")}
              className="p-2.5 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105"
            >
              <span className="font-medium">{user?.avatar || "U"}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Search Bar */}
      <div className="xl:hidden mt-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses, colleges..."
            value={searchValue}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 transition-all duration-200 text-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
