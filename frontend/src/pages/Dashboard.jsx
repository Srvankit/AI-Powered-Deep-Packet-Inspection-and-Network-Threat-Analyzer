import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardCards from "../components/dashboard/DashboardCards";
import { useAnalysis } from "../hooks/useAnalysis";
import FlowTable from "../components/dashboard/FlowTable";
import ThreatPanel from "../components/dashboard/ThreatPanel";
import DashboardCharts from "../components/dashboard/DashboardCharts";

function Dashboard() {

    const { analysis } = useAnalysis();

    console.log("Dashboard Render");
    console.log("Analysis =", analysis);

    return (
        <div>

            <DashboardHeader />

            <DashboardCards />

            <FlowTable />

            <ThreatPanel />

            <DashboardCharts />

        </div>
    );

}

export default Dashboard;