package com.ankit.deeppacketinspection;

import com.ankit.deeppacketinspection.capture.PacketCaptureService;
import com.ankit.deeppacketinspection.model.PacketData;

import java.nio.file.Path;

public class Main {

    public static void main(String[] args) {

        PacketCaptureService capture =
                new PacketCaptureService();

        capture.openPcapFile(
                Path.of("sample-pcaps/input/sample.pcap")
        );

        while (capture.hasNextPacket()) {

            PacketData packet = capture.readNextPacket();

            System.out.println(
                    "Packet #" + capture.getPacketCounter()
            );

        }

        capture.closePcapFile();

    }
}