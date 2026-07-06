package com.ankit.deeppacketinspection.flow;

import com.ankit.deeppacketinspection.model.FiveTuple;
import com.ankit.deeppacketinspection.model.Flow;
import com.ankit.deeppacketinspection.model.ParsedPacket;

/**
 * FlowManager
 *
 * Responsible for creating and maintaining
 * active network flows.
 *
 * Each packet is mapped to a FiveTuple.
 * Existing flows are updated, while new
 * flows are created automatically.
 *
 * Invalid packets (without IP addresses or
 * transport protocol) are ignored.
 *
 * Author: Ankit Yadav
 * Version: 1.1
 */
public class FlowManager {

    private final FlowTable flowTable;

    public FlowManager() {

        this.flowTable = new FlowTable();

    }

    /**
     * Processes a parsed packet.
     *
     * @param packet Parsed packet.
     * @return Active flow or null if packet
     *         cannot form a valid flow.
     */
    public Flow processPacket(ParsedPacket packet) {

        if (packet == null) {
            return null;
        }

        // -----------------------------
        // Validate Flow Information
        // -----------------------------

        if (packet.getSourceIp() == null
                || packet.getDestinationIp() == null
                || packet.getTransportProtocol() == null
                || packet.getTransportProtocol().isBlank()) {

            return null;

        }

        // -----------------------------
        // Create Flow Key
        // -----------------------------

        FiveTuple key = new FiveTuple(
                packet.getSourceIp(),
                packet.getDestinationIp(),
                packet.getSourcePort(),
                packet.getDestinationPort(),
                packet.getTransportProtocol()
        );

        // -----------------------------
        // Find Existing Flow
        // -----------------------------

        Flow flow = flowTable.getFlow(key);

        // -----------------------------
        // Create New Flow
        // -----------------------------

        if (flow == null) {

            flow = new Flow(key);

            flowTable.addFlow(flow);

        }

        // -----------------------------
        // Update Statistics
        // -----------------------------

        flow.update(packet.getPacketLength());

        return flow;

    }

    /**
     * Returns the current FlowTable.
     *
     * @return FlowTable instance.
     */
    public FlowTable getFlowTable() {

        return flowTable;

    }

}