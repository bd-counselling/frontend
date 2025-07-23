import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Users,
  Building2,
  MapPin,
  Search,
  Filter,
  Download,
  Eye,
  Award,
  Calendar,
} from "lucide-react";

interface AllotmentsPageProps {
  onBack: () => void;
}

interface AllotmentData {
  Institute_Name: string;
  Institute_Type: string;
  Course: string;
  Quota: string;
  Category: string;
  Opening_Rank: number;
  Closing_Rank: number;
  Year: number;
  Round: number;
  State: string;
}

/**
 * NEW COMMIT: Allotments Page Component
 * Displays NEET UG allotment data with search and filter functionality
 * CSV file: Neet_UG_Allotment_data_all-open_seats.csv
 */
const AllotmentsPage: React.FC<AllotmentsPageProps> = ({ onBack }) => {
  const [allotmentData, setAllotmentData] = useState<AllotmentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  /**
   * Parse CSV data into allotment objects
   */
  const parseCSV = (csvText: string): AllotmentData[] => {
    const lines = csvText.trim().split("\n");
    const headers = lines[0].split(",");

    return lines.slice(1).map((line) => {
      const values = line.split(",");
      return {
        Institute_Name: values[0] || "",
        Institute_Type: values[1] || "",
        Course: values[2] || "",
        Quota: values[3] || "",
        Category: values[4] || "",
        Opening_Rank: parseInt(values[5]) || 0,
        Closing_Rank: parseInt(values[6]) || 0,
        Year: parseInt(values[7]) || 2024,
        Round: parseInt(values[8]) || 1,
        State: values[9] || "",
      };
    });
  };

  /**
   * Fetch allotment data from CSV file
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/Neet_UG_Allotment_data_all-open_seats.csv");
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setAllotmentData(parsedData);
      } catch (error) {
        console.error("Error fetching allotment data:", error);
        // Fallback data for demonstration
        setAllotmentData([
          {
            Institute_Name: "All India Institute of Medical Sciences, New Delhi",
            Institute_Type: "Government",
            Course: "MBBS",
            Quota: "All India",
            Category: "General",
            Opening_Rank: 1,
            Closing_Rank: 100,
            Year: 2024,
            Round: 1,
            State: "Delhi",
          },
          {
            Institute_Name: "Christian Medical College, Vellore",
            Institute_Type: "Private",
            Course: "MBBS",
            Quota: "All India",
            Category: "General",
            Opening_Rank: 101,
            Closing_Rank: 500,
            Year: 2024,
            Round: 1,
            State: "Tamil Nadu",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Filter allotment data based on search and filters
   */
  const filteredData = allotmentData.filter((item) => {
    const matchesSearch =
      item.Institute_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.State.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || item.State === selectedState;
    const matchesType = selectedType === "all" || item.Institute_Type === selectedType;
    return matchesSearch && matchesState && matchesType;
  });

  // Get unique values for filters
  const states = ["all", ...Array.from(new Set(allotmentData.map((item) => item.State)))];
  const types = ["all", ...Array.from(new Set(allotmentData.map((item) => item.Institute_Type)))];

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading Allotment Data...</p>
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
          <h1 className="text-xl font-bold text-slate-800">NEET UG Allotments</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">NEET UG Seat Allotments</h2>
            <p className="text-blue-100 text-lg">
              Complete allotment data for medical colleges across India
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
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-800"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state === "all" ? "All States" : state}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-800"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
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
              {allotmentData.length}
            </div>
            <div className="text-slate-600 text-sm">Total Allotments</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {new Set(allotmentData.map((item) => item.Institute_Name)).size}
            </div>
            <div className="text-slate-600 text-sm">Institutes</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {new Set(allotmentData.map((item) => item.State)).size}
            </div>
            <div className="text-slate-600 text-sm">States</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {allotmentData.filter((item) => item.Institute_Type === "Government").length}
            </div>
            <div className="text-slate-600 text-sm">Government Colleges</div>
          </div>
        </div>

        {/* Allotment Data Table */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800">Allotment Data</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export Data</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Institute</th>
                  <th className="px-6 py-4 text-left font-semibold">Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Course</th>
                  <th className="px-6 py-4 text-left font-semibold">State</th>
                  <th className="px-6 py-4 text-left font-semibold">Opening Rank</th>
                  <th className="px-6 py-4 text-left font-semibold">Closing Rank</th>
                  <th className="px-6 py-4 text-left font-semibold">Category</th>
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
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800 text-sm">
                        {item.Institute_Name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.Institute_Type === "Government"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {item.Institute_Type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-700">{item.Course}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-700">{item.State}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-green-600">
                        {item.Opening_Rank.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-red-600">
                        {item.Closing_Rank.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
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
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No data found</h3>
            <p className="text-slate-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllotmentsPage;