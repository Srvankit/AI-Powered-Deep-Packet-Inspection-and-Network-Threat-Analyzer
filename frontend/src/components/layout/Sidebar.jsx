import { NavLink } from "react-router-dom";

const menuItems = [

    {
        name: "Dashboard",
        path: "/dashboard"
    },

    {
        name: "Upload",
        path: "/upload"
    },

    {
        name: "Flows",
        path: "/flows"
    },

    {
        name: "Reports",
        path: "/reports"
    },

    {
        name: "History",
        path: "/history"
    },

    {
        name: "Settings",
        path: "/settings"
    }

];

function Sidebar() {

    return (

        <aside className="w-64 bg-slate-900 border-r border-slate-800">

            <div className="p-6">

                <h2 className="text-xl font-bold text-cyan-400">

                    AI DPI

                </h2>

            </div>

            <nav className="flex flex-col px-4 gap-2">

                {

                    menuItems.map((item) => (

                        <NavLink

                            key={item.path}

                            to={item.path}

                            className={({ isActive }) =>

                                `rounded-lg px-4 py-3 transition-all ${
                                    isActive
                                        ? "bg-cyan-600 text-white"
                                        : "text-slate-300 hover:bg-slate-800"
                                }`

                            }

                        >

                            {item.name}

                        </NavLink>

                    ))

                }

            </nav>

        </aside>

    );

}

export default Sidebar;