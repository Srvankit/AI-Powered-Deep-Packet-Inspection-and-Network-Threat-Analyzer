import { useAnalysis } from "../../hooks/useAnalysis";

function ReportSummary() {

    const { analysis } = useAnalysis();

    if (!analysis) return null;

    const s = analysis.statistics;
    const t = analysis.threatDetector;

    return (

        <div className="bg-slate-900 rounded-2xl p-8 mb-10">

            <h2 className="text-3xl font-bold">

                Latest Report Summary

            </h2>

            <div className="mt-6 space-y-2">

                <p>Total Packets : {s.totalPackets}</p>

                <p>Total Flows : {s.totalFlows}</p>

                <p>Total Threats : {t.totalAlerts}</p>

                <p>HTTPS Traffic : {s.httpsPackets}</p>

            </div>

        </div>

    );

}

export default ReportSummary;