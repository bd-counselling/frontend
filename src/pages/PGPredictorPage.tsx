import React, { useState } from "react";
import { ArrowLeft, Target, Search, Calculator, TrendingUp, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { predictorAPI } from "../services/api";

/**
 * NEET PG Specialty Predictor Page
 * Predicts specialty admission chances based on NEET PG rank
 * API Integration: POST /api/predictor/pg/
 */
const PGPredictorPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rank: "",
    category: "",
    specialization: "",
  });
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const categories = ["General", "OBC", "SC", "ST", "EWS"];
  const specializations = [
    "General Medicine", "General Surgery", "Pediatrics", "Obstetrics & Gynecology",
    "Orthopedics", "Anesthesiology", "Radiology", "Pathology", "Dermatology",
    "Psychiatry", "ENT", "Ophthalmology", "Emergency Medicine", "Cardiology",
    "Neurology", "Gastroenterology", "Pulmonology", "Nephrology"
  ];

  /**
   * Handle form input changes
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handle prediction form submission
   * API Integration: POST /api/predictor/pg/
   */
  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await predictorAPI.predictPG({
        rank: parseInt(formData.rank),
        category: formData.category,
        specialization: formData.specialization,
      });
      
      setPredictions(response.data.predictions);
    } catch (error: any) {
      setError(error.response?.data?.message || "Prediction failed");
    } finally {
      setIsLoading(false);
    }
  };

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
          <h1 className="text-xl font-bold text-slate-800">NEET PG Specialty Predictor</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">NEET PG Specialty Predictor</h2>
            <p className="text-green-100 text-lg">
              Predict your admission chances in postgraduate medical specializations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Prediction Form */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Enter Your Details</h3>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handlePredict} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    NEET PG Rank
                  </label>
                  <input
                    type="number"
                    name="rank"
                    value={formData.rank}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your NEET PG rank"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Specialization
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Specialization</option>
                    {specializations.map((spec) => (
                      <option key={spec} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Predicting...</span>
                    </div>
                  ) : (
                    "Predict Specializations"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Prediction Results */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Prediction Results</h3>
              </div>

              {predictions.length > 0 ? (
                <div className="space-y-4">
                  {predictions.map((prediction: any, index: number) => (
                    <div
                      key={index}
                      className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-slate-800">
                          {prediction.institute_name}
                        </h4>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            prediction.admission_chance === "High"
                              ? "bg-green-100 text-green-800"
                              : prediction.admission_chance === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {prediction.admission_chance} Chance
                        </span>
                      </div>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>Specialization: {prediction.specialization}</p>
                        <p>Location: {prediction.location}</p>
                        <p>Closing Rank: {prediction.closing_rank}</p>
                        <p>Seats Available: {prediction.seats}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    No Predictions Yet
                  </h3>
                  <p className="text-slate-600">
                    Enter your details and click "Predict Specializations" to see your admission chances
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGPredictorPage;