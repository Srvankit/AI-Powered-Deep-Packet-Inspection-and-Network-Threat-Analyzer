import DownloadCard from "../components/reports/DownloadCard";
import ReportSummary from "../components/reports/ReportSummary";

function Reports() {

    const downloadReport = (type) => {

        window.open(
            `http://localhost:8080/api/report/${type}`,
            "_blank"
        );

    };

    return (

        <div className="p-8">

            <ReportSummary />

            <div className="grid grid-cols-3 gap-8">

                <DownloadCard

                    title="JSON Report"

                    description="Download machine readable report."

                    color="bg-cyan-600"

                    onClick={() => downloadReport("json")}

                />

                <DownloadCard

                    title="Text Report"

                    description="Download plain text report."

                    color="bg-blue-700"

                    onClick={() => downloadReport("text")}

                />

                <DownloadCard

                        title="PDF Report"

                        description="Download printable PDF report."

                        color="bg-red-700"

                        onClick={() => downloadReport("pdf")}

                    />

            </div>

        </div>

    );

}

export default Reports;