import { useState } from "react";

import {

    Eye,

    EyeOff,

    Lock

} from "lucide-react";

function PasswordInput({

    value,

    onChange

}) {

    const [show, setShow] = useState(false);

    return (

        <div
            className="
            flex
            items-center
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

            <Lock
                size={20}
                className="text-cyan-400"
            />

            <input

                type={
                    show
                        ? "text"
                        : "password"
                }

                value={value}

                onChange={onChange}

                placeholder="Password"

                className="
                ml-3
                flex-1
                bg-transparent
                text-white
                outline-none
                placeholder:text-slate-500
                "

            />

            <button

                type="button"

                onClick={() =>
                    setShow(!show)
                }

            >

                {

                    show

                        ?

                        <EyeOff
                            className="text-slate-400"
                            size={20}
                        />

                        :

                        <Eye
                            className="text-slate-400"
                            size={20}
                        />

                }

            </button>

        </div>

    );

}

export default PasswordInput;