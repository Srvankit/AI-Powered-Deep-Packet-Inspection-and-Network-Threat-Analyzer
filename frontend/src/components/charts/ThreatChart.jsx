import {

    Chart as ChartJS,

    CategoryScale,

    LinearScale,

    BarElement,

    Tooltip,

    Legend

} from "chart.js";

import { Bar } from "react-chartjs-2";

import { useAnalysis } from "../../hooks/useAnalysis";

ChartJS.register(

    CategoryScale,

    LinearScale,

    BarElement,

    Tooltip,

    Legend

);

function ThreatChart() {

    const { analysis } = useAnalysis();

    if (!analysis) return null;

    const t = analysis.threatDetector;

    const data = {

        labels: [

            "SYN",

            "Port Scan",

            "DNS",

            "Large",

            "Ports"

        ],

        datasets: [

            {

                label: "Threats",

                data: [

                    t.synFloodAlerts,

                    t.portScanAlerts,

                    t.dnsFloodAlerts,

                    t.largePacketAlerts,

                    t.suspiciousPortAlerts

                ]

            }

        ]

    };

    return (

        <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-4">

                Threat Overview

            </h2>

            <Bar data={data} />

        </div>

    );

}

export default ThreatChart;