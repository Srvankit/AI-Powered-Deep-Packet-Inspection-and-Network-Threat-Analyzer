import { motion } from "framer-motion";
import { ShieldAlert, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    return (

        <motion.div

            initial={{
                opacity: 0,
                scale: .95
            }}

            animate={{
                opacity: 1,
                scale: 1
            }}

            transition={{
                duration: .5
            }}

            className="
                min-h-screen
                flex
                items-center
                justify-center
                px-6
            "

        >

            <div
                className="
                    max-w-xl
                    w-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-slate-900/70
                    backdrop-blur-3xl
                    p-12
                    text-center
                "
            >

                <div className="flex justify-center">

                    <div className="rounded-full bg-red-500/10 p-6">

                        <ShieldAlert

                            size={60}

                            className="text-red-400"

                        />

                    </div>

                </div>

                <h1 className="mt-8 text-7xl font-black text-white">

                    404

                </h1>

                <h2 className="mt-4 text-3xl font-bold text-white">

                    Packet Lost

                </h2>

                <p className="mt-6 leading-8 text-slate-400">

                    The requested page doesn't exist or the route
                    could not be found.

                </p>

                <button

                    onClick={() => navigate("/dashboard")}

                    className="
                        mt-10
                        inline-flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        px-8
                        py-4
                        font-semibold
                        text-white
                        hover:scale-105
                        transition-all
                    "

                >

                    <Home size={20} />

                    Back to Dashboard

                </button>

            </div>

        </motion.div>

    );

}

export default NotFound;