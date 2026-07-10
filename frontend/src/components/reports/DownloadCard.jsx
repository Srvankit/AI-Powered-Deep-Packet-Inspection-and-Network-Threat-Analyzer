import DownloadButton from "./DownloadButton";

function DownloadCard({

    title,

    description,

    color,

    onClick

}) {

    return (

        <div className="bg-slate-900 p-8 rounded-2xl">

            <h2 className="text-2xl font-bold">

                {title}

            </h2>

            <p className="mt-3 text-slate-400">

                {description}

            </p>

            <div className="mt-6">

                <DownloadButton

                    title="Download"

                    color={color}

                    onClick={onClick}

                />

            </div>

        </div>

    );

}

export default DownloadCard;