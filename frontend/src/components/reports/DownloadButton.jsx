import { motion } from "framer-motion";
import {
    Download,
    Loader2
} from "lucide-react";

function DownloadButton({

    title,

    onClick,

    loading = false,

    disabled = false

}) {

    return (

        <motion.button

            whileHover={
                !disabled
                    ? { scale: 1.02 }
                    : {}
            }

            whileTap={
                !disabled
                    ? { scale: 0.98 }
                    : {}
            }

            onClick={onClick}

            disabled={disabled || loading}

            className="
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-indigo-600
                px-6
                py-4
                text-white
                font-semibold
                text-lg
                shadow-lg
                shadow-cyan-500/20
                transition-all
                duration-300
                hover:shadow-cyan-500/40
                disabled:opacity-50
                disabled:cursor-not-allowed
            "

        >

            {

                loading

                    ?

                    <div className="flex items-center justify-center gap-3">

                        <Loader2

                            size={20}

                            className="animate-spin"

                        />

                        Downloading...

                    </div>

                    :

                    <div className="flex items-center justify-center gap-3">

                        <Download size={20} />

                        {title}

                    </div>

            }

        </motion.button>

    );

}

export default DownloadButton;  