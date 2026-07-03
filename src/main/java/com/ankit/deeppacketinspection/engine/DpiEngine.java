package com.ankit.deeppacketinspection.engine;

import com.ankit.deeppacketinspection.capture.PacketCaptureService;
import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import com.ankit.deeppacketinspection.parser.PacketParserService;

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

    public DpiEngine() {

        this.captureService = new PacketCaptureService();

        this.parserService = new PacketParserService();

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

            printPacket(parsedPacket);

        }

        captureService.closePcapFile();

    }

    /**
     * Prints parsed packet information.
     *
     * @param packet Parsed packet.
     */
    private void printPacket(ParsedPacket packet) {

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

            System.out.println("Transport Protocol  : "
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

                System.out.println("Transport Length    : "
                        + packet.getTransportLength());

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

        System.out.println("====================================================");

    }

}