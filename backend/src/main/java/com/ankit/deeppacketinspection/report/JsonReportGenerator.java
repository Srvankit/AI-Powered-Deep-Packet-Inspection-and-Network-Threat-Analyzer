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
 * JsonReportGenerator
 *
 * Generates a JSON report after packet analysis.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class JsonReportGenerator implements ReportGenerator {

    private static final String OUTPUT_DIRECTORY = "output";

    private static final String REPORT_NAME = "traffic_report.json";

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

            writer.write("{");
            writer.newLine();

            writer.write("  \"generatedOn\": \"" +
                    LocalDateTime.now().format(
                            DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"))
                    + "\",");
            writer.newLine();

            writer.write("  \"statistics\": {");
            writer.newLine();

            writer.write("    \"totalPackets\": " + statistics.getTotalPackets() + ",");
            writer.newLine();

            writer.write("    \"totalBytes\": " + statistics.getTotalBytes() + ",");
            writer.newLine();

            writer.write("    \"totalFlows\": " + statistics.getTotalFlows() + ",");
            writer.newLine();

            writer.write("    \"ipv4Packets\": " + statistics.getIpv4Packets() + ",");
            writer.newLine();

            writer.write("    \"ipv6Packets\": " + statistics.getIpv6Packets() + ",");
            writer.newLine();

            writer.write("    \"tcpPackets\": " + statistics.getTcpPackets() + ",");
            writer.newLine();

            writer.write("    \"udpPackets\": " + statistics.getUdpPackets() + ",");
            writer.newLine();

            writer.write("    \"httpPackets\": " + statistics.getHttpPackets() + ",");
            writer.newLine();

            writer.write("    \"httpsPackets\": " + statistics.getHttpsPackets() + ",");
            writer.newLine();

            writer.write("    \"dnsPackets\": " + statistics.getDnsPackets());
            writer.newLine();

            writer.write("  },");
            writer.newLine();

            writer.write("  \"threatSummary\": {");
            writer.newLine();

            writer.write("    \"largePacketAlerts\": " + detector.getLargePacketAlerts() + ",");
            writer.newLine();

            writer.write("    \"dnsAlerts\": " + detector.getDnsFloodAlerts() + ",");
            writer.newLine();

            writer.write("    \"suspiciousPortAlerts\": " + detector.getSuspiciousPortAlerts() + ",");
            writer.newLine();

            writer.write("    \"synFloodAlerts\": " + detector.getSynFloodAlerts() + ",");
            writer.newLine();

            writer.write("    \"portScanAlerts\": " + detector.getPortScanAlerts() + ",");
            writer.newLine();

            writer.write("    \"totalAlerts\": " + detector.getTotalAlerts());
            writer.newLine();

            writer.write("  }");
            writer.newLine();

            writer.write("}");
        }
    }
}