package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import org.pcap4j.packet.EthernetPacket;
import org.pcap4j.packet.IpV4Packet;
import org.pcap4j.packet.IpV6Packet;
import org.pcap4j.packet.UdpPacket;

public class UdpParser {

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        if (packetData == null || parsedPacket == null) {
            return;
        }

        if (!(packetData.getPacket() instanceof EthernetPacket ethernetPacket)) {
            return;
        }

        if (ethernetPacket.getPayload() instanceof IpV4Packet ipv4Packet) {

            if (!(ipv4Packet.getPayload() instanceof UdpPacket udpPacket)) {
                return;
            }

            populateUdpFields(udpPacket, parsedPacket);

        }

        else if (ethernetPacket.getPayload() instanceof IpV6Packet ipv6Packet) {

            if (!(ipv6Packet.getPayload() instanceof UdpPacket udpPacket)) {
                return;
            }

            populateUdpFields(udpPacket, parsedPacket);

        }

    }

    private void populateUdpFields(UdpPacket udpPacket,
                                   ParsedPacket parsedPacket) {

        parsedPacket.setSourcePort(
                udpPacket.getHeader()
                        .getSrcPort()
                        .valueAsInt());

        parsedPacket.setDestinationPort(
                udpPacket.getHeader()
                        .getDstPort()
                        .valueAsInt());

        parsedPacket.setTransportLength(
                udpPacket.getHeader()
                        .getLengthAsInt());

    }

}