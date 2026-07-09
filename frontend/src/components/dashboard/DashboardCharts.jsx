import ProtocolChart from "../charts/ProtocolChart";
import PacketChart from "../charts/PacketChart";
import ThreatChart from "../charts/ThreatChart";

function DashboardCharts() {

    return (

        <div className="grid grid-cols-3 gap-6 mt-10">

            <ProtocolChart />

            <PacketChart />

            <ThreatChart />

        </div>

    );

}

export default DashboardCharts;