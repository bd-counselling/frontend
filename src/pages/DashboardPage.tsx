import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ChoiceLists from "../components/ChoiceLists";
import MobileBottomNav from "../components/MobileBottomNav";
import AIAssistant from "../components/AIAssistant";
import WhatsAppSupport from "../components/WhatsAppSupport";
import { neetAPI, counsellingAPI } from "../services/api";

/**
 * Dashboard Page Component
 * Main dashboard with sidebar navigation and content area
 * API Integration: Multiple endpoints for dashboard data
 */
const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState("home");
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    neetStats: [],
    timeline: [],
    choiceLists: [],
  });

  /**
   * Fetch dashboard data on component mount
   * API Integration: GET /api/neet/results/, /api/counselling/timeline/, /api/counselling/choice-lists/
   */
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [neetResults, timeline, choiceLists] = await Promise.all([
          neetAPI.getResults(),
          counsellingAPI.getTimeline(),
          counsellingAPI.getChoiceLists(),
        ]);

        setDashboardData({
          neetStats: neetResults.data,
          timeline: timeline.data,
          choiceLists: choiceLists.data,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const handleSearchChange = (value: string) => setSearchValue(value);
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50">
      <Header
        onSearchChange={handleSearchChange}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
        user={user}
        onSectionChange={handleSectionChange}
      />

      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <Sidebar
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
              className="relative z-10 transform transition-transform duration-300 ease-in-out"
              isCollapsed={false}
              onToggleCollapse={() => {}}
            />
          </div>
        )}

        {/* Main Content Area */}
        <div
          className="flex-1 flex flex-col min-h-screen"
          style={{
            marginLeft: isSidebarCollapsed ? "64px" : "256px",
            marginRight: "320px",
          }}
        >
          <MainContent 
            activeTab="all-india" 
            dashboardData={dashboardData}
          />
        </div>
      </div>

      {/* Fixed Sidebar (Desktop) */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        className="hidden lg:block"
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={toggleSidebar}
      />

      {/* Choice Lists (Right sidebar) */}
      <ChoiceLists choiceLists={dashboardData.choiceLists} />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* AI Assistant Widget */}
      <AIAssistant />

      {/* WhatsApp Support Widget */}
      <WhatsAppSupport />

      {/* Padding for mobile bottom nav */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default DashboardPage;