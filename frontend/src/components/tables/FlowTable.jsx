import { useEffect, useState } from "react";
import { getFlows } from "../../api/flowApi";

function FlowTable() {

    const [flows, setFlows] = useState([]);

    useEffect(() => {

        async function loadFlows() {

            try {

                const data = await getFlows();

                setFlows(data.allFlows || []);

            }

            catch (err) {

                console.error(err);

            }

        }

        loadFlows();

    }, []);

    return (

        <div className="bg-slate-900 rounded-xl p-6">

            <h2 className="text-2xl font-bold text-white mb-6">

                Network Flows

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="text-cyan-400 border-b border-slate-700">

                        <th className="text-left py-3">Source</th>
                        <th className="text-left py-3">Destination</th>
                        <th className="text-left py-3">Protocol</th>
                        <th className="text-left py-3">Packets</th>
                        <th className="text-left py-3">Bytes</th>

                    </tr>

                </thead>

                <tbody>

                    {flows.map((flow, index) => (

                        <tr
                            key={index}
                            className="border-b border-slate-800 hover:bg-slate-800"
                        >

                            <td className="py-3">
                                {flow.fiveTuple.sourceIp}
                            </td>

                            <td className="py-3">
                                {flow.fiveTuple.destinationIp}
                            </td>

                            <td className="py-3">
                                {flow.fiveTuple.protocol}
                            </td>

                            <td className="py-3">
                                {flow.packetCount}
                            </td>

                            <td className="py-3">
                                {flow.byteCount}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default FlowTable;