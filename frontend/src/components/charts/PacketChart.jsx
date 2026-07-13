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

function PacketChart() {

    const { analysis } = useAnalysis();

    if (!analysis) return null;

    const stats = analysis.statistics;

    const data = {
        labels: [
            "IPv4",
            "IPv6",
            "TCP",
            "UDP"
        ],

        datasets: [
            {
                label: "Packets",

                data: [
                    stats.ipv4Packets,
                    stats.ipv6Packets,
                    stats.tcpPackets,
                    stats.udpPackets
                ],

                backgroundColor: [
                    "#06B6D4",
                    "#3B82F6",
                    "#22C55E",
                    "#FACC15"
                ],

                borderRadius: 12,

                borderSkipped: false,

                maxBarThickness: 45
            }
        ]
    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                labels: {

                    color: "#CBD5E1",

                    font: {
                        size: 14,
                        weight: "bold"
                    }

                }

            }

        },

        scales: {

            x: {

                grid: {

                    display: false

                },

                ticks: {

                    color: "#CBD5E1",

                    font: {

                        size: 13

                    }

                }

            },

            y: {

                beginAtZero: true,

                grid: {

                    color: "rgba(255,255,255,0.08)"

                },

                ticks: {

                    color: "#CBD5E1",

                    font: {

                        size: 13

                    }

                }

            }

        }

    };

    return (

        <div className="h-[340px]">

            <h2 className="mb-6 text-xl font-bold text-white">

                Packet Statistics

            </h2>

            <Bar

                data={data}

                options={options}

            />

        </div>

    );

}

export default PacketChart;