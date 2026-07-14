import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
    LogOut,
    RotateCcw,
    Trash2,
    TriangleAlert
} from "lucide-react";

function ActionButton({

    icon,

    title,

    color,

    hover,

    onClick

}) {

    return (

        <button

            onClick={onClick}

            className={`
                w-full
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                ${color}
                ${hover}
            `}

        >

            {icon}

            {title}

        </button>

    );

}

function DangerZone() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    const clearAnalysis = () => {

        localStorage.removeItem("analysis");

        window.location.reload();

    };

    const resetSession = () => {

        localStorage.clear();

        navigate("/login");

    };

    return (

        <motion.div

            whileHover={{
                y: -5,
                scale: 1.01
            }}

            transition={{
                duration: .3
            }}

            className="
                rounded-3xl
                border
                border-red-500/20
                bg-slate-900/70
                backdrop-blur-3xl
                p-8
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
            "

        >

            {/* Header */}

            <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-red-500/10 p-4">

                    <TriangleAlert

                        size={30}

                        className="text-red-400"

                    />

                </div>

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        Danger Zone

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Administrative actions that affect your current session.

                    </p>

                </div>

            </div>

            {/* Warning */}

            <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-5">

                <p className="leading-7 text-red-300">

                    These actions cannot always be undone. Use them only when
                    necessary. Clearing the current analysis removes the loaded
                    results from this session, while resetting the session signs
                    you out and clears local application data.

                </p>

            </div>

            {/* Buttons */}

            <div className="mt-8 space-y-5">

                <ActionButton

                    icon={<Trash2 size={20} />}

                    title="Clear Current Analysis"

                    color="bg-orange-600"

                    hover="hover:bg-orange-700"

                    onClick={clearAnalysis}

                />

                <ActionButton

                    icon={<RotateCcw size={20} />}

                    title="Reset Session"

                    color="bg-red-600"

                    hover="hover:bg-red-700"

                    onClick={resetSession}

                />

                <ActionButton

                    icon={<LogOut size={20} />}

                    title="Logout"

                    color="bg-gradient-to-r from-red-600 to-rose-600"

                    hover="hover:from-red-700 hover:to-rose-700"

                    onClick={logout}

                />

            </div>

        </motion.div>

    );

}

export default DangerZone;