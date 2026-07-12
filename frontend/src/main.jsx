import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import AuthProvider from "./context/AuthContext";
import { AnalysisProvider } from "./context/AnalysisContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <AnalysisProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AnalysisProvider>
        </AuthProvider>
    </React.StrictMode>
);