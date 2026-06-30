package com.ankit.deeppacketinspection.model;

import org.pcap4j.packet.Packet;

public class PacketData {

    private final Packet packet;
    private final long timestamp;

    public PacketData(Packet packet, long timestamp) {
        this.packet = packet;
        this.timestamp = timestamp;
    }

    public Packet getPacket() {
        return packet;
    }

    public long getTimestamp() {
        return timestamp;
    }
}