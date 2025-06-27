import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F1A24] text-white transition-colors duration-200">
      <Navbar />

      <main className="flex-1 px-4 sm:px-8 md:px-16 py-6">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
