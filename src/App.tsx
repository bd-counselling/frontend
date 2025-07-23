import React, { useState } from "react";
import Header from "./components/new-commit/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import NeetUGPage from "./pages/NeetUGPage";
import NeetPGPage from "./pages/NeetPGPage";
import INICETPage from "./pages/INICETPage";
import AllotmentsPage from "./pages/AllotmentsPage";
import ClosingRanksPage from "./pages/ClosingRanksPage";
import SeatMatrixPage from "./pages/SeatMatrixPage";
import FeeStipendBondPage from "./pages/FeeStipendBondPage";
import ChoiceLists from "./components/ChoiceLists";
import MobileBottomNav from "./components/MobileBottomNav";
import PlaceholderContent from "./components/PlaceholderContent";
import ProfilePage from "./components/ProfilePage";
import SupportPage from "./components/SupportPage";
import FAQPage from "./components/FAQPage";
import UniversitiesPage from "./components/UniversitiesPage";
import ResultrankingPage from "./components/Resultrankingpage";
import CounsellingPage from "./components/Counsellingpage";
import AIAssistant from "./components/AIAssistant";
import WhatsAppSupport from "./components/WhatsAppSupport";
import MedicalCollegesPage from "./components/MedicalCollegesPage";




/**
 * NEW COMMIT: Updated App Component with Enhanced Navigation
 * Added NEET page routing and improved structure
 */
