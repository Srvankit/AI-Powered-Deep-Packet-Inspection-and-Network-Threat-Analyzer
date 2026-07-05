package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import org.pcap4j.packet.*;

public class PayloadExtractor {

    public byte[] extract(PacketData packetData) {

    if (packetData == null) {
        System.out.println("PacketData is NULL");
        return null;
    }

    Packet packet = packetData.getPacket();

    if (!(packet instanceof EthernetPacket ethernetPacket)) {
        System.out.println("Not an Ethernet packet");
        return null;
    }

    Packet networkPayload = ethernetPacket.getPayload();

    System.out.println("Network Layer : "
            + networkPayload.getClass().getSimpleName());

    Packet transportPayload = null;

    if (networkPayload instanceof IpV4Packet ipv4Packet) {

        transportPayload = ipv4Packet.getPayload();

    } else if (networkPayload instanceof IpV6Packet ipv6Packet) {

        transportPayload = ipv6Packet.getPayload();

    }

    if (transportPayload == null) {

        System.out.println("Transport payload is NULL");

        return null;

    }

    System.out.println("Transport Layer : "
            + transportPayload.getClass().getSimpleName());

    if (transportPayload instanceof TcpPacket tcpPacket) {

        Packet payload = tcpPacket.getPayload();

        if (payload == null) {

            System.out.println("TCP Payload = NULL");

            return null;

        }

        System.out.println("Payload Class : "
                + payload.getClass().getSimpleName());

        if (payload instanceof UnknownPacket unknownPacket) {

            System.out.println("Payload Length : "
                    + unknownPacket.getRawData().length);

            return unknownPacket.getRawData();

        }

        System.out.println("Payload is not UnknownPacket");

    }

    else if (transportPayload instanceof UdpPacket udpPacket) {

        Packet payload = udpPacket.getPayload();

        if (payload == null) {

            System.out.println("UDP Payload = NULL");

            return null;

        }

        System.out.println("Payload Class : "
                + payload.getClass().getSimpleName());

        if (payload instanceof UnknownPacket unknownPacket) {

            System.out.println("Payload Length : "
                    + unknownPacket.getRawData().length);

            return unknownPacket.getRawData();

        }

        System.out.println("Payload is not UnknownPacket");

    }

    return null;
}

}