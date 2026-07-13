import { motion } from "framer-motion";

function AuthCard({ children }) {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 40,
                scale: 0.96
            }}

            animate={{
                opacity: 1,
                y: 0,
                scale: 1
            }}

            transition={{
                duration: 0.7,
                ease: "easeOut"
            }}

            className="
                relative
                w-full
                max-w-xl
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.06]
                p-10
                backdrop-blur-3xl
                shadow-[0_20px_80px_rgba(0,0,0,0.55)]
                transition-all
                duration-500
                hover:border-cyan-400/30
                hover:shadow-[0_0_70px_rgba(6,182,212,0.20)]
            "

        >

            {/* Top Glow */}

            <div
                className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500
                "
            />

            {/* Glass Highlight */}

            <div
                className="
                    absolute
                    -top-32
                    right-[-60px]
                    h-72
                    w-72
                    rounded-full
                    bg-cyan-400/10
                    blur-[120px]
                    pointer-events-none
                "
            />

            {/* Bottom Glow */}

            <div
                className="
                    absolute
                    -bottom-24
                    -left-20
                    h-52
                    w-52
                    rounded-full
                    bg-blue-600/10
                    blur-[100px]
                    pointer-events-none
                "
            />

            {/* Content */}

            <div className="relative z-10">

                {children}

            </div>

        </motion.div>

    );

}

export default AuthCard;