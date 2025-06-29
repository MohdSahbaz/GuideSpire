import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "@pages/Home";
import CheckBackSoon from "@pages/CheckBackSoon";
import NotFound from "@pages/NotFound";
import AllGames from "@pages/AllGames";

const ComingSoonRoute = () => (
  <MainLayout>
    <CheckBackSoon />
  </MainLayout>
);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* Under Construction Pages */}
        <Route
          path="/games"
          element={
            <MainLayout>
              <AllGames />
            </MainLayout>
          }
        />
        <Route path="/guides" element={<ComingSoonRoute />} />
        <Route path="/about" element={<ComingSoonRoute />} />
        <Route path="/news" element={<ComingSoonRoute />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
