import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Upload,
    Network,
    BrainCircuit,
    FileText,
    History,
    Settings,
    Shield
} from "lucide-react";

const menuItems = [

    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
    },

    {
        name: "Upload",
        path: "/upload",
        icon: Upload
    },

    {
        name: "Flows",
        path: "/flows",
        icon: Network
    },

    {
        name: "AI Insights",
        path: "/insights",
        icon: BrainCircuit
    },

    {
        name: "Reports",
        path: "/reports",
        icon: FileText
    },

    {
        name: "History",
        path: "/history",
        icon: History
    },

    {
        name: "Settings",
        path: "/settings",
        icon: Settings
    }

];

function Sidebar() {

    return (

        <aside
            className="
                w-72
                min-h-screen
                bg-slate-950
                border-r
                border-white/10
                flex
                flex-col
            "
        >

            {/* Logo */}

            <div className="px-8 py-8 border-b border-white/10">

                <div className="flex items-center gap-4">

                    <div
                        className="
                            h-14
                            w-14
                            rounded-2xl
                            bg-gradient-to-br
                            from-cyan-500
                            to-blue-600
                            flex
                            items-center
                            justify-center
                            shadow-lg
                        "
                    >

                        <Shield
                            size={28}
                            className="text-white"
                        />

                    </div>

                    <div>

                        <h1 className="text-xl font-black text-white">

                            AI Powered DPI

                        </h1>

                        <p className="text-sm text-slate-400">

                            Enterprise Security

                        </p>

                    </div>

                </div>

            </div>

            {/* Navigation */}

            <nav className="flex-1 px-5 py-8 space-y-3">

                {

                    menuItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink

                                key={item.path}

                                to={item.path}

                                className={({ isActive }) =>

                                    `
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    px-5
                                    py-4
                                    transition-all
                                    duration-300

                                    ${
                                        isActive

                                            ?

                                            "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"

                                            :

                                            "text-slate-400 hover:bg-slate-900 hover:text-white"

                                    }

                                    `

                                }

                            >

                                <Icon size={22} />

                                <span className="font-medium">

                                    {item.name}

                                </span>

                            </NavLink>

                        );

                    })

                }

            </nav>

            {/* Footer */}

            <div className="border-t border-white/10 p-6">

                <div
                    className="
                        rounded-2xl
                        bg-cyan-500/10
                        p-5
                    "
                >

                    <p className="text-sm text-slate-400">

                        System Status

                    </p>

                    <div className="mt-3 flex items-center gap-3">

                        <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

                        <span className="font-semibold text-green-400">

                            All Services Online

                        </span>

                    </div>

                </div>

            </div>

        </aside>

    );

}

export default Sidebar;