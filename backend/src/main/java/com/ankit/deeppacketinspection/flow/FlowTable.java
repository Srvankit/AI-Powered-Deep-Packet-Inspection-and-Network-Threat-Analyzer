package com.ankit.deeppacketinspection.flow;

import com.ankit.deeppacketinspection.model.Flow;
import com.ankit.deeppacketinspection.model.FiveTuple;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * FlowTable
 *
 * Stores all active network flows.
 *
 * Responsible for:
 * - Adding new flows
 * - Finding existing flows
 * - Returning statistics
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class FlowTable {

    private final Map<FiveTuple, Flow> flowTable;

    public FlowTable() {

        this.flowTable = new HashMap<>();

    }

    /**
     * Returns an existing flow.
     */
    public Flow getFlow(FiveTuple fiveTuple) {

        return flowTable.get(fiveTuple);

    }

    /**
     * Adds a new flow.
     */
    public void addFlow(Flow flow) {

        flowTable.put(flow.getFiveTuple(), flow);

    }

    /**
     * Checks whether a flow exists.
     */
    public boolean containsFlow(FiveTuple fiveTuple) {

        return flowTable.containsKey(fiveTuple);

    }

    /**
     * Returns every active flow.
     */
    public Collection<Flow> getAllFlows() {

        return flowTable.values();

    }

    /**
     * Returns total active flows.
     */
    public int getFlowCount() {

        return flowTable.size();

    }

    /**
     * Clears every flow.
     */
    public void clear() {

        flowTable.clear();

    }

}