import ProtocolBadge from "./ProtocolBadge";

function FlowRow({ flow }) {

    return (

        <tr className="border-b border-slate-800 hover:bg-slate-800 cursor-pointer">

            <td className="py-4">

                {flow.fiveTuple.sourceIp}

            </td>

            <td>

                {flow.fiveTuple.destinationIp}

            </td>

            <td>

                <ProtocolBadge

                    protocol={flow.fiveTuple.protocol}

                />

            </td>

            <td>

                {flow.packetCount}

            </td>

            <td>

                {flow.byteCount}

            </td>

            <td>

                {flow.duration} ms

            </td>

        </tr>

    );

}

export default FlowRow;