function App() {
  const [activeSection, setActiveSection] = useState("home"); // Current dashboard section/page
  const [currentNeetPage, setCurrentNeetPage] = useState<string | null>(null); // NEET page state
  const [activeTab] = useState("all-india"); // StateTabs (if used)
  const [searchValue, setSearchValue] = useState(""); // Search input value
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile sidebar
  const [showPlaceholder, setShowPlaceholder] = useState(false); // Placeholder for unknown sections
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Sidebar collapse

  // Demo user
  // const [isLoggedIn] = useState(true);
  const [user] = useState({
    name: "Madhav Deshmukh",
    email: "madhav.deshmukh@gmail.com",
    phone: "+91 9876543210",
    neetRank: "12,345",
    category: "General",
    state: "Maharashtra",
    avatar: "MD",
  });

  // Search input change
  const handleSearchChange = (value: string) => setSearchValue(value);

  // Section navigation (dashboard, profile, support, etc.)
  const handleSectionChange = (section: string) => {
    // Show placeholder for unknown sections
    if (
      section === "results" ||
      section === "Counselling" ||
      section === "allotments" ||
      section === "closing-ranks" ||
      section === "seat-matrix" ||
      section === "fee-stipend-bond" ||
      section === "profile" ||
      section === "support" ||
      section === "faq" ||
      section === "universities" ||
      section === "home"
    ) {
      setShowPlaceholder(false);
      setCurrentNeetPage(null); // Reset NEET page when navigating to other sections
    } else if (section === "results") {
      setActiveSection("results");
      setShowPlaceholder(false);
    } else {
      // NEW COMMIT: Handle data page navigation
      if (
        section === "allotments" ||
        section === "closing-ranks" ||
        section === "seat-matrix" ||
        section === "fee-stipend-bond"
      ) {
        setActiveSection(section);
        setShowPlaceholder(false);
        setCurrentNeetPage(null);
        setIsMobileMenuOpen(false);
        return;
      }

      setShowPlaceholder(true);
      setCurrentNeetPage(null);
    }
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  // NEW COMMIT: NEET Navigation Handler
  const handleNeetNavigation = (page: string) => {
    setCurrentNeetPage(page);
    setActiveSection("neet");
    setShowPlaceholder(false);
    setIsMobileMenuOpen(false);
  };

  // Back to dashboard/home
  const handleBackToDashboard = () => {
    setShowPlaceholder(false);
    setCurrentNeetPage(null);
    setActiveSection("home");
  };

  // Sidebar collapse toggle
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  /**
   * NEW COMMIT: Enhanced Content Rendering with NEET Pages
   * Renders the main content area based on the active section.
   * Handles dashboard, NEET pages, profile, support, FAQ, universities, and placeholder pages.
   */
  const renderPageContent = () => {
    // NEET Pages
    if (currentNeetPage) {
      switch (currentNeetPage) {
        case "neet-ug":
          return <NeetUGPage />;
        case "neet-pg":
          return <NeetPGPage />;
        case "inicet":
          return <INICETPage />;
        default:
          return <NeetUGPage />;
      }
    }

    // Results and Rankings page
    if (activeSection === "results") {
      return <ResultrankingPage onBack={handleBackToDashboard} />;
    }
    
    if (activeSection === "medical-colleges") {
         return <MedicalCollegesPage />;
        }

    // Counselling page
    if (activeSection === "Counselling" || activeSection === "Counselling") {
      return <CounsellingPage onBack={handleBackToDashboard} />;
    }

    // NEW COMMIT: Data pages
    if (activeSection === "allotments") {
      return <AllotmentsPage onBack={handleBackToDashboard} />;
    }

    if (activeSection === "closing-ranks") {
      return <ClosingRanksPage onBack={handleBackToDashboard} />;
    }

    if (activeSection === "seat-matrix") {
      return <SeatMatrixPage onBack={handleBackToDashboard} />;
    }

    if (activeSection === "fee-stipend-bond") {
      return <FeeStipendBondPage onBack={handleBackToDashboard} />;
    }

    // Profile page
    if (activeSection === "profile") {
      return (
        <ProfilePage
          user={user}
          onBack={handleBackToDashboard}
          onLogout={() => {}}
        />
      );
    }

    // Support page
    if (activeSection === "support") {
      return <SupportPage onBack={handleBackToDashboard} />;
    }

    // FAQ page
    if (activeSection === "faq") {
      return <FAQPage onBack={handleBackToDashboard} />;
    }

    // Universities page
    if (activeSection === "universities") {
      return <UniversitiesPage onBack={handleBackToDashboard} />;
    }

    // Placeholder for unknown sections
    if (showPlaceholder) {
      return (
        <PlaceholderContent
          title={`${
            activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
          } Section`}
          onBack={handleBackToDashboard}
        />
      );
    }

    // Main dashboard content
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50">
        {/* NEW COMMIT: Updated Header with NEET Navigation */}
        <Header
          onSearchChange={handleSearchChange}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
          user={user}
          onSectionChange={handleSectionChange}
          onNeetNavigation={handleNeetNavigation}
        />

        {/* Main layout with sidebar and content */}
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
            <MainContent activeTab={activeTab} />
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

        {/* Choice Lists (Right sidebar or floating) */}
        <ChoiceLists />

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

  // For profile, support, FAQ, universities, or placeholder pages,
  // render with dashboard navigation (header/sidebar)
  if (
    currentNeetPage ||
    activeSection === "results" ||
    activeSection === "allotments" ||
    activeSection === "closing-ranks" ||
    activeSection === "seat-matrix" ||
    activeSection === "fee-stipend-bond" ||
    activeSection === "Counselling" ||
    activeSection === "profile" ||
    activeSection === "support" ||
    activeSection === "faq" ||
    activeSection === "universities" ||
    showPlaceholder
  ) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50">
        {/* NEW COMMIT: Updated Header with NEET Navigation */}
        <Header
          onSearchChange={handleSearchChange}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
          user={user}
          onSectionChange={handleSectionChange}
          onNeetNavigation={handleNeetNavigation}
        />

        {/* Main layout with sidebar and content */}
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

          {/* Page Content */}
          <div
            className="flex-1"
            style={{ marginLeft: isSidebarCollapsed ? "64px" : "256px" }}
          >
            {renderPageContent()}
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
  }

  // Default: render main dashboard content
  return renderPageContent();
}

export default App;
