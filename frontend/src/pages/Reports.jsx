import DownloadCard from "../components/reports/DownloadCard";
import ReportSummary from "../components/reports/ReportSummary";

function Reports() {

    return (

        <div className="p-8">

            <ReportSummary />

            <div className="grid grid-cols-3 gap-8">

                <DownloadCard

                    title="JSON Report"

                    description="Download machine readable report."

                    color="bg-cyan-600"

                />

                <DownloadCard

                    title="Text Report"

                    description="Download plain text report."

                    color="bg-blue-700"

                />

                <DownloadCard

                    title="PDF Report"

                    description="Download printable report."

                    color="bg-red-700"

                />

            </div>

        </div>

    );

}

export default Reports;