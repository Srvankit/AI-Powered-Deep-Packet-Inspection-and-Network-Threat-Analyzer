import { useState } from "react";

import UploadButton from "./UploadButton";
import UploadProgress from "./UploadProgress";

import { analyzePcap } from "../../api/analysisApi";

function UploadCard() {

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {

        if (!file) {

            alert("Please select a PCAP file.");

            return;

        }

        try {

            setLoading(true);

            const result = await analyzePcap(file);

            console.log(result);

            alert("Analysis Completed!");

        }

        catch (error) {

            console.error(error);

            alert("Analysis Failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl p-10 border border-slate-700 shadow-xl">

            <h2 className="text-3xl font-bold text-white">

                Upload PCAP

            </h2>

            <p className="text-slate-400 mt-2">

                Select a packet capture file to begin analysis.

            </p>

            <input
                type="file"
                accept=".pcap,.pcapng"
                className="mt-8 block w-full text-slate-300"
                onChange={(e) => setFile(e.target.files[0])}
            />

            {file && (

                <p className="mt-4 text-cyan-400">

                    Selected File:

                    {" "}

                    {file.name}

                </p>

            )}

            <UploadProgress loading={loading} />

            <div className="mt-8">

                <UploadButton
                    loading={loading}
                    disabled={!file}
                    onClick={handleAnalyze}
                />

            </div>

        </div>

    );

}

export default UploadCard;