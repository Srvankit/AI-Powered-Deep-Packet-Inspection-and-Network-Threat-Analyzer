import { NavLink } from "react-router-dom";

import {
  FaChartLine,
  FaUpload,
  FaFileAlt,
  FaHistory,
  FaCog
} from "react-icons/fa";

function Sidebar() {

  const menu = [

    {
      name: "Dashboard",
      path: "/",
      icon: <FaChartLine />
    },

    {
      name: "Upload PCAP",
      path: "/upload",
      icon: <FaUpload />
    },

    {
      name: "Reports",
      path: "/reports",
      icon: <FaFileAlt />
    },

    {
      name: "History",
      path: "/history",
      icon: <FaHistory />
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />
    }

  ];

  return (

    <aside className="w-64 bg-slate-900 border-r border-slate-700">

      <nav className="p-6">

        {menu.map((item) => (

          <NavLink

            key={item.path}

            to={item.path}

            className={({ isActive }) =>

              `flex items-center gap-3 px-4 py-3 rounded-lg mb-3 transition-all duration-200

              ${
                isActive
                  ? "bg-cyan-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`

            }

          >

            {item.icon}

            {item.name}

          </NavLink>

        ))}

      </nav>

    </aside>

  );

}

export default Sidebar;