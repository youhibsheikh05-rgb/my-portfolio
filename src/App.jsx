import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MernProjects from "./pages/MernProjects";
import Practice from "./pages/Practice";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#08080c] text-zinc-200 relative overflow-x-hidden">
        <CustomCursor />

        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="blob blob-green w-[500px] h-[500px] -top-40 -left-40"></div>
          <div className="blob blob-cyan w-[600px] h-[600px] top-1/2 -right-60"></div>
          <div className="blob blob-purple w-[400px] h-[400px] bottom-0 left-1/3"></div>
        </div>

        <Navbar />

        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<MernProjects />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}