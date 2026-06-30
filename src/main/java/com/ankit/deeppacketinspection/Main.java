package com.ankit.deeppacketinspection;

import com.ankit.deeppacketinspection.capture.PacketCaptureService;

import java.nio.file.Path;

public class Main {

    public static void main(String[] args) {

        PacketCaptureService captureService = new PacketCaptureService();

        captureService.openPcapFile(
                Path.of("sample-pcaps/input/sample.pcap")
        );

    }
}