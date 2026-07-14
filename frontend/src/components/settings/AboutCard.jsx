import { motion } from "framer-motion";

import {
    Shield,
    Code2,
    Database,
    Cpu,
    BarChart3,
    Globe
} from "lucide-react";

function TechItem({

    icon,

    title,

    value

}) {

    return (

        <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 p-4">

            <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">

                    {icon}

                </div>

                <span className="font-medium text-white">

                    {title}

                </span>

            </div>

            <span className="font-semibold text-cyan-400">

                {value}

            </span>

        </div>

    );

}

function AboutCard() {

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

                    <Shield

                        size={30}

                        className="text-cyan-400"

                    />

                </div>

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        About Project

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Enterprise AI Powered Deep Packet Inspection Platform.

                    </p>

                </div>

            </div>

            {/* Description */}

            <div className="mt-8 rounded-2xl bg-slate-800/60 p-6">

                <p className="leading-8 text-slate-300">

                    AI Powered DPI is an enterprise-grade Deep Packet
                    Inspection platform capable of analyzing PCAP files,
                    detecting suspicious network activity, generating
                    intelligent security insights, managing network flows,
                    and exporting comprehensive analysis reports.

                </p>

            </div>

            {/* Technologies */}

            <div className="mt-8 space-y-5">

                <TechItem

                    icon={<Code2 size={22} />}

                    title="Frontend"

                    value="React + Tailwind"

                />

                <TechItem

                    icon={<Cpu size={22} />}

                    title="Backend"

                    value="Spring Boot"

                />

                <TechItem

                    icon={<Database size={22} />}

                    title="Database"

                    value="PostgreSQL"

                />

                <TechItem

                    icon={<BarChart3 size={22} />}

                    title="Visualization"

                    value="Chart.js"

                />

                <TechItem

                    icon={<Globe size={22} />}

                    title="Deployment Ready"

                    value="Yes"

                />

            </div>

            {/* Footer */}

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                <p className="text-center text-cyan-400 font-semibold">

                    Version 1.0 • Enterprise Edition

                </p>

            </div>

        </motion.div>

    );

}

export default AboutCard;