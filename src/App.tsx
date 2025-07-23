import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Auth Pages
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// Main Pages
import DashboardPage from "./pages/DashboardPage";
import DashboardProfilePage from "./pages/DashboardProfilePage";

// NEET Pages
import NeetUGPage from "./pages/NeetUGPage";
import NeetPGPage from "./pages/NeetPGPage";
import INICETPage from "./pages/INICETPage";

// Data Pages
import AllotmentsPage from "./pages/AllotmentsPage";
import ClosingRanksPage from "./pages/ClosingRanksPage";
import SeatMatrixPage from "./pages/SeatMatrixPage";
import FeeStipendBondPage from "./pages/FeeStipendBondPage";

// Component Pages
import FAQPage from "./components/FAQPage";
import SupportPage from "./components/SupportPage";
import UniversitiesPage from "./components/UniversitiesPage";
import MedicalCollegesPage from "./components/MedicalCollegesPage";
import ResultrankingPage from "./components/Resultrankingpage";
import CounsellingPage from "./components/Counsellingpage";

// Predictor Pages
import UGPredictorPage from "./pages/UGPredictorPage";
import PGPredictorPage from "./pages/PGPredictorPage";

/**
 * Main App Component with React Router
 * Restructured with proper authentication flow and navigation
 * All routes are properly organized with API integration comments
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <DashboardProfilePage />
              </ProtectedRoute>
            }
          />

          {/* NEET Exam Routes - API Integration: /api/neet/ */}
          <Route
            path="/neet-ug"
            element={
              <ProtectedRoute>
                <NeetUGPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/neet-pg"
            element={
              <ProtectedRoute>
                <NeetPGPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inicet"
            element={
              <ProtectedRoute>
                <INICETPage />
              </ProtectedRoute>
            }
          />

          {/* Predictor Routes - API Integration: /api/predictor/ */}
          <Route
            path="/predictor/ug"
            element={
              <ProtectedRoute>
                <UGPredictorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/predictor/pg"
            element={
              <ProtectedRoute>
                <PGPredictorPage />
              </ProtectedRoute>
            }
          />

          {/* Data Pages Routes - API Integration: /api/neet/ */}
          <Route
            path="/allotments"
            element={
              <ProtectedRoute>
                <AllotmentsPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/closing-ranks"
            element={
              <ProtectedRoute>
                <ClosingRanksPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seat-matrix"
            element={
              <ProtectedRoute>
                <SeatMatrixPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fee-stipend-bond"
            element={
              <ProtectedRoute>
                <FeeStipendBondPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />

          {/* Information Pages - API Integration: Various endpoints */}
          <Route
            path="/faq"
            element={
              <ProtectedRoute>
                <FAQPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/support"
            element={
              <ProtectedRoute>
                <SupportPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/universities"
            element={
              <ProtectedRoute>
                <UniversitiesPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/medical-colleges"
            element={
              <ProtectedRoute>
                <MedicalCollegesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rankings"
            element={
              <ProtectedRoute>
                <ResultrankingPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/counselling"
            element={
              <ProtectedRoute>
                <CounsellingPage onBack={() => window.history.back()} />
              </ProtectedRoute>
            }
          />

          {/* Default Routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;