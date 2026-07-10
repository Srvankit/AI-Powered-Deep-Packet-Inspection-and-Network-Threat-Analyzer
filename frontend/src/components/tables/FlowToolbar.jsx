function FlowToolbar({

    search,

    setSearch

}) {

    return (

        <div className="flex justify-between items-center">

            <input

                type="text"

                placeholder="Search IP or Protocol..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                className="bg-slate-800 px-4 py-2 rounded-lg w-80 text-white"

            />

        </div>

    );

}

export default FlowToolbar;