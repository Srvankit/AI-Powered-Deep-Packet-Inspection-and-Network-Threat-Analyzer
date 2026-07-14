import { motion } from "framer-motion";

import {
    FileJson,
    FileText,
    FileSpreadsheet,
    Download
} from "lucide-react";

import DownloadButton from "./DownloadButton";

function DownloadCard({

    title,

    description,

    color,

    onClick

}) {

    const getIcon = () => {

        if (title.includes("JSON")) {

            return <FileJson size={34} className="text-cyan-400" />;

        }

        if (title.includes("Text")) {

            return <FileText size={34} className="text-blue-400" />;

        }

        return <FileSpreadsheet size={34} className="text-red-400" />;

    };

    return (

        <motion.div

            whileHover={{

                y: -8,

                scale: 1.02

            }}

            transition={{

                duration: .3

            }}

            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-3xl
                p-8
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
                hover:border-cyan-400/20
                hover:shadow-[0_0_40px_rgba(6,182,212,.15)]
            "

        >

            {/* Gradient Line */}

            <div

                className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-violet-500
                "

            />

            {/* Icon */}

            <div className="flex items-center justify-between">

                <div
                    className="
                        rounded-2xl
                        bg-cyan-500/10
                        p-4
                    "
                >

                    {getIcon()}

                </div>

                <Download

                    size={22}

                    className="text-slate-500"

                />

            </div>

            {/* Title */}

            <h2 className="mt-8 text-2xl font-bold text-white">

                {title}

            </h2>

            {/* Description */}

            <p className="mt-4 leading-7 text-slate-400">

                {description}

            </p>

            {/* Footer */}

            <div className="mt-10">

                        <DownloadButton
                title="Download Report"
                onClick={onClick}
            />

            </div>

        </motion.div>

    );

}

export default DownloadCard;