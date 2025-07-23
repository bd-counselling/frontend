import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Award,
  Building2,
  MapPin,
  Users,
  IndianRupee,
  Calendar,
  Trophy,
  Search,
  Filter,
} from "lucide-react";

interface ResultrankingPageProps {
  onBack: () => void;
}

interface CollegeData {
  NIRF_Rank_2024: number;
  College_Name: string;
  City: string;
  State: string;
  NIRF_Score: number;
  Tuition_Fees_Per_Year: number;
  MBBS_Seats: number;
  NEET_Cutoff_AIR_General: number;
  Established: number;
  College_Type: string;
}

/**
 * NIRF Rankings Page Component
 * Displays top medical colleges based on NIRF rankings with detailed information
 * Features search, filtering, and comprehensive college data in table format
 */
const ResultrankingPage: React.FC<ResultrankingPageProps> = ({ onBack }) => {
  // State for college data
  const [colleges, setColleges] = useState<CollegeData[]>([]);
  // State for loading status
  const [loading, setLoading] = useState(true);
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  // State for college type filter
  const [selectedType, setSelectedType] = useState("all");

  /**
   * Parse CSV data into college objects
   * @param csvText - Raw CSV text data
   * @returns Array of college data objects
   */
  const parseCSV = (csvText: string): CollegeData[] => {
    const lines = csvText.trim().split("\n");
    // const headers = lines[0].split(",");

    return lines.slice(1).map((line) => {
      const values = line.split(",");
      return {
        NIRF_Rank_2024: parseInt(values[0]),
        College_Name: values[1],
        City: values[2],
        State: values[3],
        NIRF_Score: parseFloat(values[4]),
        Tuition_Fees_Per_Year: parseInt(values[5]),
        MBBS_Seats: parseInt(values[6]),
        NEET_Cutoff_AIR_General: parseInt(values[7]),
        Established: parseInt(values[8]),
        College_Type: values[9],
      };
    });
  };

  /**
   * Fetch NIRF rankings data from CSV file
   * Loads data on component mount
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/TOP_50_NIRF.csv");
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setColleges(parsedData);
      } catch (error) {
        console.error("Error fetching NIRF data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Filter colleges based on search term and type
   * @returns Filtered array of colleges
   */
  const filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.College_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.City.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.State.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" ||
      college.College_Type.toLowerCase() === selectedType.toLowerCase();
    return matchesSearch && matchesType;
  });

  /**
   * Format currency values for display
   * @param amount - Numeric amount to format
   * @returns Formatted currency string
   */
  const formatCurrency = (amount: number) => {
    if (amount === 0) return "Free";
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    return `₹${amount.toLocaleString()}`;
  };

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading NIRF Rankings...</p>
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
            NIRF Rankings 2024
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              NIRF Medical College Rankings 2024
            </h2>
            <p className="text-amber-100 text-lg">
              Top 50 medical colleges based on National Institutional Ranking
              Framework
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
                placeholder="Search colleges, cities, or states..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800"
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-slate-600" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-800"
              >
                <option value="all">All Types</option>
                <option value="government">Government</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Rank</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    College Name
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    NIRF Score
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Fees</th>
                  <th className="px-6 py-4 text-left font-semibold">Seats</th>
                  <th className="px-6 py-4 text-left font-semibold">Cutoff</th>
                  <th className="px-6 py-4 text-left font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredColleges.map((college, index) => (
                  <tr
                    key={college.NIRF_Rank_2024}
                    className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? "bg-white/50" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                            college.NIRF_Rank_2024 <= 3
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                              : college.NIRF_Rank_2024 <= 10
                              ? "bg-gradient-to-r from-blue-400 to-blue-600"
                              : "bg-gradient-to-r from-slate-400 to-slate-600"
                          }`}
                        >
                          {college.NIRF_Rank_2024}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">
                          {college.College_Name}
                        </div>
                        <div className="text-xs text-slate-600 flex items-center mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          Est. {college.Established}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-slate-700">
                        <MapPin className="w-4 h-4 mr-1 text-slate-500" />
                        <div>
                          <div className="font-medium text-sm">
                            {college.City}
                          </div>
                          <div className="text-xs text-slate-600">
                            {college.State}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-amber-500" />
                        <span className="font-bold text-slate-800">
                          {college.NIRF_Score}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <IndianRupee className="w-4 h-4 mr-1 text-green-600" />
                        <span className="font-medium text-slate-800">
                          {formatCurrency(college.Tuition_Fees_Per_Year)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-blue-600" />
                        <span className="font-medium text-slate-800">
                          {college.MBBS_Seats}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {college.NEET_Cutoff_AIR_General}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          college.College_Type === "Government"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {college.College_Type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results Message */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No colleges found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {colleges.length}
            </div>
            <div className="text-slate-600 text-sm">Total Colleges</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {colleges.reduce((sum, college) => sum + college.MBBS_Seats, 0)}
            </div>
            <div className="text-slate-600 text-sm">Total MBBS Seats</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {colleges.filter((c) => c.College_Type === "Government").length}
            </div>
            <div className="text-slate-600 text-sm">Government Colleges</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {colleges.filter((c) => c.College_Type === "Private").length}
            </div>
            <div className="text-slate-600 text-sm">Private Colleges</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultrankingPage;
