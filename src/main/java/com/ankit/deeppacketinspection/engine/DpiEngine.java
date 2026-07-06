package com.ankit.deeppacketinspection.engine;

import com.ankit.deeppacketinspection.capture.PacketCaptureService;
import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import com.ankit.deeppacketinspection.parser.PacketParserService;
import com.ankit.deeppacketinspection.flow.FlowManager;
import com.ankit.deeppacketinspection.model.Flow;
import com.ankit.deeppacketinspection.analysis.StatisticsEngine;
import com.ankit.deeppacketinspection.analysis.StatisticsPrinter;
import com.ankit.deeppacketinspection.analysis.ThreatDetector;
import com.ankit.deeppacketinspection.analysis.ThreatPrinter;
import com.ankit.deeppacketinspection.report.TextReportGenerator;
import com.ankit.deeppacketinspection.report.JsonReportGenerator;
import java.io.IOException;

import java.nio.file.Path;

/**
 * DpiEngine
 *
 * Central engine responsible for:
 * - Opening PCAP files
 * - Reading packets
 * - Passing packets through the parser pipeline
 * - Displaying parsed packet information
 *
 * Future versions will integrate:
 * - Flow Tracking
 * - Rule Engine
 * - Threat Detection
 * - Reporting
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class DpiEngine {

    private final PacketCaptureService captureService;

    private final PacketParserService parserService;

    private final FlowManager flowManager;

    private final ThreatDetector threatDetector;

    private final ThreatPrinter threatPrinter;

    private final StatisticsEngine statisticsEngine;

    private final StatisticsPrinter statisticsPrinter;

    private final TextReportGenerator textReportGenerator;

    private final JsonReportGenerator jsonReportGenerator;

    public DpiEngine() {

        this.captureService = new PacketCaptureService();

        this.parserService = new PacketParserService();

        this.flowManager = new FlowManager();

        this.threatDetector = new ThreatDetector();

        this.threatPrinter = new ThreatPrinter();

        this.statisticsEngine = new StatisticsEngine();

        this.statisticsPrinter = new StatisticsPrinter();

        this.textReportGenerator = new TextReportGenerator();

        this.jsonReportGenerator = new JsonReportGenerator();

    }

    /**
     * Starts the DPI Engine.
     *
     * @param pcapFile Path to the PCAP file.
     */
    public void start(Path pcapFile) {

        System.out.println();
        System.out.println("=======================================");
        System.out.println(" AI Powered Deep Packet Inspection ");
        System.out.println("=======================================");
        System.out.println();

        captureService.openPcapFile(pcapFile);

        while (captureService.hasNextPacket()) {

            PacketData packet =
                    captureService.readNextPacket();

            if (packet == null) {
                continue;
            }

            ParsedPacket parsedPacket =
                    parserService.parse(packet);

            // Skip packets that don't have an IP layer
            if (parsedPacket.getIpVersion() == 0) {
                continue;
                }

            Flow flow = flowManager.processPacket(parsedPacket);

            /* ---------------- Statistics ---------------- */

                statisticsEngine.update(parsedPacket, flow);

                /* ---------------- Threat Detection ---------------- */

                threatDetector.analyze(parsedPacket);

                /* ---------------- Console Output ---------------- */

                printPacket(parsedPacket, flow);
        }

        captureService.closePcapFile();

        captureService.closePcapFile();

/* ---------------- Statistics ---------------- */

        statisticsPrinter.print(
                statisticsEngine.getStatistics()
        );

        /* ---------------- Threat Report ---------------- */

        threatPrinter.print(threatDetector);

        try {

                textReportGenerator.generate(
                        statisticsEngine.getStatistics(),
                        threatDetector);

                jsonReportGenerator.generate(
                        statisticsEngine.getStatistics(),
                        threatDetector);

                System.out.println();
                System.out.println("Reports generated successfully.");

                } catch (IOException e) {

                System.err.println("Failed to generate reports.");

                e.printStackTrace();

                }

    }

    /**
     * Prints parsed packet information.
     *
     * @param packet Parsed packet.
     */
    private void printPacket(ParsedPacket packet, Flow flow) {

        if (packet == null) {
            return;
        }

        System.out.println();
        System.out.println("====================================================");
        System.out.println("                PACKET INFORMATION");
        System.out.println("====================================================");

        /* ---------------- Ethernet Layer ---------------- */

        System.out.println("[Ethernet Layer]");

        System.out.println("Source MAC          : " + packet.getSourceMac());

        System.out.println("Destination MAC     : " + packet.getDestinationMac());

        System.out.println("Packet Length       : " + packet.getPacketLength() + " bytes");

        /* ---------------- Network Layer ---------------- */

        if (packet.getIpVersion() != 0) {

            System.out.println();
            System.out.println("[Network Layer]");

            System.out.println("IP Version          : IPv" + packet.getIpVersion());

            System.out.println("Source IP           : " + packet.getSourceIp());

            System.out.println("Destination IP      : " + packet.getDestinationIp());

            if (packet.getIpVersion() == 4) {

                System.out.println("TTL                 : " + packet.getTtl());

            } else {

                System.out.println("Hop Limit           : " + packet.getHopLimit());

            }

            System.out.println("Next Protocol       : "
                    + packet.getTransportProtocol());

        }

        /* ---------------- Transport Layer ---------------- */

        if (packet.getTransportProtocol() != null) {

            System.out.println();
            System.out.println("[Transport Layer]");

            System.out.println("Protocol            : "
                    + packet.getTransportProtocol());

            if (packet.getSourcePort() != 0
                    || packet.getDestinationPort() != 0) {

                System.out.println("Source Port         : "
                        + packet.getSourcePort());

                System.out.println("Destination Port    : "
                        + packet.getDestinationPort());

                // Only UDP packets have a transport length field
                if ("UDP".equalsIgnoreCase(packet.getTransportProtocol())) {

                    System.out.println("Transport Length    : "
                            + packet.getTransportLength());

    }

            }

            if ("TCP".equalsIgnoreCase(packet.getTransportProtocol())) {

                System.out.println();

                System.out.println("Sequence Number     : "
                        + packet.getSequenceNumber());

                System.out.println("Acknowledgement No. : "
                        + packet.getAcknowledgementNumber());

                System.out.println("Window Size         : "
                        + packet.getWindowSize());

                System.out.println();

                System.out.println("Flags");

                System.out.println("SYN                 : " + packet.isSyn());

                System.out.println("ACK                 : " + packet.isAck());

                System.out.println("FIN                 : " + packet.isFin());

                System.out.println("RST                 : " + packet.isRst());

                System.out.println("PSH                 : " + packet.isPsh());

                System.out.println("URG                 : " + packet.isUrg());

            }

        }

        /* ---------------- Application Layer ---------------- */

        if (packet.getApplicationProtocol() != null) {

            System.out.println();

            System.out.println("[Application Layer]");

            System.out.println("Protocol            : "
                    + packet.getApplicationProtocol());

        if (packet.getTlsVersion() != null) {

            System.out.println("TLS Version         : "
                    + packet.getTlsVersion());

            }
        }

        /* ---------------- FLOW Information Layer ---------------- */

if (flow != null) {

    System.out.println();

    System.out.println("[Flow Information]");

    System.out.println("Flow Key           : "
            + flow.getFiveTuple());

    System.out.println("Packets In Flow    : "
            + flow.getPacketCount());

    System.out.println("Bytes In Flow      : "
            + flow.getByteCount());

    System.out.println("Flow Duration      : "
            + flow.getDuration() + " ms");

}

System.out.println("====================================================");

        }

}