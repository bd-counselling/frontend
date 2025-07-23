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
  Brain,
} from "lucide-react";

/**
 * INICET Main Content Page
 * Displays INICET specific information, statistics, and resources
 */
const INICETPage: React.FC = () => {
  // INICET specific action cards
  const inicetCards = [
    {
      title: "INICET Results 2025",
      subtitle: "Check your scorecard",
      icon: Target,
      bgGradient: "from-purple-400 to-indigo-600",
      action: "Get Result Now",
      onClick: () => {
        window.open("https://www.aiimsexams.ac.in/", "_blank");
      },
    },
    {
      title: "INICET Counselling",
      subtitle: "AIIMS/JIPMER/PGIMER guidance",
      icon: Brain,
      bgGradient: "from-indigo-400 to-purple-600",
      action: "Start Counselling",
      onClick: () => {
        console.log("INICET Counselling clicked");
      },
    },
    {
      title: "Institute Predictor",
      subtitle: "Predict your institute options",
      icon: Building2,
      bgGradient: "from-pink-400 to-purple-600",
      action: "Predict Now",
      onClick: () => {
        console.log("Institute Predictor clicked");
      },
    },
  ];

  // INICET statistics
  const inicetStats = [
    { label: "Total Registered", value: "45,678", year: "2024" },
    { label: "Total Appeared", value: "42,341", year: "2024" },
    { label: "Qualified", value: "28,567", year: "2024" },
    { label: "AIIMS Seats", value: "1,207", type: "Available" },
    { label: "JIPMER Seats", value: "195", type: "Available" },
    { label: "PGIMER Seats", value: "312", type: "Available" },
  ];

  // Timeline for INICET 2025
  const timelineSteps = [
    {
      date: "MAY 11 2025",
      title: "INICET Exam",
      subtitle: "Exam Date",
      status: "upcoming",
    },
    {
      date: "JUN 25 2025",
      title: "Result Declaration",
      subtitle: "Expected Date",
      status: "upcoming",
    },
    {
      date: "JUL 10 2025",
      title: "Counselling Registration",
      subtitle: "Start Date",
      status: "upcoming",
    },
    {
      date: "AUG 5 2025",
      title: "Seat Allotment",
      subtitle: "Round 1",
      status: "upcoming",
    },
  ];

  // Participating Institutes
  const institutes = [
    { name: "AIIMS New Delhi", seats: "287", established: "1956" },
    { name: "AIIMS Bhopal", seats: "125", established: "2012" },
    { name: "AIIMS Bhubaneswar", seats: "125", established: "2012" },
    { name: "AIIMS Jodhpur", seats: "125", established: "2012" },
    { name: "JIPMER Puducherry", seats: "195", established: "1823" },
    { name: "PGIMER Chandigarh", seats: "312", established: "1962" },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen overflow-y-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 px-4 lg:px-6 py-6 lg:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            INICET 2025 - Institute of National Importance
          </h1>
          <p className="text-purple-100 mb-8 text-lg">
            Combined Entrance Test for AIIMS, JIPMER, PGIMER & NIMHANS
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6 py-6 lg:py-8 max-w-7xl mx-auto">
        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {inicetCards.map((card, index) => (
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

        {/* INICET Statistics */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 mb-8 lg:mb-12 border border-white/20">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
              INICET 2024 Statistics
            </h2>
            <p className="text-slate-600 text-sm lg:text-base">
              Key numbers and data from INICET 2024
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            {inicetStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-slate-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-lg lg:text-3xl font-bold text-slate-800 mb-1 lg:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium mb-1 text-xs lg:text-sm">
                    {stat.label}
                  </div>
                  <div className="text-xs lg:text-sm text-purple-600 font-medium">
                    {stat.year || stat.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Participating Institutes */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 mb-8 lg:mb-12 border border-white/20">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 text-center">
            Participating Institutes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutes.map((institute, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <h4 className="font-bold text-slate-800 mb-2">
                    {institute.name}
                  </h4>
                  <div className="text-sm text-slate-600 mb-1">
                    <span className="font-medium">{institute.seats}</span> PG
                    Seats
                  </div>
                  <div className="text-xs text-purple-600">
                    Est. {institute.established}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INICET Timeline */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 border border-white/20 mb-8 lg:mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 text-center">
            INICET 2025 Timeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full mx-auto mb-4"></div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-sm text-purple-600 font-medium mb-1">
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center text-white shadow-2xl">
          <h3 className="text-xl lg:text-3xl font-bold mb-3 lg:mb-4">
            Join India's{" "}
            <span className="text-purple-300">Premier Medical Institutes</span>
          </h3>
          <p className="text-purple-100 mb-4 lg:mb-6 text-sm lg:text-lg">
            Get expert guidance for INICET preparation and institute selection
          </p>
          <a
            href="https://forms.gle/HE2RyX5CLh7j9FzX9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-400 to-red-400 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-white font-bold text-base lg:text-lg hover:from-pink-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
          >
            Get INICET Guidance
          </a>
        </div>
      </div>
    </div>
  );
};

export default INICETPage;
