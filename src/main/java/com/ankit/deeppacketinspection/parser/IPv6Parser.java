package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import org.pcap4j.packet.EthernetPacket;
import org.pcap4j.packet.IpV6Packet;

public class IPv6Parser {

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        if (!(packetData.getPacket() instanceof EthernetPacket ethernetPacket)) {
            return;
        }

        if (!(ethernetPacket.getPayload() instanceof IpV6Packet ipv6Packet)) {
            return;
        }

        parsedPacket.setIpVersion(6);

        parsedPacket.setSourceIp(
                ipv6Packet.getHeader()
                        .getSrcAddr()
                        .getHostAddress());

        parsedPacket.setDestinationIp(
                ipv6Packet.getHeader()
                        .getDstAddr()
                        .getHostAddress());

        parsedPacket.setHopLimit(
                ipv6Packet.getHeader()
                        .getHopLimitAsInt());

        parsedPacket.setTransportProtocol(
                ipv6Packet.getHeader()
                        .getNextHeader()
                        .name());
    }
}