import { useState } from "react";
import { motion } from "framer-motion";
import {
    UploadCloud,
    FileText,
    CheckCircle2,
    Loader2
} from "lucide-react";

import UploadButton from "./UploadButton";
import UploadProgress from "./UploadProgress";
import { useAnalysis } from "../../hooks/useAnalysis";
import { analyzePcap } from "../../api/analysisApi";

function UploadCard() {

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    const { setAnalysis } = useAnalysis();

    const handleAnalyze = async () => {

        if (!file) {

            setError("Please select a PCAP file.");

            return;

        }

        try {

            setLoading(true);

            setError("");

            setMessage("");

            const result = await analyzePcap(file);

            setAnalysis(result);

            setMessage("Analysis completed successfully.");

        }

        catch (err) {

            console.error(err);

            setError("Analysis failed. Please try again.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 25
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: .5
            }}

            className="
                mx-auto
                max-w-4xl
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                p-10
                backdrop-blur-3xl
                shadow-[0_15px_45px_rgba(0,0,0,.35)]
            "

        >

            <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-cyan-500/10 p-4">

                    <UploadCloud

                        size={30}

                        className="text-cyan-400"

                    />

                </div>

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        Upload Network Capture

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Upload a .pcap or .pcapng file to perform AI-powered Deep Packet Inspection.

                    </p>

                </div>

            </div>

            <label

                className="
                    mt-10
                    flex
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border-2
                    border-dashed
                    border-cyan-500/30
                    bg-cyan-500/5
                    p-14
                    transition
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                "

            >

                <UploadCloud

                    size={52}

                    className="text-cyan-400"

                />

                <h3 className="mt-5 text-xl font-semibold text-white">

                    Drag & Drop or Click to Upload

                </h3>

                <p className="mt-2 text-slate-400">

                    Supported formats: .pcap, .pcapng

                </p>

                <input

                    type="file"

                    accept=".pcap,.pcapng"

                    className="hidden"

                    onChange={(e) => {

                        setFile(e.target.files[0]);

                        setError("");

                        setMessage("");

                    }}

                />

            </label>

            {file && (

                <div className="mt-8 flex items-center gap-4 rounded-2xl bg-slate-800/70 p-5">

                    <FileText

                        size={28}

                        className="text-cyan-400"

                    />

                    <div className="flex-1">

                        <p className="font-semibold text-white">

                            {file.name}

                        </p>

                        <p className="text-sm text-slate-400">

                            {(file.size / 1024).toFixed(2)} KB

                        </p>

                    </div>

                    <CheckCircle2

                        className="text-green-400"

                    />

                </div>

            )}

            <div className="mt-8">

                <UploadProgress loading={loading} />

            </div>

            {message && (

                <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">

                    {message}

                </div>

            )}

            {error && (

                <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">

                    {error}

                </div>

            )}

            <div className="mt-10">

                <UploadButton

                    loading={loading}

                    disabled={!file}

                    onClick={handleAnalyze}

                >

                    {loading ? (

                        <div className="flex items-center justify-center gap-2">

                            <Loader2

                                className="animate-spin"

                                size={20}

                            />

                            Analyzing...

                        </div>

                    ) : (

                        "Start Analysis"

                    )}

                </UploadButton>

            </div>

        </motion.div>

    );

}

export default UploadCard;