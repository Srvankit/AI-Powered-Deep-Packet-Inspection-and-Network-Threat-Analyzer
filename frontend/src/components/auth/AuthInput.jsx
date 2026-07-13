function AuthInput({

    type = "text",

    placeholder,

    value,

    onChange,

    icon

}) {

    return (

        <div
            className="
            flex
            items-center
            gap-3
            rounded-3xl
            border
            border-slate-700
            bg-slate-900/70
            px-5
            py-5
            transition-all
            duration-300
            focus-within:border-cyan-400
            focus-within:shadow-[0_0_25px_rgba(6,182,212,.25)]
            "
        >

            {icon}

            <input

                type={type}

                placeholder={placeholder}

                value={value}

                onChange={onChange}

                className="
                w-full
                bg-transparent
                text-white
                outline-none
                placeholder:text-slate-500
                "

            />

        </div>

    );

}

export default AuthInput;