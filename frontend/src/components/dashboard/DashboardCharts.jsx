import { motion } from "framer-motion";

import {
    BarChart3,
    Activity
} from "lucide-react";

import ProtocolChart from "../charts/ProtocolChart";
import PacketChart from "../charts/PacketChart";
import ThreatChart from "../charts/ThreatChart";

function DashboardCharts() {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 30
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: .5
            }}

            className="mt-20"

        >

            {/* Header */}

            <div className="flex items-center justify-between mb-8">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-cyan-500/10 p-3">

                        <BarChart3
                            size={24}
                            className="text-cyan-400"
                        />

                    </div>

                    <div>

                        <h2 className="text-3xl font-bold text-white">

                            Network Analytics

                        </h2>

                        <p className="mt-1 text-slate-400">

                            Visual representation of packet statistics and protocol distribution.

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-5 py-3">

                    <Activity
                        size={18}
                        className="text-green-400"
                    />

                    <span className="font-semibold text-green-400">

                        Live

                    </span>

                </div>

            </div>

            {/* Charts */}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-3xl">

                    <ProtocolChart />

                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-3xl">

                    <PacketChart />

                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-3xl">

                    <ThreatChart />

                </div>

            </div>

        </motion.div>

    );

}

export default DashboardCharts;