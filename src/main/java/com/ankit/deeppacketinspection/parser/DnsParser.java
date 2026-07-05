package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;

public class DnsParser {

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        parsedPacket.setApplicationProtocol("DNS");

    }

}