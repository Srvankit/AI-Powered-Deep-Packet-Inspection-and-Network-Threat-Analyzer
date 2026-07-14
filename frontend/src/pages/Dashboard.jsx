import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardCards from "../components/dashboard/DashboardCards";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import FlowTable from "../components/dashboard/FlowTable";
import ThreatPanel from "../components/dashboard/ThreatPanel";
import EmptyState from "../components/common/EmptyState";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";


import { useAnalysis } from "../hooks/useAnalysis";

function Dashboard() {

    const { analysis } = useAnalysis();

    if (!analysis) {

        return (

            <EmptyState

                icon={<ShieldAlert size={80} />}

                title="No Analysis Available"

                description="Upload your first PCAP file to begin AI-powered Deep Packet Inspection, threat detection, protocol analysis and security reporting."

                buttonText="Upload PCAP"

                onClick={() => navigate("/upload")}

            />

        );

    }

    return (

        <div className="pb-16">

            <DashboardHeader />

            <div className="mt-12">

                <DashboardCards />

            </div>

            <div className="mt-20">

                <FlowTable />

            </div>

            <div className="mt-20">

                <ThreatPanel />

            </div>

            <div className="mt-20">

                <DashboardCharts />

            </div>

        </div>

    );

}

export default Dashboard;