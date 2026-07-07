package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;

public class HttpParser {

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        parsedPacket.setApplicationProtocol("HTTP");

    }

}