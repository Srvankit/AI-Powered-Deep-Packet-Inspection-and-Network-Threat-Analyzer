package com.ankit.deeppacketinspection.model;

/**
 * Flow
 *
 * Represents a single network communication flow
 * identified by a FiveTuple.
 *
 * Stores packet statistics and timing information.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class Flow {

    private final FiveTuple fiveTuple;

    private long packetCount;

    private long byteCount;

    private final long startTime;

    private long lastSeen;

    /**
     * Creates a new flow.
     *
     * @param fiveTuple Unique identifier of the flow.
     */
    public Flow(FiveTuple fiveTuple) {

        this.fiveTuple = fiveTuple;

        this.packetCount = 0;

        this.byteCount = 0;

        this.startTime = System.currentTimeMillis();

        this.lastSeen = this.startTime;

    }

    /**
     * Updates flow statistics when a new packet arrives.
     *
     * @param packetSize Size of packet in bytes.
     */
    public void update(int packetSize) {

        packetCount++;

        byteCount += packetSize;

        lastSeen = System.currentTimeMillis();

    }

    /**
     * Returns flow duration in milliseconds.
     */
    public long getDuration() {

        return lastSeen - startTime;

    }

    public FiveTuple getFiveTuple() {
        return fiveTuple;
    }

    public long getPacketCount() {
        return packetCount;
    }

    public long getByteCount() {
        return byteCount;
    }

    public long getStartTime() {
        return startTime;
    }

    public long getLastSeen() {
        return lastSeen;
    }

    @Override
    public String toString() {

        return "Flow{" +
                "fiveTuple=" + fiveTuple +
                ", packetCount=" + packetCount +
                ", byteCount=" + byteCount +
                ", duration=" + getDuration() + " ms" +
                '}';

    }

}