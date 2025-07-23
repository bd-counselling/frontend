import React from "react";
import {
  FileText,
  BarChart3,
  Users,
  Award,
  Calendar,
  ExternalLink,
  Download,
  Target,
  GraduationCap,
  Building2,
} from "lucide-react";

/**
 * NEET UG Main Content Page
 * Displays NEET UG specific information, statistics, and resources
 */
const NeetUGPage: React.FC = () => {
  // NEET UG specific action cards
  const neetUGCards = [
    {
      title: "NEET UG Results 2025",
      subtitle: "Check your scorecard",
      icon: Target,
      bgGradient: "from-blue-400 to-blue-600",
      action: "Get Result Now",
      onClick: () => {
        window.open(
          "https://examinationservices.nic.in/resultservices/Neet2025/Login",
          "_blank"
        );
      },
    },
    {
      title: "UG Counselling Process",
      subtitle: "Step by step guidance",
      icon: GraduationCap,
      bgGradient: "from-green-400 to-green-600",
      action: "Start Counselling",
      onClick: () => {
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSdwL6ERosbYYVBw5dUxQoVupLnzSDEtW8qe0UE-3FsptSB8sw/viewform?usp=preview",
          "_blank"
        );
      },
    },
    {
      title: "College Predictor",
      subtitle: "Predict your admission chances",
      icon: Building2,
      bgGradient: "from-purple-400 to-purple-600",
      action: "Predict Now",
      onClick: () => {
        console.log("College Predictor clicked");
      },
    },
  ];

  // NEET UG statistics
  const neetUGStats = [
    { label: "Total Registered", value: "20,38,819", year: "2024" },
    { label: "Total Appeared", value: "18,72,341", year: "2024" },
    { label: "Qualified", value: "13,16,268", year: "2024" },
    { label: "Cutoff Percentile", value: "50th", category: "General" },
    { label: "Total Seats", value: "1,08,940", type: "MBBS/BDS" },
    { label: "Government Seats", value: "56,775", type: "MBBS" },
  ];

  // Timeline for NEET UG 2025
  const timelineSteps = [
    {
      date: "MAY 5 2025",
      title: "NEET UG Exam",
      subtitle: "Exam Date",
      status: "upcoming",
    },
    {
      date: "JUN 15 2025",
      title: "Result Declaration",
      subtitle: "Expected Date",
      status: "upcoming",
    },
    {
      date: "JUL 1 2025",
      title: "Counselling Registration",
      subtitle: "Start Date",
      status: "upcoming",
    },
    {
      date: "AUG 15 2025",
      title: "Seat Allotment",
      subtitle: "Round 1",
      status: "upcoming",
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen overflow-y-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4 lg:px-6 py-6 lg:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            NEET UG 2025 - Undergraduate Medical Entrance
          </h1>
          <p className="text-blue-100 mb-8 text-lg">
            National Eligibility cum Entrance Test for MBBS & BDS Admissions
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6 py-6 lg:py-8 max-w-7xl mx-auto">
        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {neetUGCards.map((card, index) => (
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

        {/* NEET UG Statistics */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 mb-8 lg:mb-12 border border-white/20">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
              NEET UG 2024 Statistics
            </h2>
            <p className="text-slate-600 text-sm lg:text-base">
              Key numbers and data from NEET UG 2024
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            {neetUGStats.map((stat, index) => (
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
                    {stat.year || stat.category || stat.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEET UG Timeline */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 border border-white/20 mb-8 lg:mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 text-center">
            NEET UG 2025 Timeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-4"></div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-sm text-blue-600 font-medium mb-1">
                    {step.date}
                  </div>
                  <div className="text-lg font-bold text-slate-800 mb-1">
                    {step.title}
                  </div>
                  <div className="text-sm text-slate-600">{step.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 mb-8 lg:mb-12 border border-white/20">
          <div className="flex items-start space-x-3 lg:space-x-4 mb-4 lg:mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg lg:text-2xl font-bold text-slate-800 mb-2">
                How to Apply for NEET UG 2025?
              </h3>
              <p className="text-slate-600 text-sm lg:text-base">
                Follow these steps to complete your NEET UG application
              </p>
            </div>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {[
              "Visit the official NEET website - neet.nta.nic.in",
              "Register with your basic details and create login credentials",
              "Fill the application form with personal and academic details",
              "Upload required documents (photograph, signature, etc.)",
              "Pay the application fee online",
              "Submit the application and take a printout for future reference",
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="text-slate-700 text-sm lg:text-base">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center text-white shadow-2xl">
          <h3 className="text-xl lg:text-3xl font-bold mb-3 lg:mb-4">
            Ready to Start Your{" "}
            <span className="text-blue-300">Medical Journey?</span>
          </h3>
          <p className="text-blue-100 mb-4 lg:mb-6 text-sm lg:text-lg">
            Get expert guidance for NEET UG preparation and Counselling
          </p>
          <a
            href="https://forms.gle/HE2RyX5CLh7j9FzX9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-400 to-red-400 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-white font-bold text-base lg:text-lg hover:from-pink-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default NeetUGPage;
