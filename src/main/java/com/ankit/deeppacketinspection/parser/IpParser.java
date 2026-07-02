package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import org.pcap4j.packet.EthernetPacket;
import org.pcap4j.packet.IpV4Packet;
import org.pcap4j.packet.IpV6Packet;

public class IpParser {

    private final IPv4Parser ipv4Parser = new IPv4Parser();

    private final IPv6Parser ipv6Parser = new IPv6Parser();

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        if (!(packetData.getPacket() instanceof EthernetPacket ethernetPacket)) {
            return;
        }

        if (ethernetPacket.getPayload() instanceof IpV4Packet) {

            ipv4Parser.parse(packetData, parsedPacket);

        } else if (ethernetPacket.getPayload() instanceof IpV6Packet) {

            ipv6Parser.parse(packetData, parsedPacket);

        }

    }

}