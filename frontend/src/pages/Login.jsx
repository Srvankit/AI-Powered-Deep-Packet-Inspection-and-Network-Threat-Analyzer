import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(
                "/api/auth/login",
                {
                    email,
                    password
                }
            );

            login(response.data);

            navigate("/");

        } catch {

            setError("Invalid email or password.");

        }

    };

    return (

        <div className="login-container">

            <h1>AI Powered DPI</h1>

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }

                />

                <button type="submit">

                    Login

                </button>

            </form>

            <p>{error}</p>

        </div>

    );

}