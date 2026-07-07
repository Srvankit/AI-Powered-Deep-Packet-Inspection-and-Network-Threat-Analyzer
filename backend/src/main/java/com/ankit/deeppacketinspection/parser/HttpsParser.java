package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;

public class HttpsParser {

    private final TlsParser tlsParser;

    public HttpsParser() {

        this.tlsParser = new TlsParser();

    }

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        parsedPacket.setApplicationProtocol("HTTPS");

        tlsParser.parse(packetData, parsedPacket);

    }

}