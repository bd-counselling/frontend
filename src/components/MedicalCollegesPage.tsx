import React, { useEffect, useState } from 'react';
import { collegesAPI } from '../services/api';
import { ArrowLeft, Search, Filter, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface College {
  id: number;
  name: string;
  state: string;
  type: string;
  ownership: string;
  total_seats: number | null;
  ranking: number | null;
}

type SortField = 'ranking' | 'total_seats' | '';
type SortOrder = 'asc' | 'desc';

/**
 * Medical Colleges Page Component
 * Displays medical colleges with search and filter functionality
 * API Integration: GET /api/medical-colleges/
 */
const MedicalCollegesPage: React.FC = () => {
  const navigate = useNavigate();
  const [colleges, setColleges] = useState<College[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortField, setSortField] = useState<SortField>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  /**
   * Fetch medical colleges data
   * API Integration: GET /api/medical-colleges/
   */
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await collegesAPI.getAll({
          search: searchTerm,
        });
        setColleges(response.data.results || response.data);
      } catch (err) {
        console.error('Failed to fetch colleges:', err);
        setError('Failed to load medical colleges data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filteredAndSortedColleges = colleges
    .filter(college =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      const aVal = a[sortField] ?? 0;
      const bVal = b[sortField] ?? 0;
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Medical Colleges</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Medical Colleges Directory</h2>
            <p className="text-indigo-100 text-lg">
              Comprehensive database of medical colleges across India
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-8">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, state, or type..."
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600">Loading medical colleges...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Colleges Table */}
        {!isLoading && !error && (
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
          <thead className="bg-blue-100 text-left">
            <tr>
                <th className="px-6 py-4 text-blue-900 font-semibold">#</th>
                <th className="px-6 py-4 text-blue-900 font-semibold">Name</th>
                <th className="px-6 py-4 text-blue-900 font-semibold">State</th>
                <th className="px-6 py-4 text-blue-900 font-semibold">Type</th>
                <th className="px-6 py-4 text-blue-900 font-semibold">Ownership</th>
              <th
                  className="px-6 py-4 cursor-pointer select-none text-blue-900 font-semibold"
                onClick={() => toggleSort('total_seats')}
              >
                Total Seats {sortField === 'total_seats' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                  className="px-6 py-4 cursor-pointer select-none text-blue-900 font-semibold"
                onClick={() => toggleSort('ranking')}
              >
                Ranking {sortField === 'ranking' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedColleges.map((college, index) => (
                <tr key={college.id} className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                  index % 2 === 0 ? "bg-white/50" : "bg-slate-50/50"
                }`}>
                  <td className="px-6 py-4 text-slate-700">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">{college.name}</td>
                  <td className="px-6 py-4 text-slate-700">{college.state}</td>
                  <td className="px-6 py-4 text-slate-700">{college.type}</td>
                  <td className="px-6 py-4 text-slate-700">{college.ownership}</td>
                  <td className="px-6 py-4 text-slate-700">{college.total_seats ?? '-'}</td>
                  <td className="px-6 py-4 text-slate-700">{college.ranking ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalCollegesPage;
