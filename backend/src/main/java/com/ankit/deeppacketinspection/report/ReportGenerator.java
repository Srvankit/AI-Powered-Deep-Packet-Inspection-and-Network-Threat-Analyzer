package com.ankit.deeppacketinspection.report;

import com.ankit.deeppacketinspection.analysis.Statistics;
import com.ankit.deeppacketinspection.analysis.ThreatDetector;

import java.io.IOException;

/**
 * ReportGenerator
 *
 * Defines the contract for all report generators.
 *
 * Any class implementing this interface must
 * generate a report using the collected
 * statistics and threat analysis.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public interface ReportGenerator {

    /**
     * Generates a report.
     *
     * @param statistics Network statistics.
     * @param detector Threat detection summary.
     * @throws IOException if report generation fails.
     */
    void generate(
            Statistics statistics,
            ThreatDetector detector
    ) throws IOException;

}