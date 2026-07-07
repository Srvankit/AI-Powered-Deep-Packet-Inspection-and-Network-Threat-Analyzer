package com.ankit.deeppacketinspection.model;

import java.util.Objects;

/**
 * FiveTuple
 *
 * Uniquely identifies a network flow.
 *
 * Source IP
 * Destination IP
 * Source Port
 * Destination Port
 * Transport Protocol
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class FiveTuple {

    private String sourceIp;

    private String destinationIp;

    private int sourcePort;

    private int destinationPort;

    private String protocol;

    public FiveTuple() {
    }

    public FiveTuple(String sourceIp,
                     String destinationIp,
                     int sourcePort,
                     int destinationPort,
                     String protocol) {

        this.sourceIp = sourceIp;
        this.destinationIp = destinationIp;
        this.sourcePort = sourcePort;
        this.destinationPort = destinationPort;
        this.protocol = protocol;
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

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    @Override
    public boolean equals(Object object) {

        if (this == object) {
            return true;
        }

        if (!(object instanceof FiveTuple other)) {
            return false;
        }

        return sourcePort == other.sourcePort
                && destinationPort == other.destinationPort
                && Objects.equals(sourceIp, other.sourceIp)
                && Objects.equals(destinationIp, other.destinationIp)
                && Objects.equals(protocol, other.protocol);
    }

    @Override
    public int hashCode() {

        return Objects.hash(
                sourceIp,
                destinationIp,
                sourcePort,
                destinationPort,
                protocol
        );
    }

    @Override
    public String toString() {

        return sourceIp + ":" + sourcePort
                + " -> "
                + destinationIp + ":" + destinationPort
                + " (" + protocol + ")";
    }

}