package com.ankit.deeppacketinspection.report;

import com.ankit.deeppacketinspection.analysis.Statistics;
import com.ankit.deeppacketinspection.analysis.ThreatDetector;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * TextReportGenerator
 *
 * Generates a human-readable text report
 * after packet analysis.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class TextReportGenerator implements ReportGenerator {

    private static final String OUTPUT_DIRECTORY = "output";

    private static final String REPORT_NAME = "traffic_report.txt";

    @Override
    public void generate(Statistics statistics,
                         ThreatDetector detector)
            throws IOException {

        if (statistics == null || detector == null) {
            return;
        }

        Path outputDirectory = Path.of(OUTPUT_DIRECTORY);

        if (!Files.exists(outputDirectory)) {
            Files.createDirectories(outputDirectory);
        }

        Path reportFile =
                outputDirectory.resolve(REPORT_NAME);

        try (BufferedWriter writer =
                     Files.newBufferedWriter(reportFile)) {

            writer.write("====================================================");
            writer.newLine();
            writer.write("        AI POWERED DEEP PACKET INSPECTION");
            writer.newLine();
            writer.write("                 TRAFFIC REPORT");
            writer.newLine();
            writer.write("====================================================");
            writer.newLine();
            writer.newLine();

            writer.write("Generated On : "
                    + LocalDateTime.now().format(
                    DateTimeFormatter.ofPattern(
                            "dd-MM-yyyy HH:mm:ss")));
            writer.newLine();
            writer.newLine();

            /* ---------------- Statistics ---------------- */

            writer.write("GENERAL STATISTICS");
            writer.newLine();
            writer.write("--------------------------------------------");
            writer.newLine();

            writer.write("Total Packets      : "
                    + statistics.getTotalPackets());
            writer.newLine();

            writer.write("Total Bytes        : "
                    + statistics.getTotalBytes());
            writer.newLine();

            writer.write("Total Flows        : "
                    + statistics.getTotalFlows());
            writer.newLine();

            writer.newLine();

            writer.write("NETWORK");
            writer.newLine();
            writer.write("--------------------------------------------");
            writer.newLine();

            writer.write("IPv4 Packets       : "
                    + statistics.getIpv4Packets());
            writer.newLine();

            writer.write("IPv6 Packets       : "
                    + statistics.getIpv6Packets());
            writer.newLine();

            writer.newLine();

            writer.write("TRANSPORT");
            writer.newLine();
            writer.write("--------------------------------------------");
            writer.newLine();

            writer.write("TCP Packets        : "
                    + statistics.getTcpPackets());
            writer.newLine();

            writer.write("UDP Packets        : "
                    + statistics.getUdpPackets());
            writer.newLine();

            writer.newLine();

            writer.write("APPLICATION");
            writer.newLine();
            writer.write("--------------------------------------------");
            writer.newLine();

            writer.write("HTTP Packets       : "
                    + statistics.getHttpPackets());
            writer.newLine();

            writer.write("HTTPS Packets      : "
                    + statistics.getHttpsPackets());
            writer.newLine();

            writer.write("DNS Packets        : "
                    + statistics.getDnsPackets());
            writer.newLine();

            writer.newLine();

            /* ---------------- Threat Summary ---------------- */

            writer.write("THREAT SUMMARY");
            writer.newLine();
            writer.write("--------------------------------------------");
            writer.newLine();

            writer.write("Large Packet Alerts      : "
                    + detector.getLargePacketAlerts());
            writer.newLine();

            writer.write("DNS Alerts               : "
                    + detector.getDnsFloodAlerts());
            writer.newLine();

            writer.write("Suspicious Port Alerts   : "
                    + detector.getSuspiciousPortAlerts());
            writer.newLine();

            writer.write("SYN Flood Alerts         : "
                    + detector.getSynFloodAlerts());
            writer.newLine();

            writer.write("Port Scan Alerts         : "
                    + detector.getPortScanAlerts());
            writer.newLine();

            writer.write("--------------------------------------------");
            writer.newLine();

            writer.write("Total Alerts             : "
                    + detector.getTotalAlerts());
            writer.newLine();
            writer.newLine();

            writer.write("====================================================");
            writer.newLine();
            writer.write("End of Report");
            writer.newLine();
            writer.write("====================================================");

        }

    }

}