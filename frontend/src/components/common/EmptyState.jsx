import { motion } from "framer-motion";

function EmptyState({

    icon,

    title,

    description,

    buttonText,

    onClick

}) {

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
                duration: 0.4
            }}

            className="
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                backdrop-blur-3xl
                py-24
                px-10
                text-center
            "

        >

            <div className="mb-6 text-cyan-400">

                {icon}

            </div>

            <h2 className="text-4xl font-black text-white">

                {title}

            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">

                {description}

            </p>

            {

                buttonText && (

                    <button

                        onClick={onClick}

                        className="
                            mt-10
                            rounded-2xl
                            bg-gradient-to-r
                            from-cyan-500
                            via-blue-500
                            to-indigo-600
                            px-8
                            py-4
                            text-white
                            font-semibold
                            shadow-lg
                            hover:scale-105
                            transition-all
                        "

                    >

                        {buttonText}

                    </button>

                )

            }

        </motion.div>

    );

}

export default EmptyState;