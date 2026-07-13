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

            "SYN Flood",

            "Port Scan",

            "DNS Flood",

            "Large Packets",

            "Suspicious Ports"

        ],

        datasets: [

            {

                label: "Detected Threats",

                data: [

                    t.synFloodAlerts,

                    t.portScanAlerts,

                    t.dnsFloodAlerts,

                    t.largePacketAlerts,

                    t.suspiciousPortAlerts

                ],

                backgroundColor: [

                    "#EF4444",

                    "#F97316",

                    "#A855F7",

                    "#06B6D4",

                    "#3B82F6"

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

            },

            tooltip: {

                backgroundColor: "#0F172A",

                titleColor: "#FFFFFF",

                bodyColor: "#CBD5E1",

                borderColor: "#334155",

                borderWidth: 1

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

                        size: 12

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

                        size: 12

                    }

                }

            }

        }

    };

    return (

        <div className="h-[340px]">

            <h2 className="mb-6 text-xl font-bold text-white">

                Threat Overview

            </h2>

            <Bar

                data={data}

                options={options}

            />

        </div>

    );

}

export default ThreatChart;