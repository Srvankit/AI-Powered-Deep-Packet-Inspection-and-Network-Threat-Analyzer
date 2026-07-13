import { motion } from "framer-motion";
import {
    ShieldCheck,
    Activity,
    Database,
    BrainCircuit
} from "lucide-react";

function DashboardHeader() {

    const date = new Date();

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: -30
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.6
            }}

            className="mb-16"

        >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                {/* LEFT */}

                <div>

                    <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2">

                        <ShieldCheck
                            size={18}
                            className="text-cyan-400"
                        />

                        <span className="text-sm font-semibold text-cyan-300">

                            Enterprise Security Dashboard

                        </span>

                    </div>

                    <h1 className="mt-8 text-4xl font-black tracking-tight text-white">

                        AI Powered DPI

                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">

                        Monitor network traffic, inspect packets,
                        detect threats using AI and generate
                        enterprise-grade security reports from
                        one intelligent dashboard.

                    </p>

                </div>

                {/* RIGHT */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-3xl">

                    <h3 className="mb-5 text-lg font-semibold text-white">

                        System Status

                    </h3>

                    <div className="space-y-4">

                        <Status
                            icon={<Activity size={18} />}
                            title="DPI Engine"
                        />

                        <Status
                            icon={<Database size={18} />}
                            title="PostgreSQL"
                        />

                        <Status
                            icon={<BrainCircuit size={18} />}
                            title="AI Engine"
                        />

                    </div>

                    <div className="mt-6 border-t border-white/10 pt-5">

                        <p className="text-sm text-slate-400">

                            {date.toLocaleDateString()}

                        </p>

                        <p className="mt-1 text-xl font-bold text-white">

                            {date.toLocaleTimeString()}

                        </p>

                    </div>

                </div>

            </div>

        </motion.div>

    );

}

function Status({

    icon,

    title

}) {

    return (

        <div className="flex items-center justify-between gap-6">

            <div className="flex items-center gap-3">

                <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">

                    {icon}

                </div>

                <span className="text-slate-300">

                    {title}

                </span>

            </div>

            <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>

                <span className="text-sm font-medium text-green-400">

                    Online

                </span>

            </div>

        </div>

    );

}

export default DashboardHeader;