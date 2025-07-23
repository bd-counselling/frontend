import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Users,
  Building2,
  BookOpen,
  Filter,
  Search,
} from "lucide-react";

interface CounselingPageProps {
  onBack: () => void;
}

interface CounselingData {
  Round: number;
  AI_Rank: number;
  State: string;
  Institute: string;
  Course: string;
  Quota: string;
  Category: string;
}

/**
 * Counseling Page Component
 * Displays INICET PG counseling data with filtering and search capabilities
 * Shows round-wise seat allotment information in tabular format
 */
const CounselingPage: React.FC<CounselingPageProps> = ({ onBack }) => {
  // State for counseling data
  const [counselingData, setCounselingData] = useState<CounselingData[]>([]);
  // State for loading status
  const [loading, setLoading] = useState(true);
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  // State for round filter
  const [selectedRound, setSelectedRound] = useState("all");
  // State for category filter
  const [selectedCategory, setSelectedCategory] = useState("all");

  /**
   * Parse CSV data into counseling objects
   * @param csvText - Raw CSV text data
   * @returns Array of counseling data objects
   */
  const parseCSV = (csvText: string): CounselingData[] => {
    const lines = csvText.trim().split("\n");
    // const headers = lines[0].split(",");

    return lines.slice(1).map((line) => {
      const values = line.split(",");
      return {
        Round: parseInt(values[0]),
        AI_Rank: parseInt(values[1]),
        State: values[2] || "",
        Institute: values[3] || "",
        Course: values[4] || "",
        Quota: values[5] || "",
        Category: values[6] || "",
      };
    });
  };

  /**
   * Fetch counseling data from CSV file
   * Loads data on component mount
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/INICET_PG.csv");
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setCounselingData(parsedData);
      } catch (error) {
        console.error("Error fetching counseling data:", error);
        // Fallback data for demonstration
        setCounselingData([
          {
            Round: 1,
            AI_Rank: 1,
            State: "Delhi",
            Institute: "AIIMS New Delhi",
            Course: "MD General Medicine",
            Quota: "All India",
            Category: "General",
          },
          {
            Round: 1,
            AI_Rank: 2,
            State: "Karnataka",
            Institute: "NIMHANS Bangalore",
            Course: "MD Psychiatry",
            Quota: "All India",
            Category: "General",
          },
          {
            Round: 2,
            AI_Rank: 150,
            State: "Chandigarh",
            Institute: "PGIMER Chandigarh",
            Course: "MD Pediatrics",
            Quota: "All India",
            Category: "OBC",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Filter counseling data based on search term, round, and category
   * @returns Filtered array of counseling data
   */
  const filteredData = counselingData.filter((item) => {
    const matchesSearch =
      item.Institute.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.State.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRound =
      selectedRound === "all" || item.Round.toString() === selectedRound;
    const matchesCategory =
      selectedCategory === "all" || item.Category === selectedCategory;
    return matchesSearch && matchesRound && matchesCategory;
  });

  // Get unique values for filters
  const rounds = [
    "all",
    ...Array.from(new Set(counselingData.map((item) => item.Round.toString()))),
  ];
  const categories = [
    "all",
    ...Array.from(new Set(counselingData.map((item) => item.Category))),
  ];

  /**
   * Get round badge color based on round number
   * @param round - Round number
   * @returns CSS class string for badge color
   */
  const getRoundBadgeColor = (round: number) => {
    switch (round) {
      case 1:
        return "bg-green-100 text-green-800";
      case 2:
        return "bg-blue-100 text-blue-800";
      case 3:
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  /**
   * Get category badge color based on category
   * @param category - Category string
   * @returns CSS class string for badge color
   */
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "General":
        return "bg-blue-100 text-blue-800";
      case "OBC":
        return "bg-orange-100 text-orange-800";
      case "SC":
        return "bg-green-100 text-green-800";
      case "ST":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading Counseling Data....</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-xl font-bold text-slate-800">
            INICET PG Counseling Data
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              INICET PG Allotment Data
            </h2>
            <p className="text-indigo-100 text-lg">
              Round-wise seat allotment data for postgraduate medical courses
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search institutes, courses, or states..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedRound}
                onChange={(e) => setSelectedRound(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-800"
              >
                {rounds.map((round) => (
                  <option key={round} value={round}>
                    {round === "all" ? "All Rounds" : `Round ${round}`}
                  </option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-800"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {counselingData.length}
            </div>
            <div className="text-slate-600 text-sm">Total Allotments</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {new Set(counselingData.map((item) => item.Institute)).size}
            </div>
            <div className="text-slate-600 text-sm">Institutes</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {new Set(counselingData.map((item) => item.Course)).size}
            </div>
            <div className="text-slate-600 text-sm">Courses</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {rounds.length - 1}
            </div>
            <div className="text-slate-600 text-sm">Counseling Rounds</div>
          </div>
        </div>

        {/* Counseling Data Table */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800">
                Counseling Allotment Data
              </h3>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Round</th>
                  <th className="px-6 py-4 text-left font-semibold">AI Rank</th>
                  <th className="px-6 py-4 text-left font-semibold">State</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Institute
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Course</th>
                  <th className="px-6 py-4 text-left font-semibold">Quota</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? "bg-white/50" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-2 py-4">
                      <span
                        className={`px-2 py-2 rounded-full text-x font-medium ${getRoundBadgeColor(
                          item.Round
                        )}`}
                      >
                        Round {item.Round}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-slate-800">
                        {item.AI_Rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-700">{item.State}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800 text-sm">
                        {item.Institute}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-700 text-sm">
                        {item.Course}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                        {item.Quota}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(
                          item.Category
                        )}`}
                      >
                        {item.Category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results Message */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No data found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CounselingPage;
