package com.ankit.deeppacketinspection.analysis;

import com.ankit.deeppacketinspection.model.ParsedPacket;

/**
 * ThreatDetector
 *
 * Performs rule-based threat detection
 * on parsed packets.
 *
 * Current Detection Rules:
 * - SYN Flood
 * - Large Packet
 * - Suspicious Port
 * - DNS Flood
 * - Port Scan (Reserved for future implementation)
 *
 * Author: Ankit Yadav
 * Version: 2.0
 */
public class ThreatDetector {

    /* ---------------- Alert Counters ---------------- */

    private int synFloodAlerts;

    private int portScanAlerts;

    private int dnsFloodAlerts;

    private int largePacketAlerts;

    private int suspiciousPortAlerts;

    /**
     * Default Constructor.
     */
    public ThreatDetector() {
    }

    /**
     * Analyses a parsed packet.
     *
     * @param packet Parsed packet.
     */
    public void analyze(ParsedPacket packet) {

        if (packet == null) {
            return;
        }

        detectLargePacket(packet);

        detectSuspiciousPort(packet);

        detectSynFlood(packet);

        detectDnsFlood(packet);

    }

    /* =====================================================
                     Detection Rules
       ===================================================== */

    /**
     * Detect unusually large packets.
     */
    private void detectLargePacket(ParsedPacket packet) {

        if (packet.getPacketLength() > 1400) {

            largePacketAlerts++;

        }

    }

    /**
     * Detect suspicious destination ports.
     */
    private void detectSuspiciousPort(ParsedPacket packet) {

        int port = packet.getDestinationPort();

        switch (port) {

            case 23,
                    135,
                    139,
                    445,
                    1433,
                    3389,
                    4444,
                    5555,
                    31337 -> suspiciousPortAlerts++;

            default -> {
            }

        }

    }

    /**
     * Basic SYN Flood Detection.
     */
    private void detectSynFlood(ParsedPacket packet) {

        if (packet.isSyn() && !packet.isAck()) {

            synFloodAlerts++;

        }

    }

    /**
     * Basic DNS Detection.
     */
    private void detectDnsFlood(ParsedPacket packet) {

        if ("DNS".equalsIgnoreCase(packet.getApplicationProtocol())) {

            dnsFloodAlerts++;

        }

    }

    /* =====================================================
                        Getters
       ===================================================== */

    public int getSynFloodAlerts() {
        return synFloodAlerts;
    }

    public int getPortScanAlerts() {
        return portScanAlerts;
    }

    public int getDnsFloodAlerts() {
        return dnsFloodAlerts;
    }

    public int getLargePacketAlerts() {
        return largePacketAlerts;
    }

    public int getSuspiciousPortAlerts() {
        return suspiciousPortAlerts;
    }

    /**
     * Returns the total number of alerts.
     */
    public int getTotalAlerts() {

        return synFloodAlerts
                + portScanAlerts
                + dnsFloodAlerts
                + largePacketAlerts
                + suspiciousPortAlerts;

    }

}