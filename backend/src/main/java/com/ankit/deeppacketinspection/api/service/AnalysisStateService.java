package com.ankit.deeppacketinspection.api.service;

import com.ankit.deeppacketinspection.model.AnalysisResult;
import org.springframework.stereotype.Service;

@Service
public class AnalysisStateService {

    private AnalysisResult latestAnalysis;

    public void setLatestAnalysis(AnalysisResult result) {
        this.latestAnalysis = result;
    }

    public AnalysisResult getLatestAnalysis() {
        return latestAnalysis;
    }
}