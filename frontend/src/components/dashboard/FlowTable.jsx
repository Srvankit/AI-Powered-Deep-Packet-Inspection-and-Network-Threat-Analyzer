import { motion } from "framer-motion";
import {
    Network,
    Search,
    Activity
} from "lucide-react";

import FlowRow from "./FlowRow";
import { useAnalysis } from "../../hooks/useAnalysis";

function FlowTable() {

    const { analysis } = useAnalysis();

    if (!analysis) {

        return (

            <div className="mt-16 rounded-3xl border border-white/10 bg-slate-900/70 p-10 backdrop-blur-3xl">

                <div className="flex flex-col items-center">

                    <Network
                        size={60}
                        className="text-cyan-400"
                    />

                    <h2 className="mt-5 text-2xl font-bold text-white">

                        No Network Flows

                    </h2>

                    <p className="mt-3 text-slate-400">

                        Upload a PCAP file to inspect active flows.

                    </p>

                </div>

            </div>

        );

    }

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

            className="
                mt-16
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-3xl
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
            "

        >

            {/* Header */}

            <div className="flex flex-col gap-6 border-b border-white/10 p-10 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <div className="flex items-center gap-3">

                        <div className="rounded-2xl bg-cyan-500/10 p-3">

                            <Network
                                size={24}
                                className="text-cyan-400"
                            />

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold text-white">

                                Network Flows

                            </h2>

                            <p className="mt-1 text-slate-400">

                                Live communication detected by the DPI engine

                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">

                        <Search
                            size={18}
                            className="text-slate-400"
                        />

                        <input

                            placeholder="Search Flow..."

                            className="bg-transparent outline-none placeholder:text-slate-500"

                        />

                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

                        <Activity
                            size={16}
                            className="text-green-400"
                        />

                        <span className="text-sm font-medium text-green-400">

                            Live

                        </span>

                    </div>

                </div>

            </div>

            {/* Table */}

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="border-b border-white/10 bg-slate-800/60">

                        <tr className="text-left text-sm uppercase tracking-wider text-slate-400">

                            <th className="px-8 py-6">

                                Source

                            </th>

                            <th className="px-8 py-6">

                                Destination

                            </th>

                            <th className="px-8 py-6">

                                Protocol

                            </th>

                            <th className="px-8 py-6">

                                Packets

                            </th>

                            <th className="px-8 py-6">

                                Bytes

                            </th>

                            <th className="px-8 py-6">

                                Duration

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            analysis.flowTable.allFlows.map(

                                (flow, index) => (

                                    <FlowRow

                                        key={index}

                                        flow={flow}

                                    />

                                )

                            )

                        }

                    </tbody>

                </table>

            </div>

        </motion.div>

    );

}

export default FlowTable;