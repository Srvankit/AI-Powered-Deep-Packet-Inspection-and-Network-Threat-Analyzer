package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import org.pcap4j.packet.EthernetPacket;

public class EthernetParser {

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        if (packetData == null || parsedPacket == null) {
            throw new IllegalArgumentException("Packet cannot be null.");
        }

        if (!(packetData.getPacket() instanceof EthernetPacket ethernetPacket)) {
            return;
        }

        parsedPacket.setSourceMac(
                ethernetPacket.getHeader()
                        .getSrcAddr()
                        .toString());

        parsedPacket.setDestinationMac(
                ethernetPacket.getHeader()
                        .getDstAddr()
                        .toString());

        parsedPacket.setPacketLength(
                ethernetPacket.length());

    }
}