package com.ankit.deeppacketinspection.parser;

import com.ankit.deeppacketinspection.model.PacketData;
import com.ankit.deeppacketinspection.model.ParsedPacket;

public class PacketParserService {

    private final EthernetParser ethernetParser;

    private final IpParser ipParser;

    private final TransportParser transportParser;

    private final ApplicationParser applicationParser;

    public PacketParserService() {

        this.ethernetParser = new EthernetParser();

        this.ipParser = new IpParser();

        this.transportParser = new TransportParser();

        this.applicationParser = new ApplicationParser();

    }

    public ParsedPacket parse(PacketData packetData){

        ParsedPacket parsedPacket = new ParsedPacket();

        ethernetParser.parse(packetData, parsedPacket);

        ipParser.parse(packetData, parsedPacket);

        transportParser.parse(packetData, parsedPacket);

        applicationParser.parse(packetData, parsedPacket);

        return parsedPacket;

    }

}