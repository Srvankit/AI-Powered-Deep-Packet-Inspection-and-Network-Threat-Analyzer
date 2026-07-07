package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;

/**
 * ApplicationParser
 *
 * Determines the application protocol
 * based on transport layer information.
 *
 * Current Version:
 * - HTTP
 * - HTTPS
 * - DNS
 *
 * Future:
 * - FTP
 * - SMTP
 * - SSH
 * - MQTT
 * - QUIC
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class ApplicationParser {

    private final HttpParser httpParser;

    private final HttpsParser httpsParser;

    private final DnsParser dnsParser;

    public ApplicationParser() {

        this.httpParser = new HttpParser();

        this.httpsParser = new HttpsParser();

        this.dnsParser = new DnsParser();

    }

    public void parse(PacketData packetData,
                      ParsedPacket parsedPacket) {

        if (packetData == null || parsedPacket == null) {
            return;
        }

        int sourcePort = parsedPacket.getSourcePort();
        int destinationPort = parsedPacket.getDestinationPort();

        if (sourcePort == 80 || destinationPort == 80) {

            httpParser.parse(packetData, parsedPacket);

        }
        else if (sourcePort == 443 || destinationPort == 443) {

            httpsParser.parse(packetData, parsedPacket);

        }
        else if (sourcePort == 53 || destinationPort == 53) {

            dnsParser.parse(packetData, parsedPacket);

        }

    }

}