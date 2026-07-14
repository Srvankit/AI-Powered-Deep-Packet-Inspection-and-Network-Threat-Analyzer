import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    BrainCircuit,
    ShieldAlert,
    ShieldCheck,
    Sparkles,
    CheckCircle2
} from "lucide-react";

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

            <div className="flex justify-center py-24">

                <div className="text-xl text-cyan-400 animate-pulse">

                    Loading AI Insights...

                </div>

            </div>

        );

    }

    const riskColor =

        insight.riskLevel === "HIGH"

            ? "text-red-400"

            : insight.riskLevel === "MEDIUM"

            ? "text-yellow-400"

            : "text-green-400";

    return (

        <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5 }}

            className="mx-auto max-w-7xl"

        >

            {/* Header */}

            <div className="mb-10">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-cyan-500/10 p-4">

                        <BrainCircuit

                            className="text-cyan-400"

                            size={32}

                        />

                    </div>

                    <div>

                        <h1 className="text-4xl font-black text-white">

                            AI Security Insights

                        </h1>

                        <p className="mt-2 text-lg text-slate-400">

                            AI-generated security assessment based on Deep Packet Inspection.

                        </p>

                    </div>

                </div>

            </div>

            {/* Top Cards */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Risk Score */}

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-3xl p-8">

                    <div className="flex items-center justify-between">

                        <ShieldAlert className="text-red-400" size={30} />

                        <span className="text-sm text-slate-400">

                            Risk Score

                        </span>

                    </div>

                    <h2 className="mt-8 text-7xl font-black text-white">

                        {insight.riskScore}

                    </h2>

                    <div className={`mt-5 text-2xl font-bold ${riskColor}`}>

                        {insight.riskLevel}

                    </div>

                </div>

                {/* AI Summary */}

                <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-3xl p-8">

                    <div className="flex items-center gap-3">

                        <Sparkles

                            size={24}

                            className="text-cyan-400"

                        />

                        <h2 className="text-2xl font-bold text-white">

                            AI Summary

                        </h2>

                    </div>

                    <p className="mt-6 leading-8 text-slate-300 text-lg">

                        {insight.summary}

                    </p>

                </div>

            </div>

            {/* Recommendations */}

            <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-3xl p-8">

                <div className="flex items-center gap-3">

                    <ShieldCheck

                        size={26}

                        className="text-green-400"

                    />

                    <h2 className="text-3xl font-bold text-white">

                        Security Recommendations

                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    {

                        insight.recommendations.map(

                            (item, index) => (

                                <motion.div

                                    key={index}

                                    whileHover={{

                                        y: -5

                                    }}

                                    className="
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-slate-800/60
                                        p-6
                                        transition
                                    "

                                >

                                    <div className="flex items-start gap-4">

                                        <CheckCircle2

                                            size={22}

                                            className="text-green-400 mt-1"

                                        />

                                        <p className="text-slate-300 leading-7">

                                            {item}

                                        </p>

                                    </div>

                                </motion.div>

                            )

                        )

                    }

                </div>

            </div>

        </motion.div>

    );

}

export default AIInsightCard;