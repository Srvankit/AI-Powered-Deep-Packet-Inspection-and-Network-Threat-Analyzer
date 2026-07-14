import { motion } from "framer-motion";
import { UploadCloud, Loader2 } from "lucide-react";

function UploadButton({

    onClick,

    disabled,

    loading,

    children

}) {

    return (

        <motion.button

            whileHover={
                !disabled && !loading
                    ? { scale: 1.02 }
                    : {}
            }

            whileTap={
                !disabled && !loading
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
                text-lg
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition-all
                duration-300
                hover:shadow-cyan-500/40
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:shadow-none
            "

        >

            {

                loading

                    ?

                    <div className="flex items-center justify-center gap-3">

                        <Loader2

                            size={22}

                            className="animate-spin"

                        />

                        <span>

                            Running AI Analysis...

                        </span>

                    </div>

                    :

                    children ||

                    <div className="flex items-center justify-center gap-3">

                        <UploadCloud size={22} />

                        <span>

                            Analyze Packet Capture

                        </span>

                    </div>

            }

        </motion.button>

    );

}

export default UploadButton;