import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const MedicalCollegesPage: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortField, setSortField] = useState<SortField>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    axios.get<College[]>('http://localhost:8000/api/medical-colleges/')
      .then(res => setColleges(res.data))
      .catch(err => console.error('Failed to fetch colleges:', err));
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Medical Colleges</h1>

      <input
        type="text"
        placeholder="Search by name, state, or type..."
        className="mb-4 px-4 py-2 w-full border border-blue-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-blue-200 bg-white">
          <thead className="bg-blue-100 text-left">
            <tr>
              <th className="p-4 text-blue-900">#</th>
              <th className="p-4 text-blue-900">Name</th>
              <th className="p-4 text-blue-900">State</th>
              <th className="p-4 text-blue-900">Type</th>
              <th className="p-4 text-blue-900">Ownership</th>
              <th
                className="p-4 cursor-pointer select-none text-blue-900"
                onClick={() => toggleSort('total_seats')}
              >
                Total Seats {sortField === 'total_seats' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                className="p-4 cursor-pointer select-none text-blue-900"
                onClick={() => toggleSort('ranking')}
              >
                Ranking {sortField === 'ranking' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedColleges.map((college, index) => (
              <tr key={college.id} className="border-t border-blue-100 hover:bg-blue-50">
                <td className="p-4 text-blue-700">{index + 1}</td>
                <td className="p-4 font-medium text-blue-700">{college.name}</td>
                <td className="p-4 text-blue-700">{college.state}</td>
                <td className="p-4 text-blue-700">{college.type}</td>
                <td className="p-4 text-blue-700">{college.ownership}</td>
                <td className="p-4 text-blue-700">{college.total_seats ?? '-'}</td>
                <td className="p-4 text-blue-700">{college.ranking ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalCollegesPage;
