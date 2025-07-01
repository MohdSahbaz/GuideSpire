import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "@pages/Home";
import CheckBackSoon from "@components/CheckBackSoon";
import NotFound from "@pages/NotFound";
import AllGames from "@pages/AllGames";
import Game from "../pages/Game";

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
        <Route
          path="/game/:slug"
          element={
            <MainLayout>
              <Game />
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
