import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardCards from "../components/dashboard/DashboardCards";
import { useAnalysis } from "../hooks/useAnalysis";

function Dashboard() {

  const { analysis } = useAnalysis();

    console.log(analysis);

  return (

    <div>

      <DashboardHeader />

      <DashboardCards />

    </div>

  );

}

export default Dashboard;