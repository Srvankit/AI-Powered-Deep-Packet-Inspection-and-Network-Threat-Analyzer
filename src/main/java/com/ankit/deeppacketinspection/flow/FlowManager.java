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
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class FlowManager {

    private final FlowTable flowTable;

    public FlowManager() {

        this.flowTable = new FlowTable();

    }

    /**
     * Processes a parsed packet.
     *
     * Finds an existing flow or creates a new one.
     *
     * @param packet Parsed packet.
     * @return Active flow.
     */
    public Flow processPacket(ParsedPacket packet) {

        if (packet == null) {
            return null;
        }

        FiveTuple key = new FiveTuple(
                packet.getSourceIp(),
                packet.getDestinationIp(),
                packet.getSourcePort(),
                packet.getDestinationPort(),
                packet.getTransportProtocol()
        );

        Flow flow = flowTable.getFlow(key);

        if (flow == null) {

            flow = new Flow(key);

            flowTable.addFlow(flow);

        }

        flow.update(packet.getPacketLength());

        return flow;

    }

    /**
     * Returns the current flow table.
     */
    public FlowTable getFlowTable() {

        return flowTable;

    }

}