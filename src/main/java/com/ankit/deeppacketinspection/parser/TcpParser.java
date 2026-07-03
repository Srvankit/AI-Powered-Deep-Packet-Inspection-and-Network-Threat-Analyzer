package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;
import org.pcap4j.packet.EthernetPacket;
import org.pcap4j.packet.IpV4Packet;
import org.pcap4j.packet.IpV6Packet;
import org.pcap4j.packet.TcpPacket;

public class TcpParser {

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        if (packetData == null || parsedPacket == null) {
            return;
        }

        if (!(packetData.getPacket() instanceof EthernetPacket ethernetPacket)) {
            return;
        }

        TcpPacket tcpPacket = null;

        if (ethernetPacket.getPayload() instanceof IpV4Packet ipv4Packet) {

            if (ipv4Packet.getPayload() instanceof TcpPacket) {
                tcpPacket = (TcpPacket) ipv4Packet.getPayload();
            }

        } else if (ethernetPacket.getPayload() instanceof IpV6Packet ipv6Packet) {

            if (ipv6Packet.getPayload() instanceof TcpPacket) {
                tcpPacket = (TcpPacket) ipv6Packet.getPayload();
            }

        }

        if (tcpPacket == null) {
        System.out.println("TCP Packet NOT found");
        return;
    }

        System.out.println("========== TCP HEADER ==========");
        System.out.println(tcpPacket);
        System.out.println("================================");

        parsedPacket.setSourcePort(
                tcpPacket.getHeader().getSrcPort().valueAsInt());

        parsedPacket.setDestinationPort(
                tcpPacket.getHeader().getDstPort().valueAsInt());

        parsedPacket.setSequenceNumber(
                tcpPacket.getHeader().getSequenceNumber());

        parsedPacket.setAcknowledgementNumber(
                tcpPacket.getHeader().getAcknowledgmentNumber());

        parsedPacket.setWindowSize(
                tcpPacket.getHeader().getWindowAsInt());

        parsedPacket.setSyn(
                tcpPacket.getHeader().getSyn());

        parsedPacket.setAck(
                tcpPacket.getHeader().getAck());

        parsedPacket.setFin(
                tcpPacket.getHeader().getFin());

        parsedPacket.setRst(
                tcpPacket.getHeader().getRst());

        parsedPacket.setPsh(
                tcpPacket.getHeader().getPsh());

        parsedPacket.setUrg(
                tcpPacket.getHeader().getUrg());
    }
}