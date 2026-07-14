import { motion } from "framer-motion";

import {
    Server,
    Database,
    BrainCircuit,
    FileCheck,
    Wifi
} from "lucide-react";

function StatusItem({

    icon,

    title,

    status

}) {

    return (

        <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 p-4">

            <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">

                    {icon}

                </div>

                <span className="font-medium text-white">

                    {title}

                </span>

            </div>

            <div className="flex items-center gap-2">

                <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

                <span className="font-semibold text-green-400">

                    {status}

                </span>

            </div>

        </div>

    );

}

function SystemStatus() {

    return (

        <motion.div

            whileHover={{
                y: -5,
                scale: 1.01
            }}

            transition={{
                duration: .3
            }}

            className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-3xl
                p-8
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
            "

        >

            <h2 className="text-3xl font-bold text-white">

                System Status

            </h2>

            <p className="mt-2 text-slate-400">

                Live monitoring of backend services.

            </p>

            <div className="mt-8 space-y-5">

                <StatusItem

                    icon={<Server size={22} />}

                    title="Spring Boot Backend"

                    status="Online"

                />

                <StatusItem

                    icon={<Database size={22} />}

                    title="PostgreSQL"

                    status="Connected"

                />

                <StatusItem

                    icon={<BrainCircuit size={22} />}

                    title="AI Engine"

                    status="Ready"

                />

                <StatusItem

                    icon={<FileCheck size={22} />}

                    title="Report Generator"

                    status="Running"

                />

                <StatusItem

                    icon={<Wifi size={22} />}

                    title="REST API"

                    status="Healthy"

                />

            </div>

        </motion.div>

    );

}

export default SystemStatus;