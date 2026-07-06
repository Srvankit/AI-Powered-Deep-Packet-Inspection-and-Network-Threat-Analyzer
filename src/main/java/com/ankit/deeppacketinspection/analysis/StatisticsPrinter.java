package com.ankit.deeppacketinspection.analysis;

/**
 * StatisticsPrinter
 *
 * Prints the statistics collected during
 * packet analysis.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class StatisticsPrinter {

    /**
     * Prints the collected statistics.
     *
     * @param statistics Statistics object.
     */
    public void print(Statistics statistics) {

        if (statistics == null) {
            return;
        }

        System.out.println();
        System.out.println("====================================================");
        System.out.println("                DPI STATISTICS");
        System.out.println("====================================================");

        /* ---------------- General ---------------- */

        System.out.println("Total Packets      : "
                + statistics.getTotalPackets());

        System.out.println("Total Bytes        : "
                + statistics.getTotalBytes());

        System.out.println("Total Flows        : "
                + statistics.getTotalFlows());

        /* ---------------- Network Layer ---------------- */

        System.out.println();

        System.out.println("[Network Statistics]");

        System.out.println("IPv4 Packets       : "
                + statistics.getIpv4Packets());

        System.out.println("IPv6 Packets       : "
                + statistics.getIpv6Packets());

        /* ---------------- Transport Layer ---------------- */

        System.out.println();

        System.out.println("[Transport Statistics]");

        System.out.println("TCP Packets        : "
                + statistics.getTcpPackets());

        System.out.println("UDP Packets        : "
                + statistics.getUdpPackets());

        /* ---------------- Application Layer ---------------- */

        System.out.println();

        System.out.println("[Application Statistics]");

        System.out.println("HTTP Packets       : "
                + statistics.getHttpPackets());

        System.out.println("HTTPS Packets      : "
                + statistics.getHttpsPackets());

        System.out.println("DNS Packets        : "
                + statistics.getDnsPackets());

        System.out.println("====================================================");
    }

}