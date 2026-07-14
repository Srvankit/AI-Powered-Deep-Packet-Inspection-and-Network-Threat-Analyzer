import { motion } from "framer-motion";

import {
    Package,
    Moon,
    MonitorSmartphone,
    CalendarDays,
    Cpu
} from "lucide-react";

function InfoRow({

    icon,

    title,

    value,

    valueColor = "text-white"

}) {

    return (

        <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 border border-white/5 p-4 transition-all hover:bg-slate-800">

            <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">

                    {icon}

                </div>

                <span className="font-medium text-white">

                    {title}

                </span>

            </div>

            <span className={`font-semibold ${valueColor}`}>

                {value}

            </span>

        </div>

    );

}

function ApplicationCard() {

    const lastUpdated = new Date().toLocaleDateString();

    return (

        <motion.div

            whileHover={{
                y: -5,
                scale: 1.01
            }}

            transition={{
                duration: 0.3
            }}

            className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-3xl
                p-8
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
            "

        >

            {/* Header */}

            <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-cyan-500/10 p-4">

                    <Package

                        size={30}

                        className="text-cyan-400"

                    />

                </div>

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        Application

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Information about the AI Powered DPI platform.

                    </p>

                </div>

            </div>

            {/* Information */}

            <div className="mt-8 space-y-5">

                <InfoRow

                    icon={<Package size={22} />}

                    title="Version"

                    value="v1.0.0"

                    valueColor="text-cyan-400"

                />

                <InfoRow

                    icon={<Moon size={22} />}

                    title="Theme"

                    value="Dark Mode"

                    valueColor="text-blue-400"

                />

                <InfoRow

                    icon={<MonitorSmartphone size={22} />}

                    title="Environment"

                    value="Production"

                    valueColor="text-green-400"

                />

                <InfoRow

                    icon={<Cpu size={22} />}

                    title="Technology"

                    value="React + Spring Boot"

                />

                <InfoRow

                    icon={<CalendarDays size={22} />}

                    title="Last Updated"

                    value={lastUpdated}

                />

            </div>

            {/* Footer */}

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                <div className="flex items-center justify-between">

                    <span className="text-slate-400">

                        Build Status

                    </span>

                    <span className="font-semibold text-green-400">

                        Stable ✔

                    </span>

                </div>

            </div>

        </motion.div>

    );

}

export default ApplicationCard;