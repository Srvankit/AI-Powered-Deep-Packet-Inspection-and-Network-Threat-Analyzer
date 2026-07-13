import { motion } from "framer-motion";
import {
    ShieldAlert,
    AlertTriangle
} from "lucide-react";

import { useAnalysis } from "../../hooks/useAnalysis";
import ThreatCard from "./ThreatCard";

function ThreatPanel() {

    const { analysis } = useAnalysis();

    if (!analysis) {

        return null;

    }

    const threat = analysis.threatDetector;

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

                <div>

                    <div className="flex items-center gap-3">

                        <div className="rounded-2xl bg-red-500/10 p-3">

                            <ShieldAlert

                                size={24}

                                className="text-red-400"

                            />

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold text-white">

                                Threat Detection

                            </h2>

                            <p className="text-slate-400 mt-1">

                                AI detected suspicious traffic patterns during packet inspection.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex items-center gap-3 rounded-full bg-red-500/10 px-5 py-3">

                    <AlertTriangle

                        size={18}

                        className="text-red-400"

                    />

                    <span className="font-semibold text-red-400">

                        {threat.totalAlerts} Alerts

                    </span>

                </div>

            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                <ThreatCard
                    title="SYN Flood"
                    value={threat.synFloodAlerts}
                    color="bg-red-900"
                />

                <ThreatCard
                    title="Port Scan"
                    value={threat.portScanAlerts}
                    color="bg-orange-900"
                />

                <ThreatCard
                    title="DNS Flood"
                    value={threat.dnsFloodAlerts}
                    color="bg-purple-900"
                />

                <ThreatCard
                    title="Large Packets"
                    value={threat.largePacketAlerts}
                    color="bg-cyan-900"
                />

                <ThreatCard
                    title="Suspicious Ports"
                    value={threat.suspiciousPortAlerts}
                    color="bg-blue-900"
                />

                <ThreatCard
                    title="Total Alerts"
                    value={threat.totalAlerts}
                    color="bg-red-800"
                />

            </div>

        </motion.div>

    );

}

export default ThreatPanel;