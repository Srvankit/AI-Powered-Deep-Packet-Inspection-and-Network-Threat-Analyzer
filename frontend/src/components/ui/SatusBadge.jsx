function StatusBadge({

    status

}) {

    const colors = {

        SAFE:
            "bg-green-500/20 text-green-400",

        LOW:
            "bg-yellow-500/20 text-yellow-400",

        MEDIUM:
            "bg-orange-500/20 text-orange-400",

        HIGH:
            "bg-red-500/20 text-red-400"

    };

    return (

        <span

            className={`
                rounded-full
                px-4
                py-2
                text-sm
                font-semibold
                ${colors[status] || colors.SAFE}
            `}

        >

            {status}

        </span>

    );

}

export default StatusBadge;