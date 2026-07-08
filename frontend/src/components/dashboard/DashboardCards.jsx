import StatisticsCard from "./StatisticsCard";

function DashboardCards() {

    return (

        <div className="grid grid-cols-4 gap-8 mt-10">

            <StatisticsCard
                title="Packets"
                value="2130"
                color="bg-slate-900"
            />

            <StatisticsCard
                title="Flows"
                value="94"
                color="bg-slate-900"
            />

            <StatisticsCard
                title="Threats"
                value="17"
                color="bg-red-900"
            />

            <StatisticsCard
                title="HTTPS"
                value="2097"
                color="bg-cyan-900"
            />

        </div>

    );

}

export default DashboardCards;