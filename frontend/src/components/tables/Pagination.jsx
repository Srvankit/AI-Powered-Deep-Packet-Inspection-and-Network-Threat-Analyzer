function Pagination({

    current,

    total,

    onChange

}) {

    if(total<=1) return null;

    return(

        <div className="flex justify-center gap-2 mt-6">

            {

                [...Array(total)].map((_,i)=>(

                    <button

                        key={i}

                        onClick={()=>onChange(i+1)}

                        className={`px-4 py-2 rounded ${
                            current===i+1
                            ?
                            "bg-cyan-600"
                            :
                            "bg-slate-700"
                        }`}

                    >

                        {i+1}

                    </button>

                ))

            }

        </div>

    );

}

export default Pagination;