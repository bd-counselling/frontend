import React from "react";
import {
  Globe,
  FileText,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Calendar,
  ExternalLink,
  Download,
  ChevronRight,
  Target,
  GraduationCap,
  Building2,
  MessageCircle,
  Send,
  HelpCircle,
} from "lucide-react";
import FAQ from "./FAQPage";
import NeetComparison from "./NeetComparison";

/**
 * MainContent Component Props Interface
 * Defines the props required for the MainContent component
 */
interface MainContentProps {
  activeTab: string;
}

/**
 * MainContent Component
 * Main dashboard content area displaying Counselling information,
 * statistics, timelines, and action cards
 */
const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  // Action buttons configuration for the hero section
  const actionButtons = [
    {
      id: "quotas",
      label: "Quotas",
      icon: FileText,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      id: "registration",
      label: "Registration",
      icon: BarChart3,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      id: "prospectus",
      label: "Prospectus",
      icon: FileText,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
  ];

  // Quick action cards for main dashboard features
  const quickActionCards = [
    {
      title: "NEET Results 2025",
      subtitle: "Check your scorecard",
      icon: Target,
      bgGradient: "from-blue-400 to-blue-600",
      textColor: "text-white",
      action: "Get Result Now",
      onClick: () => {
        window.open(
          "https://examinationservices.nic.in/resultservices/Neet2025/Login",
          "_blank"
        );
      },
    },
    {
      title: "Career Guidance",
      subtitle: "Expert consultation",
      icon: GraduationCap,
      bgGradient: "from-green-400 to-green-600",
      textColor: "text-white",
      action: "Free Counselling",
      onClick: () => {
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSdwL6ERosbYYVBw5dUxQoVupLnzSDEtW8qe0UE-3FsptSB8sw/viewform?usp=preview",
          "_blank"
        );
      },
    },
    {
      title: "Frequently Asked Questions",
      subtitle: "Get all your questions answered",
      icon: HelpCircle,
      bgGradient: "from-purple-400 to-purple-600",
      textColor: "text-white",
      action: "View FAQ",
      onClick: () => {
        window.location.href = "/faq";
      },
    },
  ];

  // Data cards for displaying various information sections
  const dataCards = [
    {
      title: "Allotments",
      subtitle: "2022, 2023, 2024",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Closing Ranks",
      subtitle: "2022, 2023, 2024",
      icon: TrendingUp,
      color: "bg-blue-500",
    },
    {
      title: "Seat Matrix",
      subtitle: "2022, 2023, 2024",
      icon: BarChart3,
      color: "bg-indigo-500",
    },
    {
      title: "Fee, Stipend & Bond",
      subtitle: "2022, 2023, 2024",
      icon: Award,
      color: "bg-purple-600",
    },
  ];

  // NEET statistics data for comparison display
  const neetStats = [
    { label: "Registered", value: "6,819", year: "2025" },
    { label: "Appeared", value: "6,612", year: "2025" },
    { label: "Qualified", value: "4,681", year: "2025" },
    { label: "Registered", value: "3,49,759", year: "2024" },
    { label: "Appeared", value: "3,33,333", year: "2024" },
    { label: "Qualified", value: "2,15,768", year: "2024" },
  ];

  // Timeline steps for Counselling process
  const timelineSteps = [
    {
      date: "SEP 20 2024",
      title: "Round 2 Joining",
      subtitle: "Start Date",
      status: "completed",
    },
    {
      date: "SEP 27 2024",
      title: "Round 2 Joining",
      subtitle: "End Date",
      status: "completed",
    },
    {
      date: "OCT 8 2024",
      title: "Round 3 Registration",
      subtitle: "Start Date",
      status: "current",
    },
    {
      date: "OCT 11 2024",
      title: "Round 3 Registration",
      subtitle: "End Date",
      status: "pending",
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen overflow-y-auto">
      {/* Mobile-First Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 px-4 lg:px-6 py-6 lg:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="xl:hidden text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h1 className="text-xl font-bold text-white mb-2">
              All India Counselling - UG Medical
            </h1>
            <p className="text-orange-100 mb-6 text-sm">Central • All India</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {actionButtons.map((button) => (
                <button
                  key={button.id}
                  className={`flex flex-col items-center space-y-2 p-4 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${button.bgColor} ${button.textColor}`}
                >
                  <button.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{button.label}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-center space-x-3">
              <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <MessageCircle className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden xl:block text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                NEET UG Medical Counselling 2025
              </h1>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-lg">⚡</span>
              </div>
            </div>

            <p className="text-orange-100 mb-8 text-lg">
              Central • All India • Government Medical Colleges
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {actionButtons.map((button) => (
                <button
                  key={button.id}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${button.bgColor} ${button.textColor} font-medium`}
                >
                  <button.icon className="w-5 h-5" />
                  <span>{button.label}</span>
                </button>
              ))}
              {/* <button className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white hover:bg-green-500 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="text-lg font-bold">W</span>
              </button>
              <button className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="text-lg font-bold">T</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-6 py-6 lg:py-8 max-w-7xl mx-auto">
        {/* Mobile-First Quick Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {quickActionCards.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${card.bgGradient} rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <card.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <ExternalLink className="w-5 h-5 opacity-70" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-white/80 mb-4 text-sm lg:text-base">
                {card.subtitle}
              </p>
              <button
                className="bg-white/20 backdrop-blur-sm px-4 py-2 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl hover:bg-white/30 transition-all duration-200 font-medium text-sm lg:text-base"
                onClick={card.onClick}
              >
                {card.action}
              </button>
            </div>
          ))}
        </div>

        {/* Mobile-First Data Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-8 lg:mb-12">
          {dataCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 lg:p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div
                className={`w-10 h-10 lg:w-12 lg:h-12 ${card.color} rounded-xl flex items-center justify-center mb-3 lg:mb-4`}
              >
                <card.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-1 text-sm lg:text-base">
                {card.title}
              </h3>
              <p className="text-xs lg:text-sm text-slate-600">
                {card.subtitle}
              </p>
              <ChevronRight className="w-4 h-4 text-slate-400 mt-2" />
            </div>
          ))}
        </div>

        {/* NEET UG 2024 vs 2025 Statistics - Mobile Optimized */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 mb-8 lg:mb-12 border border-white/20">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
              NEET UG 2024 vs 2025
            </h2>
            <p className="text-slate-600 text-sm lg:text-base">
              Comprehensive statistics comparison
            </p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
            {neetStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-slate-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-lg lg:text-3xl font-bold text-slate-800 mb-1 lg:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium mb-1 text-xs lg:text-sm">
                    {stat.label}
                  </div>
                  <div className="text-xs lg:text-sm text-blue-600 font-medium">
                    {stat.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <NeetComparison />
          {/* How to Check NEET Result 2025 - Mobile Optimized */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 mb-8 lg:mb-12 border border-white/20">
            <div className="flex items-start space-x-3 lg:space-x-4 mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg lg:text-2xl font-bold text-slate-800 mb-2">
                  How to Check NEET Result 2025?
                </h3>
                <p className="text-slate-600 text-sm lg:text-base">
                  Candidates have to check their NEET 2025 result and download
                  the scorecards in online mode by following the steps given
                  below.
                </p>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {[
                "Visit the official website of NEET 2025 – www.neet.nta.nic.in or directly enter the link",
                "Click on the link indicating NEET 2025 Scorecard Download",
                "Enter the NEET 2025 Application Number, Password and Security Pin",
                "Click on Submit",
                "NEET 2025 scorecard will be displayed on the screen",
                "Download and print the NEET scorecard for future reference",
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm lg:text-base">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Counselling Timeline - Mobile Optimized */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 border border-white/20 mb-8 lg:mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 text-center">
            Counselling Timeline 2025
          </h3>

          <div className="relative">
            {/* Mobile Timeline */}
            <div className="xl:hidden space-y-6">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-6 h-6 rounded-full flex-shrink-0 ${
                      step.status === "completed"
                        ? "bg-green-400"
                        : step.status === "current"
                        ? "bg-blue-500 animate-pulse"
                        : "bg-slate-300"
                    }`}
                  ></div>
                  <div className="bg-slate-50 rounded-xl p-4 flex-1">
                    <div className="text-sm text-blue-600 font-medium mb-1">
                      {step.date}
                    </div>
                    <div className="text-base font-bold text-slate-800 mb-1">
                      {step.title}
                    </div>
                    <div className="text-sm text-slate-600">
                      {step.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden xl:flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center flex-1"
                >
                  <div
                    className={`w-6 h-6 rounded-full mb-4 ${
                      step.status === "completed"
                        ? "bg-green-400"
                        : step.status === "current"
                        ? "bg-blue-500 animate-pulse"
                        : "bg-slate-300"
                    }`}
                  ></div>
                  <div className="bg-slate-50 rounded-xl p-4 w-full max-w-xs">
                    <div className="text-sm text-blue-600 font-medium mb-1">
                      {step.date}
                    </div>
                    <div className="text-lg font-bold text-slate-800 mb-1">
                      {step.title}
                    </div>
                    <div className="text-sm text-slate-600">
                      {step.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block absolute top-3 left-0 right-0 h-0.5 bg-slate-200">
              <div className="h-full bg-green-400 w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Career Guidance CTA - Mobile Optimized */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center text-white shadow-2xl">
          <h3 className="text-xl lg:text-3xl font-bold mb-3 lg:mb-4">
            Still <span className="text-pink-300">Confused?</span> Get Your
            Career Guidance Today!!!
          </h3>
          <p className="text-blue-100 mb-4 lg:mb-6 text-sm lg:text-lg">
            Don't count the ranks. Count the lives you'll impact with expert
            medical career guidance.
          </p>
          <a
            href="https://forms.gle/HE2RyX5CLh7j9FzX9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 lg:p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => {
              // NEW COMMIT: Add navigation to data pages
              if (card.title === "Allotments") {
                window.location.href = "/allotments";
              } else if (card.title === "Closing Ranks") {
                window.location.href = "/closing-ranks";
              } else if (card.title === "Seat Matrix") {
                window.location.href = "/seat-matrix";
              } else if (card.title === "Fee, Stipend & Bond") {
                window.location.href = "/fee-stipend-bond";
              }
            }}
          >
            Click Here for Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
