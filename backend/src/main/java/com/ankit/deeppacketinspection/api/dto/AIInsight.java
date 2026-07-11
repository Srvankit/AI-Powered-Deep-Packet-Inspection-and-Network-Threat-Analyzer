package com.ankit.deeppacketinspection.api.dto;

import java.util.List;

public class AIInsight {

    private int riskScore;

    private String riskLevel;

    private String summary;

    private List<String> recommendations;

    public AIInsight() {
    }

    public AIInsight(
            int riskScore,
            String riskLevel,
            String summary,
            List<String> recommendations) {

        this.riskScore = riskScore;
        this.riskLevel = riskLevel;
        this.summary = summary;
        this.recommendations = recommendations;
    }

    public int getRiskScore() {
        return riskScore;
    }

    public void setRiskScore(int riskScore) {
        this.riskScore = riskScore;
    }

    public String getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(String riskLevel) {
        this.riskLevel = riskLevel;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public List<String> getRecommendations() {
        return recommendations;
    }

    public void setRecommendations(List<String> recommendations) {
        this.recommendations = recommendations;
    }

}