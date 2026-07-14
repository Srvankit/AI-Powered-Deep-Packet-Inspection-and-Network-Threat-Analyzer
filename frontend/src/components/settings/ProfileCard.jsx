import { motion } from "framer-motion";

import {
    UserCircle2,
    BadgeCheck,
    Shield
} from "lucide-react";

function ProfileCard() {

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

            {/* Header */}

            <div className="flex items-center gap-5">

                <div
                    className="
                        h-20
                        w-20
                        rounded-full
                        bg-gradient-to-br
                        from-cyan-500
                        to-blue-600
                        flex
                        items-center
                        justify-center
                        shadow-lg
                    "
                >

                    <UserCircle2

                        size={42}

                        className="text-white"

                    />

                </div>

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        Administrator

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Enterprise Security Console

                    </p>

                    <div className="mt-3 flex items-center gap-2">

                        <BadgeCheck

                            size={18}

                            className="text-green-400"

                        />

                        <span className="font-medium text-green-400">

                            Verified User

                        </span>

                    </div>

                </div>

            </div>

            {/* Divider */}

            <div className="my-8 h-px bg-slate-700" />

            {/* Information */}

            <div className="space-y-6">

                <div className="flex items-center justify-between">

                    <span className="text-slate-400">

                        Role

                    </span>

                    <span className="font-semibold text-white">

                        Administrator

                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <span className="text-slate-400">

                        Access Level

                    </span>

                    <span className="font-semibold text-cyan-400">

                        Enterprise

                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <span className="text-slate-400">

                        Authentication

                    </span>

                    <div className="flex items-center gap-2">

                        <Shield

                            size={18}

                            className="text-green-400"

                        />

                        <span className="font-semibold text-green-400">

                            JWT Protected

                        </span>

                    </div>

                </div>

            </div>

        </motion.div>

    );

}

export default ProfileCard;