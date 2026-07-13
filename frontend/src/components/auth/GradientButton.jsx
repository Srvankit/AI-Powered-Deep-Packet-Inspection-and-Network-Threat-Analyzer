function GradientButton({

    children,

    onClick,

    type = "button"

}) {

    return (

        <button

            type={type}

            onClick={onClick}

           className="
                w-full
                rounded-3xl
                bg-gradient-to-r
                from-cyan-500
                via-sky-500
                to-blue-700
                py-5
                text-lg
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(6,182,212,.45)]
                active:scale-95
                "

        >

            {children}

        </button>

    );

}

export default GradientButton;