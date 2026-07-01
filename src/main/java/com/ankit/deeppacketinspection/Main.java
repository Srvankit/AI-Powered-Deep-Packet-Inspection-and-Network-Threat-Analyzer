package com.ankit.deeppacketinspection;

import com.ankit.deeppacketinspection.capture.PacketCaptureService;
import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import com.ankit.deeppacketinspection.parser.EthernetParser;

import java.nio.file.Path;

public class Main {

    public static void main(String[] args) {

        System.out.println("===========================================");
        System.out.println(" AI Powered Deep Packet Inspection Engine");
        System.out.println("===========================================\n");

        PacketCaptureService capture = new PacketCaptureService();

        capture.openPcapFile(
                Path.of("sample-pcaps/input/sample.pcap")
        );

        if (capture.hasNextPacket()) {

            PacketData packet = capture.readNextPacket();

            System.out.println(packet.getPacket());

            ParsedPacket parsedPacket = new ParsedPacket();

            EthernetParser ethernetParser = new EthernetParser();

            ethernetParser.parse(packet, parsedPacket);

            System.out.println("---------------------------------------");
            System.out.println("Packet #" + capture.getPacketCounter());
            System.out.println("---------------------------------------");

            System.out.println("Source MAC      : "
                    + parsedPacket.getSourceMac());

            System.out.println("Destination MAC : "
                    + parsedPacket.getDestinationMac());

            System.out.println("Packet Length   : "
                    + parsedPacket.getPacketLength());

        } else {

            System.out.println("No packets found in the PCAP file.");

        }

        capture.closePcapFile();

    }
}