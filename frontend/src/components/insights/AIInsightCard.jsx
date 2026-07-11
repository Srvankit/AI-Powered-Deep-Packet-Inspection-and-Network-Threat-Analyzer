import { useEffect, useState } from "react";

import { getInsights } from "../../api/insightApi";

function AIInsightCard() {

    const [insight, setInsight] = useState(null);

    useEffect(() => {

        loadInsights();

    }, []);

    async function loadInsights() {

        try {

            const data = await getInsights();

            setInsight(data);

        }

        catch (error) {

            console.error(error);

        }

    }

    if (!insight) {

        return (

            <div className="text-white text-xl">

                Loading AI Insights...

            </div>

        );

    }

    return (

        <div className="max-w-6xl mx-auto">

            <h1 className="text-4xl font-bold text-white">

                AI Security Insights

            </h1>

            <p className="text-slate-400 mt-2">

                AI generated security assessment based on packet analysis.

            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">

                <div className="bg-slate-900 rounded-xl p-6">

                    <h2 className="text-cyan-400 text-lg">

                        Risk Score

                    </h2>

                    <h1 className="text-6xl font-bold text-white mt-3">

                        {insight.riskScore}

                    </h1>

                    <p className="mt-4 text-green-400 font-semibold">

                        {insight.riskLevel}

                    </p>

                </div>

                <div className="bg-slate-900 rounded-xl p-6 col-span-2">

                    <h2 className="text-cyan-400 text-lg">

                        AI Summary

                    </h2>

                    <p className="text-slate-300 mt-5 leading-8">

                        {insight.summary}

                    </p>

                </div>

            </div>

            <div className="bg-slate-900 rounded-xl p-8 mt-8">

                <h2 className="text-2xl font-bold text-white">

                    Recommendations

                </h2>

                <div className="grid grid-cols-2 gap-5 mt-6">

                    {

                        insight.recommendations.map(

                            (item, index) => (

                                <div

                                    key={index}

                                    className="bg-slate-800 rounded-lg p-5 border border-slate-700"

                                >

                                    <p className="text-slate-200">

                                        ✅ {item}

                                    </p>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

        </div>

    );

}

export default AIInsightCard;