import { motion } from "framer-motion";

function GlassCard({

    children,

    className = ""

}) {

    return (

        <motion.div

            whileHover={{
                y: -4
            }}

            transition={{
                duration: .25
            }}

            className={`
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-3xl
                shadow-[0_15px_50px_rgba(0,0,0,.45)]
                ${className}
            `}

        >

            <div

                className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-violet-500
                "

            />

            <div className="relative z-10">

                {children}

            </div>

        </motion.div>

    );

}

export default GlassCard;