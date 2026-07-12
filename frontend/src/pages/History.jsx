import { useEffect, useState } from "react";
import api from "../api/api";

function History() {

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchHistory();

    }, []);

    const fetchHistory = async () => {

        try {

            const response =
                await api.get("/api/history");

            setHistory(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <h1 className="text-white text-2xl">

                Loading History...

            </h1>

        );

    }

    return (

        <div>

            <h1 className="text-3xl font-bold text-white mb-8">

                Analysis History

            </h1>

            <div className="overflow-x-auto">

                <table className="w-full border border-slate-700">

                    <thead className="bg-slate-800">

                        <tr>

                            <th className="p-3 text-white">File</th>

                            <th className="p-3 text-white">Packets</th>

                            <th className="p-3 text-white">Flows</th>

                            <th className="p-3 text-white">Alerts</th>

                            <th className="p-3 text-white">Time</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            history.map(item => (

                                <tr
                                    key={item.id}
                                    className="border-t border-slate-700">

                                    <td className="p-3 text-gray-300">

                                        {item.fileName}

                                    </td>

                                    <td className="p-3 text-gray-300">

                                        {item.totalPackets}

                                    </td>

                                    <td className="p-3 text-gray-300">

                                        {item.totalFlows}

                                    </td>

                                    <td className="p-3 text-gray-300">

                                        {item.totalAlerts}

                                    </td>

                                    <td className="p-3 text-gray-300">

                                        {item.uploadTime}

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default History;