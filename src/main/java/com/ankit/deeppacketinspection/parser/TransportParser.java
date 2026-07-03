package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;

public class TransportParser {

    private final TcpParser tcpParser;

    private final UdpParser udpParser;

    public TransportParser() {

        this.tcpParser = new TcpParser();

        this.udpParser = new UdpParser();

    }

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        if (parsedPacket == null) {
            return;
        }

        String protocol = parsedPacket.getTransportProtocol();

        if (protocol == null) {
            return;
        }

        System.out.println("Protocol received by TransportParser: " + protocol);

        switch (protocol.toUpperCase()) {

            case "TCP" -> tcpParser.parse(packetData, parsedPacket);

            case "UDP" -> udpParser.parse(packetData, parsedPacket);

            default -> {
                // Unsupported transport protocol (ICMP, ICMPv6, etc.)
            }

        }

    }

}