package com.ankit.deeppacketinspection.analysis;

/**
 * ThreatType
 *
 * Represents the supported categories of
 * network threats detected by the DPI Engine.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public enum ThreatType {

    /**
     * Excessive TCP SYN packets that may
     * indicate a SYN flood attack.
     */
    SYN_FLOOD,

    /**
     * Multiple connection attempts to
     * different destination ports from
     * the same source host.
     */
    PORT_SCAN,

    /**
     * Excessive DNS requests within a
     * short period of time.
     */
    DNS_FLOOD,

    /**
     * Packet size exceeds the configured
     * threshold.
     */
    LARGE_PACKET,

    /**
     * Communication involving commonly
     * abused or sensitive ports.
     */
    SUSPICIOUS_PORT

}