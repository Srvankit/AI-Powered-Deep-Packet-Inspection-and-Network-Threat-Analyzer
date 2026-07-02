package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import org.pcap4j.packet.EthernetPacket;
import org.pcap4j.packet.IpV6Packet;

public class IPv6Parser {

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        EthernetPacket ethernetPacket =
                (EthernetPacket) packetData.getPacket();

        IpV6Packet ipv6 =
                (IpV6Packet) ethernetPacket.getPayload();

        parsedPacket.setIpVersion(6);

        parsedPacket.setSourceIp(
                ipv6.getHeader()
                        .getSrcAddr()
                        .getHostAddress());

        parsedPacket.setDestinationIp(
                ipv6.getHeader()
                        .getDstAddr()
                        .getHostAddress());

        parsedPacket.setHopLimit(
                ipv6.getHeader()
                        .getHopLimitAsInt());

        parsedPacket.setTransportProtocol(
                ipv6.getHeader()
                        .getNextHeader()
                        .name());

    }

}