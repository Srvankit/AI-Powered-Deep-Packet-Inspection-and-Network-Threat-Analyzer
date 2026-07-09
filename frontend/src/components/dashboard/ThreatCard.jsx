function ThreatCard({ title, value, color }) {

    return (

        <div className={`${color} rounded-xl p-5`}>

            <h3 className="text-slate-200 text-lg">

                {title}

            </h3>

            <p className="text-5xl font-bold mt-3 text-white">

                {value}

            </p>

        </div>

    );

}

export default ThreatCard;