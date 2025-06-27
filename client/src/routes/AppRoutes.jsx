import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "@pages/Home";
import CheckBackSoon from "@pages/CheckBackSoon";
import NotFound from "@pages/NotFound";

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
        <Route path="/games" element={<ComingSoonRoute />} />
        <Route path="/guides" element={<ComingSoonRoute />} />
        <Route path="/about" element={<ComingSoonRoute />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
