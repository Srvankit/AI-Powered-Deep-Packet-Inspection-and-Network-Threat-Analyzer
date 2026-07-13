import { motion } from "framer-motion";

function Background() {
    return (
        <>
            {/* Base */}

            <div className="fixed inset-0 -z-50 bg-[#020617]" />

            {/* Cyan Orb */}

            <motion.div
                animate={{
                    x: [0, 60, -40, 0],
                    y: [0, -40, 50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="fixed -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[170px] -z-40"
            />

            {/* Blue Orb */}

            <motion.div
                animate={{
                    x: [0, -60, 50, 0],
                    y: [0, 50, -30, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="fixed -bottom-40 -right-32 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[180px] -z-40"
            />

            {/* Purple Orb */}

            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="fixed top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[150px] -z-40"
            />

            {/* Grid */}

            <div
                className="fixed inset-0 opacity-[0.05] -z-30"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
                `,
                    backgroundSize: "40px 40px",
                }}
            />
        </>
    );
}

export default Background;