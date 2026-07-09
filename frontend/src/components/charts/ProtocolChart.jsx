import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { useAnalysis } from "../../hooks/useAnalysis";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function ProtocolChart() {

    const { analysis } = useAnalysis();

    if (!analysis) return null;

    const stats = analysis.statistics;

    const data = {

        labels: [

            "TCP",
            "UDP",
            "HTTP",
            "HTTPS",
            "DNS"

        ],

        datasets: [

            {

                data: [

                    stats.tcpPackets,
                    stats.udpPackets,
                    stats.httpPackets,
                    stats.httpsPackets,
                    stats.dnsPackets

                ]

            }

        ]

    };

    return (

        <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-4">

                Protocol Distribution

            </h2>

            <Doughnut data={data} />

        </div>

    );

}

export default ProtocolChart;