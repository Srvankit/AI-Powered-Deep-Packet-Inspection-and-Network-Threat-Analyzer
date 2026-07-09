function FlowRow({ flow }) {

    return (

        <tr className="border-b border-slate-700 hover:bg-slate-800">

            <td className="px-4 py-3">
                {flow.fiveTuple.sourceIp}
            </td>

            <td className="px-4 py-3">
                {flow.fiveTuple.destinationIp}
            </td>

            <td className="px-4 py-3">
                {flow.fiveTuple.protocol}
            </td>

            <td className="px-4 py-3">
                {flow.packetCount}
            </td>

            <td className="px-4 py-3">
                {flow.byteCount}
            </td>

            <td className="px-4 py-3">
                {flow.duration} ms
            </td>

        </tr>

    );

}

export default FlowRow;