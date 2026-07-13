import { motion } from "framer-motion";

import {
    ShieldAlert,
    AlertTriangle,
    Radar,
    Database,
    Network,
    ShieldCheck
} from "lucide-react";

function ThreatCard({ title, value }) {

    const iconMap = {

        "SYN Flood": ShieldAlert,

        "Port Scan": Radar,

        "DNS Flood": Database,

        "Large Packets": Network,

        "Suspicious Ports": AlertTriangle,

        "Total Alerts": ShieldCheck

    };

    const colorMap = {

        "SYN Flood":
            "text-red-400 bg-red-500/10",

        "Port Scan":
            "text-orange-400 bg-orange-500/10",

        "DNS Flood":
            "text-purple-400 bg-purple-500/10",

        "Large Packets":
            "text-cyan-400 bg-cyan-500/10",

        "Suspicious Ports":
            "text-blue-400 bg-blue-500/10",

        "Total Alerts":
            "text-red-500 bg-red-500/10"

    };

    const Icon = iconMap[title] || ShieldAlert;

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            whileHover={{
                y: -5,
                scale: 1.02
            }}

            transition={{
                duration: .3
            }}

            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-3xl
                p-7
                min-h-[170px]
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
                hover:border-red-500/30
                hover:shadow-[0_0_35px_rgba(239,68,68,.15)]
                transition-all
            "

        >

            {/* Gradient */}

            <div

                className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-red-500
                    via-orange-500
                    to-yellow-400
                "

            />

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-base font-medium text-slate-400">

                        {title}

                    </p>

                    <h2 className="mt-6 text-5xl font-black text-white">

                        {value}

                    </h2>

                </div>

                <div

                    className={`
                        rounded-2xl
                        p-4
                        ${colorMap[title]}
                    `}

                >

                    <Icon size={28} />

                </div>

            </div>

            <div className="mt-10 flex items-center justify-between">

                <span className="text-sm text-slate-500">

                    Threat Status

                </span>

                <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-400">

                    Active

                </span>

            </div>

        </motion.div>

    );

}

export default ThreatCard;