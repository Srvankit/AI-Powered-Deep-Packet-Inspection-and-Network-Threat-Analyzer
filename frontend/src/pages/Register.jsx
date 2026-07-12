import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/api";

export default function Register() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/api/auth/register", {

                fullName,
                email,
                password

            });

            navigate("/login");

        } catch (err) {

            alert("Registration Failed");

        }

    };

    return (

        <div className="flex justify-center items-center h-screen">

            <form
                onSubmit={handleSubmit}
                className="bg-slate-900 p-8 rounded-xl w-96">

                <h1 className="text-3xl mb-6 text-white">
                    Register
                </h1>

                <input
                    className="w-full mb-4 p-3 rounded"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value)}
                />

                <input
                    className="w-full mb-4 p-3 rounded"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full mb-6 p-3 rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button
                    className="w-full bg-cyan-500 text-white p-3 rounded">

                    Register

                </button>

            </form>

        </div>

    );

}