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

                ]

            }

        ]

    };

    return (

        <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-4">

                Packet Statistics

            </h2>

            <Bar data={data} />

        </div>

    );

}

export default PacketChart;