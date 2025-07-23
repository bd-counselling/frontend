import React, { useState } from "react";
import {
  Heart,
  Plus,
  ChevronRight,
  Trash2,
  Edit3,
  Star,
  TrendingUp,
  Eye,
} from "lucide-react";

/**
 * ChoiceList Interface
 * Defines the structure of a choice list item
 */
interface ChoiceList {
  id: string;
  name: string;
  count: number;
  color: string;
  priority: "high" | "medium" | "low";
}

/**
 * ChoiceLists Component
 * Manages and displays user's choice lists for college preferences
 * Includes create, edit, and delete functionality
 * API Integration: GET/POST/PUT/DELETE /api/counselling/choice-lists/
 */
interface ChoiceListsProps {
  choiceLists?: any[];
}

const ChoiceLists: React.FC<ChoiceListsProps> = ({ choiceLists: propChoiceLists }) => {
  // State for managing choice lists
  const [lists, setLists] = useState<ChoiceList[]>(propChoiceLists || [
    {
      id: "1",
      name: "AIQ R1 Priority List",
      count: 28,
      color: "bg-red-50 border-red-200",
      priority: "high",
    },
    {
      id: "2",
      name: "Maharashtra Govt List",
      count: 14,
      color: "bg-blue-50 border-blue-200",
      priority: "medium",
    },
    {
      id: "3",
      name: "General Medicine DNB List",
      count: 22,
      color: "bg-green-50 border-green-200",
      priority: "high",
    },
    {
      id: "4",
      name: "Private Medical Colleges",
      count: 18,
      color: "bg-purple-50 border-purple-200",
      priority: "low",
    },
  ]);

  // State for managing create form visibility
  const [showCreateForm, setShowCreateForm] = useState(false);
  // State for new list name input
  const [newListName, setNewListName] = useState("");

  /**
   * Create a new choice list
   * Adds a new list to the state with default values
   * API Integration: POST /api/counselling/choice-lists/
   */
  const createNewList = () => {
    if (newListName.trim()) {
      const newList: ChoiceList = {
        id: Date.now().toString(),
        name: newListName.trim(),
        count: 0,
        color: "bg-indigo-50 border-indigo-200",
        priority: "medium",
      };
      setLists([...lists, newList]);
      setNewListName("");
      setShowCreateForm(false);
    }
  };

  /**
   * Delete a choice list
   * @param id - ID of the list to delete
   * API Integration: DELETE /api/counselling/choice-lists/{id}/
   */
  const deleteList = (id: string) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  /**
   * Get priority icon based on priority level
   * @param priority - Priority level string
   * @returns JSX element for the priority icon
   */
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <Star className="w-4 h-4 text-yellow-500" />;
      case "medium":
        return <TrendingUp className="w-4 h-4 text-blue-500" />;
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-300"></div>;
    }
  };

  return (
    <>
      {/* Mobile Choice Lists - Integrated into main content */}
      <div className="xl:hidden px-4 py-6 pt-20 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                My Choice lists
              </h2>
              <p className="text-sm text-slate-500">
                {lists.length} choice lists
              </p>
            </div>
          </div>
          <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-sm font-medium flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>View all</span>
          </button>
        </div>

        <div className="space-y-3">
          {lists.slice(0, 3).map((list) => (
            <div
              key={list.id}
              className={`p-4 rounded-xl border-2 ${list.color} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getPriorityIcon(list.priority)}
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">
                      {list.name}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {list.count} choices
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowCreateForm(true)}
          className="w-full mt-4 flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Create new</span>
        </button>
      </div>

      {/* Desktop Choice Lists - Sidebar */}
      <div className="hidden xl:block w-80 bg-white/90 backdrop-blur-xl border-l border-slate-200/50 h-screen overflow-y-auto flex-shrink-0 fixed right-0 top-0 z-20 pt-10">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Choice Lists</h2>
              <p className="text-sm text-slate-500">Manage your preferences</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-blue-200/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">
                {lists.reduce((sum, list) => sum + list.count, 0)}
              </div>
              <div className="text-sm text-blue-600">Total Choices</div>
            </div>
          </div>

          <div className="space-y-4">
            {lists.map((list) => (
              <div
                key={list.id}
                className={`p-4 rounded-xl border-2 ${list.color} hover:shadow-lg transition-all duration-300 group transform hover:scale-105`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getPriorityIcon(list.priority)}
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {list.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {list.count} choices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
                      <Edit3 className="w-4 h-4 text-slate-600" />
                    </button>
                    <button
                      onClick={() => deleteList(list.id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showCreateForm ? (
            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <input
                type="text"
                placeholder="Enter list name..."
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === "Enter" && createNewList()}
              />
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={createNewList}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium"
                >
                  Create
                </button>
                <button
                  onClick={() => {
                    setShowCreateForm(false);
                    setNewListName("");
                  }}
                  className="flex-1 px-4 py-2 bg-slate-300 text-slate-700 rounded-xl hover:bg-slate-400 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowCreateForm(true)}
              className="w-full mt-6 flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Create New List</span>
            </button>
          )}
        </div>

        {/* Announcements Section */}
        <div className="p-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800">Latest Updates</h3>
            <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50">
              <h4 className="font-semibold text-blue-900 mb-2">
                NEET 2025 Results
              </h4>
              <p className="text-sm text-blue-700 mb-2">
                Results declared! Check your scorecard now
              </p>
              <div className="text-xs text-blue-600">2 hours ago</div>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
              <h4 className="font-semibold text-green-900 mb-2">
                Round 3 Registration
              </h4>
              <p className="text-sm text-green-700 mb-2">
                Registration opens from Oct 8, 2024
              </p>
              <div className="text-xs text-green-600">5 hours ago</div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
              <h4 className="font-semibold text-purple-900 mb-2">
                Seat Matrix 2025
              </h4>
              <p className="text-sm text-purple-700 mb-2">
                Updated seat matrix available for download
              </p>
              <div className="text-xs text-purple-600">1 day ago</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoiceLists;
