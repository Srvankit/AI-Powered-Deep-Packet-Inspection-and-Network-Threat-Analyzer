package com.ankit.deeppacketinspection.analysis;

/**
 * Statistics
 *
 * Stores global statistics collected during
 * packet analysis.
 *
 * This class acts as a central data model
 * for the StatisticsEngine.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class Statistics {

    /* ---------------- General ---------------- */

    private long totalPackets;

    private long totalBytes;

    private long totalFlows;

    /* ---------------- Network Layer ---------------- */

    private long ipv4Packets;

    private long ipv6Packets;

    /* ---------------- Transport Layer ---------------- */

    private long tcpPackets;

    private long udpPackets;

    /* ---------------- Application Layer ---------------- */

    private long httpPackets;

    private long httpsPackets;

    private long dnsPackets;

    /* ---------------- Constructors ---------------- */

    public Statistics() {
    }

    /* =====================================================
                    Increment Methods
       ===================================================== */

    public void incrementTotalPackets() {
        totalPackets++;
    }

    public void incrementTotalBytes(long bytes) {
        totalBytes += bytes;
    }

    public void incrementTotalFlows() {
        totalFlows++;
    }

    public void incrementIpv4Packets() {
        ipv4Packets++;
    }

    public void incrementIpv6Packets() {
        ipv6Packets++;
    }

    public void incrementTcpPackets() {
        tcpPackets++;
    }

    public void incrementUdpPackets() {
        udpPackets++;
    }

    public void incrementHttpPackets() {
        httpPackets++;
    }

    public void incrementHttpsPackets() {
        httpsPackets++;
    }

    public void incrementDnsPackets() {
        dnsPackets++;
    }

    /* =====================================================
                        Getters
       ===================================================== */

    public long getTotalPackets() {
        return totalPackets;
    }

    public long getTotalBytes() {
        return totalBytes;
    }

    public long getTotalFlows() {
        return totalFlows;
    }

    public long getIpv4Packets() {
        return ipv4Packets;
    }

    public long getIpv6Packets() {
        return ipv6Packets;
    }

    public long getTcpPackets() {
        return tcpPackets;
    }

    public long getUdpPackets() {
        return udpPackets;
    }

    public long getHttpPackets() {
        return httpPackets;
    }

    public long getHttpsPackets() {
        return httpsPackets;
    }

    public long getDnsPackets() {
        return dnsPackets;
    }

}