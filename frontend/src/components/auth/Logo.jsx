import { ShieldCheck } from "lucide-react";

function Logo() {

    return (

        <div className="flex flex-col items-center">

            <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,.5)]">

                <ShieldCheck
                    size={42}
                    className="text-white"
                />

            </div>

            <h1 className="mt-5 text-4xl font-bold text-white">

                AI Powered DPI

            </h1>

            <p className="mt-2 text-slate-400">

                Enterprise Network Security Platform

            </p>

        </div>

    );

}

export default Logo;