import { motion } from "framer-motion";

import {
    ShieldCheck,
    Lock,
    KeyRound,
    Globe,
    CheckCircle2
} from "lucide-react";

function SecurityItem({

    icon,

    title,

    status,

    color = "text-green-400"

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

                <CheckCircle2
                    size={18}
                    className={color}
                />

                <span className={`font-semibold ${color}`}>

                    {status}

                </span>

            </div>

        </div>

    );

}

function SecurityCard() {

    return (

        <motion.div

            whileHover={{
                y: -5,
                scale: 1.01
            }}

            transition={{
                duration: 0.3
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

                Security

            </h2>

            <p className="mt-2 text-slate-400">

                Current security configuration of the platform.

            </p>

            <div className="mt-8 space-y-5">

                <SecurityItem

                    icon={<KeyRound size={22} />}

                    title="JWT Authentication"

                    status="Enabled"

                />

                <SecurityItem

                    icon={<Lock size={22} />}

                    title="HTTPS"

                    status="Protected"

                />

                <SecurityItem

                    icon={<Globe size={22} />}

                    title="CORS Policy"

                    status="Configured"

                />

                <SecurityItem

                    icon={<ShieldCheck size={22} />}

                    title="Spring Security"

                    status="Active"

                />

                <SecurityItem

                    icon={<ShieldCheck size={22} />}

                    title="Session Protection"

                    status="Secure"

                />

            </div>

        </motion.div>

    );

}

export default SecurityCard;