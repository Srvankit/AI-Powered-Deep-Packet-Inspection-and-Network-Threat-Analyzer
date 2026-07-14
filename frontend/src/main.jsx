import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
                    <Toaster

                        position="top-right"

                        reverseOrder={false}

                        toastOptions={{

                            duration: 3500,

                            style: {

                                background: "#0F172A",

                                color: "#fff",

                                border: "1px solid #1E293B",

                                borderRadius: "14px"

                            }

                        }}

                    />
                </BrowserRouter>
            </AnalysisProvider>
        </AuthProvider>
    </React.StrictMode>
);