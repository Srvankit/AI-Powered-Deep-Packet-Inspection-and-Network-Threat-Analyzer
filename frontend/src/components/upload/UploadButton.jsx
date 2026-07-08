function UploadButton({ onClick, disabled, loading }) {

    return (

        <button
            onClick={onClick}
            disabled={disabled || loading}
            className="
                w-full
                bg-cyan-600
                hover:bg-cyan-700
                disabled:bg-slate-700
                disabled:cursor-not-allowed
                text-white
                font-semibold
                py-3
                rounded-xl
                transition-all
            "
        >
            {loading
                ? "Analyzing..."
                : "Analyze Packet Capture"}
        </button>

    );

}

export default UploadButton;