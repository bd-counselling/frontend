import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../../App";
import NeetUGPage from "../../pages/NeetUGPage";
import NeetPGPage from "../../pages/NeetPGPage";
import INICETPage from "../../pages/INICETPage";
import AllotmentsPage from "../../pages/AllotmentsPage";
import ClosingRanksPage from "../../pages/ClosingRanksPage";
import SeatMatrixPage from "../../pages/SeatMatrixPage";
import FeeStipendBondPage from "../../pages/FeeStipendBondPage";
import ResultrankingPage from "../Resultrankingpage"; // Adjust path if needed

import CounsellingPage from "../Counsellingpage";

/**
 * NEW COMMIT: Enhanced Router Component with Additional Data Pages
 * Added routes for allotments, closing ranks, seat matrix, and fee/stipend/bond pages
 */
const AppRouter: React.FC = () => {
  // const ResultRankingPage = () => {
  //   return <div>Result Ranking Page</div>;
  // };

  return (
    <Router>
      <Routes>
        {/* Main App Route */}
        <Route path="/" element={<App />} />

        {/* NEET Exam Routes */}
        <Route path="/neet-ug" element={<NeetUGPage />} />
        <Route path="/neet-pg" element={<NeetPGPage />} />
        <Route path="/inicet" element={<INICETPage />} />

        {/* Data Pages Routes */}
        <Route
          path="/allotments"
          element={<AllotmentsPage onBack={() => window.history.back()} />}
        />
        <Route
          path="/closing-ranks"
          element={<ClosingRanksPage onBack={() => window.history.back()} />}
        />
        <Route
          path="/seat-matrix"
          element={<SeatMatrixPage onBack={() => window.history.back()} />}
        />
        <Route
          path="/fee-stipend-bond"
          element={<FeeStipendBondPage onBack={() => window.history.back()} />}
        />

        {/* Results and Rankings Route */}
        <Route
          path="/resultranking"
          element={<ResultrankingPage onBack={() => window.history.back()} />}
        />

        {/* Counselling Route */}
        <Route
          path="/Counselling"
          element={<CounsellingPage onBack={() => window.history.back()} />}
        />
        <Route
          path="/Counselling"
          element={<CounsellingPage onBack={() => window.history.back()} />}
        />
        {/* <Route path="/resultranking" element={<ResultrankingPage />} /> */}

        {/* <Route path="/faq" element={<FAQPage />} /> */}

        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
