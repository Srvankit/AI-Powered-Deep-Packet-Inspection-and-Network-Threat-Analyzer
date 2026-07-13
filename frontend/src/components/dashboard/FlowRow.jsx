function FlowRow({ flow }) {

    const protocol = flow.fiveTuple.protocol;

    const protocolStyle = {

        TCP: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",

        UDP: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",

        HTTP: "bg-orange-500/15 text-orange-400 border border-orange-500/30",

        HTTPS: "bg-green-500/15 text-green-400 border border-green-500/30",

        DNS: "bg-purple-500/15 text-purple-400 border border-purple-500/30"

    };

    return (

        <tr
            className="
                border-b
                border-white/10
                transition-all
                duration-300
                hover:bg-cyan-500/5
                hover:scale-[1.003]
            "
        >

            {/* Source */}

            <td className="px-8 py-5">

                <span className="font-mono text-sm text-slate-300">

                    {flow.fiveTuple.sourceIp}

                </span>

            </td>

            {/* Destination */}

            <td className="px-8 py-5">

                <span className="font-mono text-sm text-slate-300">

                    {flow.fiveTuple.destinationIp}

                </span>

            </td>

            {/* Protocol */}

            <td className="px-8 py-5">

                <span

                    className={`
                        rounded-full
                        px-4
                        py-1.5
                        text-xs
                        font-bold
                        tracking-wide
                        ${protocolStyle[protocol] || "bg-slate-700 text-white"}
                    `}

                >

                    {protocol}

                </span>

            </td>

            {/* Packets */}

            <td className="px-8 py-5">

                <span className="font-semibold text-white">

                    {flow.packetCount}

                </span>

            </td>

            {/* Bytes */}

            <td className="px-8 py-5">

                <span className="font-semibold text-white">

                    {flow.byteCount.toLocaleString()}

                </span>

            </td>

            {/* Duration */}

            <td className="px-8 py-5">

                <div className="flex items-center gap-3">

                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>

                    <span className="font-medium text-slate-300">

                        {flow.duration} ms

                    </span>

                </div>

            </td>

        </tr>

    );

}

export default FlowRow;