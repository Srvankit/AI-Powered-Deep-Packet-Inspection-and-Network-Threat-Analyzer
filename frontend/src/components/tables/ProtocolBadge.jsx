function ProtocolBadge({ protocol }) {

    let color = "bg-gray-700";

    if(protocol==="TCP") color="bg-green-600";

    if(protocol==="UDP") color="bg-orange-500";

    if(protocol==="HTTP") color="bg-blue-600";

    if(protocol==="HTTPS") color="bg-cyan-600";

    if(protocol==="DNS") color="bg-purple-600";

    return(

        <span className={`${color} px-3 py-1 rounded-full text-sm`}>

            {protocol}

        </span>

    );

}

export default ProtocolBadge;