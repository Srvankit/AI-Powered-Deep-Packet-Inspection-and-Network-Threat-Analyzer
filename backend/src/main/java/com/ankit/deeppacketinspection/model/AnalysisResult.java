package com.ankit.deeppacketinspection.model;

import com.ankit.deeppacketinspection.analysis.Statistics;
import com.ankit.deeppacketinspection.analysis.ThreatDetector;
import com.ankit.deeppacketinspection.flow.FlowTable;

/**
 * AnalysisResult
 *
 * Stores the complete output produced by the
 * Deep Packet Inspection Engine.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
public class AnalysisResult {

    private Statistics statistics;

    private ThreatDetector threatDetector;

    private FlowTable flowTable;

    public AnalysisResult() {
    }

    public Statistics getStatistics() {
        return statistics;
    }

    public void setStatistics(Statistics statistics) {
        this.statistics = statistics;
    }

    public ThreatDetector getThreatDetector() {
        return threatDetector;
    }

    public void setThreatDetector(ThreatDetector threatDetector) {
        this.threatDetector = threatDetector;
    }

    public FlowTable getFlowTable() {
        return flowTable;
    }

    public void setFlowTable(FlowTable flowTable) {
        this.flowTable = flowTable;
    }

}