import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import Upload from "../../pages/Upload";
import Reports from "../../pages/Reports";
import History from "../../pages/History";
import Settings from "../../pages/Settings";

function MainLayout() {

  return (

    <div className="min-h-screen flex flex-col bg-slate-950">

      <Navbar />

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-8 overflow-auto">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/upload" element={<Upload />} />

            <Route path="/reports" element={<Reports />} />

            <Route path="/history" element={<History />} />

            <Route path="/settings" element={<Settings />} />

          </Routes>

        </main>

      </div>

      <Footer />

    </div>

  );

}

export default MainLayout;