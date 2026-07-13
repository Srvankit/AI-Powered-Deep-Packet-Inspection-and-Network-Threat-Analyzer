import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Mail,
    ArrowRight,
    ShieldCheck,
    Cpu,
    Activity,
    LockKeyhole
} from "lucide-react";

import api from "../api/api";
import { AuthContext } from "../context/AuthContext";

import Background from "../components/auth/Background";
import Logo from "../components/auth/Logo";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import GradientButton from "../components/auth/GradientButton";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        setLoading(true);

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

        }

        catch {

            setError("Invalid email or password.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>
            <Background />

            <div className="min-h-screen overflow-hidden flex items-center justify-center px-8 lg:px-20">

                <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-20">

                    {/* LEFT */}

                    <motion.div

                        initial={{ opacity: 0, x: -80 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: .8 }}

                        className="hidden lg:block max-w-2xl"

                    >

                        <Logo />

                        <h2 className="mt-14 text-7xl font-black leading-[1.05] tracking-tight text-white">

                            Secure.

                            <br />

                            Analyze.

                            <br />

                            Detect.

                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

                            AI Powered Deep Packet Inspection combines
                            intelligent threat detection, real-time
                            traffic analysis and advanced reporting
                            into one enterprise-grade cybersecurity
                            platform.

                        </p>

                        <div className="mt-14 space-y-6">

                            <Feature

                                icon={<ShieldCheck size={22} />}

                                text="AI Powered Threat Detection"

                            />

                            <Feature

                                icon={<Cpu size={22} />}

                                text="Deep Packet Inspection Engine"

                            />

                            <Feature

                                icon={<Activity size={22} />}

                                text="Real-Time Network Analytics"

                            />

                            <Feature

                                icon={<LockKeyhole size={22} />}

                                text="Enterprise Security Reports"

                            />

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div

                        initial={{ opacity: 0, x: 80 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: .8, delay: .2 }}

                    >

                        <AuthCard>

                            <h2 className="text-4xl font-bold text-white">

                                Welcome Back 👋

                            </h2>

                            <p className="mt-3 text-slate-400">

                                Sign in to continue to your dashboard.

                            </p>

                            <form

                                onSubmit={handleLogin}

                                className="mt-10 space-y-6"

                            >

                                <AuthInput

                                    icon={

                                        <Mail

                                            size={20}

                                            className="text-cyan-400"

                                        />

                                    }

                                    placeholder="Email Address"

                                    value={email}

                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }

                                />

                                <PasswordInput

                                    value={password}

                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }

                                />

                                <div className="flex items-center justify-between text-sm">

                                    <label className="flex items-center gap-2 text-slate-400">

                                        <input

                                            type="checkbox"

                                            className="accent-cyan-500"

                                        />

                                        Remember Me

                                    </label>

                                    <button

                                        type="button"

                                        className="text-cyan-400 hover:text-cyan-300"

                                    >

                                        Forgot Password?

                                    </button>

                                </div>

                                {

                                    error && (

                                        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-red-400">

                                            {error}

                                        </div>

                                    )

                                }

                                <GradientButton type="submit">

                                    <div className="flex items-center justify-center gap-2">

                                        {

                                            loading

                                                ?

                                                "Signing In..."

                                                :

                                                <>

                                                    Login

                                                    <ArrowRight size={18} />

                                                </>

                                        }

                                    </div>

                                </GradientButton>

                            </form>

                            <div className="mt-8 border-t border-white/10 pt-6 text-center">

                                <span className="text-slate-400">

                                    Don't have an account?

                                </span>

                                <Link

                                    to="/register"

                                    className="ml-2 font-medium text-cyan-400 transition hover:text-cyan-300"

                                >

                                    Create Account

                                </Link>

                            </div>

                        </AuthCard>

                    </motion.div>

                </div>

            </div>

        </>

    );

}

function Feature({ icon, text }) {

    return (

        <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                {icon}

            </div>

            <span className="text-lg text-slate-300">

                {text}

            </span>

        </div>

    );

}