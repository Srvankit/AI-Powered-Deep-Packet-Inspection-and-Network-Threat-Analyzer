import { motion } from "framer-motion";

import UploadCard from "../components/upload/UploadCard";

function Upload() {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.5
            }}

            className="px-10 py-8"

        >

            <div className="mb-10">

                <h1 className="text-4xl font-black text-white">

                    Upload PCAP

                </h1>

                <p className="mt-3 text-lg text-slate-400">

                    Upload a network capture (.pcap or .pcapng) to begin AI-powered Deep Packet Inspection and threat analysis.

                </p>

            </div>

            <UploadCard />

        </motion.div>

    );

}

export default Upload;