package com.ankit.deeppacketinspection.api.service;

import com.ankit.deeppacketinspection.engine.DpiEngine;
import com.ankit.deeppacketinspection.model.AnalysisResult;
import org.springframework.stereotype.Service;

import java.nio.file.Path;

/**
 * Service responsible for invoking the
 * Deep Packet Inspection Engine.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
@Service
public class AnalysisService {

    /**
     * Executes packet analysis.
     *
     * @param pcapFile Path to uploaded PCAP file.
     * @return Complete analysis result.
     */
    public AnalysisResult analyze(Path pcapFile) {

        if (pcapFile == null) {
            return null;
        }

        DpiEngine engine = new DpiEngine();

        return engine.start(pcapFile);

    }

}