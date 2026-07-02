package com.ankit.deeppacketinspection.engine;

import com.ankit.deeppacketinspection.capture.PacketCaptureService;
import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import com.ankit.deeppacketinspection.parser.EthernetParser;
import com.ankit.deeppacketinspection.parser.IpParser;

import java.nio.file.Path;

public class DpiEngine {

    private final PacketCaptureService captureService;

    private final EthernetParser ethernetParser;

    private final IpParser ipParser;

    public DpiEngine() {

        captureService = new PacketCaptureService();

        ethernetParser = new EthernetParser();

        ipParser = new IpParser();

    }

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

        ParsedPacket parsedPacket =
                new ParsedPacket();

        ethernetParser.parse(packet, parsedPacket);

        ipParser.parse(packet, parsedPacket);

        printPacket(parsedPacket);

    }

    captureService.closePcapFile();

}
    private void printPacket(ParsedPacket packet) {

    System.out.println("--------------------------------");

    System.out.println("Source MAC : "
            + packet.getSourceMac());

    System.out.println("Destination MAC : "
            + packet.getDestinationMac());

    if (packet.getIpVersion() != 0) {

        System.out.println("IP Version : "
                + packet.getIpVersion());

        System.out.println("Source IP : "
                + packet.getSourceIp());

        System.out.println("Destination IP : "
                + packet.getDestinationIp());

        if (packet.getIpVersion() == 4) {

            System.out.println("TTL : "
                    + packet.getTtl());

        } else {

            System.out.println("Hop Limit : "
                    + packet.getHopLimit());

        }

        System.out.println("Transport Protocol : "
                + packet.getTransportProtocol());

    }

    System.out.println("Packet Length : "
            + packet.getPacketLength());

    System.out.println("--------------------------------");
}


}