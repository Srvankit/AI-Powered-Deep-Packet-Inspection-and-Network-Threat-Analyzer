import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
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

                ],

                backgroundColor: [

                    "#06B6D4",
                    "#FACC15",
                    "#FB923C",
                    "#22C55E",
                    "#A855F7"

                ],

                borderColor: "#0F172A",

                borderWidth: 4,

                hoverOffset: 18

            }

        ]

    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "68%",

        plugins: {

            legend: {

                position: "bottom",

                labels: {

                    color: "#CBD5E1",

                    padding: 18,

                    boxWidth: 14,

                    font: {

                        size: 13,

                        weight: "bold"

                    }

                }

            },

            tooltip: {

                backgroundColor: "#0F172A",

                titleColor: "#FFFFFF",

                bodyColor: "#CBD5E1",

                borderColor: "#334155",

                borderWidth: 1

            }

        }

    };

    return (

        <div className="h-[340px]">

            <h2 className="mb-6 text-xl font-bold text-white">

                Protocol Distribution

            </h2>

            <Doughnut

                data={data}

                options={options}

            />

        </div>

    );

}

export default ProtocolChart;