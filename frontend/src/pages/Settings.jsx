import { motion } from "framer-motion";

import ProfileCard from "../components/settings/ProfileCard";
import SystemStatus from "../components/settings/SystemStatus";
import ApplicationCard from "../components/settings/ApplicationCard";
import SecurityCard from "../components/settings/SecurityCard";
import AboutCard from "../components/settings/AboutCard";
import DangerZone from "../components/settings/DangerZone";

function Settings() {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: .5
            }}

            className="px-10 py-8"

        >

            <div className="mb-10">

                <h1 className="text-4xl font-black text-white">

                    Settings

                </h1>

                <p className="mt-3 text-lg text-slate-400">

                    Manage your AI Powered Deep Packet Inspection platform.

                </p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <ProfileCard />

                <SystemStatus />

                <ApplicationCard />

                <SecurityCard />

                <AboutCard />

                <DangerZone />

            </div>

        </motion.div>

    );

}

export default Settings;