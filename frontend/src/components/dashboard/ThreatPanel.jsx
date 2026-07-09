import { useAnalysis } from "../../hooks/useAnalysis";
import ThreatCard from "./ThreatCard";

function ThreatPanel() {

    const { analysis } = useAnalysis();

    if (!analysis) {

        return null;

    }

    const threat = analysis.threatDetector;

    return (

        <div className="mt-10">

            <h2 className="text-3xl font-bold text-white mb-6">

                Threat Detection

            </h2>

            <div className="grid grid-cols-3 gap-6">

                <ThreatCard
                    title="SYN Flood"
                    value={threat.synFloodAlerts}
                    color="bg-red-900"
                />

                <ThreatCard
                    title="Port Scan"
                    value={threat.portScanAlerts}
                    color="bg-orange-800"
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
                    color="bg-red-700"
                />

            </div>

        </div>

    );

}

export default ThreatPanel;