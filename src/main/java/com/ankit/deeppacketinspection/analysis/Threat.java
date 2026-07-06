package com.ankit.deeppacketinspection.analysis;

/**
 * Threat
 *
 * Represents a detected network threat
 * identified by the DPI Engine.
 *
 * Stores information about the detected
 * threat, including its type, severity,
 * source and destination details.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class Threat {

    /* ---------------- Threat Details ---------------- */

    private ThreatType threatType;

    private String severity;

    private String description;

    /* ---------------- Network Details ---------------- */

    private String sourceIp;

    private String destinationIp;

    private int sourcePort;

    private int destinationPort;

    /* ---------------- Time ---------------- */

    private long timestamp;

    /**
     * Default Constructor.
     */
    public Threat() {
    }

    /**
     * Parameterized Constructor.
     */
    public Threat(ThreatType threatType,
                  String severity,
                  String description,
                  String sourceIp,
                  String destinationIp,
                  int sourcePort,
                  int destinationPort,
                  long timestamp) {

        this.threatType = threatType;
        this.severity = severity;
        this.description = description;
        this.sourceIp = sourceIp;
        this.destinationIp = destinationIp;
        this.sourcePort = sourcePort;
        this.destinationPort = destinationPort;
        this.timestamp = timestamp;

    }

    /* =====================================================
                        Getters & Setters
       ===================================================== */

    public ThreatType getThreatType() {
        return threatType;
    }

    public void setThreatType(ThreatType threatType) {
        this.threatType = threatType;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSourceIp() {
        return sourceIp;
    }

    public void setSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
    }

    public String getDestinationIp() {
        return destinationIp;
    }

    public void setDestinationIp(String destinationIp) {
        this.destinationIp = destinationIp;
    }

    public int getSourcePort() {
        return sourcePort;
    }

    public void setSourcePort(int sourcePort) {
        this.sourcePort = sourcePort;
    }

    public int getDestinationPort() {
        return destinationPort;
    }

    public void setDestinationPort(int destinationPort) {
        this.destinationPort = destinationPort;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

}