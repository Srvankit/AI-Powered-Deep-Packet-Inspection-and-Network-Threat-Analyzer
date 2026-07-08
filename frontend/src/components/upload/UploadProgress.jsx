function UploadProgress({ loading }) {

    if (!loading) return null;

    return (

        <div className="mt-5">

            <p className="text-cyan-400 mb-2">

                Uploading & Analyzing...

            </p>

            <div className="w-full bg-slate-700 rounded-full h-3">

                <div
                    className="
                        bg-cyan-500
                        h-3
                        rounded-full
                        animate-pulse
                        w-full
                    "
                />

            </div>

        </div>

    );

}

export default UploadProgress;