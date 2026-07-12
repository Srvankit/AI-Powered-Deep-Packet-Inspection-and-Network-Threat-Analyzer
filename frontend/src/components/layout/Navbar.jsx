import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    return (

        <header className="bg-slate-900 h-16 border-b border-slate-700 flex items-center justify-between px-8">

            <h1 className="text-2xl font-bold text-cyan-400">
                AI Powered DPI
            </h1>

            <button

                onClick={logout}

                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"

            >

                Logout

            </button>

        </header>

    );

}

export default Navbar;