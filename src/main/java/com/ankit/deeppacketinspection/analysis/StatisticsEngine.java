package com.ankit.deeppacketinspection.analysis;

import com.ankit.deeppacketinspection.model.Flow;
import com.ankit.deeppacketinspection.model.ParsedPacket;

/**
 * StatisticsEngine
 *
 * Responsible for updating global
 * traffic statistics during packet
 * processing.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class StatisticsEngine {

    private final Statistics statistics;

    public StatisticsEngine() {

        this.statistics = new Statistics();

    }

    /**
     * Updates statistics for every packet.
     *
     * @param packet Parsed packet
     * @param flow Active flow
     */
    public void update(ParsedPacket packet,
                       Flow flow) {

        if (packet == null) {
            return;
        }

        /* ---------------- General ---------------- */

        statistics.incrementTotalPackets();

        statistics.incrementTotalBytes(
                packet.getPacketLength());

        /* ---------------- Network Layer ---------------- */

        if (packet.getIpVersion() == 4) {

            statistics.incrementIpv4Packets();

        }
        else if (packet.getIpVersion() == 6) {

            statistics.incrementIpv6Packets();

        }

        /* ---------------- Transport Layer ---------------- */

        if ("TCP".equalsIgnoreCase(
                packet.getTransportProtocol())) {

            statistics.incrementTcpPackets();

        }
        else if ("UDP".equalsIgnoreCase(
                packet.getTransportProtocol())) {

            statistics.incrementUdpPackets();

        }

        /* ---------------- Application Layer ---------------- */

        if ("HTTP".equalsIgnoreCase(
                packet.getApplicationProtocol())) {

            statistics.incrementHttpPackets();

        }
        else if ("HTTPS".equalsIgnoreCase(
                packet.getApplicationProtocol())) {

            statistics.incrementHttpsPackets();

        }
        else if ("DNS".equalsIgnoreCase(
                packet.getApplicationProtocol())) {

            statistics.incrementDnsPackets();

        }

        /* ---------------- Flow ---------------- */

        if (flow != null &&
                flow.getPacketCount() == 1) {

            statistics.incrementTotalFlows();

        }

    }

    /**
     * Returns the statistics object.
     */
    public Statistics getStatistics() {

        return statistics;

    }

}