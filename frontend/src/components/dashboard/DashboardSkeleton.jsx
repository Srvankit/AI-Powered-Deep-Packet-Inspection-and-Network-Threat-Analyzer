import LoadingSkeleton from "../common/LoadingSkeleton";

function DashboardSkeleton() {

    return (

        <div>

            <LoadingSkeleton

                height={45}

                width={350}

            />

            <div className="grid grid-cols-4 gap-8 mt-10">

                {

                    [...Array(12)].map((_, i) => (

                        <LoadingSkeleton

                            key={i}

                            height={170}

                            borderRadius={24}

                        />

                    ))

                }

            </div>

            <div className="mt-16">

                <LoadingSkeleton

                    height={420}

                    borderRadius={24}

                />

            </div>

        </div>

    );

}

export default DashboardSkeleton;