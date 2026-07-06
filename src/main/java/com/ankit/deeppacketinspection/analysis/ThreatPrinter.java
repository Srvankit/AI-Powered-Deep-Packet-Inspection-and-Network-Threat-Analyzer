package com.ankit.deeppacketinspection.analysis;

/**
 * ThreatPrinter
 *
 * Prints a summary of threats detected
 * by the ThreatDetector.
 *
 * Author: Ankit Yadav
 * Version: 2.0
 */
public class ThreatPrinter {

    /**
     * Prints the threat summary.
     *
     * @param detector ThreatDetector instance.
     */
    public void print(ThreatDetector detector) {

        if (detector == null) {
            return;
        }

        System.out.println();

        System.out.println("====================================================");
        System.out.println("                THREAT SUMMARY");
        System.out.println("====================================================");

        System.out.println("Large Packet Alerts      : "
                + detector.getLargePacketAlerts());

        System.out.println("DNS Alerts               : "
                + detector.getDnsFloodAlerts());

        System.out.println("Suspicious Port Alerts   : "
                + detector.getSuspiciousPortAlerts());

        System.out.println("SYN Flood Alerts         : "
                + detector.getSynFloodAlerts());

        System.out.println("Port Scan Alerts         : "
                + detector.getPortScanAlerts());

        System.out.println("----------------------------------------------------");

        System.out.println("Total Alerts             : "
                + detector.getTotalAlerts());

        System.out.println("====================================================");

    }

}