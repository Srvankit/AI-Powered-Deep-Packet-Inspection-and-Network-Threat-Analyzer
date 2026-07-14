import { useNavigate } from "react-router-dom";
import {
    Bell,
    Search,
    ShieldCheck,
    LogOut,
    UserCircle2
} from "lucide-react";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    const date = new Date();

    return (

        <header
            className="
                h-20
                px-8
                border-b
                border-white/10
                bg-slate-950/90
                backdrop-blur-xl
                flex
                items-center
                justify-between
            "
        >

            {/* Left */}

            <div className="flex items-center gap-8">

                <div>

                    <h1 className="text-2xl font-bold text-white">

                        AI Powered DPI

                    </h1>

                    <p className="text-sm text-slate-400">

                        Enterprise Deep Packet Inspection Platform

                    </p>

                </div>

                {/* Search */}

                <div
                    className="
                        hidden
                        lg:flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-slate-900
                        border
                        border-white/10
                        px-4
                        py-3
                        w-96
                    "
                >

                    <Search
                        size={18}
                        className="text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="
                            w-full
                            bg-transparent
                            outline-none
                            text-white
                            placeholder:text-slate-500
                        "
                    />

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-5">

                {/* Date */}

                <div className="hidden xl:block text-right">

                    <p className="text-sm text-slate-400">

                        {date.toLocaleDateString()}

                    </p>

                    <p className="font-semibold text-white">

                        {date.toLocaleTimeString()}
                    </p>

                </div>

                {/* System Status */}

                <div
                    className="
                        hidden
                        lg:flex
                        items-center
                        gap-2
                        rounded-full
                        bg-green-500/10
                        px-4
                        py-2
                    "
                >

                    <ShieldCheck
                        size={18}
                        className="text-green-400"
                    />

                    <span className="text-green-400 text-sm font-medium">

                        Secure

                    </span>

                </div>

                {/* Notifications */}

                <button
                    className="
                        relative
                        rounded-2xl
                        bg-slate-900
                        border
                        border-white/10
                        p-3
                        hover:bg-slate-800
                        transition
                    "
                >

                    <Bell
                        size={20}
                        className="text-slate-300"
                    />

                    <span
                        className="
                            absolute
                            top-2
                            right-2
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-red-500
                        "
                    />

                </button>

                {/* User */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-slate-900
                        border
                        border-white/10
                        px-4
                        py-2
                    "
                >

                    <UserCircle2
                        size={36}
                        className="text-cyan-400"
                    />

                    <div className="hidden md:block">

                        <p className="font-semibold text-white">

                            Administrator

                        </p>

                        <p className="text-sm text-slate-400">

                            AI DPI Console

                        </p>

                    </div>

                </div>

                {/* Logout */}

                <button

                    onClick={logout}

                    className="
                        flex
                        items-center
                        gap-2
                        rounded-2xl
                        bg-red-600
                        px-5
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-red-700
                    "

                >

                    <LogOut size={18} />

                    Logout

                </button>

            </div>

        </header>

    );

}

export default Navbar;