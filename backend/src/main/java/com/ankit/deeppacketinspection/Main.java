package com.ankit.deeppacketinspection;

import com.ankit.deeppacketinspection.engine.DpiEngine;

import java.nio.file.Path;

public class Main {

    public static void main(String[] args) {

        DpiEngine engine = new DpiEngine();

        engine.start(
                Path.of("sample-pcaps/input/sample.pcap")
        );

    }

}