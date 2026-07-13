import { motion } from "framer-motion";

import {
    Database,
    Network,
    ShieldAlert,
    Globe,
    Globe2,
    Cable,
    Wifi,
    FileJson,
    Lock,
    Search,
    AlertTriangle,
    Activity
} from "lucide-react";

function StatisticsCard({

    title,

    value,

    color

}) {

    const iconMap = {

        Packets: Database,

        Bytes: Activity,

        Flows: Network,

        Threats: ShieldAlert,

        IPv4: Globe,

        IPv6: Globe2,

        TCP: Cable,

        UDP: Wifi,

        HTTP: FileJson,

        HTTPS: Lock,

        DNS: Search,

        "SYN Flood": AlertTriangle

    };

    const Icon = iconMap[title] || Database;

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 25
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            whileHover={{
                y: -6,
                scale: 1.02
            }}

            transition={{
                duration: .35
            }}

            className={`
                relative
                overflow-hidden
                rounded-3xl
                min-h-[170px]
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-3xl
                p-8
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
                hover:border-cyan-400/30
                hover:shadow-[0_0_35px_rgba(6,182,212,.18)]
                transition-all
                duration-300
            `}

        >

            {/* Gradient Line */}

            <div

                className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-violet-500
                "

            />

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-base font-medium text-slate-400">

                        {title}

                    </p>

                    <h2 className="mt-10 text-5xl font-black text-white">

                        {value}

                    </h2>

                </div>

                <div

                    className="
                        rounded-2xl
                        bg-cyan-500/10
                        p-4
                        text-cyan-400
                    "

                >

                    <Icon size={28} />

                </div>

            </div>

            {/* Footer */}

            <div className="mt-6 flex items-center justify-between">

                <span className="text-xs uppercase tracking-widest text-slate-500">

                    Live Metric

                </span>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">

                    Active

                </span>

            </div>

        </motion.div>

    );

}

export default StatisticsCard;