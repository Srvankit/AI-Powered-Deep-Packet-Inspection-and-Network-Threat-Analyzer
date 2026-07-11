import { useEffect, useState } from "react";

import {

    startCapture,

    stopCapture,

    getStatus

} from "../../api/liveApi";

function LiveCaptureCard() {

    const [status, setStatus] = useState({

        running: false,

        interfaceName: "Unknown"

    });

    useEffect(() => {

        loadStatus();

    }, []);

    async function loadStatus() {

        const data = await getStatus();

        setStatus(data);

    }

    async function handleStart() {

        const data = await startCapture();

        setStatus(data);

    }

    async function handleStop() {

        const data = await stopCapture();

        setStatus(data);

    }

    return (

        <div className="bg-slate-900 rounded-xl p-8">

            <h2 className="text-3xl font-bold text-white">

                Live Capture

            </h2>

            <p className="mt-5 text-xl">

                Status :

                <span

                    className={

                        status.running

                            ? "text-green-400"

                            : "text-red-400"

                    }

                >

                    {" "}

                    {status.running

                        ? "Running"

                        : "Stopped"}

                </span>

            </p>

            <p className="mt-3">

                Interface :

                {" "}

                {status.interfaceName}

            </p>

            <div className="flex gap-4 mt-8">

                <button

                    onClick={handleStart}

                    className="bg-green-600 px-6 py-3 rounded-lg"

                >

                    Start

                </button>

                <button

                    onClick={handleStop}

                    className="bg-red-600 px-6 py-3 rounded-lg"

                >

                    Stop

                </button>

            </div>

        </div>

    );

}

export default LiveCaptureCard;