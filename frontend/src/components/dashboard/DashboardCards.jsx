import StatisticsCard from "./StatisticsCard";
import { useAnalysis } from "../../hooks/useAnalysis";

function DashboardCards() {

    const { analysis } = useAnalysis();

    if (!analysis) {

        return (

            <div className="grid grid-cols-4 gap-6 mt-10">

                <StatisticsCard
                    title="Packets"
                    value="-"
                    color="bg-slate-900"
                />

                <StatisticsCard
                    title="Bytes"
                    value="-"
                    color="bg-slate-900"
                />

                <StatisticsCard
                    title="Flows"
                    value="-"
                    color="bg-slate-900"
                />

                <StatisticsCard
                    title="Threats"
                    value="-"
                    color="bg-red-900"
                />

                <StatisticsCard
                    title="IPv4"
                    value="-"
                    color="bg-blue-900"
                />

                <StatisticsCard
                    title="IPv6"
                    value="-"
                    color="bg-indigo-900"
                />

                <StatisticsCard
                    title="TCP"
                    value="-"
                    color="bg-green-900"
                />

                <StatisticsCard
                    title="UDP"
                    value="-"
                    color="bg-yellow-700"
                />

                <StatisticsCard
                    title="HTTP"
                    value="-"
                    color="bg-orange-700"
                />

                <StatisticsCard
                    title="HTTPS"
                    value="-"
                    color="bg-cyan-900"
                />

                <StatisticsCard
                    title="DNS"
                    value="-"
                    color="bg-purple-900"
                />

                <StatisticsCard
                    title="SYN Flood"
                    value="-"
                    color="bg-red-800"
                />

            </div>

        );

    }

    return (

        <div className="grid grid-cols-4 gap-8 mt-8">

            {/* Row 1 */}

            <StatisticsCard
                title="Packets"
                value={analysis.statistics.totalPackets}
                color="bg-slate-900"
            />

            <StatisticsCard
                title="Bytes"
                value={analysis.statistics.totalBytes}
                color="bg-slate-900"
            />

            <StatisticsCard
                title="Flows"
                value={analysis.flowTable.flowCount}
                color="bg-slate-900"
            />

            <StatisticsCard
                title="Threats"
                value={analysis.threatDetector.totalAlerts}
                color="bg-red-900"
            />

            {/* Row 2 */}

            <StatisticsCard
                title="IPv4"
                value={analysis.statistics.ipv4Packets}
                color="bg-blue-900"
            />

            <StatisticsCard
                title="IPv6"
                value={analysis.statistics.ipv6Packets}
                color="bg-indigo-900"
            />

            <StatisticsCard
                title="TCP"
                value={analysis.statistics.tcpPackets}
                color="bg-green-900"
            />

            <StatisticsCard
                title="UDP"
                value={analysis.statistics.udpPackets}
                color="bg-yellow-700"
            />

            {/* Row 3 */}

            <StatisticsCard
                title="HTTP"
                value={analysis.statistics.httpPackets}
                color="bg-orange-700"
            />

            <StatisticsCard
                title="HTTPS"
                value={analysis.statistics.httpsPackets}
                color="bg-cyan-900"
            />

            <StatisticsCard
                title="DNS"
                value={analysis.statistics.dnsPackets}
                color="bg-purple-900"
            />

            <StatisticsCard
                title="SYN Flood"
                value={analysis.threatDetector.synFloodAlerts}
                color="bg-red-800"
            />

        </div>

    );

}

export default DashboardCards;