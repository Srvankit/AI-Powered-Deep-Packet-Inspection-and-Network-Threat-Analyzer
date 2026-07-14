import { motion } from "framer-motion";

import {
    FileBarChart,
    ShieldAlert,
    Network,
    Lock
} from "lucide-react";

import { useAnalysis } from "../../hooks/useAnalysis";

function ReportSummary() {

    const { analysis } = useAnalysis();

    if (!analysis) return null;

    const s = analysis.statistics;
    const t = analysis.threatDetector;

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

            transition={{
                duration: .5
            }}

            className="
                mb-12
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-3xl
                p-10
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
            "

        >

            {/* Header */}

            <div className="flex items-center gap-4">

                <div
                    className="
                        rounded-2xl
                        bg-cyan-500/10
                        p-4
                    "
                >

                    <FileBarChart

                        size={32}

                        className="text-cyan-400"

                    />

                </div>

                <div>

                    <h2 className="text-4xl font-black text-white">

                        Latest Security Report

                    </h2>

                    <p className="mt-2 text-lg text-slate-400">

                        Executive overview of the most recent Deep Packet Inspection analysis.

                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

                <SummaryCard

                    icon={<Network size={26} />}

                    title="Total Packets"

                    value={s.totalPackets}

                    color="text-cyan-400"

                />

                <SummaryCard

                    icon={<Network size={26} />}

                    title="Network Flows"

                    value={analysis.flowTable.flowCount}

                    color="text-blue-400"

                />

                <SummaryCard

                    icon={<ShieldAlert size={26} />}

                    title="Threat Alerts"

                    value={t.totalAlerts}

                    color="text-red-400"

                />

                <SummaryCard

                    icon={<Lock size={26} />}

                    title="HTTPS Traffic"

                    value={s.httpsPackets}

                    color="text-green-400"

                />

            </div>

        </motion.div>

    );

}

function SummaryCard({

    icon,

    title,

    value,

    color

}) {

    return (

        <div

            className="
                rounded-2xl
                border
                border-white/10
                bg-slate-800/60
                p-6
                transition
                hover:border-cyan-400/30
                hover:-translate-y-1
            "

        >

            <div className="flex items-center justify-between">

                <div className={color}>

                    {icon}

                </div>

                <span className="text-xs uppercase tracking-widest text-slate-500">

                    Latest

                </span>

            </div>

            <h3 className="mt-6 text-base font-medium text-slate-400">

                {title}

            </h3>

            <h2 className="mt-3 text-4xl font-black text-white">

                {value.toLocaleString()}

            </h2>

        </div>

    );

}

export default ReportSummary;