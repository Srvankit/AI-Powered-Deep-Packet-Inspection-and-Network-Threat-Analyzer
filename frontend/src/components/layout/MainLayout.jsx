import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import Upload from "../../pages/Upload";
import Flows from "../../pages/Flows";
import Reports from "../../pages/Reports";
import History from "../../pages/History";
import Settings from "../../pages/Settings";
import AIInsights from "../../pages/AIInsights";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { useLocation } from "react-router-dom";

import ProtectedRoute from "../auth/ProtectedRoute";

function MainLayout() {

    const location = useLocation();

    const authPage =
        location.pathname === "/login" ||
        location.pathname === "/register";

    return (

            <div className="min-h-screen flex flex-col bg-slate-950">

                {!authPage && <Navbar />}

                <div className="flex flex-1">

                    {!authPage && <Sidebar />}

                    <main className="flex-1 px-10 py-8 overflow-auto">

                        <Routes>

                            <Route path="/login" element={<Login />} />

                            <Route path="/register" element={<Register />} />

                            <Route
                                path="/"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/upload"
                                element={
                                    <ProtectedRoute>
                                        <Upload />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/flows"
                                element={
                                    <ProtectedRoute>
                                        <Flows />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/reports"
                                element={
                                    <ProtectedRoute>
                                        <Reports />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/history"
                                element={
                                    <ProtectedRoute>
                                        <History />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/settings"
                                element={
                                    <ProtectedRoute>
                                        <Settings />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/insights"
                                element={
                                    <ProtectedRoute>
                                        <AIInsights />
                                    </ProtectedRoute>
                                }
                            />

                        </Routes>

                    </main>

                </div>

                {!authPage && <Footer />}

            </div>

        );

}

export default MainLayout;