import { useEffect, useMemo, useState } from "react";
import { getFlows } from "../../api/flowApi";
import FlowToolbar from "./FlowToolbar";
import FlowRow from "./FlowRow";
import Pagination from "./Pagination";

function FlowTable() {

    const [flows, setFlows] = useState([]);

    const [search, setSearch] = useState("");

    const [page, setPage] = useState(1);

    const rowsPerPage = 10;

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

    const filteredFlows = useMemo(() => {

        return flows.filter(flow => {

            const source = flow.fiveTuple.sourceIp.toLowerCase();

            const destination = flow.fiveTuple.destinationIp.toLowerCase();

            const protocol = flow.fiveTuple.protocol.toLowerCase();

            return (

                source.includes(search.toLowerCase())

                ||

                destination.includes(search.toLowerCase())

                ||

                protocol.includes(search.toLowerCase())

            );

        });

    }, [flows, search]);

    const start = (page - 1) * rowsPerPage;

    const currentRows = filteredFlows.slice(start, start + rowsPerPage);

    return (

        <div className="bg-slate-900 rounded-xl p-6 shadow-xl">

            <h2 className="text-3xl font-bold text-white mb-6">

                Network Flows

            </h2>

            <FlowToolbar

                search={search}

                setSearch={setSearch}

            />

            <table className="w-full mt-6">

                <thead>

                    <tr className="border-b border-slate-700 text-cyan-400">

                        <th className="text-left py-3">Source</th>

                        <th className="text-left py-3">Destination</th>

                        <th className="text-left py-3">Protocol</th>

                        <th className="text-left py-3">Packets</th>

                        <th className="text-left py-3">Bytes</th>

                        <th className="text-left py-3">Duration</th>

                    </tr>

                </thead>

                <tbody>

                    {currentRows.map((flow, index) => (

                        <FlowRow

                            key={index}

                            flow={flow}

                        />

                    ))}

                </tbody>

            </table>

            <Pagination

                current={page}

                total={Math.ceil(filteredFlows.length / rowsPerPage)}

                onChange={setPage}

            />

        </div>

    );

}

export default FlowTable;