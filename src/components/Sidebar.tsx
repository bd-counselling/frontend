import React, { useState } from "react";
import {
  Home,
  Settings,
  Compass,
  GraduationCap,
  UserCheck,
  ChevronDown,
  Award,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
/**
 * Sidebar Component Props Interface
 * Defines the props required for the Sidebar component
 */
interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  className?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

/**
 * Sidebar Component
 * Navigation sidebar with collapsible sections and menu items
 * Supports both collapsed and expanded states
 */
const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionChange,
  className = "",
  isCollapsed = false,
  onToggleCollapse,
}) => {
  // State for managing expanded menu sections
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "repo",
    "tools",
    "explore",
  ]);
  const navigate = useNavigate();

  /**
   * Toggle expansion state of menu sections
   * @param section - Section identifier to toggle
   */
  const toggleSection = (section: string) => {
    if (!isCollapsed) {
      setExpandedSections((prev) =>
        prev.includes(section)
          ? prev.filter((s) => s !== section)
          : [...prev, section]
      );
    }
  };

  // Menu items configuration with icons, labels, and submenu items
  const menuItems = [
    {
      id: "home",
      icon: Home,
      label: "Dashboard",
      hasSubmenu: false,
      color: "text-blue-600",
    },

    {
      id: "universities",
      icon: GraduationCap,
      label: "Universities",
      hasSubmenu: false,
      color: "text-cyan-600",
    },
    {
      id: "Counselling",
      icon: UserCheck,
      label: "Counselling",
      hasSubmenu: false,
      color: "text-pink-600",
    },
    {
      id: "results",
      icon: Award,
      label: "Results & Rankings",
      hasSubmenu: false,
      color: "text-emerald-600",
      onClick: () => navigate("/resultranking"),
    },

  {
    id: "medical-colleges",
    icon: GraduationCap,
    label: "Medical Colleges",
    hasSubmenu: false,
    color: "text-indigo-600",
  },
    {
      id: "explore",
      icon: Compass,
      label: "Explore",
      hasSubmenu: true,
      color: "text-orange-600",
      submenu: [
        "Medical Courses",
        "Top Colleges",
        "Entrance Exams",
        "Career Paths",
      ],
    },
    {
      id: "tools",
      icon: Settings,
      label: "Rank Predictor",
      hasSubmenu: true,
      color: "text-purple-600",
      submenu: [
        "NEET UG Predictor",
        "NEET PG Predictor",
        "Cut-off Analysis",
        "Rank Analysis",
      ],
    },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-white/95 backdrop-blur-md border-r border-slate-200 h-screen overflow-y-auto transition-all duration-300 ${className} flex-shrink-0 fixed left-0 top-0 z-30`}
    >
      <div className="p-4">
        {/* Collapse Toggle Button - Desktop Only */}
        {onToggleCollapse && (
          <div className="flex justify-end mb-4">
            <button
              onClick={onToggleCollapse}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600 hover:text-slate-800"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <PanelLeftOpen className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </button>
          </div>
        )}

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.id}>
              {/* Main menu item button */}
              <button
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                  } else if (item.hasSubmenu && !isCollapsed) {
                    toggleSection(item.id);
                  } else {
                    onSectionChange(item.id);
                  }
                }}
                className={`w-full flex items-center ${
                  isCollapsed ? "justify-center px-2" : "justify-between px-4"
                } py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-md border border-blue-200"
                    : "text-slate-700 hover:bg-slate-50 hover:shadow-sm"
                }`}
                title={isCollapsed ? item.label : ""}
              >
                <div
                  className={`flex items-center ${
                    isCollapsed ? "" : "space-x-3"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      activeSection === item.id ? "text-blue-600" : item.color
                    } transition-colors`}
                  />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </div>
                {item.hasSubmenu && !isCollapsed && (
                  <div
                    className={`transition-transform duration-200 ${
                      expandedSections.includes(item.id) ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                )}
              </button>

              {/* Submenu items */}
              {item.hasSubmenu &&
                expandedSections.includes(item.id) &&
                !isCollapsed && (
                  <div className="ml-6 mt-2 space-y-1 animate-in slide-in-from-top-2">
                    {item.submenu?.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() =>
                          onSectionChange(
                            `${item.id}-${subItem
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`
                          )
                        }
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-lg transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                          <span>{subItem}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
