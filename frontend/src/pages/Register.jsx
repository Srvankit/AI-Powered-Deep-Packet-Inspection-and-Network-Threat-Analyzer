import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    Mail,
    User,
    UserPlus,
    ShieldCheck,
    Cpu,
    Activity,
    ArrowRight
} from "lucide-react";

import api from "../api/api";

import Background from "../components/auth/Background";
import Logo from "../components/auth/Logo";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import GradientButton from "../components/auth/GradientButton";

export default function Register() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        setError("");

        if (password !== confirmPassword) {

            setError("Passwords do not match.");

            return;

        }

        setLoading(true);

        try {

            await api.post(
                "/api/auth/register",
                {
                    fullName,
                    email,
                    password
                }
            );

            navigate("/login");

        }

        catch (err) {

            setError(

                err?.response?.data?.message ||

                "Registration failed."

            );

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

                            Join.

                            <br />

                            Protect.

                            <br />

                            Innovate.

                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

                            Build your AI Powered DPI workspace and
                            start analyzing network traffic with
                            enterprise-grade packet inspection,
                            intelligent threat detection and
                            comprehensive reporting.

                        </p>

                        <div className="mt-14 space-y-6">

                            <Feature
                                icon={<ShieldCheck size={22} />}
                                text="AI Threat Intelligence"
                            />

                            <Feature
                                icon={<Cpu size={22} />}
                                text="Deep Packet Inspection"
                            />

                            <Feature
                                icon={<Activity size={22} />}
                                text="Flow & Traffic Analytics"
                            />

                            <Feature
                                icon={<UserPlus size={22} />}
                                text="Secure User Workspace"
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

                                Create Your Account

                            </h2>

                            <p className="mt-3 text-slate-400">

                                Join AI Powered DPI and start securing your network.

                            </p>

                            <form

                                onSubmit={handleRegister}

                                className="mt-10 space-y-6"

                            >

                                <AuthInput

                                    icon={<User className="text-cyan-400" size={20} />}

                                    placeholder="Full Name"

                                    value={fullName}

                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }

                                />

                                <AuthInput

                                    icon={<Mail className="text-cyan-400" size={20} />}

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

                                <PasswordInput

                                    value={confirmPassword}

                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }

                                />

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

                                                "Creating Account..."

                                                :

                                                <>

                                                    Create Account

                                                    <ArrowRight size={18} />

                                                </>

                                        }

                                    </div>

                                </GradientButton>

                            </form>

                            <div className="mt-8 border-t border-white/10 pt-6 text-center">

                                <span className="text-slate-400">

                                    Already have an account?

                                </span>

                                <Link

                                    to="/login"

                                    className="ml-2 font-medium text-cyan-400 hover:text-cyan-300"

                                >

                                    Sign In

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