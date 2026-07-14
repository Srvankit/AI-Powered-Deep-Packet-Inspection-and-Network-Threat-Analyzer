import { motion } from "framer-motion";
import { Loader2, ShieldCheck } from "lucide-react";

function UploadProgress({ loading }) {

    if (!loading) return null;

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 10
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.35
            }}

            className="
                mt-8
                rounded-3xl
                border
                border-cyan-500/20
                bg-cyan-500/5
                p-6
            "

        >

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-cyan-500/10 p-3">

                        <Loader2

                            size={24}

                            className="animate-spin text-cyan-400"

                        />

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold text-white">

                            AI Analysis Running

                        </h3>

                        <p className="text-slate-400">

                            Uploading and inspecting network packets...

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

                    <ShieldCheck
                        size={18}
                        className="text-green-400"
                    />

                    <span className="text-sm font-semibold text-green-400">

                        Secure

                    </span>

                </div>

            </div>

            {/* Progress Bar */}

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">

                <motion.div

                    initial={{ width: "0%" }}

                    animate={{ width: "100%" }}

                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}

                    className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        via-blue-500
                        to-indigo-500
                    "

                />

            </div>

            <div className="mt-4 flex justify-between text-sm text-slate-400">

                <span>

                    Deep Packet Inspection

                </span>

                <span>

                    AI Threat Detection

                </span>

            </div>

        </motion.div>

    );

}

export default UploadProgress;