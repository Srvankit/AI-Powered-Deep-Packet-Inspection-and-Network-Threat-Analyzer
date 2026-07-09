import FlowRow from "./FlowRow";
import { useAnalysis } from "../../hooks/useAnalysis";

function FlowTable() {

    const { analysis } = useAnalysis();

    if (!analysis) {

        return null;

    }

    return (

        <div className="mt-10 bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">

            <div className="px-6 py-4 border-b border-slate-700">

                <h2 className="text-2xl font-bold text-white">

                    Network Flows

                </h2>

            </div>

            <table className="w-full text-left">

                <thead className="bg-slate-800">

                    <tr>

                        <th className="px-4 py-3">Source IP</th>

                        <th className="px-4 py-3">Destination IP</th>

                        <th className="px-4 py-3">Protocol</th>

                        <th className="px-4 py-3">Packets</th>

                        <th className="px-4 py-3">Bytes</th>

                        <th className="px-4 py-3">Duration</th>

                    </tr>

                </thead>

                <tbody>

                    {analysis.flowTable.allFlows.map((flow, index) => (

                        <FlowRow
                            key={index}
                            flow={flow}
                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default FlowTable;