package com.ankit.deeppacketinspection.capture;

import com.ankit.deeppacketinspection.model.PacketData;
import org.pcap4j.core.PcapHandle;
import org.pcap4j.core.PcapNativeException;
import org.pcap4j.core.Pcaps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.nio.file.Files;
import java.nio.file.Path;

/**
 * PacketCaptureService
 *
 * Responsibility:
 * Reads packets from a PCAP file using the Pcap4J library.
 *
 * This service is responsible only for opening,
 * reading and closing packet capture files.
 *
 * Future versions will support:
 * - Live packet capture
 * - Interface selection
 * - Capture filters
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class PacketCaptureService {

    private static final Logger logger =
            LoggerFactory.getLogger(PacketCaptureService.class);

    private PcapHandle handle;

    private boolean opened;

    private long packetCounter;

    private String currentFilePath;

    private org.pcap4j.packet.Packet bufferedPacket;

    /**
     * Default constructor.
     */
    public PacketCaptureService() {
        this.opened = false;
        this.packetCounter = 0;
        this.currentFilePath = null;
        this.bufferedPacket = null;
    }

    /**
     * Opens a PCAP file.
     *
     * @param filePath Path to the PCAP file.
     */
    public void openPcapFile(Path filePath) {

        if (filePath == null) {
            throw new IllegalArgumentException("File path cannot be null.");
        }

        if (!Files.exists(filePath)) {
            throw new IllegalArgumentException(
                    "PCAP file does not exist: " + filePath);
        }

        if (!Files.isReadable(filePath)) {
            throw new IllegalArgumentException(
                    "PCAP file is not readable: " + filePath);
        }

        try {

            this.handle = Pcaps.openOffline(filePath.toString());

            this.opened = true;

            this.packetCounter = 0;

            this.currentFilePath = filePath.toString();

            logger.info("PCAP file opened successfully: {}", currentFilePath);

        } catch (PcapNativeException e) {

            logger.error("Failed to open PCAP file: {}", filePath, e);

            throw new RuntimeException(
                    "Unable to open PCAP file: " + filePath,
                    e
            );
        }
    }

    /**
     * Checks whether another packet is available.
     *
     * Temporary implementation.
     * Will be completed in the next milestone.
     */
    public boolean hasNextPacket() {

    if (!opened || handle == null) {
        return false;
    }

    if (bufferedPacket != null) {
        return true;
    }

    try {

        bufferedPacket = handle.getNextPacket();

        return bufferedPacket != null;

    } catch (Exception e) {

        logger.error("Unable to read next packet.", e);

        return false;

    }
}

    /**
     * Reads the next packet.
     *
     * Temporary implementation.
     * Will be completed in the next milestone.
     */
    public PacketData readNextPacket() {

    if (!hasNextPacket()) {
        return null;
    }

    packetCounter++;

    PacketData packetData =
            new PacketData(bufferedPacket,
                    System.currentTimeMillis());

    bufferedPacket = null;

    return packetData;
}

    /**
     * Closes the currently opened PCAP file.
     */
    public void closePcapFile() {

        if (handle != null) {
            handle.close();
            handle = null;
        }

        opened = false;

        packetCounter = 0;

        currentFilePath = null;

        logger.info("PCAP file closed successfully.");
    }

    /**
     * Returns whether a PCAP file is currently open.
     */
    public boolean isOpened() {
        return opened;
    }

    /**
     * Returns the number of packets read so far.
     */
    public long getPacketCounter() {
        return packetCounter;
    }

    /**
     * Returns the currently opened PCAP file.
     */
    public String getCurrentFilePath() {
        return currentFilePath;
    }
}