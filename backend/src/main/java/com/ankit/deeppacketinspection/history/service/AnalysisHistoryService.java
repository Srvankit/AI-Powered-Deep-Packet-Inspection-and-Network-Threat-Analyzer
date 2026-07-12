package com.ankit.deeppacketinspection.history.service;

import com.ankit.deeppacketinspection.analysis.Statistics;
import com.ankit.deeppacketinspection.analysis.ThreatDetector;
import com.ankit.deeppacketinspection.flow.FlowTable;
import com.ankit.deeppacketinspection.history.entity.AnalysisHistory;
import com.ankit.deeppacketinspection.history.repository.AnalysisHistoryRepository;
import com.ankit.deeppacketinspection.model.AnalysisResult;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AnalysisHistoryService {

    private final AnalysisHistoryRepository repository;

    public AnalysisHistoryService(
            AnalysisHistoryRepository repository) {

        this.repository = repository;

    }

    public void saveAnalysis(
            String fileName,
            AnalysisResult result) {

        Statistics statistics =
                result.getStatistics();

        ThreatDetector detector =
                result.getThreatDetector();

        FlowTable flowTable =
                result.getFlowTable();

        AnalysisHistory history =
                new AnalysisHistory();

        history.setFileName(fileName);

        history.setTotalPackets(
                statistics.getTotalPackets());

        history.setTotalFlows(
                flowTable.getFlowCount());

        history.setTotalAlerts(
                detector.getTotalAlerts());

        history.setUploadTime(
                LocalDateTime.now());

        repository.save(history);

    }

    public List<AnalysisHistory> getHistory() {

        return repository.findAll();

    }

}