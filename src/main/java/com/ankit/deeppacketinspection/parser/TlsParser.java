package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;

public class TlsParser {

    private final PayloadExtractor payloadExtractor;

    public TlsParser() {

        this.payloadExtractor = new PayloadExtractor();

    }

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        if (packetData == null || parsedPacket == null) {
            return;
        }

        byte[] payload = payloadExtractor.extract(packetData);

        if (payload == null) {

            System.out.println("Payload = NULL");

        } else {

            System.out.println("Payload Length = " + payload.length);

        }

        if (payload == null || payload.length < 5) {

            parsedPacket.setTlsVersion("No TLS Payload");

            return;

        }

        detectTlsVersion(payload, parsedPacket);

    }

    /**
     * Detects TLS version from the record header.
     */
    private void detectTlsVersion(byte[] payload,
                                  ParsedPacket parsedPacket) {

        int contentType = payload[0] & 0xFF;

        /*
         * TLS Handshake Record = 22 (0x16)
         */
        if (contentType != 22) {

            parsedPacket.setTlsVersion("Not TLS");

            return;

        }

        int major = payload[1] & 0xFF;
        int minor = payload[2] & 0xFF;

        if (major != 3) {

            parsedPacket.setTlsVersion("Unknown");

            return;

        }

        switch (minor) {

            case 1 -> parsedPacket.setTlsVersion("TLS 1.0");

            case 2 -> parsedPacket.setTlsVersion("TLS 1.1");

            case 3 -> parsedPacket.setTlsVersion("TLS 1.2");

            case 4 -> parsedPacket.setTlsVersion("TLS 1.3");

            default -> parsedPacket.setTlsVersion("Unknown");

        }

    }

}